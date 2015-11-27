import React, {Component} from 'react';
import {tween, ease} from 'react-imation';
import {Timeline} from 'react-imation/timeline';
import {Easer} from 'functional-easing';

const easeIn = ease(new Easer().using('in-cubic'));
const easeOut = ease(new Easer().using('out-cubic'));

const ballDiameter = 50;

const containerStyle = {
  position: 'relative',
  width: '100vw',
  height: '100vh',
};

const ballContainerStyle = {
  position: 'absolute',
  left: '50%',
  top: 'calc(100vh - 450px)',
  width: ballDiameter,
  transform: 'translate(-50%, -50%)'
}

export default class Demo5 extends Component {
  render() {
    return (
      <div style={containerStyle}>
        <div style={ballContainerStyle}>
          <Timeline loop={true} min={0} max={100} playOnMount={true}>
          {({tween:twn}) => {

            const y = twn([
              [0,   easeIn(0)],
              [50,  easeOut(400)],
              [100, 0],
            ]);

            return <div
              style={{
                position: 'absolute',
                borderRadius: '50%',
                background: 'red',
                width: ballDiameter,
                height: 
                  ballDiameter +
                  tween(y, [
                    [0,   0],
                    [370, 0],
                    [400, -40]
                  ]),
                transform: `translateY(${y}px)`
              }} />
          }}</Timeline>
        </div>
      </div>
    )
  }
}
