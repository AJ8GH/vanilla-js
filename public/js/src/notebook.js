class Notebook {
  constructor() {
    this.notes = [];
  }

  add(note) {
    this.notes.push(note);
  }

  previewAll() {
    return this.notes.map((note) => note.preview)
  }
}
