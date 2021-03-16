class Note {
  constructor(content) {
    this.content = content;
    this.preview = this.content.substring(0, 20);
  }

  // preview() {
  //   return this.content.substring(0, 20);
  // }

  // preview() {
  //   return 'yo'
  // }
}
