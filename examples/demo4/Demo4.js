import React, {Component} from 'react';
import {Timeline} from 'react-imation/timeline';
import stateful from 'react-stateful-stream';
import {rotateX, rotateY, rotateZ,
        translateY, turn, vh, rgba} from 'react-imation/tween-value-factories';
import {Easer} from 'functional-easing';
import u from 'updeep';
const immutable = u({});

const easeInOut = new Easer().using('in-out');
const wiggleTypes = [ rotateX, rotateY, rotateZ ];

const charStyle = {
  display: 'inline-block',
  fontWeight: 'bold',
  transformOrigin: 'center bottom',
  lineHeight: '50px',
  cursor: 'pointer',
  fontSize: '80px' };

const dropStyle = {
  ...charStyle,
  transformOrigin: 'center middle' };

@stateful(
  immutable({
    chars: "reactimation".split(''),
    dropped: [],
    wiggleType: 0,
    wiggleIndex: -1 }),
  edit => ({
    setState: updates => edit(u(updates)),
    drop: index => edit(u({dropped: { [index]: true }}))
  }))
export default class Demo4 extends Component {
  componentDidMount() {
    const wiggle = () => setTimeout(() =>{
      const {chars, setState, dropped} = this.props;
      const charCount = chars.length;

      if (dropped.filter(x=>x).length === charCount) {
        setState({dropped: []}); // start over
        wiggle();
        return;
      }

      let rand;
      do { rand = ~~(charCount * Math.random()) } while (dropped[rand]);
      setState({
        wiggleIndex: rand,
        wiggleType: ~~(wiggleTypes.length * Math.random())
      });
      wiggle();
    }, 800 + (Math.random()*1500));

    wiggle();
  }

  render() {
    const {chars, wiggleIndex, wiggleType, dropped, drop} = this.props;
    const charCount = chars.length;

    const wiggleTransform = wiggleTypes[wiggleType];
    const wiggleKeyframes = [
      [0,   {transform: wiggleTransform(0)}],
      [10,  {transform: wiggleTransform(25)}],
      [40,  {transform: wiggleTransform(-30)}],
      [60,  {transform: wiggleTransform(30)}],
      [100, {transform: wiggleTransform(0)}],
    ];

    const dropKeyframesRotate = [
      [0,   {color: rgba(255,255,255,1), transform: rotateX(turn(0)) }],
      [100, {color: rgba(255,255,255,0), transform: rotateX(turn(5)) }],
    ];

    const dropKeyframesMove = [
      [0,   { transform: translateY(vh(0)) }],
      [100, { transform: translateY(vh(50)) }],
    ];

    return <div style={{position: 'relative', height: '100vh', width: '100vw', overflow: 'hidden'}}>
      <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translateX(-50%)'}}>
        {chars.map((char,i) => {
          if (dropped[i]) { // drop the letter
            return (
              <Timeline key={i+'x'} min={0} max={100} increment={1.5} playOnMount={true}>
              {({tween}) =>
                <div style={{...dropStyle, ...tween(dropKeyframesMove)}}>
                  <div
                    key={i}
                    style={{
                      ...dropStyle,
                      ...tween(dropKeyframesRotate)}}
                    children={char} />
                </div>
              }</Timeline>)

          } else if (i === wiggleIndex) { // wiggle the letter
            return (
              <Timeline key={i} min={0} max={100} increment={1.5} playOnMount={true}>
              {({tween}) =>
                <div
                  onClick={() => drop(i)} // when the user clicks on a wiggling letter, drop it
                  key={i}
                  style={{
                    ...charStyle,
                    ...tween(wiggleKeyframes, easeInOut)}}
                  children={char} />
              }</Timeline>)

          } else {  // just render the letter
            return <div key={i} style={charStyle} children={char} />
          }
        })}
      </div>
    </div>
  }
}
