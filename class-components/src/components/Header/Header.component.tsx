import { Component, type ChangeEvent } from 'react';
import { Button } from '../ui';
import { Search } from './Search.component';

interface HeaderState {
  searchValue: string;
}

export class Header extends Component<unknown, HeaderState> {
  state = {
    searchValue: '',
  };

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');

    if (searchValue) {
      this.setState({ searchValue });
    }
  }

  render() {
    return (
      <header className="flex justify-between items-center gap-5 bg-white/50 p-5 rounded shadow">
        <Search
          searchValue={this.state.searchValue}
          onChange={this.handleInputChange}
        />
        <Button
          className="bg-blue-600 hover:bg-blue-500 focus:outline-blue-500 text-white font-medium rounded px-5 py-1 cursor-pointer transition-colors"
          onClick={this.handleButtonClick}
        >
          Search
        </Button>
      </header>
    );
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: e.target.value });
  };

  handleButtonClick = () => {
    const searchValue = this.state.searchValue.trim();

    if (searchValue) {
      localStorage.setItem('searchValue', searchValue);
    }
  };
}
