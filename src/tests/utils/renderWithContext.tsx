import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';

export const renderWithContext = (component: ReactNode) => {
  return render(<Provider store={store}>{component}</Provider>);
};
