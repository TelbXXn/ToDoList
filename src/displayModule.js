import setCurrentGroup from "./groupManager";

export function displayTasks(group) {
  const displayTask = document.querySelector('.todolist');
  displayTask.innerHTML = '';

  group.tasks.forEach((tasks) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('item');

    taskItem.innerHTML = `
    <p>Task: ${tasks.title}</p>
    <p>Description: ${tasks.desc}</p>
    <p>Due Date: ${tasks.dueDate}</p>
    <p>Priority: ${tasks.priority}</p>`

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
      document.querySelectorAll('.group').forEach(item => item.classList.remove('selected'));
      groupItem.classList.add('selected');


      setCurrentGroup(group);
      // console.log("Current group set to:", currentGroup.name);

      displayTasks(group);

      
    });

    displayGroup.appendChild(groupItem);
  });
}