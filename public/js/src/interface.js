'use strict';

const notebook = new Notebook;

resetHashUrl();
makeEnterCreateNote();
getNotes();
displayOldNotes();
makeClickShowNote();
hideNoteElement();

document.querySelector('#create').addEventListener('click', (event) => {
  event.preventDefault();
  create(document.querySelector('textarea').value);
  setTimeout(() => {
    storeNotes();
    displayPreviews();
    makeClickShowNote();
    document.querySelector('textarea').value = ''
  }, 200);
});

function makeClickShowNote() {
  window.addEventListener('hashchange', showNote)
}

function showNote() {
  createNoteHtml(getNoteFromUrl(window.location))
}

function getNoteFromUrl(location) {
  return location.hash.split('#')[1];
}

function createNoteHtml(index) {
  showNoteElement();
  document.getElementById('note').innerHTML = notebook.notesObject()[index];
}

async function create(note) {
  await emojify(note)
  .then(data => notebook.add(new Note(data.emojified_text)));
}

function makeEnterCreateNote() {
  document.querySelector('textarea').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      document.getElementById('create').click();
    }
  })
}

async function emojify(note) {
  const response = await fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'same-origin',
    mode: 'cors',
    body: `{ "text":"${note}" }`
  });
  return await response.json();
}

function displayPreviews() {
  const index = notebook.notes.length - 1
  document.getElementById('notes')
    .innerHTML += `<a href="#${index}">${notebook.previews()[index]}<a><br>`
}

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

function resetHashUrl() {
  history.pushState(null, null, ' ')
}

function hideNoteElement() {
  const note = document.getElementById('note')
  note.style.display = 'none'
}

function showNoteElement() {
  const note = document.getElementById('note')
  note.style.display = 'block'
}
