import { extradarkToHover } from './colorUtils';

it('should convert extra dark color #441111 to hover color #bc8989', () => {
  const color = '#441111';

  const expectedResult = '#bc8989';

  const result = extradarkToHover(color);

  expect(expectedResult).toEqual(result);
});
