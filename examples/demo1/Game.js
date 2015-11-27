import React, {Component} from 'react';
import {tween, combine} from 'react-imation';
import {Timeline, Timeliner} from 'react-imation/timeline';
import {percent, translate3d, scale, translateX, rotateY} from 'react-imation/tween-value-factories';
import stateful from 'react-stateful-stream';
import {derive, track} from 'react-derive';
import {elegant as optimize} from 'elegant-react';
import {Easer} from 'functional-easing';
import GameOver from './GameOver';
import u from 'updeep';
const immutable = u({});

const easeOutSine = new Easer().using('out-sine');
const easeInSine = new Easer().using('in-sine');
const easeInBack = new Easer().using('in-back').withParameters(2.8);
const MAX_DROPPED = 100;

const fullViewportStyle = {
  position: 'absolute', height: '100vh', width: '100vw', overflow: 'hidden', minWidth: '800px'
};

const flakeImages = ["http://i.imgur.com/jbSVFgy.png",
                     "http://i.imgur.com/TT2lmN4.png",
                     "http://i.imgur.com/do8589m.png",
                     "http://i.imgur.com/3BxEO8i.png"];

const createFlake = id =>
  ({
    id,
    size: 22 + ~~(Math.random() * 30),
    rotationSpeed: Math.random() * 40 - 20,
    rotateX: ~~(Math.random()*50),
    rotateY: ~~(Math.random()*32),
    left: ~~(Math.random() * 100) + '%',
    drift: ~~(Math.random() * 40) - 15,
    image: flakeImages[~~(flakeImages.length * Math.random())],
    increment: 0.15 + Math.random()*0.2,
  });

const pffSounds = [1,2,3].map(i => new Audio(`sounds/pf${i}.mp3`));
const pffSoundsCount = pffSounds.length;
const crrSound = new Audio('sounds/crr.mp3');
const gameOverSound = new Audio('sounds/gameover.mp3');

const randi = limit => ~~(Math.random() * limit);
const playRandomPfSound = () => pffSounds[randi(pffSoundsCount)].play();

const flakeHasId = id => flake => flake.id === id;
const concat = newItem => items => items.concat(newItem);
const lengthIsLessThan = length => items => items.length < length;
const increment = x => x + 1;
const decrement = x => x - 1;

@stateful(
  immutable(
    { flakes: [],
      droppedCount: 0,
      gameIsOver: false,
      score: 0
    }),
  edit => ({
    addFlake: newFlake => edit(u({flakes: u.if(lengthIsLessThan(21),concat(newFlake)),
                            droppedCount: increment })),
    removeFlake: flakeId => edit(u({flakes: u.reject(flakeHasId(flakeId)) })),
    explodeFlake: index => edit(u({flakes: { [index]: { explode: true } } })),
    playAgain: () => edit(u({gameIsOver: false, score: 0, flakes: [], droppedCount: 0})),
    gameOver: () => edit(u({gameIsOver: true})),
    addToScore: amount => edit(u({score: x => x + ~~amount })),
  }))
export default class Game extends Component {
  render() {
    const {gameIsOver, flakes, score} = this.props;

    return (
      <div>
        <div style={{position: 'absolute', margin: '10px', userSelect: 'none'}}>
          {score.toLocaleString()}
        </div>

        {(gameIsOver && !flakes.length) ?
          <GameOver gameOverSound={gameOverSound} {...this.props} />
          :
          <Flakes {...this.props} />}
      </div>
    )
  }
}

const shakeKeyframes = { 0: 10, 5: -8, 10: 5, 15: 0};

@optimize({statics: ['score']}) // changing the 'score' prop won't cause re-render
class Flakes extends Component {
  componentDidMount() {
    const {addFlake, gameOver} = this.props;

    // these ids are arbitrary, what's import is that they are unique
    let lastFlakeId = 0;

    // here we randomly create new flakes every so often
    const tick = () => {
      if (lastFlakeId > MAX_DROPPED) return gameOver();

      addFlake(createFlake(++lastFlakeId));
      setTimeout(tick, 400 + ~~(Math.random() * 600));
    }
    tick();
  }

  render() {
    const {flakes, explodeFlake, removeFlake, addToScore, droppedCount, lastPoints} = this.props;

    const createHandleSlash = (explode,playFrom,rotationSpeed,index,increment,size) => event => {
      event.stopPropagation();
      if (explode) return;
      playFrom(t => Math.max(0, t-10)); // shake
      rotationSpeed>0 ? playRandomPfSound() : crrSound.play();
      explodeFlake(index);
      addToScore(10000 * rotationSpeed * increment / size
                 * tween(droppedCount, {0:1, [MAX_DROPPED]:6}, easeInSine));
    };

    return (
      <Timeline initialTime={15} max={15}>
      {({time, playFrom}) =>
        <div style={{ userSelect: 'none',
                      transform: `translateX(${tween(time, shakeKeyframes)}px)`,
                      ...fullViewportStyle }}>

          <Trails />

          {flakes.map(({id, increment, size, rotateX, rotateY, rotationSpeed, left, drift, image, explode}, index) =>
            <Timeline
              increment={tween(droppedCount, {0:increment, [MAX_DROPPED]: increment*2}, easeInSine)}
              key={id}
              playOnMount={true}
              max={105}
              onComplete={() => removeFlake(id, explode)}>
            {({time}) => {
              const handleSlash = createHandleSlash(explode,playFrom,rotationSpeed,index,increment,size);
              return <div
                onMouseOver={handleSlash}
                onTouchMove={handleSlash}
                key={id}
                style={{
                  cursor: 'pointer',
                  position: 'absolute',
                  left,
                  top: -size,
                  transform: `translateX(${tween(time, {0:0, 105:drift})}px) ` +
                             `translateY(${time}vh) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>

                <Flake
                  rotate={time*rotationSpeed}
                  onExploded={() => removeFlake(id, explode)}
                  {...{size, image, explode}} />

              </div>
            }}</Timeline>
          )}

        </div>
      }</Timeline>
    )
  }
}

@optimize   // automatically optimize shouldComponentUpdate
@stateful(
  immutable({
    trails: {},
    trailCount: 0
  }),
  edit => ({
    addTrail: (x,y) => edit(state => u({ trails: { [state.trailCount]: {x,y} }, trailCount: increment }, state)),
    removeTrail: id => edit(u({ trails: u.omit(`${id}`) }))
  })
)
class Trails extends Component {  // mouse trails
  render() {
    const {trails, addTrail, removeTrail} = this.props;

    return <div onMouseMove={({pageX, pageY}) => addTrail(pageX, pageY)}
                style={{...fullViewportStyle}}>

      {Object.keys(trails).map(key => {
        const {x,y} = trails[key];
        return (
          <Timeline key={key} playOnMount={true} max={5} onComplete={() => removeTrail(key)}>
          {({time}) =>
            <div
              style={{
                cursor: 'default',
                borderRadius: '50%',
                width: '5px',
                height: '5px',
                backgroundColor: '#77aa77',
                position: 'absolute',
                transform: `translate(${x}px, ${y}px)` }} />
          }</Timeline>)
      })}

    </div>
  }
}

// this array will be used to construct styles
// for exploding snowflake fragments. Each exploding
// snowflake has 4 fragments.
const fragments = [1,2,3,4].map(index => ({
  index,
  posV: index < 3 ? 'top':'bottom',
  posH: index % 2 ? 'left':'right',
  h: index < 3 ? -1:1,  // direction of explosion along X-axis
  v: index % 2 ? 1:-1   // direction of explosion along Y-axis
}));

@optimize
class Flake extends Component {
  render() {
    const {rotate, size, image, explode, onExploded} = this.props;

    if (!explode) return (  // regular snowflake:
      <div
        style={{
          transform: `rotate(${rotate}deg)`,
          width: size,
          height: size,
          backgroundSize: 'cover',
          backgroundImage: `url(${image})` }} />)

    const halfSize = size/2;

    return (  // exploding snowflake:
      <Timeline playOnMount={true} max={60} onComplete={onExploded}>
      {({time}) => {
        const scaleAmount = tween(time, {0:1, 5:1.3, 60:0});
        return <div
          style={{
            position: 'absolute',
            transform: `rotate(${rotate}deg) scale(${scaleAmount}, ${scaleAmount})`,
            width: size,
            height: size}}>
            <div>
              {fragments.map(({index, posV, posH, h, v}) =>
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    width: halfSize,
                    height: halfSize,
                    [posV]: 0,
                    [posH]: 0,
                    backgroundSize: `${size}px ${size}px`,
                    backgroundPosition: `${posV} ${posH}`,
                    backgroundImage: `url(${image})`,
                    opacity: tween(time, {0: 1, 60: 0}, easeOutSine),
                    transform: tween(time,
                      { 0: combine(translate3d(0,0,0), scale(1,1)),
                       60: combine(translate3d(50*h,50*v,100), scale(0,0))}, easeOutSine),
                    borderRadius: tween(time,
                      {0:percent(0), 60:percent(50)}, easeOutSine),
                  }} />)}
            </div>
        </div>}
      }</Timeline>)
  }
}
