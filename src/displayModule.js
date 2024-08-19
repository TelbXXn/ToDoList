import setCurrentGroup from "./groupManager";
import { saveData } from "./index";

export function displayTasks(group) {
  const displayTask = document.querySelector('.todolist');
  displayTask.innerHTML = '';

  group.tasks.forEach((tasks, index) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('item');

    const editButton = document.createElement('button');
    const closeButton = document.createElement('button');
    editButton.textContent = 'edit';
    closeButton.textContent = 'X';


    taskItem.innerHTML = `
    <p>Task: ${tasks.title}</p>
    <p>Description: ${tasks.desc}</p>
    <p>Due Date: ${tasks.dueDate}</p>
    <p>Priority: ${tasks.priority}</p>`

    closeButton.addEventListener('click', () => {
      group.tasks.splice(index, 1);
      displayTasks(group)
      saveData();
    }) 

    taskItem.appendChild(editButton);
    taskItem.appendChild(closeButton);

    displayTask.appendChild(taskItem);


  });
};

export function displayGroups(groups) {
  const displayGroup = document.querySelector('.groupList');
  displayGroup.innerHTML = '';

  

  groups.forEach((group, index) => {
    const groupItem = document.createElement('li');
    groupItem.classList.add('group');

    const closeButton = document.createElement('button');
    closeButton.textContent = 'X';


    groupItem.innerHTML = `
    ${group.name}`

    groupItem.addEventListener('click', () => {
      document.querySelectorAll('.group').forEach(item => item.classList.remove('selected'));
      groupItem.classList.add('selected');


      setCurrentGroup(group);
      // console.log("Current group set to:", currentGroup.name);

      displayTasks(group);

      closeButton.addEventListener('click', () => {
        groups.splice(index, 1);
        displayGroups(groups)
        saveData();
      }) 

      
    });
    groupItem.appendChild(closeButton);

    displayGroup.appendChild(groupItem);
  });
}