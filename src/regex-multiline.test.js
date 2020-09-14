describe('regexp multiline mode', () => {
  test('row start', () => {
    let str = `1st place: Winnine\
        2nd place: Piglet\
        33rd place: Eeyorr`;
    expect(str.match(/^\d+/gm)).toEqual(['1', '2', '33']);
  });
});


