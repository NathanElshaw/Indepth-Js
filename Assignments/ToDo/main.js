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

const removeList = (id) => {
  console.log("clicked");
};

const displayTasks = (s) => {
  displayTask.innerHTML = "";
  displayList.push(s);
  displayList.forEach((list) => {
    if (Object.getPrototypeOf(list).type === "task") {
      displayTask.innerHTML += `
      <h2>${list.title}</h2>
      <p>${list.desc}</p>
      <button onClick={removeList(${list.id})}>Delete</button>
      `;
    }
  });
};

addTask.addEventListener("click", () => {
  displayTasks(tasks(taskTitle.value, taskDesc.value, taskType.value, id));
  id++;
});
