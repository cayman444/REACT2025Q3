import { Component } from 'react';
import { Header } from './components';

export class App extends Component {
  render() {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8">
        <Header />
      </div>
    );
  }
}
