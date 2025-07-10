import { Component, type ContextType } from 'react';
import { AppContext } from '../../context';
import { CardList } from './CardList.component';
import { Button } from '../ui';

interface MainState {
  error: boolean;
}
export class Main extends Component<object, MainState> {
  static contextType = AppContext;
  declare context: ContextType<typeof AppContext>;
  state = {
    error: false,
  };

  render() {
    if (this.state.error) {
      throw Error('Error caused by pressing a button');
    }

    return (
      <main className="flex flex-col gap-5 bg-white/50 p-5 rounded shadow">
        <CardList searchValue={this.context?.searchValue} />
        <Button
          className="bg-red-500 hover:bg-red-400 focus:outline-red-400"
          onClick={this.createError}
        >
          Error Button
        </Button>
      </main>
    );
  }

  createError = () => {
    this.setState({ error: true });
  };
}
