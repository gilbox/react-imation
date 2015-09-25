# react-imation

This library provides
various composable utilities for creating complex timeline-based animation in a react-y component-driven fashion.

    npm install react-imation --save

-  [Demo1](http://gilbox.github.io/react-imation/examples/demo1/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo1/Game.js)] `tween`, `<Timeline />`  ***Exploding Snowflakes***
-  [Demo2](http://gilbox.github.io/react-imation/examples/demo2/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo2/app.js)] `tween`, `<Timeline />`, `react-motion`
- [Demo3](http://gilbox.github.io/react-imation/examples/demo3/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo3/RollButton.js)] `tween`, `<Timeline />`, `Timeliner`
- [Demo4](http://gilbox.github.io/react-imation/examples/demo4/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo4/Demo4.js)] `tween`, `<Timeline />`

Also check out [`react-track`](https://github.com/gilbox/react-track)'s'
demo which combines `react-imation` tweening with
DOM tracking.

## `tween(currentFrame, keyframes, [ease])`

The first argument, `currentFrame` is a number representing the current
position in the animation **timeline**. It can represent actual time, or as in the
example below, it can represent the current scroll position.

The aforementioned **timeline** is represented by the `keyframes`
argument which is an object whose entries represent
timeline positions and their associated values.
Note that `tween` assumes that the keyframes are sorted.

    import {tween} from 'react-imation';
    import {rotate} from 'react-imation/tween-value-factories';

    // ...render:
      <h2
        style={tween(time, {
           0: { transform: rotate(0) },
          60: { transform: rotate(360) } })}>
        spin
      </h2>

Tweening values that require special formatting is
super-easy. All you have to do is create a new
tween value factory. Check out
[`tween-value-factories.js`](https://github.com/gilbox/react-imation/blob/master/src/tween-value-factories.js)
and you'll see what I mean.

#### `tween`: tweening numbers

While `tween` works with more sophisticated *wrapped* values as demonstrated
above, it also works with regular numbers. Here are some examples:

    tween(0.5, {0:10, 1:20}); //=> 15

    tween(5, {0:10, 10:20});  //=> 15

    tween(10, {0:0,
               20:10,
               30:20});       //=> 5

    tween(5, {0:10, 5:0});    //=> 5

#### `tween`: creating wrapped values with tween value factories (TvFs)

Wrapped values represent complex values which we ultimately need
to convert to strings in order to generate CSS values. We can
create wrapped values easily with tween value factories.

Here are the two most complex value factories:

    import {combine, ease} from 'react-imation';

Here are some simple value factories:

    import {rotate, turn, px, translateX} from 'react-imation/tween-value-factories';

I call these tween value factories *simple* because they are extremely easy to create.
To create a simple tween value factory first import the `createTweenValueFactory`
function

    import {createTweenValueFactory} from 'react-imation';

and then use it like this:

    const px = createTweenValueFactory(value => `${value}px`);
    const translate3d = createTweenValueFactory(value => `translate3d(${value.join(',')})`, px);

now the value of `translate3d` is a function which can create *wrapped values*.
For example,

    const t = translate3d(100, 50, 80); // instantiate a wrapped value `t`
    t.resolveValue();   //=> "translate3d(100px,50px,80px)"

note that calling `resolveValue` on the wrapped value `t` returns it's
string representation. You will never have to do this explicitly because
the `tween` function does it for you.

Consider `translate3d` again

    const px = createTweenValueFactory(value => `${value}px`);
    const translate3d = createTweenValueFactory(value => `translate3d(${value.join(',')})`, px);

Notice that we are passing the tween value factory `px` as the second
argument of `createTweenValueFactory`. This tells `createTweenValueFactory`
to create a value factory that automatically wraps each of its arguments
which are *plain numbers* utilizing another
value factory (`px`) before passing it into it's own value factory.

Consider the TVF `percent`

    const percent = createTweenValueFactory(value => `${value}%`);

We can use this with the `translate3d` TvF

    const t = translate3d(percent(50), percent(20), 200);
    t.resolveValue();    //=> "translate3d(50%,20%,200px)"

Note that since we did not wrap the third argument in a TvF,
it was wrapped automatically by the `px` TvF and that is why
calling `t.resolveValue()` produced `200px` for the third argument.

#### `tween`: tweening wrapped values

The real power and elegance of the `tween` function becomes apparent
when you use it with TvFs (that produce wrapped values).
One of the primary goals of react-imation is to create a highly
readable and intuitive API for animation.


    const t = tween(30, {  0: rotate(0)   },
                          60: rotate(360) })

    t.resolveValue();   //=> "rotate(180deg)"

In react we can use this in a style tag:

    <div
      style={{
        backgroundColor: 'red'
        transform: tween(time, {  0: rotate(0)   },
                                 60: rotate(360) })
      }}>


#### `tween`: tweening objects

Tweening plain objects (ie., object literals) means that we are
actually tweening the values within those objects and returning
a new object with a similar shape. This works
with both numbers and wrapped values.

    <h2
      style={tween(time, {
         0: { transform: rotate(0) },
        60: { transform: rotate(360) } })}>
      spin
    </h2>

The result is something like this:

    <h2 style={{ transform: 'rotate(180deg)' }}>
      spin
    </h2>

#### `tween`: easing

An easing function is a function that accepts a single argument,
`time` and returns `time`. There are many libraries out there already
that provide easing functions, or you can write your own. The one
I've been using is `functional-easing`.

There are three ways to ease with `tween`:

1. Pass the easing function as the third argument to `ease`.
2. When tweening a plain object, add an `ease` property.
   The easing will apply to all properties in the keyframe.
    For example:

        import {Easer} from 'functional-easing';
        const easeOutSine = new Easer().using('out-sine');

        <h2
          style={tween(time, {
             0: { transform: rotate(0), tween: easeOutSine },
            60: { transform: rotate(360) } })}>
          spin
        </h2>

3. Wrap a number in the `ease` TvF. The `ease` TvF will override
    any other type of easing.

        <h2
          style={tween(time, {
             0: { transform: rotate(ease(easeOutSine, 0)) },
            60: { transform: rotate(360) } })}>
          spin
        </h2>

Note that we did not wrap `360` with `ease()`. Wrapping the
destination value is optional because the source's easing function
is always the one that `tween` applies.

#### `tween`: combine TvF

`combine` works as you might expect.

    combine(rotate(90) translateX(100))
      .resolveValue();    //=> "rotate(90deg) translateX(100px)"

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

        ... and tween to spin some text:
        <h2
          style={tween(time, {
              0: { transform: rotate(0) },
            100: { transform: rotate(360) } })}>
          spin
        </h2>

      </div>
    }</Timeline>

The `<Timeline />` component is pretty basic right now. If you
encounter a missing feature that you need, please add it and submit a PR.
You'll find that modifying the component is straightforward.
