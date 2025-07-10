import { Component, type ContextType } from 'react';
import { AppContext } from '../../context';
import { Button } from '../ui';

interface SearchState {
  value: string;
}

export class Search extends Component<object, SearchState> {
  static contextType = AppContext;
  declare context: ContextType<typeof AppContext>;

  state = {
    value: '',
  };

  componentDidMount() {
    this.setState({ value: this.context?.searchValue || '' });
  }

  render() {
    return (
      <>
        <input
          name="search"
          value={this.state.value}
          onChange={(e) => this.setState({ value: e.target.value })}
          placeholder="Enter something..."
          className="w-full border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors"
        />
        <Button onClick={this.handleButtonClick}>Search</Button>
      </>
    );
  }

  handleButtonClick = () => {
    const value = this.state.value.trim();
    const context = this.context;

    localStorage.setItem('searchValue', value);
    context?.setSearchValue(value);
  };
}
