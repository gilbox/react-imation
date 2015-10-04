import {tween} from '../tween';

export default function timelineFactory(React, raf) {
  const {Component} = React;

  class Timeline extends Component {
    // todo: prop types & default props

    constructor(props, context) {
      super(props, context);

      const {timeliner=new Timeliner(props)} = props;

      this.state = {
        time: timeliner.time
      };

      this.timeliner = timeliner;
    }

    componentDidMount() {
      if (this.props.playOnMount) this.timeliner.play();
      this._addListener();
    }

    componentWillUnmount() {
      this._removeListener();
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.timeliner && nextProps.timeliner !== this.timeliner) {
        this._removeListener();
        this.timeliner = nextProps.timeliner;
        this._addListener();
      }
      if (this.timeliner) {
        Object.keys(nextProps).forEach(key =>
          this.timeliner[key] = nextProps[key]);
      }
    }

    _addListener() {
      this._listenerId = this.timeliner.addListener(time => this.setState({time}));
    }

    _removeListener() {
      this.timeliner.removeListener(this._listenerId);
    }

    render() {
      return this.props.children(this.timeliner)
    }
  }

  class Timeliner {

    constructor(options={}) {
      this.listeners = {};
      this.lastListenerId = 0;

      this.tick = ::this.tick;
      this.play = ::this.play;
      this.pause = ::this.pause;
      this.setPlay = ::this.setPlay;
      this.setTime = ::this.setTime;
      this.playFrom = ::this.playFrom;
      this.togglePlay = ::this.togglePlay;

      Object.keys(options).forEach(option =>
        this[option] || (this[option] = options[option])
      );

      this.setTime(options.initialTime || this.time || 0);
      this.increment = this.increment || 1;

      if (this.playing) raf(this.tick);
    }

    tick() {
      const {playing, time} = this;

      if (time >= this.max) {
        if (this.onComplete) this.onComplete(time);
        if (this.loop) {
          this.setTime(this.min);
        } else {
          this.playing = false;
        }
      } else {
        this.setTime(time + this.increment);

        Object.keys(this.listeners).forEach(id =>
          this.listeners[id](this.time)
        );
      }

      if (playing) raf(this.tick);
    }

    setTime(time) {
      this.time = (typeof time === 'function') ? time(this.time) : time;
      this.tween = (keyframes, easer) => tween(time, keyframes, easer);
    }

    play() { this.setPlay(true) }
    pause() { this.setPlay(false) }

    playFrom(time) {
      this.setTime(time);
      this.setPlay(true);
      }

    setPlay(playing) {
      if (!this.playing && playing) raf(this.tick);
      this.playing = playing;
    }

    togglePlay(playing) {
      if (!this.playing) raf(this.tick);
      this.playing = !this.playing;
    }

    addListener(callback) {
      this.listeners[++this.lastListenerId] = callback;
      return this.lastListenerId;
    }

    removeListener(id) {
      delete this.listeners[id];
    }
  }

  return {Timeline, Timeliner};
}
