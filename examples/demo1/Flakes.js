import React, {Component} from 'react';
import {Timeline, Timeliner, tween} from 'react-imation';
import stateful from 'react-stateful-stream';
import raf from 'raf';

const flakeImages = ["http://i.imgur.com/jbSVFgy.png",
                     "http://i.imgur.com/TT2lmN4.png",
                     "http://i.imgur.com/do8589m.png",
                     "http://i.imgur.com/3BxEO8i.png"];

const editProp = (edit, prop) => xf =>
  edit(state => ({...state, [prop]: xf(state[prop])}));

const removeFlake = flakeToRemove => flakes =>
  flakes.filter(flake => flake !== flakeToRemove);

const addFlake = (editFlakes, id) => flakes => {
  if (flakes.length > 30) return flakes;
  const newFlake = {
    id,
    timeliner:
      new Timeliner({
        onComplete: () => editFlakes(removeFlake(newFlake)),
        max: 105,
        increment: 0.2 + Math.random()*0.2,
        playing: true }),
    size: 22 + ~~(Math.random() * 20),
    rotationSpeed: Math.random() * 40 - 20,
    rotateX: ~~(Math.random()*40),
    rotateY: ~~(Math.random()*12),
    left: ~~(Math.random() * 100) + '%',
    drift: ~~(Math.random() * 30) - 15,
    image: flakeImages[~~(flakeImages.length * Math.random())]
  };
  return flakes.concat(newFlake);
};

@stateful(
  { flakes: [] },
  edit => ({
    editFlakes: editProp(edit, 'flakes')
  }))
export default class Flakes extends Component {
  componentDidMount() {
    const {editFlakes} = this.props;
    let lastFlakeId = 0;

    // here we randomly create new flakes every so often
    const tick = () => {
      editFlakes(addFlake(editFlakes, ++lastFlakeId));
      setTimeout(tick, 150 + ~~(Math.random() * 500));
    }
    raf(tick);
  }

  render() {
    const {flakes} = this.props;

    // notice how each flake has it's own Timeliner instance and it's own <Timeline />
    return <div style={{position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden'}}>
      {flakes.map(({id, timeliner, size, rotateX, rotateY, rotationSpeed, left, drift, image}) =>
        <Timeline key={id} timeliner={timeliner}>
        {({time}) =>
          <div
            key={id}
            style={{
              position: 'absolute',
              left,
              top: -size,
              transform: `translateX(${tween(time, {0:0, 105:drift})}px) ` +
                         `translateY(${time}vh) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
            <div
              style={{
                transform: `rotate(${time*rotationSpeed}deg)`,
                width: size,
                height: size,
                backgroundSize: 'cover',
                backgroundImage: `url(${image})` }} />
          </div>
        }</Timeline>
      )}
    </div>
  }
}
