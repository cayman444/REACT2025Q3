import { Component, type ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

export class Button extends Component<ComponentProps<'button'>> {
  render() {
    const classes =
      'bg-blue-600 hover:bg-blue-500 focus:outline-blue-500 text-white font-medium rounded px-5 py-1 cursor-pointer transition-colors';

    const mergedClasses = twMerge(classes, this.props.className);

    return (
      <button {...this.props} className={mergedClasses}>
        {this.props.children}
      </button>
    );
  }
}
