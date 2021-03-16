const notebook = new Notebook

describe('Notebook', () => {
  describe('notes', () => {
    it('starts empty', () => {
      expect(notebook.notes).toBeEmpty()
    });
  });

  describe('add', () => {
    it('adds and stores a note', () => {
      notebook.add('Testing 1')
      expect(notebook.notes).toInclude('Testing 1')
    });
  });

  describe('previewAll', () => {
    it('abbreviates all notes', () => {

      let note1 = new Note('1 The swift fox jumped over the lazy dog')
      let note2 = new Note('2 The swift fox jumped over the lazy dog')
      let note3 = new Note('3 The swift fox jumped over the lazy dog')

      notebook.add(note1)
      notebook.add(note2)
      notebook.add(note3)

      expect(notebook.previews()).toInclude('1 The swift fox jump')
      expect(notebook.previews()).toInclude('2 The swift fox jump')
      expect(notebook.previews()).toInclude('3 The swift fox jump')
    });
  });
});
