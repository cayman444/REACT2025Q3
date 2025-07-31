import { Provider } from 'react-redux';
import { store } from '../../store';
import { MemoryRouter } from 'react-router-dom';
import { Fragment, type ReactNode } from 'react';
import { AppProvider } from '../../context';

export const renderTestApp = (
  component: ReactNode,
  initialRoute = '/',
  withProvider = true
) => {
  const Wrapper = withProvider ? AppProvider : Fragment;

  return (
    <Provider store={store}>
      <MemoryRouter initialEntries={[initialRoute]}>
        <Wrapper>{component}</Wrapper>
      </MemoryRouter>
    </Provider>
  );
};
