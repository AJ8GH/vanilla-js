'use strict';

const notebook = new Notebook;

getNotes();

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
  const element = document.createElement('a');
  const node = document.createTextNode(notebook.previews()[index]);
  element.appendChild(node);
  element.setAttribute('id', `${index}`);
  element.setAttribute('href', `#${index}`);
  document.getElementById('div1').appendChild(element);
  document.getElementById('div1').appendChild(document.createElement('br'));
  // "and the <div>s rejoiced at the birth of their new born <a>..."
}

function displayNote() {
  window.addEventListener('hashchange', () => {
    const noteId = window.location.search.split('').reverse[0];
    document.getElementById('note')
      .innerHTML = notebook.notes[noteId];
  });
}

function storeNotes() {
  localStorage.setItem('notes', JSON.stringify(notebook.notesObject()))
}

function getNotes() {
  const notes = JSON.parse(localStorage.getItem('notes'))
  for (const property in notes) {
    notebook.add(notes[property]);
  }
}
