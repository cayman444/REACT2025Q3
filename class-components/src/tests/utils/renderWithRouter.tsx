import { Fragment, type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../../context';

export const renderWithRouter = (
  component: ReactNode,
  withProvider = true,
  initialRoute = '/'
) => {
  const Wrapper = withProvider ? AppProvider : Fragment;

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Wrapper>{component}</Wrapper>
    </MemoryRouter>
  );
};
