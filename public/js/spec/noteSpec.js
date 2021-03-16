describe('NoteSpec', () => {
  describe('content', () => {
    it('returns the content', () => {
      let note = new Note('test note');
      expect(note.content).toEqual('test note');
    });
  });

  describe('preview', () => {
    it('reduces content to 20 characters', () => {
      let note = new Note('The swift fox jumped over the lazy dog');
      expect(note.preview).toEqual('The swift fox jumped');
    });
  });
});
