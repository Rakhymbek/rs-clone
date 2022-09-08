import { bgColorToBgColorLight } from './colorUtils';

it('should convert bgColor #0000aa to bgColor light #1e1ec8', () => {
  const bgColor = '#0000aa';

  const expectedResult = '#1e1ec8';

  const result = bgColorToBgColorLight(bgColor);

  expect(expectedResult).toEqual(result);
});
