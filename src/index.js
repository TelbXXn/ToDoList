import "./style.css"
import { createTaskDialog } from "./dialogManager"
import { displayTasks, displayGroups } from "./displayModule";
import Todos from './app'
import { Group } from './app'


const tasks = [];
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

  tasks.push(newTask);

  console.log(tasks);
  displayTasks(tasks);
    
  dialog.close();
});


createTask.addEventListener('click', () => {
  dialog.showModal();
  console.log(tasks);
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

  groups.push(newGroup)
  
  displayGroups(groups);


  groupDialog.close();
})


