import { render, screen, waitFor } from '@testing-library/react';
import { Route, Routes } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { renderTestApp } from '../../tests/utils';
import { DetailsCard } from './DetailsCard';
import { API_URL } from '../../services';

const MOCK_DATA = {
  properties: {
    name: 'name 1',
    manufacturer: 'manufacturer 1',
  },
  uid: '1',
};

const renderDetailsComponent = () =>
  render(
    renderTestApp(
      <Routes>
        <Route path="/details/:detailsId" element={<DetailsCard />} />
      </Routes>,
      undefined,
      '/details/1'
    )
  );

describe('DetailsCard', () => {
  const server = setupServer(
    http.get(`${API_URL}vehicles/:id`, () => {
      return HttpResponse.json({
        result: MOCK_DATA,
      });
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('should return correct data', async () => {
    renderDetailsComponent();

    const spinner = screen.queryByTestId('spinner');
    expect(spinner).toBeInTheDocument();

    await waitFor(() => {
      expect(spinner).not.toBeInTheDocument();

      expect(
        screen.getByRole('heading', { name: 'name 1' })
      ).toBeInTheDocument();
    });
  });

  it('should displays error message when API call fails', async () => {
    server.use(http.get(`${API_URL}vehicles/:id`, () => HttpResponse.error()));

    renderDetailsComponent();

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent('FETCH_ERROR');
    });
  });

  it('should return error message when API call fails unknown error', async () => {
    server.use(
      http.get(`${API_URL}vehicles/:id`, () => {
        return new HttpResponse(null, {
          status: 500,
        });
      })
    );

    renderDetailsComponent();

    await waitFor(() => {
      expect(screen.getByTestId('error')).toHaveTextContent('500');
    });
  });
});
