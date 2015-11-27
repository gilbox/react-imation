/*
* The following concepts are essential to this code:
*
* A VALUE FACTORY is a function which
*   - accepts any number of arguments representing the desired value and
*   - returns a WRAPPED VALUE object
*
* A WRAPPED VALUE is an object with a `tween` method and a `resolveValue` method.
*   - `resolveValue` returns the formatted string representation of the value.
*   - `tween` returns the formatted string representation of the result of tweening
*     two different WRAPPED VALUEs created with the same VALUE FACTORY.
*
*/

export const isNumber = x => typeof x === 'number';
export const isWrapped = x => !!x.tween;
export const isNotWrapped = x => !x.tween;
export const identity = x => x;

function mapObject(fn) {
  const result = {};
  Object.keys(this).forEach(key => result[key] = fn(this[key], key));
  return result;
}

export function tweenValues(progress, a, b, easer) {
  // for added flexibility with easing, we don't enforce
  // that b is wrapped
  if (a.tween)
    return a.tween(progress, a, b, easer);

  // now we enforce that a and b are the same type
  if (process.env.NODE_ENV !== 'production') {
    if (typeof(b) !== typeof(a))
      throw(Error(`Tried to tween mismatched types ${typeof(a)} !== ${typeof(b)}`));
  }

  if (Array.isArray(a))
    return a.map((value,index) => tweenValues(progress, value, b[index], easer));

  if (typeof a === 'number')
    return a + easer(progress) * (b-a);

  // object
  return a::mapObject((v,k) => k !== 'ease' && tweenValues(progress, v, b[k], easer))
}

export const resolveValue = x =>
  x.resolveValue ? x.resolveValue() : // is wrapped value
    typeof x === 'number' ? x :       // is number
    x::mapObject(resolveValue);       // is object

/**
 * ## tween
 *
 * `position` is a number representing the current timeline position
 *
 * `keyframes` is an array
 *   - Each item in the array should be a touple (a 2-item array) where the first
 *     value of the touples represent positions on the timeline. Note that your
 *     keyframes must *already* be sorted, `tween` will **not** sort them for you.
 *   - The second value of the touples represent values at the given time.
 *     the values are either numbers, objects, or wrapped values (wrapped values may also be nested)
 *       * when the values are numbers `tween` returns a (tweened) Number
 *       * when the values are objects `tween` returns an object.
 *       * when the values are wrapped values `tween` returns the resolved result of the wrapped
 *         value (usually a string)
 *   - may optionally provide an `ease` property specifying an easing function
 *  Note that all Keyframe values should be exactly the same type or shape.
 *   (a value factory may make exceptions to this rule.
 *    when doing `ease(easer, a)`, `b` does not have to be wrapped in `ease()`)
 *
 * `ease` is an (optional) easing function which should accept a number 0..1
 * and return a number usually 0..1 but for certain types of easing
 * you might want to go outside of the 0..1 range.
 *
 * - Adding an `ease` property to a keyframe will override the `ease`
 *   argument of the `tween()` function.
 *
 * - Wrapping a value with the `ease()` value factory will override
 *   any keyframe or `tween()`-level easing.
 */
export function tween(position, keyframes, easer=identity) {

  // TODO: remove for v1.0
  if (process.env.NODE_ENV !== 'production') {
    if (!Array.isArray(keyframes)) {
      throw Error('tween: as of react-imation@0.5.0, keyframes must be an array')
    }
  }

  const positions = keyframes.map(k => k[0]);

  const n = positions.length-1;
  const position0 = positions[0];
  const positionN = positions[n];

  if (position <= position0) return resolveValue(keyframes[0][1]);
  if (position >= positionN) return resolveValue(keyframes[n][1]);

  let indexB = 0;
  while (position > positions[++indexB]);
  const indexA = indexB - 1;

  const positionA = positions[indexA];
  const positionB = positions[indexB];

  if (process.env.NODE_ENV !== 'production') {
    if (typeof positionA === 'function' || typeof positionB === 'function') {
      throw Error('Keyframes are not allowed to contain functions as keys', keyframes);
    }
  }

  const range = positionB - positionA;
  const delta = position - positionA;
  const progress = delta / range;

  return tweenValues(
    progress,
    keyframes[indexA][1],
    keyframes[indexB][1],
    keyframes[indexA][1].ease || easer);
}

/**
 * ## createTweenValueFactory
 *
 * The first argument, `formatter` should be a 1-arity function
 * which accepts an array (`value`) and returns the formatted result.
 * For example, `formatter` might transform the array `[100,0,255]` to "rgb(100,0,255)"
 *
 * The second (optional) argument, `defaultWrapper` will
 * be used to map the elements of the `value` array which is useful
 * for wrapping the values in a default unit (like px, %, deg, etc)
 *
 * return a value factory.
 */
export function createTweenValueFactory(formatter, defaultWrapper) {
  const tween = (progress, a, b, easer) =>
    formatter(tweenValues(progress, a.value, b.value, easer));

  const wrap = v => isWrapped(v) ? v : defaultWrapper(v);

  return defaultWrapper ?
    (...value) =>
      new TweenValue(value.map(wrap), formatter, tween)
    :
    (...value) =>
      new TweenValue(value, formatter, tween);
}

class TweenValue {
  constructor(value, formatter, tween) {
    this.value = value;
    this.formatter = formatter;
    this.tween = tween;
  }

  resolveValue() {
    return this.formatter(this.value.map(resolveValue))
  }
}

/**
 * combine is a value factory that combines wrapped values (or numbers)
 * by seperating them with a space
 *
 * for example:
 *
 *        combine(scale(0.9), translate3d(0,-160,0))
 *
 * note that `scale(0.9)` and `translate3d(0,-160,0)`
 * both return wrapped values. So in the non-tweened case,
 * combine produces:
 *
 *        "scale(0.9) translate3d(0,-160,0)"
 */
export function combine(...wrappedValues) {
  return new Combine(wrappedValues);
}

class Combine {
  constructor(wrappedValues) {
    this.wrappedValues = wrappedValues;
  }

  tween(progress,
    {wrappedValues: wrappedValuesA},
    {wrappedValues: wrappedValuesB},
    easer
  ) {
    return wrappedValuesA
      .map((wrappedValueA, index) =>
        tweenValues(progress, wrappedValueA, wrappedValuesB[index], easer))
      .join(' ');
  }

  resolveValue() {
    return this.wrappedValues.map(resolveValue).join(' ');
  }
}

/**
 * ease is a value factory that will apply
 *      an easing function to any wrapped value or number.
 *      Easing is applied between values a and b, but the
 *      ease factory must wrap value a.
 *
 * Note:
 * Wrapping a value with the `ease()` value factory will override
 * tween and keyframe-level easing
 **/
export function ease(easer, wrappedValue) {
  if (typeof wrappedValue === 'undefined') {  // curry
    return wrappedValue => ease(easer, wrappedValue);
  }

  return new Ease(easer, wrappedValue);
}

class Ease {
  constructor(easer, wrappedValue) {
    this.easer = easer;
    this.easedValue = wrappedValue;
  }

  tween(progress, wrappedValueA, wrappedValueB) {
    return tweenValues(
      progress,
      wrappedValueA.easedValue,
      // give flexibility not to wrap b value in the ease factory
      wrappedValueB.easedValue ? wrappedValueB.easedValue : wrappedValueB,
      this.easer || identity)
  }

  resolveValue() {
    return resolveValue(this.easedValue);
  }
}
