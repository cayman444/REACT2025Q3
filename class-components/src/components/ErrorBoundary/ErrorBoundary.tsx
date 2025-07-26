import { Component, type ErrorInfo, type PropsWithChildren } from 'react';

interface ErrorBoundaryState {
  error: null | Error;
}

export class ErrorBoundary extends Component<
  PropsWithChildren,
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          data-testid="error-container"
          className="flex items-center justify-center h-screen px-4 py-8"
        >
          <div className="flex flex-col gap-5 bg-white p-5 rounded shadow">
            <h2 className="text-gray-800 font-medium">
              Error: {this.state.error.message}
            </h2>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
