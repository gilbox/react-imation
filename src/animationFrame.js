import React, { Component, PropTypes } from 'react';
import raf, { cancel as cancelRaf } from 'raf';

// Simple ticking decorator that manages destroying
// requestAnimationFrame when component unmounts.
// All you have to supply is the `callback` function
// which gets called every tick.

export function animationFrame(callback) {

  return DecoratedComponent => class AnimationFrame extends Component {
    componentWillMount() {
      this.tick = () => {
        callback(this.props);
        raf(this.tick);
      }
    }

    componentDidMount() {
      this.rafId = raf(this.tick);
    }

    componentWillUnmount() {
      cancelRaf(this.rafId);
    }

    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}

// Simple ticking component, just supply `onTick` prop
export class AnimationFrame extends Component {
  static propTypes = {
    onTick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    children: null,
  }

  componentWillMount() {
    this.tick = () => {
      this.props.onTick();
      raf(this.tick);
    }
  }

  componentDidMount() {
    this.rafId = raf(this.tick);
  }

  componentWillUnmount() {
    cancelRaf(this.rafId);
  }

  render() {
    return this.props.children;
  }
}
