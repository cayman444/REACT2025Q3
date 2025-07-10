import { Component } from 'react';

interface CardProps {
  name: string;
  description: string;
}

export class Card extends Component<CardProps> {
  render() {
    return (
      <div className="border-b-2 border-gray-200 pb-2">
        <span className="text-gray-800 font-medium">{this.props.name}: </span>
        <span className="text-gray-700">{this.props.description}</span>
      </div>
    );
  }
}
