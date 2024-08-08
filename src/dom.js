export function createButton() {
  const button = document.createElement('button');  
  button.textContent = 'Create a New Task'
  button.addEventListener('click', () => {
    const dialog = createDialog("holymoly");
    body.appendChild(dialog);
    dialog.showModal();
  })
  body.appendChild(button);
  return button;
}

function createDialog(message) {
  const dialog = document.createElement('dialog');
  dialog.classList.add('dialog');
  dialog.innerHTML = `  <form method="dialog">
    <p>
      <label>
        Task Name:
        <input type="text" required />
      </label>
    </p>
    <div>
      <input type="submit" id="normal-close" value="Normal close" />
      <input
        type="submit"
        id="novalidate-close"
        value="Novalidate close"
        formnovalidate />
      <input type="submit" id="js-close" value="JS close" />
    </div>
  </form>`;

  const closeButton = document.createElement('button');
  closeButton.textContent = 'Close';
  closeButton.addEventListener('click', () => {
    dialog.close();
  });

  dialog.appendChild(closeButton);

  return dialog;
}


// const body = document.querySelector('.todolist');
const body = document.querySelector('.todolist');