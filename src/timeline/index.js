import React from 'react';
import raf from 'raf';
import timelineFactory from './timeline';

const timeline = timelineFactory(React, raf);

export default { ...timeline };
