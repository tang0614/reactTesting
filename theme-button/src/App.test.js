import { render} from '@testing-library/react';
import App from './App';

test('renders Hit the easy button!', () => {
  const {getByText} =render(<App/>)
  getByText('Hit the easy button!')
});
