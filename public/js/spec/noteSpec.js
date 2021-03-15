describe('NoteSpec', () => {
  describe('content', () => {
    it('returns the content', () => {
      let note = new Note('test note');
      expect(note.content).toEqual('test note');
    });
  });

  describe('abbreviate', () => {
    it('reduces content to 20 characters', () => {
      let note = new Note('The swift fox jumped over the lazy dog');
      expect(note.abbreviate()).toEqual('The swift fox jumped');
    });
  });
});
