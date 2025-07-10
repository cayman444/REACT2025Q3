import { Component } from 'react';
import axios from 'axios';
import type { ZeldaPlaceResponse, IPlace } from '../../types';
import { Card } from './Card.component';
import { Spinner } from '../ui';

interface CardListState {
  places: IPlace[];
  isLoading: boolean;
  error: string;
}

interface CardListProps {
  searchValue?: string;
}

export class CardList extends Component<CardListProps, CardListState> {
  state: CardListState = {
    places: [],
    isLoading: false,
    error: '',
  };

  componentDidMount() {
    this.fetchItems(this.props.searchValue);
  }

  componentDidUpdate(prevProps: CardListProps): void {
    if (prevProps.searchValue !== this.props.searchValue) {
      const searchValue = this.props.searchValue;

      this.fetchItems(searchValue);
    }
  }

  render() {
    const { error, isLoading, places } = this.state;

    return (
      <section className="relative flex flex-col justify-center gap-5 min-h-18">
        {isLoading && <Spinner />}
        {error && (
          <div className="text-center font-medium text-red-500">{error}</div>
        )}
        {!places.length && !isLoading && !error && (
          <div className="text-center font-medium text-gray-800">
            Nothing found for this request
          </div>
        )}
        {places.map(({ id, name, description }) => (
          <Card key={id} name={name} description={description} />
        ))}
      </section>
    );
  }

  fetchItems = async (searchValue?: string) => {
    try {
      this.setState({ isLoading: true, error: '', places: [] });

      const response = await axios.get<ZeldaPlaceResponse>(
        'https://zelda.fanapis.com/api/places',
        {
          params: {
            name: searchValue ? searchValue : null,
          },
        }
      );

      this.setState({ places: response.data.data });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        this.setState({ error: error.message });
        return;
      }

      this.setState({ error: 'Response error' });
    } finally {
      this.setState({ isLoading: false });
    }
  };
}
