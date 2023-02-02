const displayParent = document.querySelector("#displayParent");
const displayTask = document.querySelector("#displayTasks");

const taskTitle = document.querySelector("#taskTitle");
const taskPriority = document.querySelector("#taskPriority");
const taskDue = document.querySelector("#taskDue");
const taskDesc = document.querySelector("#taskDesc");
const taskType = document.querySelector("#type");
const addTask = document.querySelector("#addTask");

const projectName = document.querySelector("#newProject");
const addProject = document.querySelector("#addProject");

let projectList = ["Project 1"];
let displayList = [];
let id = 0;

const tasks = (title, desc, priority, dueDate, type, id) => {
  const proto = {
    title: title,
    desc: desc,
    priority: priority,
    dueDate: dueDate,
    type: type,
    id: id,
  };
  return Object.assign(Object.create(proto));
};

const displayTasks = (item) => {
  const proto = {
    update: () => {
      displayList.push(item);
    },
    display: () => {
      displayTask.innerHTML = "";
      displayList.forEach((list) => {
        if (Object.getPrototypeOf(list).type === "task") {
          displayTask.innerHTML += `
        <h2>${list.title}</h2>
        <p>Priority: ${list.priority}</p>
        <p>${list.desc}</p>
        <p>Due Date: ${list.dueDate}
        <button onClick={removeList(${list.id})}>Delete</button>
        `;
        }
      });
    },
  };
  return Object.assign(Object.create(proto));
};

const removeList = (id) => {
  displayList.splice(displayList.indexOf(id), 1);
  displayTasks().display();
};

addTask.addEventListener("click", (event) => {
  event.preventDefault();
  displayTasks(
    tasks(
      taskTitle.value,
      taskDesc.value,
      taskPriority.value,
      taskDue.value,
      taskType.value,
      id
    )
  ).update();
  displayTasks().display();
  id++;
});

addProject.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(projectList.indexOf(projectName.value));

  taskType.innerHTML += `<option value=${projectName.value}>${projectName.value}</option>`;
});
