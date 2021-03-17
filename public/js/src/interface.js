'use strict';

const notebook = new Notebook;

getNotes();
displayOldNotes();

document.querySelector('#create').addEventListener('click', (event) => {
  event.preventDefault();
  create(document.querySelector('textarea').value);

  setTimeout(() => {
    storeNotes();
    displayPreviews();
  }, 200);
});

async function create(note) {
  await emojify(note)
  .then(data => notebook.add(new Note(data.emojified_text)));
}

async function emojify(note) {
  const response = await fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: `{ "text":"${note}" }`
  });
  return await response.json();
}

function displayPreviews() {
  const index = notebook.notes.length - 1
  document.getElementById('notes')
    .innerHTML += `<a href="#${index}">${notebook.previews()[index]}<a><br>`
}

// function displayNote() {
//   window.addEventListener('hashchange', () => {
//     const noteId = window.location.search.split('').reverse[0];
//     document.getElementById('note')
//       .innerHTML = notebook.notes[noteId];
//   });
// }

function storeNotes() {
  localStorage.setItem('notes', JSON.stringify(notebook.notesObject()))
}

function getNotes() {
  const notes = JSON.parse(localStorage.getItem('notes'))
  if (!notes) { return }
  for (const [key, value] of Object.entries(notes)) {
    notebook.add(new Note(value));
  }
}

function displayOldNotes() {
  const notes = document.getElementById('notes')
  let html = ''
  for (let i = 0; i < notebook.notes.length; i++) {
    html += `<a href="#${i}">${notebook.notes[i].preview}</a><br>`
  }
  notes.innerHTML = html
}
