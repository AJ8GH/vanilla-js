class Note {
  constructor(content) {
    this.content = content
  }

  abbreviate() {
    return this.content.substring(0, 20);
  }
}
