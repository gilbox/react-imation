# react-imation

This library provides
various composable utilities for creating complex timeline-based animation in a react-y component-driven fashion.

    npm install react-imation --save

Since this is a library of composable utility functions and components that mostly
don't rely on each other, there is no fully bundled import. This keeps `react-imation`
light-weight. The following imports are available:

  - `react-imation`
  - `react-imation/animationFrame`
  - `react-imation/Interval`
  - `react-imation/timeline`
  - `react-imation/tween-value-factories`

For react-native the following imports are available
(support is limited to a subset of the above, atm):

  - `react-imation/native`
  - `react-imation/timeline/native`
  - `react-imation/tween-value-factories`

## Demos

-  [Demo1](http://gilbox.github.io/react-imation/examples/demo1/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo1/Game.js)] `tween`, `<Timeline />`  ***Exploding Snowflakes***
-  [Demo2](http://gilbox.github.io/react-imation/examples/demo2/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo2/app.js)] `tween`, `<Timeline />`, `react-motion`
- [Demo3](http://gilbox.github.io/react-imation/examples/demo3/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo3/RollButton.js)] `tween`, `<Timeline />`, `Timeliner`
- [Demo4](http://gilbox.github.io/react-imation/examples/demo4/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo4/Demo4.js)] `tween`, `<Timeline />`
- [Demo5](http://gilbox.github.io/react-imation/examples/demo5/demo.html): [[source](https://github.com/gilbox/react-imation/blob/master/examples/demo5/Demo5.js)] `tween`, `<Timeline />`, `ease`

Also check out [`react-track`](https://github.com/gilbox/react-track)'s'
demo which combines `react-imation` tweening with
DOM tracking.

If you clone this repo you can run the demos locally via:

        npm install
        npm run examples

#### In the Wild

- [airbnb javascript](http://airbnb.io/projects/javascript/)
- Your demo? ([edit this file](https://github.com/gilbox/react-imation/edit/master/README.md))

## [`tween(currentFrame, keyframes, [ease])`](https://github.com/gilbox/react-imation/blob/master/src/tween.js)

The first argument, `currentFrame` is a number representing the current
position in the animation **timeline**.

The aforementioned **timeline** is represented by the `keyframes`
argument which is an an array of `[key, value]` touples.
The 2 components of each touple represents a timeline
position and it's state, respectively.
Note that `tween` assumes that the keyframes are sorted.

```jsx
import {tween} from 'react-imation';
import {rotate} from 'react-imation/tween-value-factories';

// ...render:
  <h2
    style=tween(time, [
      [  0, { transform: rotate(0) } ],
      [ 60, { transform: rotate(360) } ]
    ])
  >
    spin
  </h2>
```

*Note: Support for object typed `keyframes` param
has been removed as of `react-imation@0.5.0`*

Tweening values that require special formatting is
super-easy. All you have to do is create a new
tween value factory. Check out
[`tween-value-factories.js`](https://github.com/gilbox/react-imation/blob/master/src/tween-value-factories.js)
and you'll see what I mean.

#### `tween`: tweening numbers

While `tween` works with more sophisticated *wrapped* values as demonstrated
above, it also works with regular numbers. Here are some examples:

    tween(0.5, [[0, 10], [1, 20]]); //=> 15

    tween(5, [[0, 10], [10, 20]]);  //=> 15

    tween(10, [[0,  0 ],
               [20, 10],
               [30, 20]]);       //=> 5

    tween(5, [[0,10], [5,0]]);    //=> 5

You can use this approach to tween styles:

```jsx
<h2 style={{ transform: `rotate(${tween(time, [[0, 0],[60, 360]])}deg)` }}>
  spin
</h2>
```

You can tween all of your styles this way and it will work fine.
However, when you have a lot of styles this can get tedious and difficult
to read. For this reason, `tween` supports using *wrapped values*.
Read the next section about creating *wrapped values* using
tween value factories (TvFs).

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


    const t = tween(30, [ [ 0, rotate(0)  ],
                          [60, rotate(360)] ])

    t.resolveValue();   //=> "rotate(180deg)"

In react we can use this in a style tag:

```jsx
<div
  style={{
    backgroundColor: 'red'
    transform: tween(time, [ [ 0, rotate(0)  ],
                             [60, rotate(360)] ])
  }}>
```

#### `tween`: tweening object literals

Tweening object literals means that we are
actually tweening the values within those objects and returning
a new object with a similar shape. This works
with both numbers and wrapped values.

```jsx
<h2
  style={tween(time, [
    [ 0, { transform: rotate(0)   }],
    [60, { transform: rotate(360) }]
  ])}
>
  spin
</h2>
```

The result is something like this:

```jsx
<h2 style={{ transform: 'rotate(180deg)' }}>
  spin
</h2>
```

The real advantage of using object literals is
that it allows you to tween multiple style properties
in one `tween()`:

```jsx
<h2
  style={tween(time, [
    [  0, { backgroundColor: rgba(0,200,0,.5), transform: rotate(0)  } ],
    [ 60, { backgroundColor: rgba(200,0,0,1), transform: rotate(360) } ]
  ])}
>
  spin
</h2>
```

the result is something like:

```jsx
<h2 style={{ backgroundColor: 'rgba(100,100,0,.75)',
             transform: 'rotate(180deg)' }}>
  spin
</h2>
```

**warning**: All keyframes in a single tween must have exactly the same
properties. The only exception to this is when using easing.

#### `tween`: easing

An easing function is a function that accepts a single argument,
`time` and returns `time`. There are many libraries out there already
that provide easing functions, or you can write your own. The one
I've been using is `functional-easing`.

There are three ways to ease with `tween`:

1. Pass the easing function as the third argument to `tween`.
2. When tweening a plain object, add an `ease` property.
   The easing will apply to all properties in the keyframe.
    For example:

        import {Easer} from 'functional-easing';
        const easeOutSine = new Easer().using('out-sine');

        <h2
          style={tween(time, [
            [ 0, { transform: rotate(0), ease: easeOutSine }],
            [60, { transform: rotate(360) } ]
          ])}
        >
          spin
        </h2>

3. Wrap a TvF in the `ease` TvF. The `ease` TvF will override
    any other type of easing.

        <h2
          style={tween(time, [
            [ 0, { transform: ease(easeOutSine, rotate(0)) }],
            [60, { transform: rotate(360) } ]
          ])}
        >
          spin
        </h2>

  **Heads-up: Doing `rotate(ease(easeOutSine, 0))`
  instead of `ease(easeOutSine, rotate(0))` unfortunately
  does *not* work.**

  Note that we did not wrap `rotate(360)` with `ease()`. Wrapping the
  destination value is optional because the source's easing function
  is always the one that `tween` applies.

  The `ease()` TvF is automatically curried, so we can also use
  it like this:

        const easeOutSine = ease(new Easer().using('out-sine'));

        <h2
          style={tween(time, [
            [ 0, { transform: easeOutSine(rotate(0)) }],
            [60, { transform: rotate(360) }]
          ])}
        >
          spin
        </h2>

  **Heads-up: Doing `rotate(easeOutSine(0))` instead of
  `easeOutSine(rotate(0))` unfortunately
  does *not* work.**

#### `tween`: combine TvF

`combine` works as you might expect.

    combine(rotate(90), translateX(100))
      .resolveValue();    //=> "rotate(90deg) translateX(100px)"


## `<Interval />`

    import Interval from 'react-imation/Interval';

Stateless component providing an
easy way to repeatedly set an interval.
It extracts away the react lifecycle challenges
so that all you have to think about is what to do
every tick and how to schedule the next interval.

    <Interval onTick={scheduleTick => {
      console.log('tick!');
      scheduleTick(1000); // schedule next tick for 1 second from now
    }} />;

## `animationFrame`

    import { animationFrame } from 'react-imation/animationFrame';

Stateless ticking decorator that manages destroying
requestAnimationFrame when component unmounts.
All you have to supply is the only argument,
a `callback` function
which gets called every tick.

**ES7 Decorator:** (with class-based component)

    @animationFrame(({onTick}) => onTick())
    class Foo extends Component {
      render() {
        return <div>{this.props.foo}</div>
      }
    }

**Functionally:** (with stateless component)

    animationFrame(
      ({onTick}) => onTick()
    )(
      props => <div>{props.foo}</div>
    )

In both examples above we assume an `onTick` prop
is being passed down and it will handle each
tick event.

## `<AnimationFrame />`

    import { AnimationFrame } from 'react-imation/animationFrame';

Stateless ticking component. Just supply a callback
function to `onTick` prop.

    <AnimationFrame onTick={() => console.log('tick'))}>


## [`<Timeline />`](https://github.com/gilbox/react-imation/blob/master/src/timeline/timeline.js)

    import { Timeline, Timeliner } from 'react-imation/timeline'

Timeline as a component is super-handy. It manages the state of `time`.

```jsx
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
      style={tween(time, [
        [   0, { transform: rotate(0)   } ],
        [ 100, { transform: rotate(360) } ]
      ])}
    >
      spin
    </h2>

  </div>
}</Timeline>
```

#### `<Timeline />`: overview

It accepts a single child which should be a function.
When rendered, Timeline calls the function by passing in as the first
argument an instance of the `Timeliner` class.

**Note:** Because this is a stateful component, it will work well for simple
use-cases. If you have more complex needs, using the `timeliner` prop
(described below) might get you a *bit* further, but consider using
the following lighter-weight stateless abstractions instead:

  - [`<Interval />`](#interval-)
  - [`animationFrame`](#animationframe)
  - [`<AnimationFrame />`](#animationframe-)

they compose well in a system
with reactive state management. Check out
[react-three-ejecta-boilerplate](https://github.com/gilbox/react-three-ejecta-boilerplate)
which is an example that utilizes
[react-stateful-stream](https://github.com/gilbox/react-stateful-stream)
for state management.


#### `<Timeline />`: the [**`Timeliner`**](https://github.com/gilbox/react-imation/blob/master/src/timeline/timeline.js) class and `timeliner` prop

The [`Timeliner`](https://github.com/gilbox/react-imation/blob/master/src/timeline/timeline.js)
class does the heavy lifting of scheduling animation
frames and storing the value of `time`. When using the `<Timeline />`
component you can provide or omit a `timeliner` prop. By omitting the
`timeliner` prop you are instructing `<Timeline />` to instantiate and
manage an instance of the `Timeliner` class all by itself.

In many cases,
omitting the `timeliner` prop works very well. However, sometimes you
need the added flexibility of *lifting* the state management functionality
outside of the `<Timeline />` component. Here's what it looks like when
we provide a `timeliner` prop:

```jsx
const timeliner = new Timeliner();
timeliner.play();

<div>
  <button
    onClick={() =>
      this.setState({showTimeline: !this.state.showTimeline})
    }>
      Toggle
  </button>

  {this.state.showTimeline &&
    <Timeline timeliner={timeliner}>
    {({time}) =>
      `The current time is {time}`
    }</Timeline>
</div>
```

Notice how we can mount/unmount the `<Timeline />` component
without losing it's state, and since the `timeliner` instance has
been lifted outside of the `<Timeline />` component, when the component
is re-mounted it works the same as if it had been mounted all along.

The single most important property of the `Timeliner` class is `time`.
Let's take a look at the function we passed in as the child of the
`<Timeline />` component from the previous example:

    ({time}) => `The current time is {time}`

Remember, when `<Timeline />` calls this function it will pass in
an instance of the `Timeliner` class. Our function uses *object destructuring*
to get the value of the `time` property.

You can access *methods* on the `Timeliner` instance via destructuring
as well. All of the methods exposed by `Timeliner` are automatically
bound to the `Timeliner` instance so that they work in this way.

#### `<Timeline />`: the partially applied `tween` function

The Timeliner class exposes a `tween` method which is the same `tween` function
we've discussed, with the first argument already applied. The following two expressions
are equivalent:

    tween(timeliner.time, [[0,0], [60,100]]);

    timeliner.tween([[0,0], [60,100]]);

The happy consequence is that with `<Timeline />` you can use destructuring
to easily access `Timeliner#tween`:

```jsx
<Timeline>
{({tween}) =>
  <h1 style={tween([
    [  0, { color: rgb(0,0,255) } ],
    [ 60, { color: rgb(255,0,0) } ]
  ])}>
    I change color!
  </h1>
}</Timeline>
```


## react-native support

Supports react-native as of `v0.2.6`, however performance is not so good
because react-native works best when native props are manipulated directly.
