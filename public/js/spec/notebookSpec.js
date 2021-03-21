function cleanTestData() {
  localStorage.clear();
  notebook.notes = []
}

describe('Notebook', () => {
  describe('notes', () => {
    it('starts empty', () => {
      cleanTestData();
      expect(notebook.notes.length).toBe(0)
    });
  });

  describe('add', () => {
    it('adds and stores a note', () => {
      cleanTestData();
      notebook.add('Testing 1')
      expect(notebook.notes).toInclude('Testing 1')
    });
  });

  describe('previewAll', () => {
    it('abbreviates all notes', () => {
      cleanTestData();

      const note1 = new Note('1 The swift fox jumped over the lazy dog')
      const note2 = new Note('2 The swift fox jumped over the lazy dog')
      const note3 = new Note('3 The swift fox jumped over the lazy dog')

      notebook.add(note1)
      notebook.add(note2)
      notebook.add(note3)

      expect(notebook.previews()).toInclude('1 The swift fox jump...')
      expect(notebook.previews()).toInclude('2 The swift fox jump...')
      expect(notebook.previews()).toInclude('3 The swift fox jump...')
    });
  });

  describe('notesObject', () => {
    it('returns object with all the notes content in full', () => {
      cleanTestData();

      const note1 = new Note('1 The swift fox jumped over the lazy dog')
      const note2 = new Note('2 The swift fox jumped over the lazy dog')
      const note3 = new Note('3 The swift fox jumped over the lazy dog')

      notebook.add(note1)
      notebook.add(note2)
      notebook.add(note3)

      expect(notebook.notesObject()[0]).toEqual('1 The swift fox jumped over the lazy dog')
      expect(notebook.notesObject()[1]).toEqual('2 The swift fox jumped over the lazy dog')
      expect(notebook.notesObject()[2]).toEqual('3 The swift fox jumped over the lazy dog')
    });
  });

  describe('previewsObject', () => {
    it('returns object with all the previews', () => {
      cleanTestData();

      const note1 = new Note('1 The swift fox jumped over the lazy dog')
      const note2 = new Note('2 The swift fox jumped over the lazy dog')
      const note3 = new Note('3 The swift fox jumped over the lazy dog')

      notebook.add(note1)
      notebook.add(note2)
      notebook.add(note3)

      expect(notebook.previewsObject()[0]).toEqual('1 The swift fox jump...')
      expect(notebook.previewsObject()[1]).toEqual('2 The swift fox jump...')
      expect(notebook.previewsObject()[2]).toEqual('3 The swift fox jump...')
    });
  });
});
