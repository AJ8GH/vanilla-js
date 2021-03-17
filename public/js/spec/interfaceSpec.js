describe('Interface', () => {
  describe('create', () => {
    it('adds a note to the notebook', () => {
      cleanTestData();

      create('Test note')
      setTimeout(() => {
        expect(notebook.notes[0].content).toEqual('Test note');
      }, 200)
    });
  });

  describe('storeNotes', () => {
    it('stores the notes in local storage', () => {
      cleanTestData();

      const note = new Note('Test note');
      notebook.add(note);
      storeNotes();
      expect(localStorage.getItem('notes')).toInclude('Test note');
    });
  });

  describe('getNotes', () => {
    it('gets the notes from storage', () => {
      cleanTestData();

      const note = new Note('Test note');
      notebook.add(note);
      storeNotes();
      notebook.notes = []

      getNotes();
      expect(notebook.notes[0].content).toEqual('Test note');
    })

    it('does nothing when storage is empty', () => {
      cleanTestData();

      getNotes();
      expect(notebook.notes).toBeEmpty;
    });
  });
});
