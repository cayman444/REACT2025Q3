import { Fragment, type FC } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppProvider } from '../../context';

export const renderWithRouter = (
  Component: FC,
  withProvider = true,
  initialRoute = '/'
) => {
  const Wrapper = withProvider ? AppProvider : Fragment;

  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <Wrapper>
        <Component />
      </Wrapper>
    </MemoryRouter>
  );
};
