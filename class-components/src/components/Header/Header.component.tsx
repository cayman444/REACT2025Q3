import { Component } from 'react';
import { Search } from './Search.component';

export class Header extends Component {
  render() {
    return (
      <header className="flex justify-between items-center gap-5 bg-white/50 p-5 rounded shadow">
        <Search />
      </header>
    );
  }
}
