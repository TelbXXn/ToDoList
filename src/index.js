import "./style.css"
import { displayTasks, displayGroups } from "./displayModule";
import Todos from './app'
import { Group } from './app'
import { getCurrentGroup } from "./groupManager";


const groups = [];
const dialog = document.querySelector('.task');
const createTask = document.querySelector('.task-button');
const createGroup = document.querySelector('.groupBtn');
const groupDialog = document.querySelector('.group');
const groupSubmit = document.querySelector('.groupsubmit');
const submit = document.querySelector('.tasksubmit');


export function saveData() {
  localStorage.setItem("groups", JSON.stringify(groups))
}

function getData() {
  const storedGroups = JSON.parse(localStorage.getItem("groups"));

  if (storedGroups) {
    storedGroups.forEach(groupData => {
      const group = new Group(groupData.name);
      group.tasks = groupData.tasks.map(taskData => new Todos(
        taskData.title,
        taskData.desc,
        taskData.dueDate,
        taskData.priority

      ));
      groups.push(group)
    });
    displayGroups(groups);
  }

}

document.addEventListener('DOMContentLoaded', (e) => {
  getData();
});


submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (nameInput.value && dueDateInput.value && priorityInput.value) {

  const newTask = new Todos(
    nameInput.value,
    descInput.value,
    dueDateInput.value,
    priorityInput.value,
  );

  getCurrentGroup().addTask(newTask);

  console.log("adding tasks to group", getCurrentGroup().name);
  displayTasks(getCurrentGroup());
  document.querySelector('.taskForm').reset();
  saveData();
  dialog.close();
}

});


createTask.addEventListener('click', () => {
  dialog.showModal();
});

// Group creation
createGroup.addEventListener('click', (e) => {
  groupDialog.showModal();
});

groupSubmit.addEventListener('click', (e) => {
  e.preventDefault();

  if (groupName.value) {

  const newGroup = new Group(
    groupName.value
  )

  groups.push(newGroup)
  
  displayGroups(groups);

  document.querySelector('.groupForm').reset();

  saveData();

  groupDialog.close();
}
  
});


