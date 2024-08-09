import "./style.css"
import { createTaskDialog } from "./dialogManager"
import { displayTasks } from "./displayModule";


const body = document.querySelector('body');
const tasks = [];
const dialog = document.querySelector('.task');
// dialog.addEventListener('DOMContentLoaded', () => {
//   createTaskDialog(dialog, tasks);
// })
const submitTask = document.querySelector('.tasksubmit');



const createTask = document.querySelector('.task-button');
createTask.addEventListener('click', () => {
  // const taskDialog = createTaskDialog(tasks);
  dialog.showModal();
  createTaskDialog(submitTask, tasks, dialog);
  // displayTasks(tasks);
  console.log(tasks);



});

const checkArray = document.createElement('button');
checkArray.addEventListener('click', () => {
  console.log(tasks);
  displayTasks(tasks);
});

body.appendChild(checkArray);
