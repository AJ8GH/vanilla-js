const notebook = new Notebook

const emojify = (note) => {
  getResponse(note).then(data => notebook.add(new Note(data.emojified_text)));
}

async function getResponse(note) {
  const response = await fetch('https://makers-emojify.herokuapp.com', {
    method: 'POST',
    mode: 'cors',
    headers: { 'Content-Type': 'Application/json' },
    body: `{ "text":"${note}" }`
  });
  return await response.json();
}
