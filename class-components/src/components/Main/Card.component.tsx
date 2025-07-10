import { Component } from 'react';

interface CardProps {
  name: string;
  description: string;
}

export class Card extends Component<CardProps> {
  render() {
    return (
      <article className="border-b-2 border-gray-200 pb-2">
        <h2 className="inline text-gray-800 font-medium">
          {this.props.name}:{' '}
        </h2>
        <p className="inline text-gray-700">{this.props.description}</p>
      </article>
    );
  }
}
