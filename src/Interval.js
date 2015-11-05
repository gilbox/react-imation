// An easy way to repeatedly set an interval with a
// component.
// It extracts away the react lifecycle challenges
// so that all you have to think about is what to do
// every tick and how to schedule the next interval.

import React, { Component, PropTypes } from 'react';

export default class Interval extends Component {
  static propTypes = {
    onTick: PropTypes.func.isRequired,
  }

  static defaultProps = {
    children: null,
  }

  componentWillMount() {
    this._updateTick(this.props.onTick);

    this.scheduleNextTick = delay => {
      // NOTE: Cancel previous scheduled timeout:
      // this means that calling scheduleTick multiple
      // times will only schedule the last tick, and previous
      // calls will be cancelled.
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(this.tick, delay);
    };

    this.rafId = requestAnimationFrame(this.tick);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.onTick !== nextProps.onTick) {
      this._updateTick(nextProps.onTick);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rafId);
    cancelTimeout(this.timeoutId);
  }

  _updateTick(onTick) {
    this.tick = () => onTick(this.scheduleNextTick);
  }

  render() {
    return this.props.children;
  }
}
