import { Component } from 'react';
import { CardList } from './CardList.component';

export class Main extends Component {
  render() {
    return (
      <main className="flex flex-col gap-5 bg-white/50 p-5 rounded shadow">
        <CardList />
      </main>
    );
  }
}
