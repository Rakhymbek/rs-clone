import { colorToSecondary } from './colorUtils';

it('should convert primary text color #ffffff to secondary text color #878787', () => {
  const color = '#ffffff';

  const expectedResult = '#878787';

  const result = colorToSecondary(color);

  expect(expectedResult).toEqual(result);
});
