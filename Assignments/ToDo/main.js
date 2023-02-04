const displayParent = document.querySelector("#displayParent");

const taskTitle = document.querySelector("#taskTitle");
const taskPriority = document.querySelector("#taskPriority");
const taskDue = document.querySelector("#taskDue");
const taskDesc = document.querySelector("#taskDesc");
const taskType = document.querySelector("#type");
const addTask = document.querySelector("#addTask");

const projectName = document.querySelector("#newProject");
const addProject = document.querySelector("#addProject");

let projectTitle = "";
let ejectProject = "";
let list = [
  {
    title: "Project 1",
    tasks: [
      {
        title: "default",
        discription: "some text",
        dueDate: "Soon",
        importance: "Very Important",
      },
    ],
  },
];
let id = 1;

const projects = (title) => {
  const proto = {
    title: title,

    addProject: (title) => {
      list.push({
        title: title,
        tasks: [],
      });
      taskType.innerHTML += `<option value="${title}">${title}</option>`;
      tasks().display();
    },

    removeProject: (project) => {
      for (i = 0; i < list.length; i++) {
        if (list[i].title === project) {
          list.splice([i], 1);
        }
      }
      tasks().display();
    },
  };
  return Object.assign(Object.create(proto));
};

const tasks = (title, discription, dueDate, importance, id, project) => {
  const proto = {
    title: title,
    discription: discription,
    dueDate: dueDate,
    importance: importance,
    id: id,
    project: project,

    listAdd: () => {
      for (i = 0; i < list.length; i++) {
        if (list[i].title === project) {
          list[i].tasks.push({
            title,
            discription,
            dueDate,
            importance,
          });
        }
      }
    },

    display: () => {
      displayParent.innerHTML = "";
      for (i = 0; i < list.length; i++) {
        let task = list[i].tasks;
        displayParent.innerHTML += `<h1>${list[i].title}</h1><button id="project" value="${list[i].title}">Remove</button>`;
        ejectProject = document.querySelectorAll("#project");
        task.map((tasks) => {
          displayParent.innerHTML += `
          <div>
            <h2>${tasks.title}</h2>
            <p>${tasks.discription}</p>
            <p>Due Date: ${tasks.dueDate}</p>
            <p>Importance: ${tasks.importance}</p>
          </div> 
          `;
        });
      }
      ejectProject.forEach((remove) => {
        remove.addEventListener("click", () => {
          projects().removeProject(remove.value);
          console.log(list);
        });
      });
    },
  };
  return Object.assign(Object.create(proto));
};

addTask.addEventListener("click", (event) => {
  event.preventDefault();
  tasks(
    taskTitle.value,
    taskDesc.value,
    taskDue.value,
    taskPriority.value,
    id,
    taskType.value
  ).listAdd();
  tasks().display();
});

addProject.addEventListener("click", (event) => {
  event.preventDefault();
  projects().addProject(projectName.value);
});
tasks().display();
