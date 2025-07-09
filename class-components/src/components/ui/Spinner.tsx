import { Component } from 'react';

export class Spinner extends Component {
  render() {
    return (
      <div className="absolute animate-spin inset-1/2 -translate-1/2 w-15 h-15 bg-transparent border-4 border-dashed border-blue-500 rounded-full"></div>
    );
  }
}
