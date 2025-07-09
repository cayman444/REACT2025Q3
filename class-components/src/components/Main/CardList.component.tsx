import { Component } from 'react';
import axios, { AxiosError } from 'axios';
import type { ZeldaPlaceResponse, IPlace } from '../../types';
import { Card } from './Card.component';
import { Spinner } from '../ui';

interface CardListState {
  places: IPlace[];
  isLoading: boolean;
  error: string;
}

export class CardList extends Component<unknown, CardListState> {
  state: CardListState = {
    places: [],
    isLoading: false,
    error: '',
  };

  render() {
    return (
      <div className="relative flex flex-col gap-5 min-h-18">
        {this.state.isLoading && <Spinner />}
        {this.state.places.map(({ id, name, description }) => (
          <Card key={id} name={name} description={description} />
        ))}
      </div>
    );
  }

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = async () => {
    try {
      this.setState({ isLoading: true });
      const response = await axios.get<ZeldaPlaceResponse>(
        'https://zelda.fanapis.com/api/places'
      );

      this.setState({ places: response.data.data });
    } catch (err) {
      if (err instanceof AxiosError) {
        this.setState({ error: err.message });
      }

      this.setState({ error: 'Response error' });
    } finally {
      this.setState({ isLoading: false });
    }
  };
}
