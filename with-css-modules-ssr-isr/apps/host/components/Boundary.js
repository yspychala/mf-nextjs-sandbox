import React from "react";

export default class Boundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {}

  render() {
    const { Component, FallbackComponent, fallbackOpts, ...rest } = this.props;

    if (this.state.hasError) {
      return (
        <React.Suspense fallback={<div>Loading fallback…</div>}>
          <FallbackComponent fallbackOpts={fallbackOpts} {...rest} />
        </React.Suspense>
      );
    }

    return (
      <React.Suspense fallback={<div>Loading Module Federation remote…</div>}>
        <Component {...rest} />
      </React.Suspense>
    );
  }
}
