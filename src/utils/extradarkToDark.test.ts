import { extradarkToDark } from './colorUtils';

it('should convert extra dark color #112211 to dark color #4d5e4d', () => {
  const color = '#112211';

  const expectedResult = '#4d5e4d';

  const result = extradarkToDark(color);

  expect(expectedResult).toEqual(result);
});
