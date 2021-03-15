class Notebook {
  constructor() {
    this.notes = [];
  }

  add(note) {
    this.notes.push(note);
  }

  abbreviateAll() {
    // return this.notes.map((note) => note.abbreviate())
  }
}
