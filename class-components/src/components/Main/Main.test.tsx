import { screen, waitFor } from '@testing-library/react';
import { Main } from './Main.component';
import { renderTestApp } from '../../tests/utils';
import { setupServer } from 'msw/node';
import { API_URL } from '../../services';
import { http, HttpResponse } from 'msw';
import { MOCK_DATA } from '../../tests/mocks';

describe('Main', () => {
  const server = setupServer(
    http.get(`${API_URL}vehicles`, () => {
      return HttpResponse.json({
        result: MOCK_DATA,
      });
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should return correct data', async () => {
    renderTestApp(<Main />);

    await waitFor(() => {
      expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    });
  });
});
