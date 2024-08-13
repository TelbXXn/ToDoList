import setCurrentGroup from "./groupManager";

export function displayTasks(group) {
  const displayTask = document.querySelector('.todolist');
  displayTask.innerHTML = '';

  group.tasks.forEach((tasks) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('item');

    taskItem.innerHTML = `
    Task: ${tasks.title}
    Description: ${tasks.desc}
    Due Date: ${tasks.dueDate}
    Priority: ${tasks.priority}`

    displayTask.appendChild(taskItem);

  });
};

export function displayGroups(groups) {
  const displayGroup = document.querySelector('.groupList');
  displayGroup.innerHTML = '';

  groups.forEach((group) => {
    const groupItem = document.createElement('li');
    groupItem.classList.add('group');

    groupItem.innerHTML = `
    ${group.name}`

    groupItem.addEventListener('click', () => {

      setCurrentGroup(group);
      // console.log("Current group set to:", currentGroup.name);

      displayTasks(group);

      
    });

    displayGroup.appendChild(groupItem);
  });
}