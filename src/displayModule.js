export function displayTasks(tasks) {
  const displayTask = document.querySelector('.todolist');
  displayTask.innerHTML = '';

  tasks.forEach((tasks, index) => {
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