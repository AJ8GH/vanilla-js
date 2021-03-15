describe('Testing Booleans', () => {
  it('passes because true == true', () => {
    expect(true).toEqual(true);
  });

  it('should fail because true != false', () => {
    expect(true).toEqual(false);
  });
});

describe('Doing Math', () => {
  it('knows 2 + 2 == 4', () => {
    expect(2 + 2).toEqual(4);
  });

  it('should fail because 2 * 10 != 1', () => {
    expect(2 * 10).toEqual(1);
  });
});

describe('Negated Matchers', () => {
  it('passes because 2 + 2 != 5', () => {
    expect(2 + 2).toNotEqual(5);
  });

  it('should fail because 2 + 2 == 4', () => {
    expect(2 + 2).toNotEqual(4);
  });
});
