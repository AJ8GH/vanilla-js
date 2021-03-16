'use strict';

const notebook = new Notebook;

document.querySelector('#create').addEventListener('click', (event) => {
  event.preventDefault();
  let note = document.querySelector('textarea').value;
  create(note);
  setTimeout(() => { displayPreviews(); }, 200);
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
  const element = document.createElement('a')
  const lastPreview = notebook.previews()[notebook.notes.length - 1]
  const node = document.createTextNode(lastPreview)
  element.appendChild(node)
  document.getElementById('div1').appendChild(element)
  document.getElementById('div1').appendChild(document.createElement('br'))
}
