import { Component } from 'react';
import axios, { AxiosError } from 'axios';
import { AppContext } from '../../context';
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
  static contextType = AppContext;
  declare context: React.ContextType<typeof AppContext>;

  state: CardListState = {
    places: [],
    isLoading: false,
    error: '',
  };

  componentDidMount() {
    this.fetchItems(this.context?.searchValue);
  }

  componentDidUpdate(prevProps: CardListProps): void {
    if (prevProps.searchValue !== this.props.searchValue) {
      const searchValue = this.props?.searchValue?.trim();

      this.fetchItems(searchValue);
    }
  }

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

  fetchItems = async (searchValue?: string) => {
    const url = `https://zelda.fanapis.com/api/places${searchValue ? `?name=${searchValue}` : ''}`;

    try {
      this.setState({ isLoading: true });

      const response = await axios.get<ZeldaPlaceResponse>(url);

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
