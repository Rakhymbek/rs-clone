import { secondsToHms } from './secondsToHms';

it('should convert 145 seconds to 2:25', () => {
  const duration = 145;

  const expectedResult = '2:25';

  const result = secondsToHms(duration);

  expect(expectedResult).toEqual(result);
});
