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
}
