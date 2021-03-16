'use strict';

const notebook = new Notebook;
let note;

document.querySelector('#create').addEventListener('click', (event) => {
  event.preventDefault();
  note = document.querySelector('textarea').value;
  create(note);
});

async function create(note) {
  await emojify(note)
    .then(data => notebook.add(new Note(data.emojified_text)));
}

async function emojify(note) {
  const response = await fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'Application/json' },
    body: `{ "text":"${note}" }`
  });
  return await response.json();
}

// notebook.previews.forEach((note) => {

// });
