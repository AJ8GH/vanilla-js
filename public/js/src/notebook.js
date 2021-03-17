class Notebook {
  constructor() {
    this.notes = [];
  }

  add(note) {
    this.notes.push(note);
  }

  previews() {
    return this.notes.map((note) => note.preview)
  }

  previewsObject() {
    return Object.assign({}, this.previews())
  }

  notesObject() {
    const notes = this.notes.map((note) => note.content)
    return Object.assign({}, notes)
  }
}
