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

  describe('abbreviateAll', () => {
    it('abbreviates all notes', () => {
      notebook.add('1 The swift fox jumped over the lazy dog')
      notebook.add('2 The swift fox jumped over the lazy dog')
      notebook.add('3 The swift fox jumped over the lazy dog')

      expect(notebook.abbreviateAll()).toInclude('1 The swift fox jump')
      expect(notebook.abbreviateAll()).toInclude('2 The swift fox jump')
      expect(notebook.abbreviateAll()).toInclude('3 The swift fox jump')
    });
  });
});
