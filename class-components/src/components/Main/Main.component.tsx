import { Component, type ContextType } from 'react';
import { AppContext } from '../../context';
import { CardList } from './CardList.component';

export class Main extends Component {
  static contextType = AppContext;
  declare context: ContextType<typeof AppContext>;

  render() {
    return (
      <main className="flex flex-col gap-5 bg-white/50 p-5 rounded shadow">
        <CardList searchValue={this.context?.searchValue} />
      </main>
    );
  }
}
