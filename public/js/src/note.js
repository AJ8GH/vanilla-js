class Note {
  constructor(content) {
    this.content = content;
    this.preview = `${this.content.substring(0, 20)}...`;
  }
}
