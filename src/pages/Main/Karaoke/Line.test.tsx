import { render } from '@testing-library/react';
import Line from './Line';

describe('<Line />', () => {
  it('should render successfully and match snapshot', () => {
    const { container } = render(<Line text="Song text"></Line>);

    expect(container).toMatchSnapshot();
  });
});
