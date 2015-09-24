import React, {Component} from 'react';
import {Timeline, Timeliner, tween, combine} from 'react-imation';
import {scale, rotateY} from 'react-imation/tween-value-factories';
import {Easer} from 'functional-easing';
import RollButton from '../demo3/RollButton';

export default class GameOver extends Component {
  componentDidMount() {
    this.props.gameOverSound.play();
  }
  render() {
    const {playAgain, score} = this.props;

    return (
      <Timeline playOnMount={true} max={1} increment={0.05}>
      {({time}) =>
        <div
          style={{
            textAlign: 'center',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            whiteSpace: 'nowrap',
            top: '45%',
            left: '50%' }}>
          <div
            style={{
              fontSize: '90px',
              ...tween(time, {
                0: {opacity: 0, transform: combine( scale(10,10), rotateY(60))},
                1: {opacity: 1, transform: combine( scale(1,1), rotateY(0))}
              })}}>
            Game Over
          </div>
          <div style={{ marginTop: '30px', fontSize: '30px', color: 'white' }}>
            {score.toLocaleString()}
          </div>
          <div style={{ marginTop: '50px'  }}>
            <RollButton
              width={300}
              height={60}
              staticText="Play"
              onClick={playAgain}
              initialIndex={0}
              list={['Again', 'De Nuevo',
                     'Otra Vez', 'Just cause', 'Now',
                     'Forever', 'With Love', 'Well',
                     'Cause I\'m bored', 'Till I Die',
                     'Or Die', 'For the Love of it',
                     'For My Momma', 'Just Because',
                     'To Win', 'To Dominate',
                     'To Take Over the World']} />
          </div>
        </div>
      }</Timeline>)
  }
}
