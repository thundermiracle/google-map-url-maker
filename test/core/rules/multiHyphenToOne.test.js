import multiHyphenToOne from 'core/rules/multiHyphenToOne';

test('2 hyphen to 1', () => {
  const input = '-1-2-3--';
  const expected = '-1-2-3-';

  const result = multiHyphenToOne(input);

  expect(result).toEqual(expected);
});

test('multi hyphen to 1', () => {
  const input = '---1--2-3--';
  const expected = '-1-2-3-';

  const result = multiHyphenToOne(input);

  expect(result).toEqual(expected);
});
