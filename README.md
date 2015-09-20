# react-imation

This library provides
various composable utilities for creating complex timeline-based animation in a react-y component-driven fashion.

    npm install react-imation --save

-  [Demo2](http://gilbox.github.io/react-imation/examples/demo2/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo2/app.js)] `tween`, `<Timeline />`, `react-motion`
- [Demo3](http://gilbox.github.io/react-imation/examples/demo3/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo3/app.js)] `tween`, `<Timeline />`

## `tween(currentFrame, keyframes, [ease])`

The first argument, `currentFrame` is a number representing the current
position in the animation **timeline**. It can represent actual time, or as in the
example below, it can represent the current scroll position.

The aforementioned **timeline** is represented by the `keyframes`
argument which is an object whose entries represent
timeline positions and their associated values.
Note that `tween` assumes that the keyframes are sorted.

    import {TrackDocument, Track} from 'react-track';
    import {topTop} from 'react-track/tracking-formulas';
    import {tween} from 'react-imation';
    import {rgb, translate3d} from 'react-imation/tween-value-factories';

    // ...render:
      <TrackDocument formulas={[topTop]}>
      {topTop =>

        <Track component={AwesomeComponent} formulas={[topTop]}>
        {(AwesomeComponentTracked,posTopTop) =>
          <AwesomeComponentTracked
            style={tween(scrollY, {
              [posTopTop]: { opacity: 1, color: rgb(255,0,0), transform: translate3d(0,150,0) },
              [posTopTop+200]: { opacity: 0, color: rgb(0,255,0), transform: translate3d(0,100,0) } })} />
        }</Track>

      }</TrackDocument>

Tweening values that require special formatting is
super-easy. All you have to do is create a new
tween value factory. Check out
[`tween-value-factories.js`](https://github.com/gilbox/react-imation/blob/master/src/tween-value-factories.js)
and you'll see what I mean.

I need to add more documentation about the `tween` function, but in the
meantime see the examples in the repo.

## `<Timeline />`

Timeline as a component. Manages the state of `time`.
Timeline as a component is super-handy.
You can spend less time thinking about managing the current
time and more time building your animation.

    <Timeline
      playOnMount={true}
      min={0}
      max={100}
      loop={true}>
    {({time, playing, togglePlay, setTime}) =>
      <div>

        The timeline is {playing ? '' : 'not '}playing! <br />
        Current time is {time}. <br />

        We can easily create a pause button like this:<br />
        <button onClick={togglePlay}>
          {playing ? 'pause' : 'play'}
        </button>

        <br />

        ... or jump around the timeline: <br />
        <button onClick={event => setTime(50)}>
          Jump to 50
        </button>

      </div>
    }</Timeline>

The `<Timeline />` component is pretty basic right now. If you
encounter a missing feature that you need, please add it and submit a PR.
You'll find that modifying the component is straightforward.
