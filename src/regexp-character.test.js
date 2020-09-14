describe('regexp character sets and ranges', () => {
  test('character sets', () => {
    expect('Mop top'.match(/[tm]op/gi)).toEqual(['Mop', 'top']);
  });

  test('just match one character', () => {
    expect('Voila'.match(/V[oi]la/)).toBeNull();
  });

  test('regexp character ranges', () => {
    expect('Exceptio 0xAF'.match(/x[0-9A-F][0-9A-F]/g)).toContain('xAF');
  });

  test('test unicode \\w', () => {
    let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;
    let str = `Hi 你好 12`;
    expect(str.match(regexp)).toEqual(['H', 'i', '你', '好', '1', '2']);
  });

  test('test exclude', () => {
    expect('alice15@gmail.com'.match(/[^\d\sA-Z]/gi)).toEqual(['@', '.']);
  });

  test('[] need escape', () => {
    let reg = /[-().^+]/g;
    expect('1 + 2 -3'.match(reg)).toEqual(['+', '-']);

    reg = /[\-\(\)\.\^\+]/g;
    expect('1 + 2 -3'.match(reg)).toEqual(['+', '-']);
  });

  test('delegate pair', () => {

    for (let i = 0; i < '𝒳𝒴'.length; i++) {
      console.log('𝒳𝒴'.charCodeAt(i)); // 55349, 56499, 55349, 56500
    }

    expect('𝒳'.match(/[𝒳-𝒴]/u)).toContain("𝒳");
  });

  test("find time", () => {
      let reg = /\d\d[:-]\d\d/g;
      expect("Breakfast at 09:00. Dinner at 21-30".match(reg)).toEqual(["09:00", "21-30"]);
  })


});
