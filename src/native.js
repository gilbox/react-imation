// not using export * because react-native is weird

import * as timeline from './timeline/native';
import * as tween from './tween';

export default {...tween, ...timeline};
