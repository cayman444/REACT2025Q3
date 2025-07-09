import { Component, type ChangeEvent } from 'react';

interface SearchProps {
  searchValue: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export class Search extends Component<SearchProps> {
  render() {
    return (
      <input
        name="search"
        value={this.props.searchValue}
        onChange={this.props.onChange}
        placeholder="Enter something..."
        className="w-full border-2 rounded text-gray-700 border-gray-300 focus:border-blue-500 outline-0 px-2 py-1 transition-colors"
      />
    );
  }
}
