import "./style.css"
import { createTaskDialog } from "./dialogManager"
import { displayTasks, displayGroups } from "./displayModule";
import Todos from './app'
import { Group } from './app'
import { getCurrentGroup } from "./groupManager";


// const tasks = [];
const groups = [];
const dialog = document.querySelector('.task');
const createTask = document.querySelector('.task-button');
const createGroup = document.querySelector('.groupBtn');
const groupDialog = document.querySelector('.group');
const groupSubmit = document.querySelector('.groupsubmit');
const groupList = document.querySelector('.groupList');


const submit = document.querySelector('.tasksubmit');

submit.addEventListener('click', (e) => {
  e.preventDefault();

  const newTask = new Todos(
    nameInput.value,
    descInput.value,
    dueDateInput.value,
    priorityInput.value,
  );

  getCurrentGroup().addTask(newTask);

  console.log("adding tasks to group", getCurrentGroup().name);
  displayTasks(getCurrentGroup());
    
  dialog.close();
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
  const newGroup = new Group(
    groupName.value
  )

  // if (!currentGroup) {
  //   currentGroup = newGroup;
  // }

  groups.push(newGroup)
  
  displayGroups(groups);

  groupDialog.close();
  
})


