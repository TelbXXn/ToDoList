import Todos from './app'

// export function createDialog() {
  // const dialog = document.createElement('dialog');
  // dialog.classList.add('dialog');

  // const closeButton = document.createElement('button');
  // closeButton.textContent = 'Close';
  // closeButton.addEventListener('click', () => {
  //   dialog.close();
  // });
  
  // return dialog;

  
// }

export function createTaskDialog(button, task, dialog) {
  // const dialog = createDialog();

  // const form = document.createElement('form');

  // // const nameLabel = document.createElement('label');
  // // nameLabel.textContent = "Task Name:";
  // // nameLabel.for = 'nameInput';

  // // const nameInput = document.createElement('input');
  // // nameInput.type = 'text'
  // // nameInput.setAttribute = 'required';

  // const descLabel = document.createElement('label');
  // descLabel.textContent = 'Description:';
  // descLabel.for = 'descInput';
  
  // const descInput = document.createElement('input');
  // descInput.type = 'text';

  // const dueDateLabel = document.createElement('label');
  // dueDateLabel.textContent = 'Due date:';
  // dueDateLabel.for = 'dueDateInput';

  // const dueDateInput = document.createElement('input');
  // dueDateInput.type = 'date';

  // const priorityLabel = document.createElement('label');
  // priorityLabel.textContent = "Priority:";
  // priorityLabel.for = 'priorityInput';

  // const priorityInput = document.createElement('input');
  // priorityInput.type = 'text';



  // const submitButton = document.createElement('button');
  // submitButton.type = 'submit';
  // submitButton.textContent = 'Create Task';




  // form.appendChild(nameLabel);
  // form.appendChild(nameInput);
  // form.appendChild(descLabel);
  // form.appendChild(descInput);
  // form.appendChild(dueDateLabel);
  // form.appendChild(dueDateInput);
  // form.appendChild(priorityLabel);
  // form.appendChild(priorityInput);

  // form.appendChild(submitButton);

  // dialog.appendChild(form);


  button.addEventListener('submit', (e) => {
    e.preventDefault();

    const newTask = new Todos(
      nameInput.value,
      descInput.value,
      dueDateInput.value,
      priorityInput.value,
    );

    task.push(newTask);

    dialog.close();
  })

  






}

function createGroupDialog() {

}