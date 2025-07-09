import { Component, type ComponentProps } from 'react';

export class Button extends Component<ComponentProps<'button'>> {
  render() {
    return <button {...this.props}>{this.props.children}</button>;
  }
}
