import React from 'react-native';
import timelineFactory from './timeline';

const timeline = timelineFactory(React, requestAnimationFrame);

export default { ...timeline };
