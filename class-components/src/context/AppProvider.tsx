import { Component, type PropsWithChildren } from 'react';
import { AppContext } from './AppContext';

interface AppState {
  searchValue: string;
}

export class AppProvider extends Component<PropsWithChildren, AppState> {
  state: AppState = {
    searchValue: '',
  };

  constructor(props: PropsWithChildren) {
    super(props);

    this.state = {
      searchValue: localStorage.getItem('searchValue') || '',
    };
  }

  setSearchValue = (searchValue: string) => {
    this.setState({ searchValue });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          searchValue: this.state.searchValue,
          setSearchValue: this.setSearchValue,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
