import { Component } from 'react';
import { AppProvider } from './context';
import { Header, Main } from './components';

export class App extends Component {
  render() {
    return (
      <AppProvider>
        <div className="flex flex-col mx-auto max-w-3xl px-4 py-8 gap-5">
          <Header />
          <Main />
        </div>
      </AppProvider>
    );
  }
}
