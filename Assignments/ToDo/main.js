const displayTask = document.querySelector("#displayTasks");
const taskTitle = document.querySelector("#taskTitle");
const taskDesc = document.querySelector("#taskDesc");
const taskType = document.querySelector("#type");
const addTask = document.querySelector("#addTask");

let displayList = [];
let id = 0;

const tasks = (title, desc, type, id) => {
  const proto = {
    title: title,
    desc: desc,
    type: type,
    id: id,
  };
  return Object.assign(Object.create(proto));
};

const displayTasks = (s) => {
  const proto = {
    update() {
      displayList.push(s);
    },

    display() {
      displayTask.innerHTML = "";
      displayList.forEach((list) => {
        if (Object.getPrototypeOf(list).type === "task") {
          displayTask.innerHTML += `
        <h2>${list.title}</h2>
        <p>${list.desc}</p>
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
  displayTasks.display();
};

addTask.addEventListener("click", () => {
  displayTasks.update(
    tasks(taskTitle.value, taskDesc.value, taskType.value, id)
  );
  displayTasks.display();
  id++;
});
