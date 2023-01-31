const displayTask = document.querySelector("#displayTasks");
const taskTitle = document.querySelector("#taskTitle");
const taskDesc = document.querySelector("#taskDesc");
const addTask = document.querySelector("#addTask");

const tasks = (title, desc) => {
  const proto = {
    type: "task",
    title: title,
    desc: desc,
  };
  return Object.assign(Object.create(proto));
};

const displayTasks = (s) => {
  return console.log(s.desc);
};

addTask.addEventListener("click", () => {
  console.log(displayTasks(tasks(taskTitle.value, taskDesc.value)));
});
