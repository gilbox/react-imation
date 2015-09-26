webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Game = __webpack_require__(152);
	
	var _Game2 = _interopRequireDefault(_Game);
	
	var App = (function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'a',
	          { href: 'https://github.com/gilbox/react-imation' },
	          _react2['default'].createElement('img', {
	            style: { position: 'absolute', top: 0, right: 0, border: 0, zIndex: 100 },
	            src: 'https://camo.githubusercontent.com/e7bbb0521b397edbd5fe43e7f760759336b5e05f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f677265656e5f3030373230302e706e67',
	            alt: 'Fork me on GitHub',
	            dataCanonicalSrc: 'https://s3.amazonaws.com/github/ribbons/forkme_right_green_007200.png' })
	        ),
	        _react2['default'].createElement(_Game2['default'], null)
	      );
	    }
	  }]);
	
	  return App;
	})(_react.Component);
	
	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('example'));

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactImation = __webpack_require__(153);
	
	var _reactImationTweenValueFactories = __webpack_require__(159);
	
	var _reactStatefulStream = __webpack_require__(160);
	
	var _reactStatefulStream2 = _interopRequireDefault(_reactStatefulStream);
	
	var _reactDerive = __webpack_require__(168);
	
	var _elegantReact = __webpack_require__(169);
	
	var _functionalEasing = __webpack_require__(173);
	
	var _GameOver = __webpack_require__(177);
	
	var _GameOver2 = _interopRequireDefault(_GameOver);
	
	var _updeep = __webpack_require__(179);
	
	var _updeep2 = _interopRequireDefault(_updeep);
	
	var immutable = (0, _updeep2['default'])({});
	
	_react2['default'].initializeTouchEvents(true);
	
	var easeOutSine = new _functionalEasing.Easer().using('out-sine');
	var easeInSine = new _functionalEasing.Easer().using('in-sine');
	var easeInBack = new _functionalEasing.Easer().using('in-back').withParameters(2.8);
	var MAX_DROPPED = 100;
	
	var fullViewportStyle = {
	  position: 'absolute', height: '100vh', width: '100vw', overflow: 'hidden', minWidth: '800px'
	};
	
	var flakeImages = ["http://i.imgur.com/jbSVFgy.png", "http://i.imgur.com/TT2lmN4.png", "http://i.imgur.com/do8589m.png", "http://i.imgur.com/3BxEO8i.png"];
	
	var createFlake = function createFlake(id) {
	  return {
	    id: id,
	    size: 22 + ~ ~(Math.random() * 30),
	    rotationSpeed: Math.random() * 40 - 20,
	    rotateX: ~ ~(Math.random() * 50),
	    rotateY: ~ ~(Math.random() * 32),
	    left: ~ ~(Math.random() * 100) + '%',
	    drift: ~ ~(Math.random() * 40) - 15,
	    image: flakeImages[~ ~(flakeImages.length * Math.random())],
	    increment: 0.15 + Math.random() * 0.2
	  };
	};
	
	var pffSounds = [1, 2, 3].map(function (i) {
	  return new Audio('sounds/pf' + i + '.mp3');
	});
	var pffSoundsCount = pffSounds.length;
	var crrSound = new Audio('sounds/crr.mp3');
	var gameOverSound = new Audio('sounds/gameover.mp3');
	
	var randi = function randi(limit) {
	  return ~ ~(Math.random() * limit);
	};
	var playRandomPfSound = function playRandomPfSound() {
	  return pffSounds[randi(pffSoundsCount)].play();
	};
	
	var flakeHasId = function flakeHasId(id) {
	  return function (flake) {
	    return flake.id === id;
	  };
	};
	var concat = function concat(newItem) {
	  return function (items) {
	    return items.concat(newItem);
	  };
	};
	var lengthIsLessThan = function lengthIsLessThan(length) {
	  return function (items) {
	    return items.length < length;
	  };
	};
	var increment = function increment(x) {
	  return x + 1;
	};
	var decrement = function decrement(x) {
	  return x - 1;
	};
	
	var Game = (function (_Component) {
	  _inherits(Game, _Component);
	
	  function Game() {
	    _classCallCheck(this, _Game);
	
	    _get(Object.getPrototypeOf(_Game.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Game, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var gameIsOver = _props.gameIsOver;
	      var flakes = _props.flakes;
	      var score = _props.score;
	
	      return _react2['default'].createElement(
	        'div',
	        null,
	        _react2['default'].createElement(
	          'div',
	          { style: { position: 'absolute', margin: '10px', userSelect: 'none' } },
	          score.toLocaleString()
	        ),
	        gameIsOver && !flakes.length ? _react2['default'].createElement(_GameOver2['default'], _extends({ gameOverSound: gameOverSound }, this.props)) : _react2['default'].createElement(Flakes, this.props)
	      );
	    }
	  }]);
	
	  var _Game = Game;
	  Game = (0, _reactStatefulStream2['default'])(immutable({ flakes: [],
	    droppedCount: 0,
	    gameIsOver: false,
	    score: 0
	  }), function (edit) {
	    return {
	      addFlake: function addFlake(newFlake) {
	        return edit((0, _updeep2['default'])({ flakes: _updeep2['default']['if'](lengthIsLessThan(21), concat(newFlake)),
	          droppedCount: increment }));
	      },
	      removeFlake: function removeFlake(flakeId) {
	        return edit((0, _updeep2['default'])({ flakes: _updeep2['default'].reject(flakeHasId(flakeId)) }));
	      },
	      explodeFlake: function explodeFlake(index) {
	        return edit((0, _updeep2['default'])({ flakes: _defineProperty({}, index, { explode: true }) }));
	      },
	      playAgain: function playAgain() {
	        return edit((0, _updeep2['default'])({ gameIsOver: false, score: 0, flakes: [], droppedCount: 0 }));
	      },
	      gameOver: function gameOver() {
	        return edit((0, _updeep2['default'])({ gameIsOver: true }));
	      },
	      addToScore: function addToScore(amount) {
	        return edit((0, _updeep2['default'])({ score: function score(x) {
	            return x + ~ ~amount;
	          } }));
	      }
	    };
	  })(Game) || Game;
	  return Game;
	})(_react.Component);
	
	exports['default'] = Game;
	
	var shakeKeyframes = { 0: 10, 5: -8, 10: 5, 15: 0 };
	
	// changing the 'score' prop won't cause re-render
	
	var Flakes = (function (_Component2) {
	  _inherits(Flakes, _Component2);
	
	  function Flakes() {
	    _classCallCheck(this, _Flakes);
	
	    _get(Object.getPrototypeOf(_Flakes.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Flakes, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _props2 = this.props;
	      var addFlake = _props2.addFlake;
	      var gameOver = _props2.gameOver;
	
	      // these ids are arbitrary, what's import is that they are unique
	      var lastFlakeId = 0;
	
	      // here we randomly create new flakes every so often
	      var tick = function tick() {
	        if (lastFlakeId > MAX_DROPPED) return gameOver();
	
	        addFlake(createFlake(++lastFlakeId));
	        setTimeout(tick, 400 + ~ ~(Math.random() * 600));
	      };
	      tick();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var flakes = _props3.flakes;
	      var explodeFlake = _props3.explodeFlake;
	      var removeFlake = _props3.removeFlake;
	      var addToScore = _props3.addToScore;
	      var droppedCount = _props3.droppedCount;
	      var lastPoints = _props3.lastPoints;
	
	      var createHandleSlash = function createHandleSlash(explode, playFrom, rotationSpeed, index, increment, size) {
	        return function (event) {
	          event.stopPropagation();
	          if (explode) return;
	          playFrom(function (t) {
	            return Math.max(0, t - 10);
	          }); // shake
	          rotationSpeed > 0 ? playRandomPfSound() : crrSound.play();
	          explodeFlake(index);
	          addToScore(10000 * rotationSpeed * increment / size * (0, _reactImation.tween)(droppedCount, _defineProperty({ 0: 1 }, MAX_DROPPED, 6), easeInSine));
	        };
	      };
	
	      return _react2['default'].createElement(
	        _reactImation.Timeline,
	        { initialTime: 15, max: 15 },
	        function (_ref2) {
	          var time = _ref2.time;
	          var playFrom = _ref2.playFrom;
	          return _react2['default'].createElement(
	            'div',
	            { style: _extends({ userSelect: 'none',
	                transform: 'translateX(' + (0, _reactImation.tween)(time, shakeKeyframes) + 'px)'
	              }, fullViewportStyle) },
	            _react2['default'].createElement(Trails, null),
	            flakes.map(function (_ref3, index) {
	              var id = _ref3.id;
	              var increment = _ref3.increment;
	              var size = _ref3.size;
	              var rotateX = _ref3.rotateX;
	              var rotateY = _ref3.rotateY;
	              var rotationSpeed = _ref3.rotationSpeed;
	              var left = _ref3.left;
	              var drift = _ref3.drift;
	              var image = _ref3.image;
	              var explode = _ref3.explode;
	              return _react2['default'].createElement(
	                _reactImation.Timeline,
	                {
	                  increment: (0, _reactImation.tween)(droppedCount, _defineProperty({ 0: increment }, MAX_DROPPED, increment * 2), easeInSine),
	                  key: id,
	                  playOnMount: true,
	                  max: 105,
	                  onComplete: function () {
	                    return removeFlake(id, explode);
	                  } },
	                function (_ref4) {
	                  var time = _ref4.time;
	
	                  var handleSlash = createHandleSlash(explode, playFrom, rotationSpeed, index, increment, size);
	                  return _react2['default'].createElement(
	                    'div',
	                    {
	                      onMouseOver: handleSlash,
	                      onTouchMove: handleSlash,
	                      key: id,
	                      style: {
	                        cursor: 'pointer',
	                        position: 'absolute',
	                        left: left,
	                        top: -size,
	                        transform: 'translateX(' + (0, _reactImation.tween)(time, { 0: 0, 105: drift }) + 'px) ' + ('translateY(' + time + 'vh) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)') } },
	                    _react2['default'].createElement(Flake, _extends({
	                      rotate: time * rotationSpeed,
	                      onExploded: function () {
	                        return removeFlake(id, explode);
	                      }
	                    }, { size: size, image: image, explode: explode }))
	                  );
	                }
	              );
	            })
	          );
	        }
	      );
	    }
	  }]);
	
	  var _Flakes = Flakes;
	  Flakes = (0, _elegantReact.elegant)({ statics: ['score'] })(Flakes) || Flakes;
	  return Flakes;
	})(_react.Component);
	
	var Trails = (function (_Component3) {
	  _inherits(Trails, _Component3);
	
	  function Trails() {
	    _classCallCheck(this, _Trails);
	
	    _get(Object.getPrototypeOf(_Trails.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  // this array will be used to construct styles
	  // for exploding snowflake fragments. Each exploding
	  // snowflake has 4 fragments.
	
	  _createClass(Trails, [{
	    key: 'render',
	    // mouse trails
	    value: function render() {
	      var _props4 = this.props;
	      var trails = _props4.trails;
	      var addTrail = _props4.addTrail;
	      var removeTrail = _props4.removeTrail;
	
	      return _react2['default'].createElement(
	        'div',
	        { onMouseMove: function (_ref5) {
	            var pageX = _ref5.pageX;
	            var pageY = _ref5.pageY;
	            return addTrail(pageX, pageY);
	          },
	          style: _extends({}, fullViewportStyle) },
	        Object.keys(trails).map(function (key) {
	          var _trails$key = trails[key];
	          var x = _trails$key.x;
	          var y = _trails$key.y;
	
	          return _react2['default'].createElement(
	            _reactImation.Timeline,
	            { key: key, playOnMount: true, max: 5, onComplete: function () {
	                return removeTrail(key);
	              } },
	            function (_ref6) {
	              var time = _ref6.time;
	              return _react2['default'].createElement('div', {
	                style: {
	                  cursor: 'default',
	                  borderRadius: '50%',
	                  width: '5px',
	                  height: '5px',
	                  backgroundColor: '#77aa77',
	                  position: 'absolute',
	                  transform: 'translate(' + x + 'px, ' + y + 'px)' } });
	            }
	          );
	        })
	      );
	    }
	  }]);
	
	  var _Trails = Trails;
	  Trails = (0, _reactStatefulStream2['default'])(immutable({
	    trails: {},
	    trailCount: 0
	  }), function (edit) {
	    return {
	      addTrail: function addTrail(x, y) {
	        return edit(function (state) {
	          return (0, _updeep2['default'])({ trails: _defineProperty({}, state.trailCount, { x: x, y: y }), trailCount: increment }, state);
	        });
	      },
	      removeTrail: function removeTrail(id) {
	        return edit((0, _updeep2['default'])({ trails: _updeep2['default'].omit('' + id) }));
	      }
	    };
	  })(Trails) || Trails;
	  Trails = (0, _elegantReact.elegant)(Trails) || Trails;
	  return Trails;
	})(_react.Component);
	
	var fragments = [1, 2, 3, 4].map(function (index) {
	  return {
	    index: index,
	    posV: index < 3 ? 'top' : 'bottom',
	    posH: index % 2 ? 'left' : 'right',
	    h: index < 3 ? -1 : 1, // direction of explosion along X-axis
	    v: index % 2 ? 1 : -1 // direction of explosion along Y-axis
	  };
	});
	
	var Flake = (function (_Component4) {
	  _inherits(Flake, _Component4);
	
	  function Flake() {
	    _classCallCheck(this, _Flake);
	
	    _get(Object.getPrototypeOf(_Flake.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Flake, [{
	    key: 'render',
	    value: function render() {
	      var _props5 = this.props;
	      var rotate = _props5.rotate;
	      var size = _props5.size;
	      var image = _props5.image;
	      var explode = _props5.explode;
	      var onExploded = _props5.onExploded;
	
	      if (!explode) return (// regular snowflake:
	        _react2['default'].createElement('div', {
	          style: {
	            transform: 'rotate(' + rotate + 'deg)',
	            width: size,
	            height: size,
	            backgroundSize: 'cover',
	            backgroundImage: 'url(' + image + ')' } })
	      );
	
	      var halfSize = size / 2;
	
	      return (// exploding snowflake:
	        _react2['default'].createElement(
	          _reactImation.Timeline,
	          { playOnMount: true, max: 60, onComplete: onExploded },
	          function (_ref7) {
	            var time = _ref7.time;
	
	            var scaleAmount = (0, _reactImation.tween)(time, { 0: 1, 5: 1.3, 60: 0 });
	            return _react2['default'].createElement(
	              'div',
	              {
	                style: {
	                  position: 'absolute',
	                  transform: 'rotate(' + rotate + 'deg) scale(' + scaleAmount + ', ' + scaleAmount + ')',
	                  width: size,
	                  height: size } },
	              _react2['default'].createElement(
	                'div',
	                null,
	                fragments.map(function (_ref8) {
	                  var _ref;
	
	                  var index = _ref8.index;
	                  var posV = _ref8.posV;
	                  var posH = _ref8.posH;
	                  var h = _ref8.h;
	                  var v = _ref8.v;
	                  return _react2['default'].createElement('div', {
	                    key: index,
	                    style: (_ref = {
	                      position: 'absolute',
	                      width: halfSize,
	                      height: halfSize
	                    }, _defineProperty(_ref, posV, 0), _defineProperty(_ref, posH, 0), _defineProperty(_ref, 'backgroundSize', size + 'px ' + size + 'px'), _defineProperty(_ref, 'backgroundPosition', posV + ' ' + posH), _defineProperty(_ref, 'backgroundImage', 'url(' + image + ')'), _defineProperty(_ref, 'opacity', (0, _reactImation.tween)(time, { 0: 1, 60: 0 }, easeOutSine)), _defineProperty(_ref, 'transform', (0, _reactImation.tween)(time, { 0: (0, _reactImation.combine)((0, _reactImationTweenValueFactories.translate3d)(0, 0, 0), (0, _reactImationTweenValueFactories.scale)(1, 1)),
	                      60: (0, _reactImation.combine)((0, _reactImationTweenValueFactories.translate3d)(50 * h, 50 * v, 100), (0, _reactImationTweenValueFactories.scale)(0, 0)) }, easeOutSine)), _defineProperty(_ref, 'borderRadius', (0, _reactImation.tween)(time, { 0: (0, _reactImationTweenValueFactories.percent)(0), 60: (0, _reactImationTweenValueFactories.percent)(50) }, easeOutSine)), _ref) });
	                })
	              )
	            );
	          }
	        )
	      );
	    }
	  }]);
	
	  var _Flake = Flake;
	  Flake = (0, _elegantReact.elegant)(Flake) || Flake;
	  return Flake;
	})(_react.Component);

	module.exports = exports['default'];
	// automatically optimize shouldComponentUpdate

/***/ },
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _tween = __webpack_require__(158);
	
	var rgb = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'rgb(' + value.join(',') + ')';
	});
	exports.rgb = rgb;
	var rgba = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'rgba(' + value.join(',') + ')';
	});
	exports.rgba = rgba;
	var scale = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'scale(' + value.join(',') + ')';
	});
	exports.scale = scale;
	var deg = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + 'deg';
	});
	exports.deg = deg;
	var grad = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + 'grad';
	});
	exports.grad = grad;
	var rad = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + 'rad';
	});
	exports.rad = rad;
	var turn = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + 'turn';
	});
	exports.turn = turn;
	var rotate = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'rotate(' + value + ')';
	}, deg);
	exports.rotate = rotate;
	var rotateX = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'rotateX(' + value + ')';
	}, deg);
	exports.rotateX = rotateX;
	var rotateY = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'rotateY(' + value + ')';
	}, deg);
	exports.rotateY = rotateY;
	var rotateZ = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'rotateZ(' + value + ')';
	}, deg);
	exports.rotateZ = rotateZ;
	var skewX = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'skewX(' + value + ')';
	}, deg);
	exports.skewX = skewX;
	var skewY = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'skewY(' + value + ')';
	}, deg);
	exports.skewY = skewY;
	var px = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + 'px';
	});
	exports.px = px;
	var em = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + 'em';
	});
	exports.em = em;
	var vw = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + 'vw';
	});
	exports.vw = vw;
	var vh = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + 'vh';
	});
	exports.vh = vh;
	var percent = (0, _tween.createTweenValueFactory)(function (value) {
	  return value + '%';
	});
	exports.percent = percent;
	var translateX = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'translateX(' + value + ')';
	}, px);
	exports.translateX = translateX;
	var translateY = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'translateY(' + value + ')';
	}, px);
	exports.translateY = translateY;
	var translate = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'translate(' + value.join(',') + ')';
	}, px);
	exports.translate = translate;
	var translate3d = (0, _tween.createTweenValueFactory)(function (value) {
	  return 'translate3d(' + value.join(',') + ')';
	}, px);
	exports.translate3d = translate3d;

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports['default'] = stateful;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Atom = __webpack_require__(161);
	
	var _Atom2 = _interopRequireDefault(_Atom);
	
	var _flyd = __webpack_require__(162);
	
	function stateful(initialState, edit) {
	  return function (DecoratedComponent) {
	    return (function (_Component) {
	      _inherits(StatefulDecorator, _Component);
	
	      _createClass(StatefulDecorator, null, [{
	        key: 'displayName',
	        value: 'Stateful(' + getDisplayName(DecoratedComponent) + ')',
	        enumerable: true
	      }, {
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }]);
	
	      function StatefulDecorator(props, context) {
	        _classCallCheck(this, StatefulDecorator);
	
	        _get(Object.getPrototypeOf(StatefulDecorator.prototype), 'constructor', this).call(this, props, context);
	
	        var state = typeof initialState === 'function' ? initialState(props, context) : initialState;
	
	        var atom = new _Atom2['default'](state);
	
	        this.state = { state: state, atom: atom };
	
	        this.edit = {};
	
	        if (edit) {
	          if (typeof edit === 'string') {
	            this.edit = _defineProperty({}, edit, atom.updateState);
	          } else if (typeof edit === 'function') {
	            this.edit = edit(atom.updateState);
	          }
	        }
	      }
	
	      _createClass(StatefulDecorator, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          var _this = this;
	
	          var atom = this.state.atom;
	
	          // connect atom updates to component's state
	          (0, _flyd.on)(function (state) {
	            return _this.setState({ state: state });
	          }, atom.didSetState$);
	        }
	      }, {
	        key: 'componentDidUnmount',
	        value: function componentDidUnmount() {
	          this.state.atom.destroy();
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          var _state = this.state;
	          var atom = _state.atom;
	          var state = _state.state;
	
	          return _react2['default'].createElement(DecoratedComponent, _extends({
	            atom: atom
	          }, this.props, state, this.edit));
	        }
	      }]);
	
	      return StatefulDecorator;
	    })(_react.Component);
	  };
	}
	
	function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	}
	module.exports = exports['default'];

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _flyd = __webpack_require__(162);
	
	var Atom = (function () {
	  function Atom(state) {
	    _classCallCheck(this, Atom);
	
	    this.state = state;
	
	    // directly-updated state, used to update "watcher" App component
	    this.didSetState$ = (0, _flyd.stream)();
	
	    // used to indicate "user" update
	    this.didUpdateState$ = (0, _flyd.stream)();
	
	    this.updateState = this.updateState.bind(this);
	    this.getState = this.getState.bind(this);
	    this.silentlyUpdateState = this.silentlyUpdateState.bind(this);
	  }
	
	  _createClass(Atom, [{
	    key: '_setState',
	    value: function _setState(state) {
	      return this.didSetState$(this.state = state).val;
	    }
	  }, {
	    key: 'silentlyUpdateState',
	    value: function silentlyUpdateState(transform) {
	      return this._setState(transform(this.state));
	    }
	  }, {
	    key: 'updateState',
	    value: function updateState(transform) {
	      return this.didUpdateState$(this._setState(transform(this.state))).val;
	    }
	  }, {
	    key: 'getState',
	    value: function getState() {
	      return this.state;
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      this.state = null;
	      this.didSetState$.end(true);
	      this.didUpdateState$.end(true);
	    }
	  }]);
	
	  return Atom;
	})();
	
	exports['default'] = Atom;
	module.exports = exports['default'];

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var curryN = __webpack_require__(163);
	
	'use strict';
	
	function isFunction(obj) {
	  return !!(obj && obj.constructor && obj.call && obj.apply);
	}
	
	// Globals
	var toUpdate = [];
	var inStream;
	
	function map(f, s) {
	  return stream([s], function(self) { self(f(s.val)); });
	}
	
	function on(f, s) {
	  stream([s], function() { f(s.val); });
	}
	
	function boundMap(f) { return map(f, this); }
	
	var scan = curryN(3, function(f, acc, s) {
	  var ns = stream([s], function() {
	    return (acc = f(acc, s()));
	  });
	  if (!ns.hasVal) ns(acc);
	  return ns;
	});
	
	var merge = curryN(2, function(s1, s2) {
	  var s = immediate(stream([s1, s2], function(n, changed) {
	    return changed[0] ? changed[0]()
	         : s1.hasVal  ? s1()
	                      : s2();
	  }));
	  endsOn(stream([s1.end, s2.end], function(self, changed) {
	    return true;
	  }), s);
	  return s;
	});
	
	function ap(s2) {
	  var s1 = this;
	  return stream([s1, s2], function() { return s1()(s2()); });
	}
	
	function initialDepsNotMet(stream) {
	  stream.depsMet = stream.deps.every(function(s) {
	    return s.hasVal;
	  });
	  return !stream.depsMet;
	}
	
	function updateStream(s) {
	  if ((s.depsMet !== true && initialDepsNotMet(s)) ||
	      (s.end !== undefined && s.end.val === true)) return;
	  if (inStream !== undefined) {
	    toUpdate.push(s);
	    return;
	  }
	  inStream = s;
	  var returnVal = s.fn(s, s.depsChanged);
	  if (returnVal !== undefined) {
	    s(returnVal);
	  }
	  inStream = undefined;
	  if (s.depsChanged !== undefined) s.depsChanged = [];
	  s.shouldUpdate = false;
	  if (flushing === false) flushUpdate();
	}
	
	var order = [];
	var orderNextIdx = -1;
	
	function findDeps(s) {
	  var i, listeners = s.listeners;
	  if (s.queued === false) {
	    s.queued = true;
	    for (i = 0; i < listeners.length; ++i) {
	      findDeps(listeners[i]);
	    }
	    order[++orderNextIdx] = s;
	  }
	}
	
	function updateDeps(s) {
	  var i, o, list, listeners = s.listeners;
	  for (i = 0; i < listeners.length; ++i) {
	    list = listeners[i];
	    if (list.end === s) {
	      endStream(list);
	    } else {
	      if (list.depsChanged !== undefined) list.depsChanged.push(s);
	      list.shouldUpdate = true;
	      findDeps(list);
	    }
	  }
	  for (; orderNextIdx >= 0; --orderNextIdx) {
	    o = order[orderNextIdx];
	    if (o.shouldUpdate === true) updateStream(o);
	    o.queued = false;
	  }
	}
	
	var flushing = false;
	
	function flushUpdate() {
	  flushing = true;
	  while (toUpdate.length > 0) {
	    var s = toUpdate.shift();
	    if (s.vals.length > 0) s.val = s.vals.shift();
	    updateDeps(s);
	  }
	  flushing = false;
	}
	
	function isStream(stream) {
	  return isFunction(stream) && 'hasVal' in stream;
	}
	
	function streamToString() {
	  return 'stream(' + this.val + ')';
	}
	
	function updateStreamValue(s, n) {
	  if (n !== undefined && n !== null && isFunction(n.then)) {
	    n.then(s);
	    return;
	  }
	  s.val = n;
	  s.hasVal = true;
	  if (inStream === undefined) {
	    flushing = true;
	    updateDeps(s);
	    if (toUpdate.length > 0) flushUpdate(); else flushing = false;
	  } else if (inStream === s) {
	    markListeners(s, s.listeners);
	  } else {
	    s.vals.push(n);
	    toUpdate.push(s);
	  }
	}
	
	function markListeners(s, lists) {
	  var i, list;
	  for (i = 0; i < lists.length; ++i) {
	    list = lists[i];
	    if (list.end !== s) {
	      if (list.depsChanged !== undefined) {
	        list.depsChanged.push(s);
	      }
	      list.shouldUpdate = true;
	    } else {
	      endStream(list);
	    }
	  }
	}
	
	function createStream() {
	  function s(n) {
	    return arguments.length > 0 ? (updateStreamValue(s, n), s)
	                                : s.val;
	  }
	  s.hasVal = false;
	  s.val = undefined;
	  s.vals = [];
	  s.listeners = [];
	  s.queued = false;
	  s.end = undefined;
	
	  s.map = boundMap;
	  s.ap = ap;
	  s.of = stream;
	  s.toString = streamToString;
	
	  return s;
	}
	
	function addListeners(deps, s) {
	  for (var i = 0; i < deps.length; ++i) {
	    deps[i].listeners.push(s);
	  }
	}
	
	function createDependentStream(deps, fn) {
	  var s = createStream();
	  s.fn = fn;
	  s.deps = deps;
	  s.depsMet = false;
	  s.depsChanged = fn.length > 1 ? [] : undefined;
	  s.shouldUpdate = false;
	  addListeners(deps, s);
	  return s;
	}
	
	function immediate(s) {
	  if (s.depsMet === false) {
	    s.depsMet = true;
	    updateStream(s);
	  }
	  return s;
	}
	
	function removeListener(s, listeners) {
	  var idx = listeners.indexOf(s);
	  listeners[idx] = listeners[listeners.length - 1];
	  listeners.length--;
	}
	
	function detachDeps(s) {
	  for (var i = 0; i < s.deps.length; ++i) {
	    removeListener(s, s.deps[i].listeners);
	  }
	  s.deps.length = 0;
	}
	
	function endStream(s) {
	  if (s.deps !== undefined) detachDeps(s);
	  if (s.end !== undefined) detachDeps(s.end);
	}
	
	function endsOn(endS, s) {
	  detachDeps(s.end);
	  endS.listeners.push(s.end);
	  s.end.deps.push(endS);
	  return s;
	}
	
	function trueFn() { return true; }
	
	function stream(arg, fn) {
	  var i, s, deps, depEndStreams;
	  var endStream = createDependentStream([], trueFn);
	  if (arguments.length > 1) {
	    deps = []; depEndStreams = [];
	    for (i = 0; i < arg.length; ++i) {
	      if (arg[i] !== undefined) {
	        deps.push(arg[i]);
	        if (arg[i].end !== undefined) depEndStreams.push(arg[i].end);
	      }
	    }
	    s = createDependentStream(deps, fn);
	    s.end = endStream;
	    endStream.listeners.push(s);
	    addListeners(depEndStreams, endStream);
	    endStream.deps = depEndStreams;
	    updateStream(s);
	  } else {
	    s = createStream();
	    s.end = endStream;
	    endStream.listeners.push(s);
	    if (arguments.length === 1) s(arg);
	  }
	  return s;
	}
	
	var transduce = curryN(2, function(xform, source) {
	  xform = xform(new StreamTransformer());
	  return stream([source], function(self) {
	    var res = xform['@@transducer/step'](undefined, source());
	    if (res && res['@@transducer/reduced'] === true) {
	      self.end(true);
	      return res['@@transducer/value'];
	    } else {
	      return res;
	    }
	  });
	});
	
	function StreamTransformer() { }
	StreamTransformer.prototype['@@transducer/init'] = function() { };
	StreamTransformer.prototype['@@transducer/result'] = function() { };
	StreamTransformer.prototype['@@transducer/step'] = function(s, v) { return v; };
	
	module.exports = {
	  stream: stream,
	  isStream: isStream,
	  transduce: transduce,
	  merge: merge,
	  scan: scan,
	  endsOn: endsOn,
	  map: curryN(2, map),
	  on: curryN(2, on),
	  curryN: curryN,
	  immediate: immediate,
	};


/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(164);
	var _curry1 = __webpack_require__(165);
	var _curry2 = __webpack_require__(166);
	var _curryN = __webpack_require__(167);
	
	
	/**
	 * Returns a curried equivalent of the provided function, with the
	 * specified arity. The curried function has two unusual capabilities.
	 * First, its arguments needn't be provided one at a time. If `g` is
	 * `R.curryN(3, f)`, the following are equivalent:
	 *
	 *   - `g(1)(2)(3)`
	 *   - `g(1)(2, 3)`
	 *   - `g(1, 2)(3)`
	 *   - `g(1, 2, 3)`
	 *
	 * Secondly, the special placeholder value `R.__` may be used to specify
	 * "gaps", allowing partial application of any combination of arguments,
	 * regardless of their positions. If `g` is as above and `_` is `R.__`,
	 * the following are equivalent:
	 *
	 *   - `g(1, 2, 3)`
	 *   - `g(_, 2, 3)(1)`
	 *   - `g(_, _, 3)(1)(2)`
	 *   - `g(_, _, 3)(1, 2)`
	 *   - `g(_, 2)(1)(3)`
	 *   - `g(_, 2)(1, 3)`
	 *   - `g(_, 2)(_, 3)(1)`
	 *
	 * @func
	 * @memberOf R
	 * @category Function
	 * @sig Number -> (* -> a) -> (* -> a)
	 * @param {Number} length The arity for the returned function.
	 * @param {Function} fn The function to curry.
	 * @return {Function} A new, curried function.
	 * @see R.curry
	 * @example
	 *
	 *      var addFourNumbers = function() {
	 *        return R.sum([].slice.call(arguments, 0, 4));
	 *      };
	 *
	 *      var curriedAddFourNumbers = R.curryN(4, addFourNumbers);
	 *      var f = curriedAddFourNumbers(1, 2);
	 *      var g = f(3);
	 *      g(4); //=> 10
	 */
	module.exports = _curry2(function curryN(length, fn) {
	  if (length === 1) {
	    return _curry1(fn);
	  }
	  return _arity(length, _curryN(length, [], fn));
	});


/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = function _arity(n, fn) {
	  // jshint unused:vars
	  switch (n) {
	    case 0: return function() { return fn.apply(this, arguments); };
	    case 1: return function(a0) { return fn.apply(this, arguments); };
	    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
	    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
	    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
	    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
	    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
	    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
	    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
	    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
	    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
	    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
	  }
	};


/***/ },
/* 165 */
/***/ function(module, exports) {

	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry1(fn) {
	  return function f1(a) {
	    if (arguments.length === 0) {
	      return f1;
	    } else if (a != null && a['@@functional/placeholder'] === true) {
	      return f1;
	    } else {
	      return fn.apply(this, arguments);
	    }
	  };
	};


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var _curry1 = __webpack_require__(165);
	
	
	/**
	 * Optimized internal two-arity curry function.
	 *
	 * @private
	 * @category Function
	 * @param {Function} fn The function to curry.
	 * @return {Function} The curried function.
	 */
	module.exports = function _curry2(fn) {
	  return function f2(a, b) {
	    var n = arguments.length;
	    if (n === 0) {
	      return f2;
	    } else if (n === 1 && a != null && a['@@functional/placeholder'] === true) {
	      return f2;
	    } else if (n === 1) {
	      return _curry1(function(b) { return fn(a, b); });
	    } else if (n === 2 && a != null && a['@@functional/placeholder'] === true &&
	                          b != null && b['@@functional/placeholder'] === true) {
	      return f2;
	    } else if (n === 2 && a != null && a['@@functional/placeholder'] === true) {
	      return _curry1(function(a) { return fn(a, b); });
	    } else if (n === 2 && b != null && b['@@functional/placeholder'] === true) {
	      return _curry1(function(b) { return fn(a, b); });
	    } else {
	      return fn(a, b);
	    }
	  };
	};


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var _arity = __webpack_require__(164);
	
	
	/**
	 * Internal curryN function.
	 *
	 * @private
	 * @category Function
	 * @param {Number} length The arity of the curried function.
	 * @return {array} An array of arguments received thus far.
	 * @param {Function} fn The function to curry.
	 */
	module.exports = function _curryN(length, received, fn) {
	  return function() {
	    var combined = [];
	    var argsIdx = 0;
	    var left = length;
	    var combinedIdx = 0;
	    while (combinedIdx < received.length || argsIdx < arguments.length) {
	      var result;
	      if (combinedIdx < received.length &&
	          (received[combinedIdx] == null ||
	           received[combinedIdx]['@@functional/placeholder'] !== true ||
	           argsIdx >= arguments.length)) {
	        result = received[combinedIdx];
	      } else {
	        result = arguments[argsIdx];
	        argsIdx += 1;
	      }
	      combined[combinedIdx] = result;
	      if (result == null || result['@@functional/placeholder'] !== true) {
	        left -= 1;
	      }
	      combinedIdx += 1;
	    }
	    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(length, combined, fn));
	  };
	};


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports.derive = derive;
	exports.track = track;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var BLOCKED = {};
	
	var globalOptions = { debug: false };
	
	exports.globalOptions = globalOptions;
	/**
	 * ## derive
	 *
	 * Create a derived data higher-order component (HoC).
	 *
	 * @param {Object} options (optional)
	 * @param {Boolean} debug (optional)
	 * @return {Object}
	 */
	
	function derive() {
	  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	  return function (DecoratedComponent) {
	    return (function (_Component) {
	      _inherits(DeriveDecorator, _Component);
	
	      function DeriveDecorator() {
	        _classCallCheck(this, DeriveDecorator);
	
	        _get(Object.getPrototypeOf(DeriveDecorator.prototype), 'constructor', this).apply(this, arguments);
	      }
	
	      _createClass(DeriveDecorator, [{
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	          this.derivedProps = deriveProps(options, {}, this.props, {});
	        }
	      }, {
	        key: 'componentWillUpdate',
	        value: function componentWillUpdate(nextProps) {
	          this.derivedProps = deriveProps(options, this.props, nextProps, this.derivedProps || {});
	        }
	      }, {
	        key: 'render',
	        value: function render() {
	          return _react2['default'].createElement(DecoratedComponent, this.derivedProps);
	        }
	      }], [{
	        key: 'displayName',
	        value: 'Derive(' + getDisplayName(DecoratedComponent) + ')',
	        enumerable: true
	      }, {
	        key: 'DecoratedComponent',
	        value: DecoratedComponent,
	        enumerable: true
	      }]);
	
	      return DeriveDecorator;
	    })(_react.Component);
	  };
	}
	
	// `deriveProps` takes props from the previous render (`prevProps`, `derivedProps`),
	// and props from the current render (`nextProps`) and calculates the next derived props.
	function deriveProps(options, prevProps, nextProps, derivedProps) {
	  var nextDerivedProps = {};
	
	  var calcDerivedProp = function calcDerivedProp(key, xf) {
	
	    // When `xf` is annotated with `trackedProps` (by `@track`), only re-calculate
	    // derived props when the tracked props changed.
	    if (xf.trackedProps && xf.trackedProps.every(function (p) {
	      return prevProps[p] === nextProps[p];
	    })) {
	      return derivedProps[key];
	    }
	
	    if (globalOptions.debug) console.log('Recalculating derived prop \'' + key + '\'');
	    return xf.call(delegates, nextProps, derivedProps);
	  };
	
	  // `delegates` is the object that will be attached to the `this` Object
	  // of deriver (`xf`) functions. (see `xf.call(delegates...)` above)
	  var delegates = map.call(options, function (xf, key) {
	    return function () {
	      if (!nextDerivedProps.hasOwnProperty(key)) {
	        nextDerivedProps[key] = BLOCKED;
	        return nextDerivedProps[key] = calcDerivedProp(key, xf);
	      } else {
	        if (nextDerivedProps[key] === BLOCKED) {
	          throw Error('Circular dependencies in derived props, \'' + key + '\' was blocked.');
	        }
	        return nextDerivedProps[key];
	      }
	    };
	  });
	
	  Object.keys(options).forEach(function (key) {
	    if (!nextDerivedProps.hasOwnProperty(key))
	      // calculate derived prop
	      nextDerivedProps[key] = calcDerivedProp(key, options[key]);
	  });
	
	  return _extends({}, nextProps, nextDerivedProps);
	}
	
	function getDisplayName(comp) {
	  return comp.displayName || comp.name || 'Component';
	}
	
	// map an object to an object
	function map(f) {
	  var _this = this;
	
	  var result = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
	  Object.keys(this).forEach(function (k) {
	    return result[k] = f(_this[k], k);
	  });
	  return result;
	}
	
	/**
	 * ## track
	 *
	 * Object literal decorator that annotates a mapper function
	 * to have a 'trackedProps' property. Used by `@derive` to memoize
	 * props.
	 *
	 * @param {String...} trackedProps
	 * @return {Function}
	 */
	
	function track() {
	  for (var _len = arguments.length, trackedProps = Array(_len), _key = 0; _key < _len; _key++) {
	    trackedProps[_key] = arguments[_key];
	  }
	
	  return function (target, key, descriptor) {
	    if (descriptor) {
	      // ES7 decorator
	      descriptor.value.trackedProps = trackedProps;
	    } else {
	      // ES6
	      target.trackedProps = trackedProps;
	      return target;
	    }
	  };
	}
	
	/**
	 * ## Derive
	 *
	 * `@derive` as a component.
	 * @prop {Object} options
	 */
	
	var Derive = (function (_Component2) {
	  _inherits(Derive, _Component2);
	
	  function Derive() {
	    _classCallCheck(this, Derive);
	
	    _get(Object.getPrototypeOf(Derive.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Derive, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      this.derivedProps = deriveProps(this.props.options, {}, this.props, {});
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps) {
	      this.derivedProps = deriveProps(nextProps.options, this.props, nextProps, this.derivedProps || {});
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2['default'].Children.only(this.props.children(this.derivedProps));
	    }
	  }]);
	
	  return Derive;
	})(_react.Component);
	
	exports.Derive = Derive;

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports['default'] = setup;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _createElegantDecorator = __webpack_require__(170);
	
	var _createElegantDecorator2 = _interopRequireDefault(_createElegantDecorator);
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function subedit(edit) {
	  for (var _len = arguments.length, path = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	    path[_key - 1] = arguments[_key];
	  }
	
	  return function (transform) {
	    return edit(function (state) {
	      return state.updateIn(path, transform);
	    });
	  };
	}
	
	function setup(debug) {
	  return {
	    subedit: subedit,
	    sub: subedit,
	    elegant: (0, _createElegantDecorator2['default'])(_react2['default'], debug)
	  };
	}
	
	setup.elegant = (0, _createElegantDecorator2['default'])(_react2['default']);
	setup.subedit = subedit;
	setup.sub = subedit;
	module.exports = exports['default'];

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x2, _x3, _x4) { var _again = true; _function: while (_again) { var object = _x2, property = _x3, receiver = _x4; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x2 = parent; _x3 = property; _x4 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	exports['default'] = createElegantDecorator;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _statics = __webpack_require__(171);
	
	var _shallowEqualProps = __webpack_require__(172);
	
	var getDisplayName = function getDisplayName(Component) {
	  return Component.displayName || Component.name || 'Component';
	};
	
	function createElegantDecorator(React, debug) {
	  var Component = React.Component;
	
	  var decorator = function decorator(_ref) {
	    var statics = _ref.statics;
	
	    var staticsMap = (0, _shallowEqualProps.createStaticsMap)(statics);
	
	    return function (DecoratedComponent) {
	      return (function (_Component) {
	        function ElegantDecorator() {
	          _classCallCheck(this, ElegantDecorator);
	
	          _get(Object.getPrototypeOf(ElegantDecorator.prototype), 'constructor', this).apply(this, arguments);
	        }
	
	        _inherits(ElegantDecorator, _Component);
	
	        _createClass(ElegantDecorator, [{
	          key: 'shouldComponentUpdate',
	          value: function shouldComponentUpdate(nextProps, nextState) {
	            return !(0, _shallowEqualProps.shallowEqualProps)(this.props, nextProps, staticsMap);
	          }
	        }, {
	          key: 'componentWillReceiveProps',
	          value: function componentWillReceiveProps(newProps) {
	            (0, _statics.updateStatics)(statics, this.decoratedProps, newProps);
	          }
	        }, {
	          key: 'render',
	          value: function render() {
	            if (debug) console.log('render <' + ElegantDecorator.displayName + '>');
	
	            this.decoratedProps = (0, _statics.wrapStatics)(statics, this.props);
	
	            return React.createElement(DecoratedComponent, this.decoratedProps);
	          }
	        }], [{
	          key: 'displayName',
	          value: 'Elegant(' + getDisplayName(DecoratedComponent) + ')',
	          enumerable: true
	        }, {
	          key: 'DecoratedComponent',
	          value: DecoratedComponent,
	          enumerable: true
	        }]);
	
	        return ElegantDecorator;
	      })(Component);
	    };
	  };
	
	  return function () {
	    var optionsOrComponent = arguments[0] === undefined ? {} : arguments[0];
	    return optionsOrComponent.prototype instanceof Component ? decorator({})(optionsOrComponent) : decorator(optionsOrComponent);
	  }; // Component : options
	}
	
	module.exports = exports['default'];

/***/ },
/* 171 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.isDelegate = isDelegate;
	exports.wrapStatics = wrapStatics;
	exports.updateStatics = updateStatics;
	function delegate(delegee) {
	  var delegate = function delegate() {
	    return delegate.delegee.apply(this, arguments);
	  };
	  delegate.delegee = delegee;
	  delegate.isDelegate = true;
	  return delegate;
	}
	
	function isDelegate(value) {
	  return value && value.isDelegate;
	}
	
	// perform on render
	
	function wrapStatics(statics, props) {
	  var transformedProps = _extends({}, props);
	  if (statics) {
	    statics.forEach(function (key) {
	      var delegee = props[key];
	      if (typeof delegee === 'function') {
	        transformedProps[key] = isDelegate(delegee) ? delegee : delegate(delegee);
	      }
	    });
	  }
	  return transformedProps;
	}
	
	// perform when recieving props
	
	function updateStatics(statics, wrappedProps, newProps) {
	  if (statics && newProps && wrappedProps) {
	    statics.forEach(function (key) {
	      var newMember = newProps[key];
	
	      if (typeof newMember === 'function') {
	        var currentMember = wrappedProps[key];
	        if (isDelegate(currentMember)) {
	          var delegee = isDelegate(newMember) ? newMember.delegee : newMember;
	          currentMember.delegee = delegee;
	        }
	      }
	    });
	  }
	}

/***/ },
/* 172 */
/***/ function(module, exports) {

	// convert statics array to map object
	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.createStaticsMap = createStaticsMap;
	exports.shallowEqualProps = shallowEqualProps;
	
	function createStaticsMap(statics) {
	  if (!statics) return {};
	  var map = {};
	  statics.forEach(function (key) {
	    return map[key] = true;
	  });
	  return map;
	}
	
	;
	
	// modified version of shallowEqualProps fn from PureRenderMixin
	
	function shallowEqualProps(objA, objB, staticsMap) {
	  if (objA === objB) {
	    return true;
	  }
	
	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }
	
	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);
	
	  if (keysA.length !== keysB.length) {
	    return false;
	  }
	
	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (staticsMap[keysA[i]]) continue;
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }
	
	  return true;
	}

/***/ },
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactImation = __webpack_require__(153);
	
	var _reactImationTweenValueFactories = __webpack_require__(159);
	
	var _functionalEasing = __webpack_require__(173);
	
	var _demo3RollButton = __webpack_require__(178);
	
	var _demo3RollButton2 = _interopRequireDefault(_demo3RollButton);
	
	var GameOver = (function (_Component) {
	  _inherits(GameOver, _Component);
	
	  function GameOver() {
	    _classCallCheck(this, GameOver);
	
	    _get(Object.getPrototypeOf(GameOver.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(GameOver, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.gameOverSound.play();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var playAgain = _props.playAgain;
	      var score = _props.score;
	
	      return _react2['default'].createElement(
	        _reactImation.Timeline,
	        { playOnMount: true, max: 1, increment: 0.05 },
	        function (_ref) {
	          var time = _ref.time;
	          return _react2['default'].createElement(
	            'div',
	            {
	              style: {
	                textAlign: 'center',
	                position: 'absolute',
	                transform: 'translate(-50%, -50%)',
	                whiteSpace: 'nowrap',
	                top: '45%',
	                left: '50%' } },
	            _react2['default'].createElement(
	              'div',
	              {
	                style: _extends({
	                  fontSize: '90px'
	                }, (0, _reactImation.tween)(time, {
	                  0: { opacity: 0, transform: (0, _reactImation.combine)((0, _reactImationTweenValueFactories.scale)(10, 10), (0, _reactImationTweenValueFactories.rotateY)(60)) },
	                  1: { opacity: 1, transform: (0, _reactImation.combine)((0, _reactImationTweenValueFactories.scale)(1, 1), (0, _reactImationTweenValueFactories.rotateY)(0)) }
	                })) },
	              'Game Over'
	            ),
	            _react2['default'].createElement(
	              'div',
	              { style: { marginTop: '30px', fontSize: '30px', color: 'white' } },
	              score.toLocaleString()
	            ),
	            _react2['default'].createElement(
	              'div',
	              { style: { marginTop: '50px' } },
	              _react2['default'].createElement(_demo3RollButton2['default'], {
	                width: 300,
	                height: 60,
	                staticText: 'Play',
	                onClick: playAgain,
	                initialIndex: 0,
	                list: ['Again', 'De Nuevo', 'Otra Vez', 'Just cause', 'Now', 'Forever', 'With Love', 'Well', 'Cause I\'m bored', 'Till I Die', 'Or Die', 'For the Love of it', 'For My Momma', 'Just Because', 'To Win', 'To Dominate', 'To Take Over the World'] })
	            )
	          );
	        }
	      );
	    }
	  }]);
	
	  return GameOver;
	})(_react.Component);
	
	exports['default'] = GameOver;
	module.exports = exports['default'];

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _createDecoratedObject(descriptors) { var target = {}; for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = true; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } } if (descriptor.initializer) { descriptor.value = descriptor.initializer.call(target); } Object.defineProperty(target, key, descriptor); } return target; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _functionalEasing = __webpack_require__(173);
	
	var _reactImation = __webpack_require__(153);
	
	var _reactImationTweenValueFactories = __webpack_require__(159);
	
	var _reactStatefulStream = __webpack_require__(160);
	
	var _reactStatefulStream2 = _interopRequireDefault(_reactStatefulStream);
	
	var _reactDerive = __webpack_require__(168);
	
	var _updeep = __webpack_require__(179);
	
	var _updeep2 = _interopRequireDefault(_updeep);
	
	var immutable = (0, _updeep2['default'])({});
	
	var easeOutElastic = new _functionalEasing.Easer().using('out-elastic').withParameters(2, .6);
	var easeOutSine = new _functionalEasing.Easer().using('out-sine');
	
	var borderColor = 'rgba(255,255,255,1.0)';
	var listStyle = { color: '#ccc' };
	
	var RollButton = (function (_Component) {
	  _inherits(RollButton, _Component);
	
	  function RollButton() {
	    _classCallCheck(this, _RollButton);
	
	    _get(Object.getPrototypeOf(_RollButton.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(RollButton, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var currentIndex = _props.currentIndex;
	      var staticText = _props.staticText;
	      var update = _props.update;
	      var isOver = _props.isOver;
	      var list = _props.list;
	      var partitionedList = _props.partitionedList;
	      var width = _props.width;
	      var height = _props.height;
	      var timeliner = _props.timeliner;
	      var onClick = _props.onClick;
	
	      var _partitionedList = _slicedToArray(partitionedList, 2);
	
	      var topList = _partitionedList[0];
	      var bottomList = _partitionedList[1];
	
	      var currentText = list[currentIndex];
	
	      return _react2['default'].createElement(
	        'div',
	        {
	          style: {
	            width: width,
	            height: height,
	            cursor: 'pointer',
	            border: '4px solid ' + borderColor,
	            background: isOver ? borderColor : 'transparent',
	            borderRadius: 2,
	            textAlign: 'center',
	            display: 'flex',
	            alignItems: 'center',
	            justifyContent: 'center',
	            overflow: 'hidden',
	            margin: 'auto'
	          },
	          onClick: onClick,
	          onMouseEnter: function (event) {
	            timeliner.setTime(0);
	            timeliner.play();
	            update({
	              currentIndex: ~ ~(Math.random() * list.length),
	              isOver: true
	            });
	          },
	          onMouseLeave: function (event) {
	            return update({ isOver: false });
	          } },
	        _react2['default'].createElement(
	          'div',
	          {
	            style: {
	              position: 'relative',
	              verticalAlign: 'middle',
	              color: isOver ? 'black' : 'white'
	            } },
	          _react2['default'].createElement(
	            'div',
	            { style: { display: 'inline-block' } },
	            staticText,
	            ' '
	          ),
	          _react2['default'].createElement(
	            'div',
	            { style: { display: 'inline-block', position: 'relative' } },
	            isOver && _react2['default'].createElement(
	              _reactImation.Timeline,
	              { timeliner: timeliner },
	              function (_ref) {
	                var time = _ref.time;
	                return _react2['default'].createElement(
	                  'div',
	                  { style: _extends({
	                      position: 'absolute'
	                    }, (0, _reactImation.tween)(time, {
	                      0: { transform: (0, _reactImationTweenValueFactories.translateY)(450), ease: easeOutSine },
	                      30: { transform: (0, _reactImationTweenValueFactories.translateY)(-15), ease: easeOutElastic },
	                      50: { transform: (0, _reactImationTweenValueFactories.translateY)(0) }
	                    })) },
	                  _react2['default'].createElement(
	                    'div',
	                    { style: { whiteSpace: 'no-wrap', opacity: (0, _reactImation.tween)(time, { 0: 1, 30: 1, 40: 0 }), position: 'absolute', bottom: 0, textAlign: 'left' } },
	                    topList.map(function (item) {
	                      return _react2['default'].createElement(
	                        'div',
	                        { style: listStyle, key: item },
	                        item
	                      );
	                    })
	                  ),
	                  _react2['default'].createElement(
	                    'div',
	                    { style: { position: 'absolute', top: '100%', width: '500px', textAlign: 'left' } },
	                    _react2['default'].createElement(
	                      'div',
	                      { style: { color: 'black', opacity: (0, _reactImation.tween)(time, { 0: 0.4, 18: 0.4, 22: 1 }) } },
	                      currentText
	                    ),
	                    bottomList.map(function (item) {
	                      return _react2['default'].createElement(
	                        'div',
	                        { style: _extends({ opacity: (0, _reactImation.tween)(time, { 0: 1, 30: 1, 40: 0 }) }, listStyle), key: item },
	                        item
	                      );
	                    })
	                  )
	                );
	              }
	            ),
	            _react2['default'].createElement(
	              'span',
	              { style: isOver ? { color: 'transparent' } : {} },
	              currentText
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  var _RollButton = RollButton;
	  RollButton = (0, _reactStatefulStream2['default'])({ timeliner: new _reactImation.Timeliner({ max: 53 }) })(RollButton) || RollButton;
	  RollButton = (0, _reactDerive.derive)(_createDecoratedObject([{
	    key: 'newList',
	    decorators: [(0, _reactDerive.track)('currentIndex')],
	    value: function newList(_ref2) {
	      var currentIndex = _ref2.currentIndex;
	      var list = _ref2.list;
	      // re-arrange list
	      var currentItem = list[currentIndex];
	      return list.filter(function (item) {
	        return item !== currentItem;
	      }).sort(function () {
	        return Math.random() - .5;
	      });
	    }
	  }, {
	    key: 'partitionedList',
	    decorators: [(0, _reactDerive.track)('currentIndex')],
	    value: function partitionedList() {
	      return [this.newList().slice(0, -3), this.newList().slice(-3)];
	    }
	  }]))(RollButton) || RollButton;
	  RollButton = (0, _reactStatefulStream2['default'])(function (_ref3) {
	    var initialIndex = _ref3.initialIndex;
	    return immutable({
	      isOver: false,
	      currentIndex: initialIndex || 0
	    });
	  }, function (edit) {
	    return {
	      update: function update(updates) {
	        return edit((0, _updeep2['default'])(updates));
	      }
	    };
	  })(RollButton) || RollButton;
	  return RollButton;
	})(_react.Component);
	
	exports['default'] = RollButton;
	module.exports = exports['default'];
	/* Notice that since we're using Timeline statelessly (by providing
	   the timeliner prop), it can be removed from the DOM on mouse out */

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _constant = __webpack_require__(180);
	
	var _constant2 = _interopRequireDefault(_constant);
	
	var _freeze = __webpack_require__(181);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	var _is = __webpack_require__(182);
	
	var _is2 = _interopRequireDefault(_is);
	
	var _if2 = __webpack_require__(233);
	
	var _if3 = _interopRequireDefault(_if2);
	
	var _ifElse = __webpack_require__(234);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _map = __webpack_require__(241);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _omit = __webpack_require__(250);
	
	var _omit2 = _interopRequireDefault(_omit);
	
	var _reject = __webpack_require__(264);
	
	var _reject2 = _interopRequireDefault(_reject);
	
	var _update = __webpack_require__(235);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _updateIn = __webpack_require__(265);
	
	var _updateIn2 = _interopRequireDefault(_updateIn);
	
	var _withDefault = __webpack_require__(266);
	
	var _withDefault2 = _interopRequireDefault(_withDefault);
	
	var _utilCurry = __webpack_require__(232);
	
	var u = _update2['default'];
	
	u._ = _utilCurry._;
	u.constant = _constant2['default'];
	u['if'] = _if3['default'];
	u.ifElse = _ifElse2['default'];
	u.is = _is2['default'];
	u.freeze = _freeze2['default'];
	u.map = _map2['default'];
	u.omit = _omit2['default'];
	u.reject = _reject2['default'];
	u.update = _update2['default'];
	u.updateIn = _updateIn2['default'];
	u.withDefault = _withDefault2['default'];
	
	exports['default'] = u;
	module.exports = exports['default'];

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _freeze = __webpack_require__(181);
	
	/**
	 * Returns a function that always returns the supplied value.
	 *
	 * Useful for replacing an object outright rather than merging it.
	 *
	 * @function
	 * @sig a -> (* -> a)
	 * @memberOf u
	 * @param  {*} value what to return from returned function.
	 * @return {function} a new function that will always return value.
	 *
	 * @example
	 * var alwaysFour = u.constant(4);
	 * expect(alwaysFour(32)).toEqual(4);
	 *
	 * @example
	 * var user = {
	 *   name: 'Mitch',
	 *   favorites: {
	 *     band: 'Nirvana',
	 *     movie: 'The Matrix'
	 *   }
	 * };
	 *
	 * var newFavorites = {
	 *   band: 'Coldplay'
	 * };
	 *
	 * var result = u({ favorites: u.constant(newFavorites) }, user);
	 *
	 * expect(result).toEqual({ name: 'Mitch', favorites: { band: 'Coldplay' } });
	 */
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function constant(value) {
	  var frozen = _freeze2['default'](value);
	  return function () {
	    return frozen;
	  };
	}
	
	exports['default'] = constant;
	module.exports = exports['default'];

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	function isFreezable(object) {
	  if (object === null) return false;
	
	  return Array.isArray(object) || typeof object === 'object';
	}
	
	function needsFreezing(object) {
	  return isFreezable(object) && !Object.isFrozen(object);
	}
	
	function recur(object) {
	  Object.freeze(object);
	
	  Object.keys(object).forEach(function (key) {
	    var value = object[key];
	    if (needsFreezing(value)) {
	      recur(value);
	    }
	  });
	
	  return object;
	}
	
	/**
	 * Deeply freeze a plain javascript object.
	 *
	 * If `process.env.NODE_ENV === 'production'`, this returns the original object
	 * witout freezing.
	 *
	 * @function
	 * @sig a -> a
	 * @param  {object} object Object to freeze.
	 * @return {object} Frozen object, unless in production, then the same object.
	 */
	function freeze(object) {
	  if (true) {
	    return object;
	  }
	
	  if (needsFreezing(object)) {
	    recur(object);
	  }
	
	  return object;
	}
	
	exports['default'] = freeze;
	module.exports = exports['default'];

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilSplitPath = __webpack_require__(183);
	
	var _utilSplitPath2 = _interopRequireDefault(_utilSplitPath);
	
	var _utilCurry = __webpack_require__(232);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	function is(path, predicate, object) {
	  var parts = _utilSplitPath2['default'](path);
	
	  var rest = object;
	  var part = undefined;
	  for (var _iterator = parts, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      part = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      part = _i.value;
	    }
	
	    if (typeof rest === 'undefined') return false;
	    rest = rest[part];
	  }
	
	  if (typeof predicate === 'function') {
	    return predicate(rest);
	  }
	
	  return predicate === rest;
	}
	
	exports['default'] = _utilCurry2['default'](is);
	module.exports = exports['default'];

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = splitPath;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashCollectionReject = __webpack_require__(184);
	
	var _lodashCollectionReject2 = _interopRequireDefault(_lodashCollectionReject);
	
	function splitPath(path) {
	  return Array.isArray(path) ? path : _lodashCollectionReject2['default'](path.split('.'), function (x) {
	    return !x;
	  });
	}
	
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var arrayFilter = __webpack_require__(185),
	    baseCallback = __webpack_require__(186),
	    baseFilter = __webpack_require__(226),
	    isArray = __webpack_require__(207);
	
	/**
	 * The opposite of `_.filter`; this method returns the elements of `collection`
	 * that `predicate` does **not** return truthy for.
	 *
	 * @static
	 * @memberOf _
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Array} Returns the new filtered array.
	 * @example
	 *
	 * _.reject([1, 2, 3, 4], function(n) {
	 *   return n % 2 == 0;
	 * });
	 * // => [1, 3]
	 *
	 * var users = [
	 *   { 'user': 'barney', 'age': 36, 'active': false },
	 *   { 'user': 'fred',   'age': 40, 'active': true }
	 * ];
	 *
	 * // using the `_.matches` callback shorthand
	 * _.pluck(_.reject(users, { 'age': 40, 'active': true }), 'user');
	 * // => ['barney']
	 *
	 * // using the `_.matchesProperty` callback shorthand
	 * _.pluck(_.reject(users, 'active', false), 'user');
	 * // => ['fred']
	 *
	 * // using the `_.property` callback shorthand
	 * _.pluck(_.reject(users, 'active'), 'user');
	 * // => ['barney']
	 */
	function reject(collection, predicate, thisArg) {
	  var func = isArray(collection) ? arrayFilter : baseFilter;
	  predicate = baseCallback(predicate, thisArg, 3);
	  return func(collection, function(value, index, collection) {
	    return !predicate(value, index, collection);
	  });
	}
	
	module.exports = reject;


/***/ },
/* 185 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.filter` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function arrayFilter(array, predicate) {
	  var index = -1,
	      length = array.length,
	      resIndex = -1,
	      result = [];
	
	  while (++index < length) {
	    var value = array[index];
	    if (predicate(value, index, array)) {
	      result[++resIndex] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = arrayFilter;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(187),
	    baseMatchesProperty = __webpack_require__(215),
	    bindCallback = __webpack_require__(222),
	    identity = __webpack_require__(223),
	    property = __webpack_require__(224);
	
	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}
	
	module.exports = baseCallback;


/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(188),
	    getMatchData = __webpack_require__(212),
	    toObject = __webpack_require__(211);
	
	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];
	
	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value && (value !== undefined || (key in toObject(object)));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}
	
	module.exports = baseMatches;


/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(189),
	    toObject = __webpack_require__(211);
	
	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;


/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(190),
	    isObject = __webpack_require__(199),
	    isObjectLike = __webpack_require__(200);
	
	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}
	
	module.exports = baseIsEqual;


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(191),
	    equalByTag = __webpack_require__(193),
	    equalObjects = __webpack_require__(194),
	    isArray = __webpack_require__(207),
	    isTypedArray = __webpack_require__(210);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag,
	      othIsObj = othTag == objectTag,
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);
	
	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);
	
	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);
	
	  stackA.pop();
	  stackB.pop();
	
	  return result;
	}
	
	module.exports = baseIsEqualDeep;


/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(192);
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;
	
	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalArrays;


/***/ },
/* 192 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;


/***/ },
/* 193 */
/***/ function(module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}
	
	module.exports = equalByTag;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(195);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;
	
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}
	
	module.exports = equalObjects;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(196),
	    isArrayLike = __webpack_require__(201),
	    isObject = __webpack_require__(199),
	    shimKeys = __webpack_require__(205);
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};
	
	module.exports = keys;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(197);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}
	
	module.exports = getNative;


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(198),
	    isObjectLike = __webpack_require__(200);
	
	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);
	
	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}
	
	module.exports = isNative;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(199);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}
	
	module.exports = isFunction;


/***/ },
/* 199 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ },
/* 200 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	module.exports = isObjectLike;


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(202),
	    isLength = __webpack_require__(204);
	
	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}
	
	module.exports = isArrayLike;


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(203);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;


/***/ },
/* 203 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;


/***/ },
/* 204 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(206),
	    isArray = __webpack_require__(207),
	    isIndex = __webpack_require__(208),
	    isLength = __webpack_require__(204),
	    keysIn = __webpack_require__(209);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;
	
	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));
	
	  var index = -1,
	      result = [];
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = shimKeys;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(201),
	    isObjectLike = __webpack_require__(200);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}
	
	module.exports = isArguments;


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(196),
	    isLength = __webpack_require__(204),
	    isObjectLike = __webpack_require__(200);
	
	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};
	
	module.exports = isArray;


/***/ },
/* 208 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;
	
	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;


/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(206),
	    isArray = __webpack_require__(207),
	    isIndex = __webpack_require__(208),
	    isLength = __webpack_require__(204),
	    isObject = __webpack_require__(199);
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;
	
	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;
	
	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(204),
	    isObjectLike = __webpack_require__(200);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}
	
	module.exports = isTypedArray;


/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(199);
	
	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  return isObject(value) ? value : Object(value);
	}
	
	module.exports = toObject;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(213),
	    pairs = __webpack_require__(214);
	
	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;
	
	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}
	
	module.exports = getMatchData;


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(199);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(195),
	    toObject = __webpack_require__(211);
	
	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);
	
	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);
	
	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}
	
	module.exports = pairs;


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(216),
	    baseIsEqual = __webpack_require__(189),
	    baseSlice = __webpack_require__(217),
	    isArray = __webpack_require__(207),
	    isKey = __webpack_require__(218),
	    isStrictComparable = __webpack_require__(213),
	    last = __webpack_require__(219),
	    toObject = __webpack_require__(211),
	    toPath = __webpack_require__(220);
	
	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');
	
	  path = toPath(path);
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}
	
	module.exports = baseMatchesProperty;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(211);
	
	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  if (pathKey !== undefined && pathKey in toObject(object)) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}
	
	module.exports = baseGet;


/***/ },
/* 217 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(207),
	    toObject = __webpack_require__(211);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}
	
	module.exports = isKey;


/***/ },
/* 219 */
/***/ function(module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}
	
	module.exports = last;


/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(221),
	    isArray = __webpack_require__(207);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}
	
	module.exports = toPath;


/***/ },
/* 221 */
/***/ function(module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}
	
	module.exports = baseToString;


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(223);
	
	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}
	
	module.exports = bindCallback;


/***/ },
/* 223 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(203),
	    basePropertyDeep = __webpack_require__(225),
	    isKey = __webpack_require__(218);
	
	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}
	
	module.exports = property;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(216),
	    toPath = __webpack_require__(220);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}
	
	module.exports = basePropertyDeep;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(227);
	
	/**
	 * The base implementation of `_.filter` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Array} Returns the new filtered array.
	 */
	function baseFilter(collection, predicate) {
	  var result = [];
	  baseEach(collection, function(value, index, collection) {
	    if (predicate(value, index, collection)) {
	      result.push(value);
	    }
	  });
	  return result;
	}
	
	module.exports = baseFilter;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var baseForOwn = __webpack_require__(228),
	    createBaseEach = __webpack_require__(231);
	
	/**
	 * The base implementation of `_.forEach` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object|string} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;


/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(229),
	    keys = __webpack_require__(195);
	
	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(230);
	
	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;


/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(211);
	
	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;
	
	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(202),
	    isLength = __webpack_require__(204),
	    toObject = __webpack_require__(211);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function(collection, iteratee) {
	    var length = collection ? getLength(collection) : 0;
	    if (!isLength(length)) {
	      return eachFunc(collection, iteratee);
	    }
	    var index = fromRight ? length : -1,
	        iterable = toObject(collection);
	
	    while ((fromRight ? index-- : ++index < length)) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;


/***/ },
/* 232 */
/***/ function(module, exports) {

	/* eslint no-shadow:0, no-param-reassign:0 */
	'use strict';
	
	exports.__esModule = true;
	exports.curry1 = curry1;
	exports.curry2 = curry2;
	exports.curry3 = curry3;
	exports.curry4 = curry4;
	exports['default'] = curry;
	var _ = '@@updeep/placeholder';
	
	exports._ = _;
	function countArguments(args, max) {
	  var n = args.length;
	  if (n > max) n = max;
	
	  while (args[n - 1] === _) {
	    n--;
	  }
	
	  return n;
	}
	
	function curry1(fn) {
	  return function curried(a) {
	    for (var _len = arguments.length, _ref = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      _ref[_key - 1] = arguments[_key];
	    }
	
	    var b = _ref[0],
	        c = _ref[1];
	
	    var n = countArguments(arguments);
	
	    if (n >= 1) return fn(a, b, c);
	    return curried;
	  };
	}
	
	function curry2(fn) {
	  return function curried(a, b) {
	    for (var _len2 = arguments.length, _ref2 = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	      _ref2[_key2 - 2] = arguments[_key2];
	    }
	
	    var c = _ref2[0],
	        d = _ref2[1];
	
	    var n = countArguments(arguments, 2);
	
	    if (b === _ || c === _ || d === _) {
	      throw new Error('Can only use placeholder on first argument of this function.');
	    }
	
	    if (n >= 2) {
	      if (a === _) return curry1(function (a, c, d) {
	        return fn(a, b, c, d);
	      });
	      return fn(a, b, c, d);
	    }
	
	    if (n === 1) return curry1(function (b, c, d) {
	      return fn(a, b, c, d);
	    });
	    return curried;
	  };
	}
	
	function curry3(fn) {
	  return function curried(a, b, c) {
	    for (var _len3 = arguments.length, _ref3 = Array(_len3 > 3 ? _len3 - 3 : 0), _key3 = 3; _key3 < _len3; _key3++) {
	      _ref3[_key3 - 3] = arguments[_key3];
	    }
	
	    var d = _ref3[0],
	        e = _ref3[1];
	
	    var n = countArguments(arguments, 3);
	
	    if (c === _ || d === _ || e === _) {
	      throw new Error('Can only use placeholder on first or second argument of this function.');
	    }
	
	    if (n >= 3) {
	      if (a === _) {
	        if (b === _) return curry2(function (a, b, d, e) {
	          return fn(a, b, c, d, e);
	        });
	        return curry1(function (a, d, e) {
	          return fn(a, b, c, d, e);
	        });
	      }
	      if (b === _) return curry1(function (b, d, e) {
	        return fn(a, b, c, d, e);
	      });
	      return fn(a, b, c, d, e);
	    }
	
	    if (n === 2) {
	      if (a === _) return curry2(function (a, c, d, e) {
	        return fn(a, b, c, d, e);
	      });
	      return curry1(function (c, d, e) {
	        return fn(a, b, c, d, e);
	      });
	    }
	
	    if (n === 1) return curry2(function (b, c, d, e) {
	      return fn(a, b, c, d, e);
	    });
	
	    return curried;
	  };
	}
	
	function curry4(fn) {
	  return function curried(a, b, c, d) {
	    for (var _len4 = arguments.length, _ref4 = Array(_len4 > 4 ? _len4 - 4 : 0), _key4 = 4; _key4 < _len4; _key4++) {
	      _ref4[_key4 - 4] = arguments[_key4];
	    }
	
	    var e = _ref4[0],
	        f = _ref4[1];
	
	    var n = countArguments(arguments, 4);
	
	    if (d === _ || e === _ || f === _) {
	      throw new Error('Can only use placeholder on first, second or third argument of this function.');
	    }
	
	    if (n >= 4) {
	      if (a === _) {
	        if (b === _) {
	          if (c === _) return curry3(function (a, b, c, e, f) {
	            return fn(a, b, c, d, e, f);
	          });
	          return curry2(function (a, b, e, f) {
	            return fn(a, b, c, d, e, f);
	          });
	        }
	        if (c === _) return curry2(function (a, c, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	        return curry1(function (a, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	      }
	      if (b === _) {
	        if (c === _) return curry2(function (b, c, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	        return curry1(function (b, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	      }
	      if (c === _) return curry1(function (c, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	      return fn(a, b, c, d, e, f);
	    }
	
	    if (n === 3) {
	      if (a === _) {
	        if (b === _) return curry3(function (a, b, d, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	        return curry2(function (a, d, e, f) {
	          return fn(a, b, c, d, e, f);
	        });
	      }
	      if (b === _) return curry2(function (b, d, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	      return curry1(function (d, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	    }
	
	    if (n === 2) {
	      if (a === _) return curry3(function (a, c, d, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	      return curry2(function (c, d, e, f) {
	        return fn(a, b, c, d, e, f);
	      });
	    }
	
	    if (n === 1) return curry3(function (b, c, d, e, f) {
	      return fn(a, b, c, d, e, f);
	    });
	    return curried;
	  };
	}
	
	function curry(fn) {
	  var length = arguments.length <= 1 || arguments[1] === undefined ? fn.length : arguments[1];
	  return (function () {
	    return [fn, curry1, curry2, curry3, curry4][length](fn);
	  })();
	}

/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _ifElse = __webpack_require__(234);
	
	var _ifElse2 = _interopRequireDefault(_ifElse);
	
	var _utilCurry = __webpack_require__(232);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	exports['default'] = _utilCurry2['default'](function (predicate, trueUpdates, object) {
	  return _ifElse2['default'](predicate, trueUpdates, function (x) {
	    return x;
	  }, object);
	});
	module.exports = exports['default'];

/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _update = __webpack_require__(235);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _wrap = __webpack_require__(236);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function updateIfElse(predicate, trueUpdates, falseUpdates, object) {
	  var test = typeof predicate === 'function' ? predicate(object) : predicate;
	
	  var updates = test ? trueUpdates : falseUpdates;
	
	  return _update2['default'](updates, object);
	}
	
	exports['default'] = _wrap2['default'](updateIfElse);
	module.exports = exports['default'];

/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _wrap = __webpack_require__(236);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _utilIsEmpty = __webpack_require__(237);
	
	var _utilIsEmpty2 = _interopRequireDefault(_utilIsEmpty);
	
	var _utilDefaultObject = __webpack_require__(238);
	
	var _utilDefaultObject2 = _interopRequireDefault(_utilDefaultObject);
	
	var _lodashLangIsPlainObject = __webpack_require__(239);
	
	var _lodashLangIsPlainObject2 = _interopRequireDefault(_lodashLangIsPlainObject);
	
	function reduce(object, callback, initialValue) {
	  return Object.keys(object).reduce(function (acc, key) {
	    return callback(acc, object[key], key);
	  }, initialValue);
	}
	
	function resolveUpdates(updates, object) {
	  return reduce(updates, function (acc, value, key) {
	    var updatedValue = value;
	
	    if (!Array.isArray(value) && value !== null && typeof value === 'object') {
	      updatedValue = update(value, object[key]);
	    } else if (typeof value === 'function') {
	      updatedValue = value(object[key]);
	    }
	
	    if (object[key] !== updatedValue) {
	      acc[key] = updatedValue;
	    }
	
	    return acc;
	  }, {});
	}
	
	function updateArray(updates, object) {
	  var newArray = [].concat(object);
	
	  Object.keys(updates).forEach(function (key) {
	    newArray[key] = updates[key];
	  });
	
	  return newArray;
	}
	
	/**
	 * Recursively update an object or array.
	 *
	 * Can update with values:
	 * update({ foo: 3 }, { foo: 1, bar: 2 });
	 * // => { foo: 3, bar: 2 }
	 *
	 * Or with a function:
	 * update({ foo: x => (x + 1) }, { foo: 2 });
	 * // => { foo: 3 }
	 *
	 * @function
	 * @name update
	 * @param {Object|Function} updates
	 * @param {Object|Array}    object to update
	 * @return {Object|Array}   new object with modifications
	 */
	function update(updates, object) {
	  if (typeof updates === 'function') {
	    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	      args[_key - 2] = arguments[_key];
	    }
	
	    return updates.apply(undefined, [object].concat(args));
	  }
	
	  if (!_lodashLangIsPlainObject2['default'](updates)) {
	    return updates;
	  }
	
	  var defaultedObject = _utilDefaultObject2['default'](object, updates);
	
	  var resolvedUpdates = resolveUpdates(updates, defaultedObject);
	
	  if (_utilIsEmpty2['default'](resolvedUpdates)) {
	    return defaultedObject;
	  }
	
	  if (Array.isArray(defaultedObject)) {
	    return updateArray(resolvedUpdates, defaultedObject);
	  }
	
	  return _extends({}, defaultedObject, resolvedUpdates);
	}
	
	exports['default'] = _wrap2['default'](update, 2);
	module.exports = exports['default'];

/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports['default'] = wrap;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilCurry = __webpack_require__(232);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	var _freeze = __webpack_require__(181);
	
	var _freeze2 = _interopRequireDefault(_freeze);
	
	function wrap(func) {
	  var length = arguments.length <= 1 || arguments[1] === undefined ? func.length : arguments[1];
	  return (function () {
	    return _utilCurry2['default'](function () {
	      return _freeze2['default'](func.apply(undefined, arguments));
	    }, length);
	  })();
	}
	
	module.exports = exports['default'];

/***/ },
/* 237 */
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	function isEmpty(object) {
	  return !Object.keys(object).length;
	}
	
	exports["default"] = isEmpty;
	module.exports = exports["default"];

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _isEmpty = __webpack_require__(237);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function isInt(value) {
	  if (isNaN(value)) {
	    return false;
	  }
	  var x = parseFloat(value);
	  return (x | 0) === x;
	}
	
	function isArrayUpdate(updates) {
	  for (var _iterator = Object.keys(updates), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
	    var _ref;
	
	    if (_isArray) {
	      if (_i >= _iterator.length) break;
	      _ref = _iterator[_i++];
	    } else {
	      _i = _iterator.next();
	      if (_i.done) break;
	      _ref = _i.value;
	    }
	
	    var updateKey = _ref;
	
	    if (!isInt(updateKey)) {
	      return false;
	    }
	  }
	
	  return true;
	}
	
	function arrayOrObject(updates) {
	  if (!_isEmpty2['default'](updates) && isArrayUpdate(updates)) {
	    return [];
	  }
	
	  return {};
	}
	
	function defaultObject(object, updates) {
	  if (typeof object === 'undefined' || object === null) {
	    return arrayOrObject(updates);
	  }
	
	  return object;
	}
	
	exports['default'] = defaultObject;
	module.exports = exports['default'];

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(240),
	    isArguments = __webpack_require__(206),
	    isObjectLike = __webpack_require__(200);
	
	/** `Object#toString` result references. */
	var objectTag = '[object Object]';
	
	/** Used for native method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;
	
	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;
	
	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}
	
	module.exports = isPlainObject;


/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(229),
	    keysIn = __webpack_require__(209);
	
	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}
	
	module.exports = baseForIn;


/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _update = __webpack_require__(235);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _wrap = __webpack_require__(236);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	var _lodashCollectionForEach = __webpack_require__(242);
	
	var _lodashCollectionForEach2 = _interopRequireDefault(_lodashCollectionForEach);
	
	var _lodashCollectionMap = __webpack_require__(245);
	
	var _lodashCollectionMap2 = _interopRequireDefault(_lodashCollectionMap);
	
	var _lodashObjectMapValues = __webpack_require__(248);
	
	var _lodashObjectMapValues2 = _interopRequireDefault(_lodashObjectMapValues);
	
	function shallowEqual(object, otherObject) {
	  var equal = true;
	  _lodashCollectionForEach2['default'](otherObject, function (value, key) {
	    if (value !== object[key]) {
	      equal = false;
	
	      // exit early
	      return false;
	    }
	  });
	
	  return equal;
	}
	
	function map(iteratee, object) {
	  var updater = typeof iteratee === 'function' ? iteratee : _update2['default'](iteratee);
	
	  var mapper = Array.isArray(object) ? _lodashCollectionMap2['default'] : _lodashObjectMapValues2['default'];
	
	  var newObject = mapper(object, updater);
	  var equal = shallowEqual(object, newObject);
	
	  return equal ? object : newObject;
	}
	
	exports['default'] = _wrap2['default'](map);
	module.exports = exports['default'];

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(243),
	    baseEach = __webpack_require__(227),
	    createForEach = __webpack_require__(244);
	
	/**
	 * Iterates over elements of `collection` invoking `iteratee` for each element.
	 * The `iteratee` is bound to `thisArg` and invoked with three arguments:
	 * (value, index|key, collection). Iteratee functions may exit iteration early
	 * by explicitly returning `false`.
	 *
	 * **Note:** As with other "Collections" methods, objects with a "length" property
	 * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
	 * may be used for object iteration.
	 *
	 * @static
	 * @memberOf _
	 * @alias each
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array|Object|string} Returns `collection`.
	 * @example
	 *
	 * _([1, 2]).forEach(function(n) {
	 *   console.log(n);
	 * }).value();
	 * // => logs each value from left to right and returns the array
	 *
	 * _.forEach({ 'a': 1, 'b': 2 }, function(n, key) {
	 *   console.log(n, key);
	 * });
	 * // => logs each value-key pair and returns the object (iteration order is not guaranteed)
	 */
	var forEach = createForEach(arrayEach, baseEach);
	
	module.exports = forEach;


/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}
	
	module.exports = arrayEach;


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(222),
	    isArray = __webpack_require__(207);
	
	/**
	 * Creates a function for `_.forEach` or `_.forEachRight`.
	 *
	 * @private
	 * @param {Function} arrayFunc The function to iterate over an array.
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @returns {Function} Returns the new each function.
	 */
	function createForEach(arrayFunc, eachFunc) {
	  return function(collection, iteratee, thisArg) {
	    return (typeof iteratee == 'function' && thisArg === undefined && isArray(collection))
	      ? arrayFunc(collection, iteratee)
	      : eachFunc(collection, bindCallback(iteratee, thisArg, 3));
	  };
	}
	
	module.exports = createForEach;


/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(246),
	    baseCallback = __webpack_require__(186),
	    baseMap = __webpack_require__(247),
	    isArray = __webpack_require__(207);
	
	/**
	 * Creates an array of values by running each element in `collection` through
	 * `iteratee`. The `iteratee` is bound to `thisArg` and invoked with three
	 * arguments: (value, index|key, collection).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `callback`, `chunk`, `clone`, `create`, `curry`, `curryRight`,
	 * `drop`, `dropRight`, `every`, `fill`, `flatten`, `invert`, `max`, `min`,
	 * `parseInt`, `slice`, `sortBy`, `take`, `takeRight`, `template`, `trim`,
	 * `trimLeft`, `trimRight`, `trunc`, `random`, `range`, `sample`, `some`,
	 * `sum`, `uniq`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @alias collect
	 * @category Collection
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function timesThree(n) {
	 *   return n * 3;
	 * }
	 *
	 * _.map([1, 2], timesThree);
	 * // => [3, 6]
	 *
	 * _.map({ 'a': 1, 'b': 2 }, timesThree);
	 * // => [3, 6] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // using the `_.property` callback shorthand
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee, thisArg) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  iteratee = baseCallback(iteratee, thisArg, 3);
	  return func(collection, iteratee);
	}
	
	module.exports = map;


/***/ },
/* 246 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;


/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	var baseEach = __webpack_require__(227),
	    isArrayLike = __webpack_require__(201);
	
	/**
	 * The base implementation of `_.map` without support for callback shorthands
	 * and `this` binding.
	 *
	 * @private
	 * @param {Array|Object|string} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function(value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;


/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	var createObjectMapper = __webpack_require__(249);
	
	/**
	 * Creates an object with the same keys as `object` and values generated by
	 * running each own enumerable property of `object` through `iteratee`. The
	 * iteratee function is bound to `thisArg` and invoked with three arguments:
	 * (value, key, object).
	 *
	 * If a property name is provided for `iteratee` the created `_.property`
	 * style callback returns the property value of the given element.
	 *
	 * If a value is also provided for `thisArg` the created `_.matchesProperty`
	 * style callback returns `true` for elements that have a matching property
	 * value, else `false`.
	 *
	 * If an object is provided for `iteratee` the created `_.matches` style
	 * callback returns `true` for elements that have the properties of the given
	 * object, else `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to iterate over.
	 * @param {Function|Object|string} [iteratee=_.identity] The function invoked
	 *  per iteration.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {Object} Returns the new mapped object.
	 * @example
	 *
	 * _.mapValues({ 'a': 1, 'b': 2 }, function(n) {
	 *   return n * 3;
	 * });
	 * // => { 'a': 3, 'b': 6 }
	 *
	 * var users = {
	 *   'fred':    { 'user': 'fred',    'age': 40 },
	 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
	 * };
	 *
	 * // using the `_.property` callback shorthand
	 * _.mapValues(users, 'age');
	 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
	 */
	var mapValues = createObjectMapper();
	
	module.exports = mapValues;


/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	var baseCallback = __webpack_require__(186),
	    baseForOwn = __webpack_require__(228);
	
	/**
	 * Creates a function for `_.mapKeys` or `_.mapValues`.
	 *
	 * @private
	 * @param {boolean} [isMapKeys] Specify mapping keys instead of values.
	 * @returns {Function} Returns the new map function.
	 */
	function createObjectMapper(isMapKeys) {
	  return function(object, iteratee, thisArg) {
	    var result = {};
	    iteratee = baseCallback(iteratee, thisArg, 3);
	
	    baseForOwn(object, function(value, key, object) {
	      var mapped = iteratee(value, key, object);
	      key = isMapKeys ? mapped : key;
	      value = isMapKeys ? value : mapped;
	      result[key] = value;
	    });
	    return result;
	  };
	}
	
	module.exports = createObjectMapper;


/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashObjectOmit = __webpack_require__(251);
	
	var _lodashObjectOmit2 = _interopRequireDefault(_lodashObjectOmit);
	
	var _wrap = __webpack_require__(236);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function omit(predicate, collection) {
	  return _lodashObjectOmit2['default'](collection, predicate);
	}
	
	exports['default'] = _wrap2['default'](omit);
	module.exports = exports['default'];

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(246),
	    baseDifference = __webpack_require__(252),
	    baseFlatten = __webpack_require__(259),
	    bindCallback = __webpack_require__(222),
	    keysIn = __webpack_require__(209),
	    pickByArray = __webpack_require__(261),
	    pickByCallback = __webpack_require__(262),
	    restParam = __webpack_require__(263);
	
	/**
	 * The opposite of `_.pick`; this method creates an object composed of the
	 * own and inherited enumerable properties of `object` that are not omitted.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to omit, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.omit(object, 'age');
	 * // => { 'user': 'fred' }
	 *
	 * _.omit(object, _.isNumber);
	 * // => { 'user': 'fred' }
	 */
	var omit = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  if (typeof props[0] != 'function') {
	    var props = arrayMap(baseFlatten(props), String);
	    return pickByArray(object, baseDifference(keysIn(object), props));
	  }
	  var predicate = bindCallback(props[0], props[1], 3);
	  return pickByCallback(object, function(value, key, object) {
	    return !predicate(value, key, object);
	  });
	});
	
	module.exports = omit;


/***/ },
/* 252 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(253),
	    cacheIndexOf = __webpack_require__(255),
	    createCache = __webpack_require__(256);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];
	
	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;
	
	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];
	
	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}
	
	module.exports = baseDifference;


/***/ },
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(254);
	
	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;


/***/ },
/* 254 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);
	
	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;


/***/ },
/* 255 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(199);
	
	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];
	
	  return result ? 0 : -1;
	}
	
	module.exports = cacheIndexOf;


/***/ },
/* 256 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(257),
	    getNative = __webpack_require__(196);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}
	
	module.exports = createCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 257 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(258),
	    getNative = __webpack_require__(196);
	
	/** Native method references. */
	var Set = getNative(global, 'Set');
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');
	
	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;
	
	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}
	
	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;
	
	module.exports = SetCache;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 258 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(199);
	
	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}
	
	module.exports = cachePush;


/***/ },
/* 259 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(260),
	    isArguments = __webpack_require__(206),
	    isArray = __webpack_require__(207),
	    isArrayLike = __webpack_require__(201),
	    isObjectLike = __webpack_require__(200);
	
	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);
	
	  var index = -1,
	      length = array.length;
	
	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}
	
	module.exports = baseFlatten;


/***/ },
/* 260 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;
	
	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}
	
	module.exports = arrayPush;


/***/ },
/* 261 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(211);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties specified
	 * by `props`.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function pickByArray(object, props) {
	  object = toObject(object);
	
	  var index = -1,
	      length = props.length,
	      result = {};
	
	  while (++index < length) {
	    var key = props[index];
	    if (key in object) {
	      result[key] = object[key];
	    }
	  }
	  return result;
	}
	
	module.exports = pickByArray;


/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(240);
	
	/**
	 * A specialized version of `_.pick` which picks `object` properties `predicate`
	 * returns truthy for.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Object} Returns the new object.
	 */
	function pickByCallback(object, predicate) {
	  var result = {};
	  baseForIn(object, function(value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}
	
	module.exports = pickByCallback;


/***/ },
/* 263 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);
	
	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}
	
	module.exports = restParam;


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _lodashCollectionReject = __webpack_require__(184);
	
	var _lodashCollectionReject2 = _interopRequireDefault(_lodashCollectionReject);
	
	var _wrap = __webpack_require__(236);
	
	var _wrap2 = _interopRequireDefault(_wrap);
	
	function reject(predicate, collection) {
	  return _lodashCollectionReject2['default'](collection, predicate);
	}
	
	exports['default'] = _wrap2['default'](reject);
	module.exports = exports['default'];

/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _utilCurry = __webpack_require__(232);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	var _update2 = __webpack_require__(235);
	
	var _update3 = _interopRequireDefault(_update2);
	
	var _map = __webpack_require__(241);
	
	var _map2 = _interopRequireDefault(_map);
	
	var _utilSplitPath = __webpack_require__(183);
	
	var _utilSplitPath2 = _interopRequireDefault(_utilSplitPath);
	
	var wildcard = '*';
	
	function reducePath(acc, key) {
	  var _ref;
	
	  if (key === wildcard) {
	    return function (value) {
	      var _update;
	
	      return Object.prototype.hasOwnProperty.call(value, wildcard) ?
	      // If we actually have wildcard as a property, update that
	      _update3['default']((_update = {}, _update[wildcard] = acc, _update), value) :
	      // Otherwise map over all properties
	      _map2['default'](acc, value);
	    };
	  }
	
	  return (_ref = {}, _ref[key] = acc, _ref);
	}
	
	function updateIn(path, value, object) {
	  var parts = _utilSplitPath2['default'](path);
	  var updates = parts.reduceRight(reducePath, value);
	
	  return _update3['default'](updates, object);
	}
	
	exports['default'] = _utilCurry2['default'](updateIn);
	module.exports = exports['default'];

/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _update = __webpack_require__(235);
	
	var _update2 = _interopRequireDefault(_update);
	
	var _utilCurry = __webpack_require__(232);
	
	var _utilCurry2 = _interopRequireDefault(_utilCurry);
	
	function withDefault(defaultValue, updates, object) {
	  if (typeof object === 'undefined') {
	    return _update2['default'](updates, defaultValue);
	  }
	
	  return _update2['default'](updates, object);
	}
	
	exports['default'] = _utilCurry2['default'](withDefault);
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vMS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZGVtbzEvR2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdHdlZW4tdmFsdWUtZmFjdG9yaWVzLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL0F0b20uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9+L2ZseWQvfi9yYW1kYS9zcmMvY3VycnlOLmpzIiwid2VicGFjazovLy8uL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL34vZmx5ZC9+L3JhbWRhL3NyYy9pbnRlcm5hbC9fYXJpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL34vcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL34vcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeTIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL34vcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeU4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1kZXJpdmUvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZWxlZ2FudC1yZWFjdC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9lbGVnYW50LXJlYWN0L2xpYi9jcmVhdGUtZWxlZ2FudC1kZWNvcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9lbGVnYW50LXJlYWN0L2xpYi9zdGF0aWNzLmpzIiwid2VicGFjazovLy8uL34vZWxlZ2FudC1yZWFjdC9saWIvc2hhbGxvdy1lcXVhbC1wcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vMS9HYW1lT3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vMy9Sb2xsQnV0dG9uLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi91cGRlZXAvZGlzdC9jb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L2ZyZWV6ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L2lzLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3QvdXRpbC9zcGxpdFBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvY29sbGVjdGlvbi9yZWplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlGaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUNhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VNYXRjaGVzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJc01hdGNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJc0VxdWFsLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJc0VxdWFsRGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9lcXVhbEFycmF5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheVNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZXF1YWxCeVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9lcXVhbE9iamVjdHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TmF0aXZlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNOYXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0Z1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNPYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNPYmplY3RMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2lzQXJyYXlMaWtlLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldExlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNMZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvc2hpbUtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvbGFuZy9pc0FyZ3VtZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9vYmplY3Qva2V5c0luLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2xhbmcvaXNUeXBlZEFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3RvT2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2dldE1hdGNoRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pc1N0cmljdENvbXBhcmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvb2JqZWN0L3BhaXJzLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VNYXRjaGVzUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUdldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlU2xpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNLZXkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvYXJyYXkvbGFzdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC90b1BhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVRvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2JpbmRDYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC91dGlsaXR5L2lkZW50aXR5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL3V0aWxpdHkvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5RGVlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRmlsdGVyLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VFYWNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGb3JPd24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVCYXNlRm9yLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VFYWNoLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3QvdXRpbC9jdXJyeS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L2lmLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3QvaWZFbHNlLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3QvdXBkYXRlLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3Qvd3JhcC5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3V0aWwvaXNFbXB0eS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3V0aWwvZGVmYXVsdE9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9sYW5nL2lzUGxhaW5PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvckluLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3QvbWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2NvbGxlY3Rpb24vZm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheUVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlRm9yRWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9jb2xsZWN0aW9uL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9hcnJheU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWFwLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL29iamVjdC9tYXBWYWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlT2JqZWN0TWFwcGVyLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3Qvb21pdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9vYmplY3Qvb21pdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRGlmZmVyZW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9pbmRleE9mTmFOLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL2NhY2hlSW5kZXhPZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9TZXRDYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2xvZGFzaC9pbnRlcm5hbC9jYWNoZVB1c2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZsYXR0ZW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlQdXNoLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3BpY2tCeUFycmF5LmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2ludGVybmFsL3BpY2tCeUNhbGxiYWNrLmpzIiwid2VicGFjazovLy8uL34vbG9kYXNoL2Z1bmN0aW9uL3Jlc3RQYXJhbS5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3JlamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3VwZGVlcC9kaXN0L3VwZGF0ZUluLmpzIiwid2VicGFjazovLy8uL34vdXBkZWVwL2Rpc3Qvd2l0aERlZmF1bHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztrQ0FBK0IsQ0FBTzs7OztpQ0FDbkIsR0FBUTs7OztLQUVyQixHQUFHO2FBQUgsR0FBRzs7WUFBSCxHQUFHOzJCQUFILEdBQUc7O2dDQUFILEdBQUc7OztnQkFBSCxHQUFHOztZQUNELGtCQUFHO0FBQ1AsY0FDRTs7O1NBQ0U7O2FBQUcsSUFBSSxFQUFDLHlDQUF5QztXQUMvQztBQUNFLGtCQUFLLEVBQUUsRUFBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE1BQU0sRUFBQyxHQUFHLEVBQUU7QUFDdkUsZ0JBQUcsRUFBQyx3TkFBd047QUFDNU4sZ0JBQUcsRUFBQyxtQkFBbUI7QUFDdkIsNkJBQWdCLEVBQUMsdUVBQXVFLEdBQUc7VUFBSTtTQUNuRyx5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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RkFBc0YsYUFBYTtBQUNuRztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRGQUEyRixlQUFlO0FBQzFHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRGQUEyRixlQUFlO0FBQzFHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLFFBQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRGQUEyRixlQUFlO0FBQzFHO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxV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Q3BCLFlBQVcsT0FBTztBQUNsQixjQUFhLFNBQVM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUN6REE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFDOzs7Ozs7QUNuQkE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxrQkFBa0I7O0FBRS9GOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUM7Ozs7OztBQ2xEQTs7QUFFQTs7QUFFQSx1Q0FBc0MsdUNBQXVDLGtCQUFrQjs7QUFFL0Y7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDIiwiZmlsZSI6ImRlbW8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgRmxha2VzIGZyb20gJy4vR2FtZSc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9naWxib3gvcmVhY3QtaW1hdGlvblwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIGJvcmRlcjogMCwgekluZGV4OjEwMH19XG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2NhbW8uZ2l0aHVidXNlcmNvbnRlbnQuY29tL2U3YmJiMDUyMWIzOTdlZGJkNWZlNDNlN2Y3NjA3NTkzMzZiNWUwNWYvNjg3NDc0NzA3MzNhMmYyZjczMzMyZTYxNmQ2MTdhNmY2ZTYxNzc3MzJlNjM2ZjZkMmY2NzY5NzQ2ODc1NjIyZjcyNjk2MjYyNmY2ZTczMmY2NjZmNzI2YjZkNjU1ZjcyNjk2NzY4NzQ1ZjY3NzI2NTY1NmU1ZjMwMzAzNzMyMzAzMDJlNzA2ZTY3XCJcbiAgICAgICAgICAgIGFsdD1cIkZvcmsgbWUgb24gR2l0SHViXCJcbiAgICAgICAgICAgIGRhdGFDYW5vbmljYWxTcmM9XCJodHRwczovL3MzLmFtYXpvbmF3cy5jb20vZ2l0aHViL3JpYmJvbnMvZm9ya21lX3JpZ2h0X2dyZWVuXzAwNzIwMC5wbmdcIiAvPjwvYT5cbiAgICAgICAgPEZsYWtlcyAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblJlYWN0LnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJykpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9kZW1vMS9hcHAuanNcbiAqKi8iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7VGltZWxpbmUsIFRpbWVsaW5lciwgdHdlZW4sIGNvbWJpbmV9IGZyb20gJ3JlYWN0LWltYXRpb24nO1xuaW1wb3J0IHtwZXJjZW50LCB0cmFuc2xhdGUzZCwgc2NhbGUsIHRyYW5zbGF0ZVgsIHJvdGF0ZVl9IGZyb20gJ3JlYWN0LWltYXRpb24vdHdlZW4tdmFsdWUtZmFjdG9yaWVzJztcbmltcG9ydCBzdGF0ZWZ1bCBmcm9tICdyZWFjdC1zdGF0ZWZ1bC1zdHJlYW0nO1xuaW1wb3J0IHtkZXJpdmUsIHRyYWNrfSBmcm9tICdyZWFjdC1kZXJpdmUnO1xuaW1wb3J0IHtlbGVnYW50IGFzIG9wdGltaXplfSBmcm9tICdlbGVnYW50LXJlYWN0JztcbmltcG9ydCB7RWFzZXJ9IGZyb20gJ2Z1bmN0aW9uYWwtZWFzaW5nJztcbmltcG9ydCBHYW1lT3ZlciBmcm9tICcuL0dhbWVPdmVyJztcbmltcG9ydCB1IGZyb20gJ3VwZGVlcCc7XG5jb25zdCBpbW11dGFibGUgPSB1KHt9KTtcblxuUmVhY3QuaW5pdGlhbGl6ZVRvdWNoRXZlbnRzKHRydWUpO1xuXG5jb25zdCBlYXNlT3V0U2luZSA9IG5ldyBFYXNlcigpLnVzaW5nKCdvdXQtc2luZScpO1xuY29uc3QgZWFzZUluU2luZSA9IG5ldyBFYXNlcigpLnVzaW5nKCdpbi1zaW5lJyk7XG5jb25zdCBlYXNlSW5CYWNrID0gbmV3IEVhc2VyKCkudXNpbmcoJ2luLWJhY2snKS53aXRoUGFyYW1ldGVycygyLjgpO1xuY29uc3QgTUFYX0RST1BQRUQgPSAxMDA7XG5cbmNvbnN0IGZ1bGxWaWV3cG9ydFN0eWxlID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJywgaGVpZ2h0OiAnMTAwdmgnLCB3aWR0aDogJzEwMHZ3Jywgb3ZlcmZsb3c6ICdoaWRkZW4nLCBtaW5XaWR0aDogJzgwMHB4J1xufTtcblxuY29uc3QgZmxha2VJbWFnZXMgPSBbXCJodHRwOi8vaS5pbWd1ci5jb20vamJTVkZneS5wbmdcIixcbiAgICAgICAgICAgICAgICAgICAgIFwiaHR0cDovL2kuaW1ndXIuY29tL1RUMmxtTjQucG5nXCIsXG4gICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly9pLmltZ3VyLmNvbS9kbzg1ODltLnBuZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgXCJodHRwOi8vaS5pbWd1ci5jb20vM0J4RU84aS5wbmdcIl07XG5cbmNvbnN0IGNyZWF0ZUZsYWtlID0gaWQgPT5cbiAgKHtcbiAgICBpZCxcbiAgICBzaXplOiAyMiArIH5+KE1hdGgucmFuZG9tKCkgKiAzMCksXG4gICAgcm90YXRpb25TcGVlZDogTWF0aC5yYW5kb20oKSAqIDQwIC0gMjAsXG4gICAgcm90YXRlWDogfn4oTWF0aC5yYW5kb20oKSo1MCksXG4gICAgcm90YXRlWTogfn4oTWF0aC5yYW5kb20oKSozMiksXG4gICAgbGVmdDogfn4oTWF0aC5yYW5kb20oKSAqIDEwMCkgKyAnJScsXG4gICAgZHJpZnQ6IH5+KE1hdGgucmFuZG9tKCkgKiA0MCkgLSAxNSxcbiAgICBpbWFnZTogZmxha2VJbWFnZXNbfn4oZmxha2VJbWFnZXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSldLFxuICAgIGluY3JlbWVudDogMC4xNSArIE1hdGgucmFuZG9tKCkqMC4yLFxuICB9KTtcblxuY29uc3QgcGZmU291bmRzID0gWzEsMiwzXS5tYXAoaSA9PiBuZXcgQXVkaW8oYHNvdW5kcy9wZiR7aX0ubXAzYCkpO1xuY29uc3QgcGZmU291bmRzQ291bnQgPSBwZmZTb3VuZHMubGVuZ3RoO1xuY29uc3QgY3JyU291bmQgPSBuZXcgQXVkaW8oJ3NvdW5kcy9jcnIubXAzJyk7XG5jb25zdCBnYW1lT3ZlclNvdW5kID0gbmV3IEF1ZGlvKCdzb3VuZHMvZ2FtZW92ZXIubXAzJyk7XG5cbmNvbnN0IHJhbmRpID0gbGltaXQgPT4gfn4oTWF0aC5yYW5kb20oKSAqIGxpbWl0KTtcbmNvbnN0IHBsYXlSYW5kb21QZlNvdW5kID0gKCkgPT4gcGZmU291bmRzW3JhbmRpKHBmZlNvdW5kc0NvdW50KV0ucGxheSgpO1xuXG5jb25zdCBmbGFrZUhhc0lkID0gaWQgPT4gZmxha2UgPT4gZmxha2UuaWQgPT09IGlkO1xuY29uc3QgY29uY2F0ID0gbmV3SXRlbSA9PiBpdGVtcyA9PiBpdGVtcy5jb25jYXQobmV3SXRlbSk7XG5jb25zdCBsZW5ndGhJc0xlc3NUaGFuID0gbGVuZ3RoID0+IGl0ZW1zID0+IGl0ZW1zLmxlbmd0aCA8IGxlbmd0aDtcbmNvbnN0IGluY3JlbWVudCA9IHggPT4geCArIDE7XG5jb25zdCBkZWNyZW1lbnQgPSB4ID0+IHggLSAxO1xuXG5Ac3RhdGVmdWwoXG4gIGltbXV0YWJsZShcbiAgICB7IGZsYWtlczogW10sXG4gICAgICBkcm9wcGVkQ291bnQ6IDAsXG4gICAgICBnYW1lSXNPdmVyOiBmYWxzZSxcbiAgICAgIHNjb3JlOiAwXG4gICAgfSksXG4gIGVkaXQgPT4gKHtcbiAgICBhZGRGbGFrZTogbmV3Rmxha2UgPT4gZWRpdCh1KHtmbGFrZXM6IHUuaWYobGVuZ3RoSXNMZXNzVGhhbigyMSksY29uY2F0KG5ld0ZsYWtlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHJvcHBlZENvdW50OiBpbmNyZW1lbnQgfSkpLFxuICAgIHJlbW92ZUZsYWtlOiBmbGFrZUlkID0+IGVkaXQodSh7Zmxha2VzOiB1LnJlamVjdChmbGFrZUhhc0lkKGZsYWtlSWQpKSB9KSksXG4gICAgZXhwbG9kZUZsYWtlOiBpbmRleCA9PiBlZGl0KHUoe2ZsYWtlczogeyBbaW5kZXhdOiB7IGV4cGxvZGU6IHRydWUgfSB9IH0pKSxcbiAgICBwbGF5QWdhaW46ICgpID0+IGVkaXQodSh7Z2FtZUlzT3ZlcjogZmFsc2UsIHNjb3JlOiAwLCBmbGFrZXM6IFtdLCBkcm9wcGVkQ291bnQ6IDB9KSksXG4gICAgZ2FtZU92ZXI6ICgpID0+IGVkaXQodSh7Z2FtZUlzT3ZlcjogdHJ1ZX0pKSxcbiAgICBhZGRUb1Njb3JlOiBhbW91bnQgPT4gZWRpdCh1KHtzY29yZTogeCA9PiB4ICsgfn5hbW91bnQgfSkpLFxuICB9KSlcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge2dhbWVJc092ZXIsIGZsYWtlcywgc2NvcmV9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7cG9zaXRpb246ICdhYnNvbHV0ZScsIG1hcmdpbjogJzEwcHgnLCB1c2VyU2VsZWN0OiAnbm9uZSd9fT5cbiAgICAgICAgICB7c2NvcmUudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyhnYW1lSXNPdmVyICYmICFmbGFrZXMubGVuZ3RoKSA/XG4gICAgICAgICAgPEdhbWVPdmVyIGdhbWVPdmVyU291bmQ9e2dhbWVPdmVyU291bmR9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICAgICAgIDpcbiAgICAgICAgICA8Rmxha2VzIHsuLi50aGlzLnByb3BzfSAvPn1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBzaGFrZUtleWZyYW1lcyA9IHsgMDogMTAsIDU6IC04LCAxMDogNSwgMTU6IDB9O1xuXG5Ab3B0aW1pemUoe3N0YXRpY3M6IFsnc2NvcmUnXX0pIC8vIGNoYW5naW5nIHRoZSAnc2NvcmUnIHByb3Agd29uJ3QgY2F1c2UgcmUtcmVuZGVyXG5jbGFzcyBGbGFrZXMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7YWRkRmxha2UsIGdhbWVPdmVyfSA9IHRoaXMucHJvcHM7XG5cbiAgICAvLyB0aGVzZSBpZHMgYXJlIGFyYml0cmFyeSwgd2hhdCdzIGltcG9ydCBpcyB0aGF0IHRoZXkgYXJlIHVuaXF1ZVxuICAgIGxldCBsYXN0Rmxha2VJZCA9IDA7XG5cbiAgICAvLyBoZXJlIHdlIHJhbmRvbWx5IGNyZWF0ZSBuZXcgZmxha2VzIGV2ZXJ5IHNvIG9mdGVuXG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgIGlmIChsYXN0Rmxha2VJZCA+IE1BWF9EUk9QUEVEKSByZXR1cm4gZ2FtZU92ZXIoKTtcblxuICAgICAgYWRkRmxha2UoY3JlYXRlRmxha2UoKytsYXN0Rmxha2VJZCkpO1xuICAgICAgc2V0VGltZW91dCh0aWNrLCA0MDAgKyB+fihNYXRoLnJhbmRvbSgpICogNjAwKSk7XG4gICAgfVxuICAgIHRpY2soKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Zmxha2VzLCBleHBsb2RlRmxha2UsIHJlbW92ZUZsYWtlLCBhZGRUb1Njb3JlLCBkcm9wcGVkQ291bnQsIGxhc3RQb2ludHN9ID0gdGhpcy5wcm9wcztcblxuICAgIGNvbnN0IGNyZWF0ZUhhbmRsZVNsYXNoID0gKGV4cGxvZGUscGxheUZyb20scm90YXRpb25TcGVlZCxpbmRleCxpbmNyZW1lbnQsc2l6ZSkgPT4gZXZlbnQgPT4ge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoZXhwbG9kZSkgcmV0dXJuO1xuICAgICAgcGxheUZyb20odCA9PiBNYXRoLm1heCgwLCB0LTEwKSk7IC8vIHNoYWtlXG4gICAgICByb3RhdGlvblNwZWVkPjAgPyBwbGF5UmFuZG9tUGZTb3VuZCgpIDogY3JyU291bmQucGxheSgpO1xuICAgICAgZXhwbG9kZUZsYWtlKGluZGV4KTtcbiAgICAgIGFkZFRvU2NvcmUoMTAwMDAgKiByb3RhdGlvblNwZWVkICogaW5jcmVtZW50IC8gc2l6ZVxuICAgICAgICAgICAgICAgICAqIHR3ZWVuKGRyb3BwZWRDb3VudCwgezA6MSwgW01BWF9EUk9QUEVEXTo2fSwgZWFzZUluU2luZSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRpbWVsaW5lIGluaXRpYWxUaW1lPXsxNX0gbWF4PXsxNX0+XG4gICAgICB7KHt0aW1lLCBwbGF5RnJvbX0pID0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgdXNlclNlbGVjdDogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0d2Vlbih0aW1lLCBzaGFrZUtleWZyYW1lcyl9cHgpYCxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5mdWxsVmlld3BvcnRTdHlsZSB9fT5cblxuICAgICAgICAgIDxUcmFpbHMgLz5cblxuICAgICAgICAgIHtmbGFrZXMubWFwKCh7aWQsIGluY3JlbWVudCwgc2l6ZSwgcm90YXRlWCwgcm90YXRlWSwgcm90YXRpb25TcGVlZCwgbGVmdCwgZHJpZnQsIGltYWdlLCBleHBsb2RlfSwgaW5kZXgpID0+XG4gICAgICAgICAgICA8VGltZWxpbmVcbiAgICAgICAgICAgICAgaW5jcmVtZW50PXt0d2Vlbihkcm9wcGVkQ291bnQsIHswOmluY3JlbWVudCwgW01BWF9EUk9QUEVEXTogaW5jcmVtZW50KjJ9LCBlYXNlSW5TaW5lKX1cbiAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgcGxheU9uTW91bnQ9e3RydWV9XG4gICAgICAgICAgICAgIG1heD17MTA1fVxuICAgICAgICAgICAgICBvbkNvbXBsZXRlPXsoKSA9PiByZW1vdmVGbGFrZShpZCwgZXhwbG9kZSl9PlxuICAgICAgICAgICAgeyh7dGltZX0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaGFuZGxlU2xhc2ggPSBjcmVhdGVIYW5kbGVTbGFzaChleHBsb2RlLHBsYXlGcm9tLHJvdGF0aW9uU3BlZWQsaW5kZXgsaW5jcmVtZW50LHNpemUpO1xuICAgICAgICAgICAgICByZXR1cm4gPGRpdlxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyPXtoYW5kbGVTbGFzaH1cbiAgICAgICAgICAgICAgICBvblRvdWNoTW92ZT17aGFuZGxlU2xhc2h9XG4gICAgICAgICAgICAgICAga2V5PXtpZH1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgICAgIGxlZnQsXG4gICAgICAgICAgICAgICAgICB0b3A6IC1zaXplLFxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3R3ZWVuKHRpbWUsIHswOjAsIDEwNTpkcmlmdH0pfXB4KSBgICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRyYW5zbGF0ZVkoJHt0aW1lfXZoKSByb3RhdGVYKCR7cm90YXRlWH1kZWcpIHJvdGF0ZVkoJHtyb3RhdGVZfWRlZylgIH19PlxuXG4gICAgICAgICAgICAgICAgPEZsYWtlXG4gICAgICAgICAgICAgICAgICByb3RhdGU9e3RpbWUqcm90YXRpb25TcGVlZH1cbiAgICAgICAgICAgICAgICAgIG9uRXhwbG9kZWQ9eygpID0+IHJlbW92ZUZsYWtlKGlkLCBleHBsb2RlKX1cbiAgICAgICAgICAgICAgICAgIHsuLi57c2l6ZSwgaW1hZ2UsIGV4cGxvZGV9fSAvPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfX08L1RpbWVsaW5lPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9PC9UaW1lbGluZT5cbiAgICApXG4gIH1cbn1cblxuQG9wdGltaXplICAgLy8gYXV0b21hdGljYWxseSBvcHRpbWl6ZSBzaG91bGRDb21wb25lbnRVcGRhdGVcbkBzdGF0ZWZ1bChcbiAgaW1tdXRhYmxlKHtcbiAgICB0cmFpbHM6IHt9LFxuICAgIHRyYWlsQ291bnQ6IDBcbiAgfSksXG4gIGVkaXQgPT4gKHtcbiAgICBhZGRUcmFpbDogKHgseSkgPT4gZWRpdChzdGF0ZSA9PiB1KHsgdHJhaWxzOiB7IFtzdGF0ZS50cmFpbENvdW50XToge3gseX0gfSwgdHJhaWxDb3VudDogaW5jcmVtZW50IH0sIHN0YXRlKSksXG4gICAgcmVtb3ZlVHJhaWw6IGlkID0+IGVkaXQodSh7IHRyYWlsczogdS5vbWl0KGAke2lkfWApIH0pKVxuICB9KVxuKVxuY2xhc3MgVHJhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHsgIC8vIG1vdXNlIHRyYWlsc1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3RyYWlscywgYWRkVHJhaWwsIHJlbW92ZVRyYWlsfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gPGRpdiBvbk1vdXNlTW92ZT17KHtwYWdlWCwgcGFnZVl9KSA9PiBhZGRUcmFpbChwYWdlWCwgcGFnZVkpfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Li4uZnVsbFZpZXdwb3J0U3R5bGV9fT5cblxuICAgICAge09iamVjdC5rZXlzKHRyYWlscykubWFwKGtleSA9PiB7XG4gICAgICAgIGNvbnN0IHt4LHl9ID0gdHJhaWxzW2tleV07XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFRpbWVsaW5lIGtleT17a2V5fSBwbGF5T25Nb3VudD17dHJ1ZX0gbWF4PXs1fSBvbkNvbXBsZXRlPXsoKSA9PiByZW1vdmVUcmFpbChrZXkpfT5cbiAgICAgICAgICB7KHt0aW1lfSkgPT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBjdXJzb3I6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1MCUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnNXB4JyxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1cHgnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM3N2FhNzcnLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZSgke3h9cHgsICR7eX1weClgIH19IC8+XG4gICAgICAgICAgfTwvVGltZWxpbmU+KVxuICAgICAgfSl9XG5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG4vLyB0aGlzIGFycmF5IHdpbGwgYmUgdXNlZCB0byBjb25zdHJ1Y3Qgc3R5bGVzXG4vLyBmb3IgZXhwbG9kaW5nIHNub3dmbGFrZSBmcmFnbWVudHMuIEVhY2ggZXhwbG9kaW5nXG4vLyBzbm93Zmxha2UgaGFzIDQgZnJhZ21lbnRzLlxuY29uc3QgZnJhZ21lbnRzID0gWzEsMiwzLDRdLm1hcChpbmRleCA9PiAoe1xuICBpbmRleCxcbiAgcG9zVjogaW5kZXggPCAzID8gJ3RvcCc6J2JvdHRvbScsXG4gIHBvc0g6IGluZGV4ICUgMiA/ICdsZWZ0JzoncmlnaHQnLFxuICBoOiBpbmRleCA8IDMgPyAtMToxLCAgLy8gZGlyZWN0aW9uIG9mIGV4cGxvc2lvbiBhbG9uZyBYLWF4aXNcbiAgdjogaW5kZXggJSAyID8gMTotMSAgIC8vIGRpcmVjdGlvbiBvZiBleHBsb3Npb24gYWxvbmcgWS1heGlzXG59KSk7XG5cbkBvcHRpbWl6ZVxuY2xhc3MgRmxha2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge3JvdGF0ZSwgc2l6ZSwgaW1hZ2UsIGV4cGxvZGUsIG9uRXhwbG9kZWR9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZXhwbG9kZSkgcmV0dXJuICggIC8vIHJlZ3VsYXIgc25vd2ZsYWtlOlxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zZm9ybTogYHJvdGF0ZSgke3JvdGF0ZX1kZWcpYCxcbiAgICAgICAgICB3aWR0aDogc2l6ZSxcbiAgICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7aW1hZ2V9KWAgfX0gLz4pXG5cbiAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUvMjtcblxuICAgIHJldHVybiAoICAvLyBleHBsb2Rpbmcgc25vd2ZsYWtlOlxuICAgICAgPFRpbWVsaW5lIHBsYXlPbk1vdW50PXt0cnVlfSBtYXg9ezYwfSBvbkNvbXBsZXRlPXtvbkV4cGxvZGVkfT5cbiAgICAgIHsoe3RpbWV9KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjYWxlQW1vdW50ID0gdHdlZW4odGltZSwgezA6MSwgNToxLjMsIDYwOjB9KTtcbiAgICAgICAgcmV0dXJuIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0cmFuc2Zvcm06IGByb3RhdGUoJHtyb3RhdGV9ZGVnKSBzY2FsZSgke3NjYWxlQW1vdW50fSwgJHtzY2FsZUFtb3VudH0pYCxcbiAgICAgICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBzaXplfX0+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7ZnJhZ21lbnRzLm1hcCgoe2luZGV4LCBwb3NWLCBwb3NILCBoLCB2fSkgPT5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBoYWxmU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBoYWxmU2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgW3Bvc1ZdOiAwLFxuICAgICAgICAgICAgICAgICAgICBbcG9zSF06IDAsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBgJHtzaXplfXB4ICR7c2l6ZX1weGAsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogYCR7cG9zVn0gJHtwb3NIfWAsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2ltYWdlfSlgLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB0d2Vlbih0aW1lLCB7MDogMSwgNjA6IDB9LCBlYXNlT3V0U2luZSksXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHdlZW4odGltZSxcbiAgICAgICAgICAgICAgICAgICAgICB7IDA6IGNvbWJpbmUodHJhbnNsYXRlM2QoMCwwLDApLCBzY2FsZSgxLDEpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgNjA6IGNvbWJpbmUodHJhbnNsYXRlM2QoNTAqaCw1MCp2LDEwMCksIHNjYWxlKDAsMCkpfSwgZWFzZU91dFNpbmUpLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IHR3ZWVuKHRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgezA6cGVyY2VudCgwKSwgNjA6cGVyY2VudCg1MCl9LCBlYXNlT3V0U2luZSksXG4gICAgICAgICAgICAgICAgICB9fSAvPil9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+fVxuICAgICAgfTwvVGltZWxpbmU+KVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL2V4YW1wbGVzL2RlbW8xL0dhbWUuanNcbiAqKi8iLCJpbXBvcnQge2NyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5fSBmcm9tICcuL3R3ZWVuJztcblxuZXhwb3J0IGNvbnN0IHJnYiA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGByZ2IoJHt2YWx1ZS5qb2luKCcsJyl9KWApO1xuZXhwb3J0IGNvbnN0IHJnYmEgPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgcmdiYSgke3ZhbHVlLmpvaW4oJywnKX0pYCk7XG5leHBvcnQgY29uc3Qgc2NhbGUgPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgc2NhbGUoJHt2YWx1ZS5qb2luKCcsJyl9KWApO1xuZXhwb3J0IGNvbnN0IGRlZyA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGAke3ZhbHVlfWRlZ2ApO1xuZXhwb3J0IGNvbnN0IGdyYWQgPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgJHt2YWx1ZX1ncmFkYCk7XG5leHBvcnQgY29uc3QgcmFkID0gY3JlYXRlVHdlZW5WYWx1ZUZhY3RvcnkodmFsdWUgPT4gYCR7dmFsdWV9cmFkYCk7XG5leHBvcnQgY29uc3QgdHVybiA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGAke3ZhbHVlfXR1cm5gKTtcbmV4cG9ydCBjb25zdCByb3RhdGUgPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgcm90YXRlKCR7dmFsdWV9KWAsIGRlZyk7XG5leHBvcnQgY29uc3Qgcm90YXRlWCA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGByb3RhdGVYKCR7dmFsdWV9KWAsIGRlZyk7XG5leHBvcnQgY29uc3Qgcm90YXRlWSA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGByb3RhdGVZKCR7dmFsdWV9KWAsIGRlZyk7XG5leHBvcnQgY29uc3Qgcm90YXRlWiA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGByb3RhdGVaKCR7dmFsdWV9KWAsIGRlZyk7XG5leHBvcnQgY29uc3Qgc2tld1ggPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgc2tld1goJHt2YWx1ZX0pYCwgZGVnKTtcbmV4cG9ydCBjb25zdCBza2V3WSA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGBza2V3WSgke3ZhbHVlfSlgLCBkZWcpO1xuZXhwb3J0IGNvbnN0IHB4ID0gY3JlYXRlVHdlZW5WYWx1ZUZhY3RvcnkodmFsdWUgPT4gYCR7dmFsdWV9cHhgKTtcbmV4cG9ydCBjb25zdCBlbSA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGAke3ZhbHVlfWVtYCk7XG5leHBvcnQgY29uc3QgdncgPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgJHt2YWx1ZX12d2ApO1xuZXhwb3J0IGNvbnN0IHZoID0gY3JlYXRlVHdlZW5WYWx1ZUZhY3RvcnkodmFsdWUgPT4gYCR7dmFsdWV9dmhgKTtcbmV4cG9ydCBjb25zdCBwZXJjZW50ID0gY3JlYXRlVHdlZW5WYWx1ZUZhY3RvcnkodmFsdWUgPT4gYCR7dmFsdWV9JWApO1xuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZVggPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgdHJhbnNsYXRlWCgke3ZhbHVlfSlgLCBweCk7XG5leHBvcnQgY29uc3QgdHJhbnNsYXRlWSA9IGNyZWF0ZVR3ZWVuVmFsdWVGYWN0b3J5KHZhbHVlID0+IGB0cmFuc2xhdGVZKCR7dmFsdWV9KWAsIHB4KTtcbmV4cG9ydCBjb25zdCB0cmFuc2xhdGUgPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgdHJhbnNsYXRlKCR7dmFsdWUuam9pbignLCcpfSlgLCBweCk7XG5leHBvcnQgY29uc3QgdHJhbnNsYXRlM2QgPSBjcmVhdGVUd2VlblZhbHVlRmFjdG9yeSh2YWx1ZSA9PiBgdHJhbnNsYXRlM2QoJHt2YWx1ZS5qb2luKCcsJyl9KWAsIHB4KTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3R3ZWVuLXZhbHVlLWZhY3Rvcmllcy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94LCBfeDIsIF94MykgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeCwgcHJvcGVydHkgPSBfeDIsIHJlY2VpdmVyID0gX3gzOyBkZXNjID0gcGFyZW50ID0gZ2V0dGVyID0gdW5kZWZpbmVkOyBfYWdhaW4gPSBmYWxzZTsgaWYgKG9iamVjdCA9PT0gbnVsbCkgb2JqZWN0ID0gRnVuY3Rpb24ucHJvdG90eXBlOyB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBwcm9wZXJ0eSk7IGlmIChkZXNjID09PSB1bmRlZmluZWQpIHsgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpOyBpZiAocGFyZW50ID09PSBudWxsKSB7IHJldHVybiB1bmRlZmluZWQ7IH0gZWxzZSB7IF94ID0gcGFyZW50OyBfeDIgPSBwcm9wZXJ0eTsgX3gzID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZXhwb3J0c1snZGVmYXVsdCddID0gc3RhdGVmdWw7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbnZhciBfcmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuXG52YXIgX3JlYWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0KTtcblxudmFyIF9BdG9tID0gcmVxdWlyZSgnLi9BdG9tJyk7XG5cbnZhciBfQXRvbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9BdG9tKTtcblxudmFyIF9mbHlkID0gcmVxdWlyZSgnZmx5ZCcpO1xuXG5mdW5jdGlvbiBzdGF0ZWZ1bChpbml0aWFsU3RhdGUsIGVkaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChEZWNvcmF0ZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gKGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHMoU3RhdGVmdWxEZWNvcmF0b3IsIF9Db21wb25lbnQpO1xuXG4gICAgICBfY3JlYXRlQ2xhc3MoU3RhdGVmdWxEZWNvcmF0b3IsIG51bGwsIFt7XG4gICAgICAgIGtleTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdTdGF0ZWZ1bCgnICsgZ2V0RGlzcGxheU5hbWUoRGVjb3JhdGVkQ29tcG9uZW50KSArICcpJyxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdEZWNvcmF0ZWRDb21wb25lbnQnLFxuICAgICAgICB2YWx1ZTogRGVjb3JhdGVkQ29tcG9uZW50LFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICB9XSk7XG5cbiAgICAgIGZ1bmN0aW9uIFN0YXRlZnVsRGVjb3JhdG9yKHByb3BzLCBjb250ZXh0KSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0ZWZ1bERlY29yYXRvcik7XG5cbiAgICAgICAgX2dldChPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RhdGVmdWxEZWNvcmF0b3IucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuY2FsbCh0aGlzLCBwcm9wcywgY29udGV4dCk7XG5cbiAgICAgICAgdmFyIHN0YXRlID0gdHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IGluaXRpYWxTdGF0ZShwcm9wcywgY29udGV4dCkgOiBpbml0aWFsU3RhdGU7XG5cbiAgICAgICAgdmFyIGF0b20gPSBuZXcgX0F0b20yWydkZWZhdWx0J10oc3RhdGUpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IHN0YXRlOiBzdGF0ZSwgYXRvbTogYXRvbSB9O1xuXG4gICAgICAgIHRoaXMuZWRpdCA9IHt9O1xuXG4gICAgICAgIGlmIChlZGl0KSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBlZGl0ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5lZGl0ID0gX2RlZmluZVByb3BlcnR5KHt9LCBlZGl0LCBhdG9tLnVwZGF0ZVN0YXRlKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBlZGl0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmVkaXQgPSBlZGl0KGF0b20udXBkYXRlU3RhdGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoU3RhdGVmdWxEZWNvcmF0b3IsIFt7XG4gICAgICAgIGtleTogJ2NvbXBvbmVudFdpbGxNb3VudCcsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgIHZhciBhdG9tID0gdGhpcy5zdGF0ZS5hdG9tO1xuXG4gICAgICAgICAgLy8gY29ubmVjdCBhdG9tIHVwZGF0ZXMgdG8gY29tcG9uZW50J3Mgc3RhdGVcbiAgICAgICAgICAoMCwgX2ZseWQub24pKGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldFN0YXRlKHsgc3RhdGU6IHN0YXRlIH0pO1xuICAgICAgICAgIH0sIGF0b20uZGlkU2V0U3RhdGUkKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnREaWRVbm1vdW50JyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVubW91bnQoKSB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5hdG9tLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHZhciBfc3RhdGUgPSB0aGlzLnN0YXRlO1xuICAgICAgICAgIHZhciBhdG9tID0gX3N0YXRlLmF0b207XG4gICAgICAgICAgdmFyIHN0YXRlID0gX3N0YXRlLnN0YXRlO1xuXG4gICAgICAgICAgcmV0dXJuIF9yZWFjdDJbJ2RlZmF1bHQnXS5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICAgICAgYXRvbTogYXRvbVxuICAgICAgICAgIH0sIHRoaXMucHJvcHMsIHN0YXRlLCB0aGlzLmVkaXQpKTtcbiAgICAgICAgfVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gU3RhdGVmdWxEZWNvcmF0b3I7XG4gICAgfSkoX3JlYWN0LkNvbXBvbmVudCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3Qtc3RhdGVmdWwtc3RyZWFtL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbnZhciBfZmx5ZCA9IHJlcXVpcmUoJ2ZseWQnKTtcblxudmFyIEF0b20gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBBdG9tKHN0YXRlKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEF0b20pO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuXG4gICAgLy8gZGlyZWN0bHktdXBkYXRlZCBzdGF0ZSwgdXNlZCB0byB1cGRhdGUgXCJ3YXRjaGVyXCIgQXBwIGNvbXBvbmVudFxuICAgIHRoaXMuZGlkU2V0U3RhdGUkID0gKDAsIF9mbHlkLnN0cmVhbSkoKTtcblxuICAgIC8vIHVzZWQgdG8gaW5kaWNhdGUgXCJ1c2VyXCIgdXBkYXRlXG4gICAgdGhpcy5kaWRVcGRhdGVTdGF0ZSQgPSAoMCwgX2ZseWQuc3RyZWFtKSgpO1xuXG4gICAgdGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldFN0YXRlID0gdGhpcy5nZXRTdGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2lsZW50bHlVcGRhdGVTdGF0ZSA9IHRoaXMuc2lsZW50bHlVcGRhdGVTdGF0ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKEF0b20sIFt7XG4gICAga2V5OiAnX3NldFN0YXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gX3NldFN0YXRlKHN0YXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5kaWRTZXRTdGF0ZSQodGhpcy5zdGF0ZSA9IHN0YXRlKS52YWw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2lsZW50bHlVcGRhdGVTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNpbGVudGx5VXBkYXRlU3RhdGUodHJhbnNmb3JtKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2V0U3RhdGUodHJhbnNmb3JtKHRoaXMuc3RhdGUpKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVN0YXRlKHRyYW5zZm9ybSkge1xuICAgICAgcmV0dXJuIHRoaXMuZGlkVXBkYXRlU3RhdGUkKHRoaXMuX3NldFN0YXRlKHRyYW5zZm9ybSh0aGlzLnN0YXRlKSkpLnZhbDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRTdGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFN0YXRlKCkge1xuICAgICAgcmV0dXJuIHRoaXMuc3RhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZGVzdHJveScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICB0aGlzLnN0YXRlID0gbnVsbDtcbiAgICAgIHRoaXMuZGlkU2V0U3RhdGUkLmVuZCh0cnVlKTtcbiAgICAgIHRoaXMuZGlkVXBkYXRlU3RhdGUkLmVuZCh0cnVlKTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQXRvbTtcbn0pKCk7XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IEF0b207XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vQXRvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBjdXJyeU4gPSByZXF1aXJlKCdyYW1kYS9zcmMvY3VycnlOJyk7XG5cbid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuICEhKG9iaiAmJiBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNhbGwgJiYgb2JqLmFwcGx5KTtcbn1cblxuLy8gR2xvYmFsc1xudmFyIHRvVXBkYXRlID0gW107XG52YXIgaW5TdHJlYW07XG5cbmZ1bmN0aW9uIG1hcChmLCBzKSB7XG4gIHJldHVybiBzdHJlYW0oW3NdLCBmdW5jdGlvbihzZWxmKSB7IHNlbGYoZihzLnZhbCkpOyB9KTtcbn1cblxuZnVuY3Rpb24gb24oZiwgcykge1xuICBzdHJlYW0oW3NdLCBmdW5jdGlvbigpIHsgZihzLnZhbCk7IH0pO1xufVxuXG5mdW5jdGlvbiBib3VuZE1hcChmKSB7IHJldHVybiBtYXAoZiwgdGhpcyk7IH1cblxudmFyIHNjYW4gPSBjdXJyeU4oMywgZnVuY3Rpb24oZiwgYWNjLCBzKSB7XG4gIHZhciBucyA9IHN0cmVhbShbc10sIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAoYWNjID0gZihhY2MsIHMoKSkpO1xuICB9KTtcbiAgaWYgKCFucy5oYXNWYWwpIG5zKGFjYyk7XG4gIHJldHVybiBucztcbn0pO1xuXG52YXIgbWVyZ2UgPSBjdXJyeU4oMiwgZnVuY3Rpb24oczEsIHMyKSB7XG4gIHZhciBzID0gaW1tZWRpYXRlKHN0cmVhbShbczEsIHMyXSwgZnVuY3Rpb24obiwgY2hhbmdlZCkge1xuICAgIHJldHVybiBjaGFuZ2VkWzBdID8gY2hhbmdlZFswXSgpXG4gICAgICAgICA6IHMxLmhhc1ZhbCAgPyBzMSgpXG4gICAgICAgICAgICAgICAgICAgICAgOiBzMigpO1xuICB9KSk7XG4gIGVuZHNPbihzdHJlYW0oW3MxLmVuZCwgczIuZW5kXSwgZnVuY3Rpb24oc2VsZiwgY2hhbmdlZCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9KSwgcyk7XG4gIHJldHVybiBzO1xufSk7XG5cbmZ1bmN0aW9uIGFwKHMyKSB7XG4gIHZhciBzMSA9IHRoaXM7XG4gIHJldHVybiBzdHJlYW0oW3MxLCBzMl0sIGZ1bmN0aW9uKCkgeyByZXR1cm4gczEoKShzMigpKTsgfSk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxEZXBzTm90TWV0KHN0cmVhbSkge1xuICBzdHJlYW0uZGVwc01ldCA9IHN0cmVhbS5kZXBzLmV2ZXJ5KGZ1bmN0aW9uKHMpIHtcbiAgICByZXR1cm4gcy5oYXNWYWw7XG4gIH0pO1xuICByZXR1cm4gIXN0cmVhbS5kZXBzTWV0O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdHJlYW0ocykge1xuICBpZiAoKHMuZGVwc01ldCAhPT0gdHJ1ZSAmJiBpbml0aWFsRGVwc05vdE1ldChzKSkgfHxcbiAgICAgIChzLmVuZCAhPT0gdW5kZWZpbmVkICYmIHMuZW5kLnZhbCA9PT0gdHJ1ZSkpIHJldHVybjtcbiAgaWYgKGluU3RyZWFtICE9PSB1bmRlZmluZWQpIHtcbiAgICB0b1VwZGF0ZS5wdXNoKHMpO1xuICAgIHJldHVybjtcbiAgfVxuICBpblN0cmVhbSA9IHM7XG4gIHZhciByZXR1cm5WYWwgPSBzLmZuKHMsIHMuZGVwc0NoYW5nZWQpO1xuICBpZiAocmV0dXJuVmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICBzKHJldHVyblZhbCk7XG4gIH1cbiAgaW5TdHJlYW0gPSB1bmRlZmluZWQ7XG4gIGlmIChzLmRlcHNDaGFuZ2VkICE9PSB1bmRlZmluZWQpIHMuZGVwc0NoYW5nZWQgPSBbXTtcbiAgcy5zaG91bGRVcGRhdGUgPSBmYWxzZTtcbiAgaWYgKGZsdXNoaW5nID09PSBmYWxzZSkgZmx1c2hVcGRhdGUoKTtcbn1cblxudmFyIG9yZGVyID0gW107XG52YXIgb3JkZXJOZXh0SWR4ID0gLTE7XG5cbmZ1bmN0aW9uIGZpbmREZXBzKHMpIHtcbiAgdmFyIGksIGxpc3RlbmVycyA9IHMubGlzdGVuZXJzO1xuICBpZiAocy5xdWV1ZWQgPT09IGZhbHNlKSB7XG4gICAgcy5xdWV1ZWQgPSB0cnVlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyArK2kpIHtcbiAgICAgIGZpbmREZXBzKGxpc3RlbmVyc1tpXSk7XG4gICAgfVxuICAgIG9yZGVyWysrb3JkZXJOZXh0SWR4XSA9IHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlRGVwcyhzKSB7XG4gIHZhciBpLCBvLCBsaXN0LCBsaXN0ZW5lcnMgPSBzLmxpc3RlbmVycztcbiAgZm9yIChpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7ICsraSkge1xuICAgIGxpc3QgPSBsaXN0ZW5lcnNbaV07XG4gICAgaWYgKGxpc3QuZW5kID09PSBzKSB7XG4gICAgICBlbmRTdHJlYW0obGlzdCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChsaXN0LmRlcHNDaGFuZ2VkICE9PSB1bmRlZmluZWQpIGxpc3QuZGVwc0NoYW5nZWQucHVzaChzKTtcbiAgICAgIGxpc3Quc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGZpbmREZXBzKGxpc3QpO1xuICAgIH1cbiAgfVxuICBmb3IgKDsgb3JkZXJOZXh0SWR4ID49IDA7IC0tb3JkZXJOZXh0SWR4KSB7XG4gICAgbyA9IG9yZGVyW29yZGVyTmV4dElkeF07XG4gICAgaWYgKG8uc2hvdWxkVXBkYXRlID09PSB0cnVlKSB1cGRhdGVTdHJlYW0obyk7XG4gICAgby5xdWV1ZWQgPSBmYWxzZTtcbiAgfVxufVxuXG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hVcGRhdGUoKSB7XG4gIGZsdXNoaW5nID0gdHJ1ZTtcbiAgd2hpbGUgKHRvVXBkYXRlLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgcyA9IHRvVXBkYXRlLnNoaWZ0KCk7XG4gICAgaWYgKHMudmFscy5sZW5ndGggPiAwKSBzLnZhbCA9IHMudmFscy5zaGlmdCgpO1xuICAgIHVwZGF0ZURlcHMocyk7XG4gIH1cbiAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNTdHJlYW0oc3RyZWFtKSB7XG4gIHJldHVybiBpc0Z1bmN0aW9uKHN0cmVhbSkgJiYgJ2hhc1ZhbCcgaW4gc3RyZWFtO1xufVxuXG5mdW5jdGlvbiBzdHJlYW1Ub1N0cmluZygpIHtcbiAgcmV0dXJuICdzdHJlYW0oJyArIHRoaXMudmFsICsgJyknO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVTdHJlYW1WYWx1ZShzLCBuKSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQgJiYgbiAhPT0gbnVsbCAmJiBpc0Z1bmN0aW9uKG4udGhlbikpIHtcbiAgICBuLnRoZW4ocyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIHMudmFsID0gbjtcbiAgcy5oYXNWYWwgPSB0cnVlO1xuICBpZiAoaW5TdHJlYW0gPT09IHVuZGVmaW5lZCkge1xuICAgIGZsdXNoaW5nID0gdHJ1ZTtcbiAgICB1cGRhdGVEZXBzKHMpO1xuICAgIGlmICh0b1VwZGF0ZS5sZW5ndGggPiAwKSBmbHVzaFVwZGF0ZSgpOyBlbHNlIGZsdXNoaW5nID0gZmFsc2U7XG4gIH0gZWxzZSBpZiAoaW5TdHJlYW0gPT09IHMpIHtcbiAgICBtYXJrTGlzdGVuZXJzKHMsIHMubGlzdGVuZXJzKTtcbiAgfSBlbHNlIHtcbiAgICBzLnZhbHMucHVzaChuKTtcbiAgICB0b1VwZGF0ZS5wdXNoKHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1hcmtMaXN0ZW5lcnMocywgbGlzdHMpIHtcbiAgdmFyIGksIGxpc3Q7XG4gIGZvciAoaSA9IDA7IGkgPCBsaXN0cy5sZW5ndGg7ICsraSkge1xuICAgIGxpc3QgPSBsaXN0c1tpXTtcbiAgICBpZiAobGlzdC5lbmQgIT09IHMpIHtcbiAgICAgIGlmIChsaXN0LmRlcHNDaGFuZ2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbGlzdC5kZXBzQ2hhbmdlZC5wdXNoKHMpO1xuICAgICAgfVxuICAgICAgbGlzdC5zaG91bGRVcGRhdGUgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbmRTdHJlYW0obGlzdCk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0cmVhbSgpIHtcbiAgZnVuY3Rpb24gcyhuKSB7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gKHVwZGF0ZVN0cmVhbVZhbHVlKHMsIG4pLCBzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHMudmFsO1xuICB9XG4gIHMuaGFzVmFsID0gZmFsc2U7XG4gIHMudmFsID0gdW5kZWZpbmVkO1xuICBzLnZhbHMgPSBbXTtcbiAgcy5saXN0ZW5lcnMgPSBbXTtcbiAgcy5xdWV1ZWQgPSBmYWxzZTtcbiAgcy5lbmQgPSB1bmRlZmluZWQ7XG5cbiAgcy5tYXAgPSBib3VuZE1hcDtcbiAgcy5hcCA9IGFwO1xuICBzLm9mID0gc3RyZWFtO1xuICBzLnRvU3RyaW5nID0gc3RyZWFtVG9TdHJpbmc7XG5cbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIGFkZExpc3RlbmVycyhkZXBzLCBzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7ICsraSkge1xuICAgIGRlcHNbaV0ubGlzdGVuZXJzLnB1c2gocyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlRGVwZW5kZW50U3RyZWFtKGRlcHMsIGZuKSB7XG4gIHZhciBzID0gY3JlYXRlU3RyZWFtKCk7XG4gIHMuZm4gPSBmbjtcbiAgcy5kZXBzID0gZGVwcztcbiAgcy5kZXBzTWV0ID0gZmFsc2U7XG4gIHMuZGVwc0NoYW5nZWQgPSBmbi5sZW5ndGggPiAxID8gW10gOiB1bmRlZmluZWQ7XG4gIHMuc2hvdWxkVXBkYXRlID0gZmFsc2U7XG4gIGFkZExpc3RlbmVycyhkZXBzLCBzKTtcbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIGltbWVkaWF0ZShzKSB7XG4gIGlmIChzLmRlcHNNZXQgPT09IGZhbHNlKSB7XG4gICAgcy5kZXBzTWV0ID0gdHJ1ZTtcbiAgICB1cGRhdGVTdHJlYW0ocyk7XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHMsIGxpc3RlbmVycykge1xuICB2YXIgaWR4ID0gbGlzdGVuZXJzLmluZGV4T2Yocyk7XG4gIGxpc3RlbmVyc1tpZHhdID0gbGlzdGVuZXJzW2xpc3RlbmVycy5sZW5ndGggLSAxXTtcbiAgbGlzdGVuZXJzLmxlbmd0aC0tO1xufVxuXG5mdW5jdGlvbiBkZXRhY2hEZXBzKHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzLmRlcHMubGVuZ3RoOyArK2kpIHtcbiAgICByZW1vdmVMaXN0ZW5lcihzLCBzLmRlcHNbaV0ubGlzdGVuZXJzKTtcbiAgfVxuICBzLmRlcHMubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gZW5kU3RyZWFtKHMpIHtcbiAgaWYgKHMuZGVwcyAhPT0gdW5kZWZpbmVkKSBkZXRhY2hEZXBzKHMpO1xuICBpZiAocy5lbmQgIT09IHVuZGVmaW5lZCkgZGV0YWNoRGVwcyhzLmVuZCk7XG59XG5cbmZ1bmN0aW9uIGVuZHNPbihlbmRTLCBzKSB7XG4gIGRldGFjaERlcHMocy5lbmQpO1xuICBlbmRTLmxpc3RlbmVycy5wdXNoKHMuZW5kKTtcbiAgcy5lbmQuZGVwcy5wdXNoKGVuZFMpO1xuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gdHJ1ZUZuKCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG5mdW5jdGlvbiBzdHJlYW0oYXJnLCBmbikge1xuICB2YXIgaSwgcywgZGVwcywgZGVwRW5kU3RyZWFtcztcbiAgdmFyIGVuZFN0cmVhbSA9IGNyZWF0ZURlcGVuZGVudFN0cmVhbShbXSwgdHJ1ZUZuKTtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgZGVwcyA9IFtdOyBkZXBFbmRTdHJlYW1zID0gW107XG4gICAgZm9yIChpID0gMDsgaSA8IGFyZy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKGFyZ1tpXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGRlcHMucHVzaChhcmdbaV0pO1xuICAgICAgICBpZiAoYXJnW2ldLmVuZCAhPT0gdW5kZWZpbmVkKSBkZXBFbmRTdHJlYW1zLnB1c2goYXJnW2ldLmVuZCk7XG4gICAgICB9XG4gICAgfVxuICAgIHMgPSBjcmVhdGVEZXBlbmRlbnRTdHJlYW0oZGVwcywgZm4pO1xuICAgIHMuZW5kID0gZW5kU3RyZWFtO1xuICAgIGVuZFN0cmVhbS5saXN0ZW5lcnMucHVzaChzKTtcbiAgICBhZGRMaXN0ZW5lcnMoZGVwRW5kU3RyZWFtcywgZW5kU3RyZWFtKTtcbiAgICBlbmRTdHJlYW0uZGVwcyA9IGRlcEVuZFN0cmVhbXM7XG4gICAgdXBkYXRlU3RyZWFtKHMpO1xuICB9IGVsc2Uge1xuICAgIHMgPSBjcmVhdGVTdHJlYW0oKTtcbiAgICBzLmVuZCA9IGVuZFN0cmVhbTtcbiAgICBlbmRTdHJlYW0ubGlzdGVuZXJzLnB1c2gocyk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHMoYXJnKTtcbiAgfVxuICByZXR1cm4gcztcbn1cblxudmFyIHRyYW5zZHVjZSA9IGN1cnJ5TigyLCBmdW5jdGlvbih4Zm9ybSwgc291cmNlKSB7XG4gIHhmb3JtID0geGZvcm0obmV3IFN0cmVhbVRyYW5zZm9ybWVyKCkpO1xuICByZXR1cm4gc3RyZWFtKFtzb3VyY2VdLCBmdW5jdGlvbihzZWxmKSB7XG4gICAgdmFyIHJlcyA9IHhmb3JtWydAQHRyYW5zZHVjZXIvc3RlcCddKHVuZGVmaW5lZCwgc291cmNlKCkpO1xuICAgIGlmIChyZXMgJiYgcmVzWydAQHRyYW5zZHVjZXIvcmVkdWNlZCddID09PSB0cnVlKSB7XG4gICAgICBzZWxmLmVuZCh0cnVlKTtcbiAgICAgIHJldHVybiByZXNbJ0BAdHJhbnNkdWNlci92YWx1ZSddO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZnVuY3Rpb24gU3RyZWFtVHJhbnNmb3JtZXIoKSB7IH1cblN0cmVhbVRyYW5zZm9ybWVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IGZ1bmN0aW9uKCkgeyB9O1xuU3RyZWFtVHJhbnNmb3JtZXIucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBmdW5jdGlvbigpIHsgfTtcblN0cmVhbVRyYW5zZm9ybWVyLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHMsIHYpIHsgcmV0dXJuIHY7IH07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzdHJlYW06IHN0cmVhbSxcbiAgaXNTdHJlYW06IGlzU3RyZWFtLFxuICB0cmFuc2R1Y2U6IHRyYW5zZHVjZSxcbiAgbWVyZ2U6IG1lcmdlLFxuICBzY2FuOiBzY2FuLFxuICBlbmRzT246IGVuZHNPbixcbiAgbWFwOiBjdXJyeU4oMiwgbWFwKSxcbiAgb246IGN1cnJ5TigyLCBvbiksXG4gIGN1cnJ5TjogY3VycnlOLFxuICBpbW1lZGlhdGU6IGltbWVkaWF0ZSxcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL2ludGVybmFsL19hcml0eScpO1xudmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2N1cnJ5TiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5TicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGN1cnJpZWQgZXF1aXZhbGVudCBvZiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24sIHdpdGggdGhlXG4gKiBzcGVjaWZpZWQgYXJpdHkuIFRoZSBjdXJyaWVkIGZ1bmN0aW9uIGhhcyB0d28gdW51c3VhbCBjYXBhYmlsaXRpZXMuXG4gKiBGaXJzdCwgaXRzIGFyZ3VtZW50cyBuZWVkbid0IGJlIHByb3ZpZGVkIG9uZSBhdCBhIHRpbWUuIElmIGBnYCBpc1xuICogYFIuY3VycnlOKDMsIGYpYCwgdGhlIGZvbGxvd2luZyBhcmUgZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSkoMikoMylgXG4gKiAgIC0gYGcoMSkoMiwgMylgXG4gKiAgIC0gYGcoMSwgMikoMylgXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKlxuICogU2Vjb25kbHksIHRoZSBzcGVjaWFsIHBsYWNlaG9sZGVyIHZhbHVlIGBSLl9fYCBtYXkgYmUgdXNlZCB0byBzcGVjaWZ5XG4gKiBcImdhcHNcIiwgYWxsb3dpbmcgcGFydGlhbCBhcHBsaWNhdGlvbiBvZiBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzLFxuICogcmVnYXJkbGVzcyBvZiB0aGVpciBwb3NpdGlvbnMuIElmIGBnYCBpcyBhcyBhYm92ZSBhbmQgYF9gIGlzIGBSLl9fYCxcbiAqIHRoZSBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEsIDIsIDMpYFxuICogICAtIGBnKF8sIDIsIDMpKDEpYFxuICogICAtIGBnKF8sIF8sIDMpKDEpKDIpYFxuICogICAtIGBnKF8sIF8sIDMpKDEsIDIpYFxuICogICAtIGBnKF8sIDIpKDEpKDMpYFxuICogICAtIGBnKF8sIDIpKDEsIDMpYFxuICogICAtIGBnKF8sIDIpKF8sIDMpKDEpYFxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIE51bWJlciAtPiAoKiAtPiBhKSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgYXJpdHkgZm9yIHRoZSByZXR1cm5lZCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldywgY3VycmllZCBmdW5jdGlvbi5cbiAqIEBzZWUgUi5jdXJyeVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhZGRGb3VyTnVtYmVycyA9IGZ1bmN0aW9uKCkge1xuICogICAgICAgIHJldHVybiBSLnN1bShbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCwgNCkpO1xuICogICAgICB9O1xuICpcbiAqICAgICAgdmFyIGN1cnJpZWRBZGRGb3VyTnVtYmVycyA9IFIuY3VycnlOKDQsIGFkZEZvdXJOdW1iZXJzKTtcbiAqICAgICAgdmFyIGYgPSBjdXJyaWVkQWRkRm91ck51bWJlcnMoMSwgMik7XG4gKiAgICAgIHZhciBnID0gZigzKTtcbiAqICAgICAgZyg0KTsgLy89PiAxMFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gY3VycnlOKGxlbmd0aCwgZm4pIHtcbiAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBfY3VycnkxKGZuKTtcbiAgfVxuICByZXR1cm4gX2FyaXR5KGxlbmd0aCwgX2N1cnJ5TihsZW5ndGgsIFtdLCBmbikpO1xufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL34vcmFtZGEvc3JjL2N1cnJ5Ti5qc1xuICoqIG1vZHVsZSBpZCA9IDE2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2FyaXR5KG4sIGZuKSB7XG4gIC8vIGpzaGludCB1bnVzZWQ6dmFyc1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbigpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYTApIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExKSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA0OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgNjogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA3OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA4OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGNhc2UgOTogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAxMDogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5KSB7IHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gX2FyaXR5IG11c3QgYmUgYSBub24tbmVnYXRpdmUgaW50ZWdlciBubyBncmVhdGVyIHRoYW4gdGVuJyk7XG4gIH1cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL34vcmFtZGEvc3JjL2ludGVybmFsL19hcml0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIi8qKlxuICogT3B0aW1pemVkIGludGVybmFsIHR3by1hcml0eSBjdXJyeSBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2N1cnJ5MShmbikge1xuICByZXR1cm4gZnVuY3Rpb24gZjEoYSkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZjE7XG4gICAgfSBlbHNlIGlmIChhICE9IG51bGwgJiYgYVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9+L2ZseWQvfi9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5MS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBPcHRpbWl6ZWQgaW50ZXJuYWwgdHdvLWFyaXR5IGN1cnJ5IGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY3VycnkyKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmMihhLCBiKSB7XG4gICAgdmFyIG4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gZjI7XG4gICAgfSBlbHNlIGlmIChuID09PSAxICYmIGEgIT0gbnVsbCAmJiBhWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIGYyO1xuICAgIH0gZWxzZSBpZiAobiA9PT0gMSkge1xuICAgICAgcmV0dXJuIF9jdXJyeTEoZnVuY3Rpb24oYikgeyByZXR1cm4gZm4oYSwgYik7IH0pO1xuICAgIH0gZWxzZSBpZiAobiA9PT0gMiAmJiBhICE9IG51bGwgJiYgYVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYiAhPSBudWxsICYmIGJbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZjI7XG4gICAgfSBlbHNlIGlmIChuID09PSAyICYmIGEgIT0gbnVsbCAmJiBhWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIF9jdXJyeTEoZnVuY3Rpb24oYSkgeyByZXR1cm4gZm4oYSwgYik7IH0pO1xuICAgIH0gZWxzZSBpZiAobiA9PT0gMiAmJiBiICE9IG51bGwgJiYgYlsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZuKGEsIGIpOyB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZuKGEsIGIpO1xuICAgIH1cbiAgfTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9yZWFjdC1zdGF0ZWZ1bC1zdHJlYW0vfi9mbHlkL34vcmFtZGEvc3JjL2ludGVybmFsL19jdXJyeTIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9fYXJpdHknKTtcblxuXG4vKipcbiAqIEludGVybmFsIGN1cnJ5TiBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAcGFyYW0ge051bWJlcn0gbGVuZ3RoIFRoZSBhcml0eSBvZiB0aGUgY3VycmllZCBmdW5jdGlvbi5cbiAqIEByZXR1cm4ge2FycmF5fSBBbiBhcnJheSBvZiBhcmd1bWVudHMgcmVjZWl2ZWQgdGh1cyBmYXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2N1cnJ5TihsZW5ndGgsIHJlY2VpdmVkLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gW107XG4gICAgdmFyIGFyZ3NJZHggPSAwO1xuICAgIHZhciBsZWZ0ID0gbGVuZ3RoO1xuICAgIHZhciBjb21iaW5lZElkeCA9IDA7XG4gICAgd2hpbGUgKGNvbWJpbmVkSWR4IDwgcmVjZWl2ZWQubGVuZ3RoIHx8IGFyZ3NJZHggPCBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgaWYgKGNvbWJpbmVkSWR4IDwgcmVjZWl2ZWQubGVuZ3RoICYmXG4gICAgICAgICAgKHJlY2VpdmVkW2NvbWJpbmVkSWR4XSA9PSBudWxsIHx8XG4gICAgICAgICAgIHJlY2VpdmVkW2NvbWJpbmVkSWR4XVsnQEBmdW5jdGlvbmFsL3BsYWNlaG9sZGVyJ10gIT09IHRydWUgfHxcbiAgICAgICAgICAgYXJnc0lkeCA+PSBhcmd1bWVudHMubGVuZ3RoKSkge1xuICAgICAgICByZXN1bHQgPSByZWNlaXZlZFtjb21iaW5lZElkeF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSBhcmd1bWVudHNbYXJnc0lkeF07XG4gICAgICAgIGFyZ3NJZHggKz0gMTtcbiAgICAgIH1cbiAgICAgIGNvbWJpbmVkW2NvbWJpbmVkSWR4XSA9IHJlc3VsdDtcbiAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCB8fCByZXN1bHRbJ0BAZnVuY3Rpb25hbC9wbGFjZWhvbGRlciddICE9PSB0cnVlKSB7XG4gICAgICAgIGxlZnQgLT0gMTtcbiAgICAgIH1cbiAgICAgIGNvbWJpbmVkSWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBsZWZ0IDw9IDAgPyBmbi5hcHBseSh0aGlzLCBjb21iaW5lZCkgOiBfYXJpdHkobGVmdCwgX2N1cnJ5TihsZW5ndGgsIGNvbWJpbmVkLCBmbikpO1xuICB9O1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3JlYWN0LXN0YXRlZnVsLXN0cmVhbS9+L2ZseWQvfi9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5Ti5qc1xuICoqIG1vZHVsZSBpZCA9IDE2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSAoZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKCd2YWx1ZScgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0pKCk7XG5cbnZhciBfZ2V0ID0gZnVuY3Rpb24gZ2V0KF94MywgX3g0LCBfeDUpIHsgdmFyIF9hZ2FpbiA9IHRydWU7IF9mdW5jdGlvbjogd2hpbGUgKF9hZ2FpbikgeyB2YXIgb2JqZWN0ID0gX3gzLCBwcm9wZXJ0eSA9IF94NCwgcmVjZWl2ZXIgPSBfeDU7IGRlc2MgPSBwYXJlbnQgPSBnZXR0ZXIgPSB1bmRlZmluZWQ7IF9hZ2FpbiA9IGZhbHNlOyBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7IHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTsgaWYgKGRlc2MgPT09IHVuZGVmaW5lZCkgeyB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7IGlmIChwYXJlbnQgPT09IG51bGwpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSBlbHNlIHsgX3gzID0gcGFyZW50OyBfeDQgPSBwcm9wZXJ0eTsgX3g1ID0gcmVjZWl2ZXI7IF9hZ2FpbiA9IHRydWU7IGNvbnRpbnVlIF9mdW5jdGlvbjsgfSB9IGVsc2UgaWYgKCd2YWx1ZScgaW4gZGVzYykgeyByZXR1cm4gZGVzYy52YWx1ZTsgfSBlbHNlIHsgdmFyIGdldHRlciA9IGRlc2MuZ2V0OyBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfSByZXR1cm4gZ2V0dGVyLmNhbGwocmVjZWl2ZXIpOyB9IH0gfTtcblxuZXhwb3J0cy5kZXJpdmUgPSBkZXJpdmU7XG5leHBvcnRzLnRyYWNrID0gdHJhY2s7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb24nKTsgfSB9XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09ICdmdW5jdGlvbicgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKCdTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90ICcgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgQkxPQ0tFRCA9IHt9O1xuXG52YXIgZ2xvYmFsT3B0aW9ucyA9IHsgZGVidWc6IGZhbHNlIH07XG5cbmV4cG9ydHMuZ2xvYmFsT3B0aW9ucyA9IGdsb2JhbE9wdGlvbnM7XG4vKipcbiAqICMjIGRlcml2ZVxuICpcbiAqIENyZWF0ZSBhIGRlcml2ZWQgZGF0YSBoaWdoZXItb3JkZXIgY29tcG9uZW50IChIb0MpLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIChvcHRpb25hbClcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVidWcgKG9wdGlvbmFsKVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGRlcml2ZSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICByZXR1cm4gZnVuY3Rpb24gKERlY29yYXRlZENvbXBvbmVudCkge1xuICAgIHJldHVybiAoZnVuY3Rpb24gKF9Db21wb25lbnQpIHtcbiAgICAgIF9pbmhlcml0cyhEZXJpdmVEZWNvcmF0b3IsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBEZXJpdmVEZWNvcmF0b3IoKSB7XG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBEZXJpdmVEZWNvcmF0b3IpO1xuXG4gICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKERlcml2ZURlY29yYXRvci5wcm90b3R5cGUpLCAnY29uc3RydWN0b3InLCB0aGlzKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuXG4gICAgICBfY3JlYXRlQ2xhc3MoRGVyaXZlRGVjb3JhdG9yLCBbe1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsTW91bnQnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgICAgIHRoaXMuZGVyaXZlZFByb3BzID0gZGVyaXZlUHJvcHMob3B0aW9ucywge30sIHRoaXMucHJvcHMsIHt9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsVXBkYXRlJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICAgICAgdGhpcy5kZXJpdmVkUHJvcHMgPSBkZXJpdmVQcm9wcyhvcHRpb25zLCB0aGlzLnByb3BzLCBuZXh0UHJvcHMsIHRoaXMuZGVyaXZlZFByb3BzIHx8IHt9KTtcbiAgICAgICAgfVxuICAgICAgfSwge1xuICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICAgIHJldHVybiBfcmVhY3QyWydkZWZhdWx0J10uY3JlYXRlRWxlbWVudChEZWNvcmF0ZWRDb21wb25lbnQsIHRoaXMuZGVyaXZlZFByb3BzKTtcbiAgICAgICAgfVxuICAgICAgfV0sIFt7XG4gICAgICAgIGtleTogJ2Rpc3BsYXlOYW1lJyxcbiAgICAgICAgdmFsdWU6ICdEZXJpdmUoJyArIGdldERpc3BsYXlOYW1lKERlY29yYXRlZENvbXBvbmVudCkgKyAnKScsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgIH0sIHtcbiAgICAgICAga2V5OiAnRGVjb3JhdGVkQ29tcG9uZW50JyxcbiAgICAgICAgdmFsdWU6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfV0pO1xuXG4gICAgICByZXR1cm4gRGVyaXZlRGVjb3JhdG9yO1xuICAgIH0pKF9yZWFjdC5Db21wb25lbnQpO1xuICB9O1xufVxuXG4vLyBgZGVyaXZlUHJvcHNgIHRha2VzIHByb3BzIGZyb20gdGhlIHByZXZpb3VzIHJlbmRlciAoYHByZXZQcm9wc2AsIGBkZXJpdmVkUHJvcHNgKSxcbi8vIGFuZCBwcm9wcyBmcm9tIHRoZSBjdXJyZW50IHJlbmRlciAoYG5leHRQcm9wc2ApIGFuZCBjYWxjdWxhdGVzIHRoZSBuZXh0IGRlcml2ZWQgcHJvcHMuXG5mdW5jdGlvbiBkZXJpdmVQcm9wcyhvcHRpb25zLCBwcmV2UHJvcHMsIG5leHRQcm9wcywgZGVyaXZlZFByb3BzKSB7XG4gIHZhciBuZXh0RGVyaXZlZFByb3BzID0ge307XG5cbiAgdmFyIGNhbGNEZXJpdmVkUHJvcCA9IGZ1bmN0aW9uIGNhbGNEZXJpdmVkUHJvcChrZXksIHhmKSB7XG5cbiAgICAvLyBXaGVuIGB4ZmAgaXMgYW5ub3RhdGVkIHdpdGggYHRyYWNrZWRQcm9wc2AgKGJ5IGBAdHJhY2tgKSwgb25seSByZS1jYWxjdWxhdGVcbiAgICAvLyBkZXJpdmVkIHByb3BzIHdoZW4gdGhlIHRyYWNrZWQgcHJvcHMgY2hhbmdlZC5cbiAgICBpZiAoeGYudHJhY2tlZFByb3BzICYmIHhmLnRyYWNrZWRQcm9wcy5ldmVyeShmdW5jdGlvbiAocCkge1xuICAgICAgcmV0dXJuIHByZXZQcm9wc1twXSA9PT0gbmV4dFByb3BzW3BdO1xuICAgIH0pKSB7XG4gICAgICByZXR1cm4gZGVyaXZlZFByb3BzW2tleV07XG4gICAgfVxuXG4gICAgaWYgKGdsb2JhbE9wdGlvbnMuZGVidWcpIGNvbnNvbGUubG9nKCdSZWNhbGN1bGF0aW5nIGRlcml2ZWQgcHJvcCBcXCcnICsga2V5ICsgJ1xcJycpO1xuICAgIHJldHVybiB4Zi5jYWxsKGRlbGVnYXRlcywgbmV4dFByb3BzLCBkZXJpdmVkUHJvcHMpO1xuICB9O1xuXG4gIC8vIGBkZWxlZ2F0ZXNgIGlzIHRoZSBvYmplY3QgdGhhdCB3aWxsIGJlIGF0dGFjaGVkIHRvIHRoZSBgdGhpc2AgT2JqZWN0XG4gIC8vIG9mIGRlcml2ZXIgKGB4ZmApIGZ1bmN0aW9ucy4gKHNlZSBgeGYuY2FsbChkZWxlZ2F0ZXMuLi4pYCBhYm92ZSlcbiAgdmFyIGRlbGVnYXRlcyA9IG1hcC5jYWxsKG9wdGlvbnMsIGZ1bmN0aW9uICh4Ziwga2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICghbmV4dERlcml2ZWRQcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIG5leHREZXJpdmVkUHJvcHNba2V5XSA9IEJMT0NLRUQ7XG4gICAgICAgIHJldHVybiBuZXh0RGVyaXZlZFByb3BzW2tleV0gPSBjYWxjRGVyaXZlZFByb3Aoa2V5LCB4Zik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobmV4dERlcml2ZWRQcm9wc1trZXldID09PSBCTE9DS0VEKSB7XG4gICAgICAgICAgdGhyb3cgRXJyb3IoJ0NpcmN1bGFyIGRlcGVuZGVuY2llcyBpbiBkZXJpdmVkIHByb3BzLCBcXCcnICsga2V5ICsgJ1xcJyB3YXMgYmxvY2tlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dERlcml2ZWRQcm9wc1trZXldO1xuICAgICAgfVxuICAgIH07XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmICghbmV4dERlcml2ZWRQcm9wcy5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgLy8gY2FsY3VsYXRlIGRlcml2ZWQgcHJvcFxuICAgICAgbmV4dERlcml2ZWRQcm9wc1trZXldID0gY2FsY0Rlcml2ZWRQcm9wKGtleSwgb3B0aW9uc1trZXldKTtcbiAgfSk7XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBuZXh0UHJvcHMsIG5leHREZXJpdmVkUHJvcHMpO1xufVxuXG5mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShjb21wKSB7XG4gIHJldHVybiBjb21wLmRpc3BsYXlOYW1lIHx8IGNvbXAubmFtZSB8fCAnQ29tcG9uZW50Jztcbn1cblxuLy8gbWFwIGFuIG9iamVjdCB0byBhbiBvYmplY3RcbmZ1bmN0aW9uIG1hcChmKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgdmFyIHJlc3VsdCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIE9iamVjdC5rZXlzKHRoaXMpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICByZXR1cm4gcmVzdWx0W2tdID0gZihfdGhpc1trXSwgayk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqICMjIHRyYWNrXG4gKlxuICogT2JqZWN0IGxpdGVyYWwgZGVjb3JhdG9yIHRoYXQgYW5ub3RhdGVzIGEgbWFwcGVyIGZ1bmN0aW9uXG4gKiB0byBoYXZlIGEgJ3RyYWNrZWRQcm9wcycgcHJvcGVydHkuIFVzZWQgYnkgYEBkZXJpdmVgIHRvIG1lbW9pemVcbiAqIHByb3BzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nLi4ufSB0cmFja2VkUHJvcHNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIHRyYWNrKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdHJhY2tlZFByb3BzID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgdHJhY2tlZFByb3BzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIGlmIChkZXNjcmlwdG9yKSB7XG4gICAgICAvLyBFUzcgZGVjb3JhdG9yXG4gICAgICBkZXNjcmlwdG9yLnZhbHVlLnRyYWNrZWRQcm9wcyA9IHRyYWNrZWRQcm9wcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gRVM2XG4gICAgICB0YXJnZXQudHJhY2tlZFByb3BzID0gdHJhY2tlZFByb3BzO1xuICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogIyMgRGVyaXZlXG4gKlxuICogYEBkZXJpdmVgIGFzIGEgY29tcG9uZW50LlxuICogQHByb3Age09iamVjdH0gb3B0aW9uc1xuICovXG5cbnZhciBEZXJpdmUgPSAoZnVuY3Rpb24gKF9Db21wb25lbnQyKSB7XG4gIF9pbmhlcml0cyhEZXJpdmUsIF9Db21wb25lbnQyKTtcblxuICBmdW5jdGlvbiBEZXJpdmUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERlcml2ZSk7XG5cbiAgICBfZ2V0KE9iamVjdC5nZXRQcm90b3R5cGVPZihEZXJpdmUucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhEZXJpdmUsIFt7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbE1vdW50JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgICAgdGhpcy5kZXJpdmVkUHJvcHMgPSBkZXJpdmVQcm9wcyh0aGlzLnByb3BzLm9wdGlvbnMsIHt9LCB0aGlzLnByb3BzLCB7fSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY29tcG9uZW50V2lsbFVwZGF0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVcGRhdGUobmV4dFByb3BzKSB7XG4gICAgICB0aGlzLmRlcml2ZWRQcm9wcyA9IGRlcml2ZVByb3BzKG5leHRQcm9wcy5vcHRpb25zLCB0aGlzLnByb3BzLCBuZXh0UHJvcHMsIHRoaXMuZGVyaXZlZFByb3BzIHx8IHt9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZW5kZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZXR1cm4gX3JlYWN0MlsnZGVmYXVsdCddLkNoaWxkcmVuLm9ubHkodGhpcy5wcm9wcy5jaGlsZHJlbih0aGlzLmRlcml2ZWRQcm9wcykpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBEZXJpdmU7XG59KShfcmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0cy5EZXJpdmUgPSBEZXJpdmU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcmVhY3QtZGVyaXZlL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDJcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1snZGVmYXVsdCddID0gc2V0dXA7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9jcmVhdGVFbGVnYW50RGVjb3JhdG9yID0gcmVxdWlyZSgnLi9jcmVhdGUtZWxlZ2FudC1kZWNvcmF0b3InKTtcblxudmFyIF9jcmVhdGVFbGVnYW50RGVjb3JhdG9yMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUVsZWdhbnREZWNvcmF0b3IpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbmZ1bmN0aW9uIHN1YmVkaXQoZWRpdCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGF0aCA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXRoW19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodHJhbnNmb3JtKSB7XG4gICAgcmV0dXJuIGVkaXQoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICByZXR1cm4gc3RhdGUudXBkYXRlSW4ocGF0aCwgdHJhbnNmb3JtKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0dXAoZGVidWcpIHtcbiAgcmV0dXJuIHtcbiAgICBzdWJlZGl0OiBzdWJlZGl0LFxuICAgIHN1Yjogc3ViZWRpdCxcbiAgICBlbGVnYW50OiAoMCwgX2NyZWF0ZUVsZWdhbnREZWNvcmF0b3IyWydkZWZhdWx0J10pKF9yZWFjdDJbJ2RlZmF1bHQnXSwgZGVidWcpXG4gIH07XG59XG5cbnNldHVwLmVsZWdhbnQgPSAoMCwgX2NyZWF0ZUVsZWdhbnREZWNvcmF0b3IyWydkZWZhdWx0J10pKF9yZWFjdDJbJ2RlZmF1bHQnXSk7XG5zZXR1cC5zdWJlZGl0ID0gc3ViZWRpdDtcbnNldHVwLnN1YiA9IHN1YmVkaXQ7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9lbGVnYW50LXJlYWN0L2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoJ3ZhbHVlJyBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSkoKTtcblxudmFyIF9nZXQgPSBmdW5jdGlvbiBnZXQoX3gyLCBfeDMsIF94NCkgeyB2YXIgX2FnYWluID0gdHJ1ZTsgX2Z1bmN0aW9uOiB3aGlsZSAoX2FnYWluKSB7IHZhciBvYmplY3QgPSBfeDIsIHByb3BlcnR5ID0gX3gzLCByZWNlaXZlciA9IF94NDsgZGVzYyA9IHBhcmVudCA9IGdldHRlciA9IHVuZGVmaW5lZDsgX2FnYWluID0gZmFsc2U7IGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTsgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpOyBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7IHZhciBwYXJlbnQgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTsgaWYgKHBhcmVudCA9PT0gbnVsbCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IGVsc2UgeyBfeDIgPSBwYXJlbnQ7IF94MyA9IHByb3BlcnR5OyBfeDQgPSByZWNlaXZlcjsgX2FnYWluID0gdHJ1ZTsgY29udGludWUgX2Z1bmN0aW9uOyB9IH0gZWxzZSBpZiAoJ3ZhbHVlJyBpbiBkZXNjKSB7IHJldHVybiBkZXNjLnZhbHVlOyB9IGVsc2UgeyB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7IGlmIChnZXR0ZXIgPT09IHVuZGVmaW5lZCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9IHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7IH0gfSB9O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVFbGVnYW50RGVjb3JhdG9yO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gJ2Z1bmN0aW9uJyAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ1N1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgJyArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzczsgfVxuXG52YXIgX3N0YXRpY3MgPSByZXF1aXJlKCcuL3N0YXRpY3MnKTtcblxudmFyIF9zaGFsbG93RXF1YWxQcm9wcyA9IHJlcXVpcmUoJy4vc2hhbGxvdy1lcXVhbC1wcm9wcycpO1xuXG52YXIgZ2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUVsZWdhbnREZWNvcmF0b3IoUmVhY3QsIGRlYnVnKSB7XG4gIHZhciBDb21wb25lbnQgPSBSZWFjdC5Db21wb25lbnQ7XG5cbiAgdmFyIGRlY29yYXRvciA9IGZ1bmN0aW9uIGRlY29yYXRvcihfcmVmKSB7XG4gICAgdmFyIHN0YXRpY3MgPSBfcmVmLnN0YXRpY3M7XG5cbiAgICB2YXIgc3RhdGljc01hcCA9ICgwLCBfc2hhbGxvd0VxdWFsUHJvcHMuY3JlYXRlU3RhdGljc01hcCkoc3RhdGljcyk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKERlY29yYXRlZENvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIChmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgICBmdW5jdGlvbiBFbGVnYW50RGVjb3JhdG9yKCkge1xuICAgICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBFbGVnYW50RGVjb3JhdG9yKTtcblxuICAgICAgICAgIF9nZXQoT2JqZWN0LmdldFByb3RvdHlwZU9mKEVsZWdhbnREZWNvcmF0b3IucHJvdG90eXBlKSwgJ2NvbnN0cnVjdG9yJywgdGhpcykuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIF9pbmhlcml0cyhFbGVnYW50RGVjb3JhdG9yLCBfQ29tcG9uZW50KTtcblxuICAgICAgICBfY3JlYXRlQ2xhc3MoRWxlZ2FudERlY29yYXRvciwgW3tcbiAgICAgICAgICBrZXk6ICdzaG91bGRDb21wb25lbnRVcGRhdGUnLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiBzaG91bGRDb21wb25lbnRVcGRhdGUobmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiAhKDAsIF9zaGFsbG93RXF1YWxQcm9wcy5zaGFsbG93RXF1YWxQcm9wcykodGhpcy5wcm9wcywgbmV4dFByb3BzLCBzdGF0aWNzTWFwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJyxcbiAgICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXdQcm9wcykge1xuICAgICAgICAgICAgKDAsIF9zdGF0aWNzLnVwZGF0ZVN0YXRpY3MpKHN0YXRpY3MsIHRoaXMuZGVjb3JhdGVkUHJvcHMsIG5ld1Byb3BzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHtcbiAgICAgICAgICBrZXk6ICdyZW5kZXInLFxuICAgICAgICAgIHZhbHVlOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICBpZiAoZGVidWcpIGNvbnNvbGUubG9nKCdyZW5kZXIgPCcgKyBFbGVnYW50RGVjb3JhdG9yLmRpc3BsYXlOYW1lICsgJz4nKTtcblxuICAgICAgICAgICAgdGhpcy5kZWNvcmF0ZWRQcm9wcyA9ICgwLCBfc3RhdGljcy53cmFwU3RhdGljcykoc3RhdGljcywgdGhpcy5wcm9wcyk7XG5cbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KERlY29yYXRlZENvbXBvbmVudCwgdGhpcy5kZWNvcmF0ZWRQcm9wcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XSwgW3tcbiAgICAgICAgICBrZXk6ICdkaXNwbGF5TmFtZScsXG4gICAgICAgICAgdmFsdWU6ICdFbGVnYW50KCcgKyBnZXREaXNwbGF5TmFtZShEZWNvcmF0ZWRDb21wb25lbnQpICsgJyknLFxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGtleTogJ0RlY29yYXRlZENvbXBvbmVudCcsXG4gICAgICAgICAgdmFsdWU6IERlY29yYXRlZENvbXBvbmVudCxcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gRWxlZ2FudERlY29yYXRvcjtcbiAgICAgIH0pKENvbXBvbmVudCk7XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBvcHRpb25zT3JDb21wb25lbnQgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICAgIHJldHVybiBvcHRpb25zT3JDb21wb25lbnQucHJvdG90eXBlIGluc3RhbmNlb2YgQ29tcG9uZW50ID8gZGVjb3JhdG9yKHt9KShvcHRpb25zT3JDb21wb25lbnQpIDogZGVjb3JhdG9yKG9wdGlvbnNPckNvbXBvbmVudCk7XG4gIH07IC8vIENvbXBvbmVudCA6IG9wdGlvbnNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZWxlZ2FudC1yZWFjdC9saWIvY3JlYXRlLWVsZWdhbnQtZGVjb3JhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5leHBvcnRzLmlzRGVsZWdhdGUgPSBpc0RlbGVnYXRlO1xuZXhwb3J0cy53cmFwU3RhdGljcyA9IHdyYXBTdGF0aWNzO1xuZXhwb3J0cy51cGRhdGVTdGF0aWNzID0gdXBkYXRlU3RhdGljcztcbmZ1bmN0aW9uIGRlbGVnYXRlKGRlbGVnZWUpIHtcbiAgdmFyIGRlbGVnYXRlID0gZnVuY3Rpb24gZGVsZWdhdGUoKSB7XG4gICAgcmV0dXJuIGRlbGVnYXRlLmRlbGVnZWUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfTtcbiAgZGVsZWdhdGUuZGVsZWdlZSA9IGRlbGVnZWU7XG4gIGRlbGVnYXRlLmlzRGVsZWdhdGUgPSB0cnVlO1xuICByZXR1cm4gZGVsZWdhdGU7XG59XG5cbmZ1bmN0aW9uIGlzRGVsZWdhdGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICYmIHZhbHVlLmlzRGVsZWdhdGU7XG59XG5cbi8vIHBlcmZvcm0gb24gcmVuZGVyXG5cbmZ1bmN0aW9uIHdyYXBTdGF0aWNzKHN0YXRpY3MsIHByb3BzKSB7XG4gIHZhciB0cmFuc2Zvcm1lZFByb3BzID0gX2V4dGVuZHMoe30sIHByb3BzKTtcbiAgaWYgKHN0YXRpY3MpIHtcbiAgICBzdGF0aWNzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIGRlbGVnZWUgPSBwcm9wc1trZXldO1xuICAgICAgaWYgKHR5cGVvZiBkZWxlZ2VlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRyYW5zZm9ybWVkUHJvcHNba2V5XSA9IGlzRGVsZWdhdGUoZGVsZWdlZSkgPyBkZWxlZ2VlIDogZGVsZWdhdGUoZGVsZWdlZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIHRyYW5zZm9ybWVkUHJvcHM7XG59XG5cbi8vIHBlcmZvcm0gd2hlbiByZWNpZXZpbmcgcHJvcHNcblxuZnVuY3Rpb24gdXBkYXRlU3RhdGljcyhzdGF0aWNzLCB3cmFwcGVkUHJvcHMsIG5ld1Byb3BzKSB7XG4gIGlmIChzdGF0aWNzICYmIG5ld1Byb3BzICYmIHdyYXBwZWRQcm9wcykge1xuICAgIHN0YXRpY3MuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbmV3TWVtYmVyID0gbmV3UHJvcHNba2V5XTtcblxuICAgICAgaWYgKHR5cGVvZiBuZXdNZW1iZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRNZW1iZXIgPSB3cmFwcGVkUHJvcHNba2V5XTtcbiAgICAgICAgaWYgKGlzRGVsZWdhdGUoY3VycmVudE1lbWJlcikpIHtcbiAgICAgICAgICB2YXIgZGVsZWdlZSA9IGlzRGVsZWdhdGUobmV3TWVtYmVyKSA/IG5ld01lbWJlci5kZWxlZ2VlIDogbmV3TWVtYmVyO1xuICAgICAgICAgIGN1cnJlbnRNZW1iZXIuZGVsZWdlZSA9IGRlbGVnZWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2VsZWdhbnQtcmVhY3QvbGliL3N0YXRpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGNvbnZlcnQgc3RhdGljcyBhcnJheSB0byBtYXAgb2JqZWN0XG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jcmVhdGVTdGF0aWNzTWFwID0gY3JlYXRlU3RhdGljc01hcDtcbmV4cG9ydHMuc2hhbGxvd0VxdWFsUHJvcHMgPSBzaGFsbG93RXF1YWxQcm9wcztcblxuZnVuY3Rpb24gY3JlYXRlU3RhdGljc01hcChzdGF0aWNzKSB7XG4gIGlmICghc3RhdGljcykgcmV0dXJuIHt9O1xuICB2YXIgbWFwID0ge307XG4gIHN0YXRpY3MuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIG1hcFtrZXldID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiBtYXA7XG59XG5cbjtcblxuLy8gbW9kaWZpZWQgdmVyc2lvbiBvZiBzaGFsbG93RXF1YWxQcm9wcyBmbiBmcm9tIFB1cmVSZW5kZXJNaXhpblxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxQcm9wcyhvYmpBLCBvYmpCLCBzdGF0aWNzTWFwKSB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8IG9iakEgPT09IG51bGwgfHwgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8IG9iakIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIga2V5c0EgPSBPYmplY3Qua2V5cyhvYmpBKTtcbiAgdmFyIGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLy8gVGVzdCBmb3IgQSdzIGtleXMgZGlmZmVyZW50IGZyb20gQi5cbiAgdmFyIGJIYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuYmluZChvYmpCKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdGF0aWNzTWFwW2tleXNBW2ldXSkgY29udGludWU7XG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5c0FbaV0pIHx8IG9iakFba2V5c0FbaV1dICE9PSBvYmpCW2tleXNBW2ldXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2VsZWdhbnQtcmVhY3QvbGliL3NoYWxsb3ctZXF1YWwtcHJvcHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtUaW1lbGluZSwgVGltZWxpbmVyLCB0d2VlbiwgY29tYmluZX0gZnJvbSAncmVhY3QtaW1hdGlvbic7XG5pbXBvcnQge3NjYWxlLCByb3RhdGVZfSBmcm9tICdyZWFjdC1pbWF0aW9uL3R3ZWVuLXZhbHVlLWZhY3Rvcmllcyc7XG5pbXBvcnQge0Vhc2VyfSBmcm9tICdmdW5jdGlvbmFsLWVhc2luZyc7XG5pbXBvcnQgUm9sbEJ1dHRvbiBmcm9tICcuLi9kZW1vMy9Sb2xsQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU92ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmdhbWVPdmVyU291bmQucGxheSgpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7cGxheUFnYWluLCBzY29yZX0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxUaW1lbGluZSBwbGF5T25Nb3VudD17dHJ1ZX0gbWF4PXsxfSBpbmNyZW1lbnQ9ezAuMDV9PlxuICAgICAgeyh7dGltZX0pID0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgdG9wOiAnNDUlJyxcbiAgICAgICAgICAgIGxlZnQ6ICc1MCUnIH19PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAnOTBweCcsXG4gICAgICAgICAgICAgIC4uLnR3ZWVuKHRpbWUsIHtcbiAgICAgICAgICAgICAgICAwOiB7b3BhY2l0eTogMCwgdHJhbnNmb3JtOiBjb21iaW5lKCBzY2FsZSgxMCwxMCksIHJvdGF0ZVkoNjApKX0sXG4gICAgICAgICAgICAgICAgMToge29wYWNpdHk6IDEsIHRyYW5zZm9ybTogY29tYmluZSggc2NhbGUoMSwxKSwgcm90YXRlWSgwKSl9XG4gICAgICAgICAgICAgIH0pfX0+XG4gICAgICAgICAgICBHYW1lIE92ZXJcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzMwcHgnLCBmb250U2l6ZTogJzMwcHgnLCBjb2xvcjogJ3doaXRlJyB9fT5cbiAgICAgICAgICAgIHtzY29yZS50b0xvY2FsZVN0cmluZygpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnNTBweCcgIH19PlxuICAgICAgICAgICAgPFJvbGxCdXR0b25cbiAgICAgICAgICAgICAgd2lkdGg9ezMwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgc3RhdGljVGV4dD1cIlBsYXlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtwbGF5QWdhaW59XG4gICAgICAgICAgICAgIGluaXRpYWxJbmRleD17MH1cbiAgICAgICAgICAgICAgbGlzdD17WydBZ2FpbicsICdEZSBOdWV2bycsXG4gICAgICAgICAgICAgICAgICAgICAnT3RyYSBWZXonLCAnSnVzdCBjYXVzZScsICdOb3cnLFxuICAgICAgICAgICAgICAgICAgICAgJ0ZvcmV2ZXInLCAnV2l0aCBMb3ZlJywgJ1dlbGwnLFxuICAgICAgICAgICAgICAgICAgICAgJ0NhdXNlIElcXCdtIGJvcmVkJywgJ1RpbGwgSSBEaWUnLFxuICAgICAgICAgICAgICAgICAgICAgJ09yIERpZScsICdGb3IgdGhlIExvdmUgb2YgaXQnLFxuICAgICAgICAgICAgICAgICAgICAgJ0ZvciBNeSBNb21tYScsICdKdXN0IEJlY2F1c2UnLFxuICAgICAgICAgICAgICAgICAgICAgJ1RvIFdpbicsICdUbyBEb21pbmF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAnVG8gVGFrZSBPdmVyIHRoZSBXb3JsZCddfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH08L1RpbWVsaW5lPilcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9kZW1vMS9HYW1lT3Zlci5qc1xuICoqLyIsImltcG9ydCBSZWFjdCwge0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtFYXNlcn0gZnJvbSAnZnVuY3Rpb25hbC1lYXNpbmcnO1xuaW1wb3J0IHt0d2VlbiwgZWFzZSwgVGltZWxpbmUsIFRpbWVsaW5lcn0gZnJvbSAncmVhY3QtaW1hdGlvbic7XG5pbXBvcnQge3RyYW5zbGF0ZVl9IGZyb20gJ3JlYWN0LWltYXRpb24vdHdlZW4tdmFsdWUtZmFjdG9yaWVzJztcbmltcG9ydCBzdGF0ZWZ1bCBmcm9tICdyZWFjdC1zdGF0ZWZ1bC1zdHJlYW0nO1xuaW1wb3J0IHt0cmFjaywgZGVyaXZlfSBmcm9tICdyZWFjdC1kZXJpdmUnO1xuaW1wb3J0IHUgZnJvbSAndXBkZWVwJztcbmNvbnN0IGltbXV0YWJsZSA9IHUoe30pO1xuXG5jb25zdCBlYXNlT3V0RWxhc3RpYyA9IG5ldyBFYXNlcigpLnVzaW5nKCdvdXQtZWxhc3RpYycpLndpdGhQYXJhbWV0ZXJzKDIsLjYpO1xuY29uc3QgZWFzZU91dFNpbmUgPSBuZXcgRWFzZXIoKS51c2luZygnb3V0LXNpbmUnKTtcblxuY29uc3QgYm9yZGVyQ29sb3IgPSAncmdiYSgyNTUsMjU1LDI1NSwxLjApJztcbmNvbnN0IGxpc3RTdHlsZSA9IHsgY29sb3I6ICcjY2NjJyB9O1xuXG5Ac3RhdGVmdWwoXG4gICh7aW5pdGlhbEluZGV4fSkgPT4gaW1tdXRhYmxlKHtcbiAgICBpc092ZXI6IGZhbHNlLFxuICAgIGN1cnJlbnRJbmRleDogaW5pdGlhbEluZGV4IHx8IDBcbiAgfSksXG4gIGVkaXQgPT4gKHtcbiAgICB1cGRhdGU6IHVwZGF0ZXMgPT4gZWRpdCh1KHVwZGF0ZXMpKVxuICB9KSlcbkBkZXJpdmUoXG4gIHsgQHRyYWNrKCdjdXJyZW50SW5kZXgnKVxuICAgIG5ld0xpc3Qoe2N1cnJlbnRJbmRleCwgbGlzdH0pIHsgLy8gcmUtYXJyYW5nZSBsaXN0XG4gICAgICBjb25zdCBjdXJyZW50SXRlbSA9IGxpc3RbY3VycmVudEluZGV4XTtcbiAgICAgIHJldHVybiBsaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IGN1cnJlbnRJdGVtKVxuICAgICAgICAgICAgICAgICAuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gLjUpO1xuICAgIH0sXG5cbiAgICBAdHJhY2soJ2N1cnJlbnRJbmRleCcpXG4gICAgcGFydGl0aW9uZWRMaXN0KCkge1xuICAgICAgcmV0dXJuIFsgdGhpcy5uZXdMaXN0KCkuc2xpY2UoMCwtMyksXG4gICAgICAgICAgICAgICB0aGlzLm5ld0xpc3QoKS5zbGljZSgtMykgICAgXTtcbiAgICB9XG4gIH0pXG5Ac3RhdGVmdWwoXG4gIHsgdGltZWxpbmVyOiBuZXcgVGltZWxpbmVyKHttYXg6NTN9KSB9KVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9sbEJ1dHRvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGN1cnJlbnRJbmRleCxcbiAgICAgICAgICAgIHN0YXRpY1RleHQsXG4gICAgICAgICAgICB1cGRhdGUsXG4gICAgICAgICAgICBpc092ZXIsXG4gICAgICAgICAgICBsaXN0LFxuICAgICAgICAgICAgcGFydGl0aW9uZWRMaXN0LFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICB0aW1lbGluZXIsXG4gICAgICAgICAgICBvbkNsaWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IFt0b3BMaXN0LCBib3R0b21MaXN0XSA9IHBhcnRpdGlvbmVkTGlzdDtcbiAgICBjb25zdCBjdXJyZW50VGV4dCA9IGxpc3RbY3VycmVudEluZGV4XTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICAgICAgICAgIGJvcmRlcjogJzRweCBzb2xpZCAnICsgYm9yZGVyQ29sb3IsXG4gICAgICAgICAgYmFja2dyb3VuZDogaXNPdmVyID8gYm9yZGVyQ29sb3IgOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgIG1hcmdpbjogJ2F1dG8nXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgIG9uTW91c2VFbnRlcj17ZXZlbnQgPT4ge1xuICAgICAgICAgIHRpbWVsaW5lci5zZXRUaW1lKDApO1xuICAgICAgICAgIHRpbWVsaW5lci5wbGF5KCk7XG4gICAgICAgICAgdXBkYXRlKHtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleDogfn4oTWF0aC5yYW5kb20oKSAqIGxpc3QubGVuZ3RoKSxcbiAgICAgICAgICAgIGlzT3ZlcjogdHJ1ZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlTGVhdmU9e2V2ZW50ID0+XG4gICAgICAgICAgdXBkYXRlKHtpc092ZXI6IGZhbHNlfSl9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ21pZGRsZScsXG4gICAgICAgICAgICBjb2xvcjogaXNPdmVyID8gJ2JsYWNrJyA6ICd3aGl0ZScsXG4gICAgICAgICAgfX0+XG5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snIH19PlxuICAgICAgICAgICB7c3RhdGljVGV4dH0mbmJzcDtcbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnaW5saW5lLWJsb2NrJywgcG9zaXRpb246ICdyZWxhdGl2ZSd9fT5cbiAgICAgICAgICAgIHsvKiBOb3RpY2UgdGhhdCBzaW5jZSB3ZSdyZSB1c2luZyBUaW1lbGluZSBzdGF0ZWxlc3NseSAoYnkgcHJvdmlkaW5nXG4gICAgICAgICAgICAgICAgdGhlIHRpbWVsaW5lciBwcm9wKSwgaXQgY2FuIGJlIHJlbW92ZWQgZnJvbSB0aGUgRE9NIG9uIG1vdXNlIG91dCAqL31cbiAgICAgICAgICAgIHtpc092ZXIgJiZcbiAgICAgICAgICAgICAgPFRpbWVsaW5lIHRpbWVsaW5lcj17dGltZWxpbmVyfT5cbiAgICAgICAgICAgICAgeyh7dGltZX0pID0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICAuLi50d2Vlbih0aW1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAwOiB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0NTApLCBlYXNlOiBlYXNlT3V0U2luZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgMzA6IHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNSksIGVhc2U6IGVhc2VPdXRFbGFzdGljIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICA1MDogeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3doaXRlU3BhY2U6ICduby13cmFwJywgb3BhY2l0eTogdHdlZW4odGltZSwgezA6IDEsIDMwOiAxLCA0MDogMH0pLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgYm90dG9tOiAwLCB0ZXh0QWxpZ246ICdsZWZ0J319PlxuICAgICAgICAgICAgICAgICAgICAgIHt0b3BMaXN0Lm1hcChpdGVtID0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtsaXN0U3R5bGV9IGtleT17aXRlbX0+e2l0ZW19PC9kaXY+KX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAnMTAwJScsIHdpZHRoOiAnNTAwcHgnLCB0ZXh0QWxpZ246ICdsZWZ0J319PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tjb2xvcjogJ2JsYWNrJywgb3BhY2l0eTogdHdlZW4odGltZSwgezA6MC40LCAxODowLjQsIDIyOjF9KX19PntjdXJyZW50VGV4dH08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym90dG9tTGlzdC5tYXAoaXRlbSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e29wYWNpdHk6IHR3ZWVuKHRpbWUsIHswOiAxLCAzMDogMSwgNDA6IDB9KSwgLi4ubGlzdFN0eWxlfX0ga2V5PXtpdGVtfT57aXRlbX08L2Rpdj4pfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9PC9UaW1lbGluZT59XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtpc092ZXIgPyB7Y29sb3I6ICd0cmFuc3BhcmVudCd9IDoge319PntjdXJyZW50VGV4dH08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PilcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9kZW1vMy9Sb2xsQnV0dG9uLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfY29uc3RhbnQgPSByZXF1aXJlKCcuL2NvbnN0YW50Jyk7XG5cbnZhciBfY29uc3RhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29uc3RhbnQpO1xuXG52YXIgX2ZyZWV6ZSA9IHJlcXVpcmUoJy4vZnJlZXplJyk7XG5cbnZhciBfZnJlZXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZyZWV6ZSk7XG5cbnZhciBfaXMgPSByZXF1aXJlKCcuL2lzJyk7XG5cbnZhciBfaXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXMpO1xuXG52YXIgX2lmMiA9IHJlcXVpcmUoJy4vaWYnKTtcblxudmFyIF9pZjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pZjIpO1xuXG52YXIgX2lmRWxzZSA9IHJlcXVpcmUoJy4vaWZFbHNlJyk7XG5cbnZhciBfaWZFbHNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lmRWxzZSk7XG5cbnZhciBfbWFwID0gcmVxdWlyZSgnLi9tYXAnKTtcblxudmFyIF9tYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfbWFwKTtcblxudmFyIF9vbWl0ID0gcmVxdWlyZSgnLi9vbWl0Jyk7XG5cbnZhciBfb21pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9vbWl0KTtcblxudmFyIF9yZWplY3QgPSByZXF1aXJlKCcuL3JlamVjdCcpO1xuXG52YXIgX3JlamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWplY3QpO1xuXG52YXIgX3VwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJyk7XG5cbnZhciBfdXBkYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3VwZGF0ZSk7XG5cbnZhciBfdXBkYXRlSW4gPSByZXF1aXJlKCcuL3VwZGF0ZUluJyk7XG5cbnZhciBfdXBkYXRlSW4yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXBkYXRlSW4pO1xuXG52YXIgX3dpdGhEZWZhdWx0ID0gcmVxdWlyZSgnLi93aXRoRGVmYXVsdCcpO1xuXG52YXIgX3dpdGhEZWZhdWx0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dpdGhEZWZhdWx0KTtcblxudmFyIF91dGlsQ3VycnkgPSByZXF1aXJlKCcuL3V0aWwvY3VycnknKTtcblxudmFyIHUgPSBfdXBkYXRlMlsnZGVmYXVsdCddO1xuXG51Ll8gPSBfdXRpbEN1cnJ5Ll87XG51LmNvbnN0YW50ID0gX2NvbnN0YW50MlsnZGVmYXVsdCddO1xudVsnaWYnXSA9IF9pZjNbJ2RlZmF1bHQnXTtcbnUuaWZFbHNlID0gX2lmRWxzZTJbJ2RlZmF1bHQnXTtcbnUuaXMgPSBfaXMyWydkZWZhdWx0J107XG51LmZyZWV6ZSA9IF9mcmVlemUyWydkZWZhdWx0J107XG51Lm1hcCA9IF9tYXAyWydkZWZhdWx0J107XG51Lm9taXQgPSBfb21pdDJbJ2RlZmF1bHQnXTtcbnUucmVqZWN0ID0gX3JlamVjdDJbJ2RlZmF1bHQnXTtcbnUudXBkYXRlID0gX3VwZGF0ZTJbJ2RlZmF1bHQnXTtcbnUudXBkYXRlSW4gPSBfdXBkYXRlSW4yWydkZWZhdWx0J107XG51LndpdGhEZWZhdWx0ID0gX3dpdGhEZWZhdWx0MlsnZGVmYXVsdCddO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB1O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3QvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9mcmVlemUgPSByZXF1aXJlKCcuL2ZyZWV6ZScpO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGFsd2F5cyByZXR1cm5zIHRoZSBzdXBwbGllZCB2YWx1ZS5cbiAqXG4gKiBVc2VmdWwgZm9yIHJlcGxhY2luZyBhbiBvYmplY3Qgb3V0cmlnaHQgcmF0aGVyIHRoYW4gbWVyZ2luZyBpdC5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaWcgYSAtPiAoKiAtPiBhKVxuICogQG1lbWJlck9mIHVcbiAqIEBwYXJhbSAgeyp9IHZhbHVlIHdoYXQgdG8gcmV0dXJuIGZyb20gcmV0dXJuZWQgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn0gYSBuZXcgZnVuY3Rpb24gdGhhdCB3aWxsIGFsd2F5cyByZXR1cm4gdmFsdWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIHZhciBhbHdheXNGb3VyID0gdS5jb25zdGFudCg0KTtcbiAqIGV4cGVjdChhbHdheXNGb3VyKDMyKSkudG9FcXVhbCg0KTtcbiAqXG4gKiBAZXhhbXBsZVxuICogdmFyIHVzZXIgPSB7XG4gKiAgIG5hbWU6ICdNaXRjaCcsXG4gKiAgIGZhdm9yaXRlczoge1xuICogICAgIGJhbmQ6ICdOaXJ2YW5hJyxcbiAqICAgICBtb3ZpZTogJ1RoZSBNYXRyaXgnXG4gKiAgIH1cbiAqIH07XG4gKlxuICogdmFyIG5ld0Zhdm9yaXRlcyA9IHtcbiAqICAgYmFuZDogJ0NvbGRwbGF5J1xuICogfTtcbiAqXG4gKiB2YXIgcmVzdWx0ID0gdSh7IGZhdm9yaXRlczogdS5jb25zdGFudChuZXdGYXZvcml0ZXMpIH0sIHVzZXIpO1xuICpcbiAqIGV4cGVjdChyZXN1bHQpLnRvRXF1YWwoeyBuYW1lOiAnTWl0Y2gnLCBmYXZvcml0ZXM6IHsgYmFuZDogJ0NvbGRwbGF5JyB9IH0pO1xuICovXG5cbnZhciBfZnJlZXplMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ZyZWV6ZSk7XG5cbmZ1bmN0aW9uIGNvbnN0YW50KHZhbHVlKSB7XG4gIHZhciBmcm96ZW4gPSBfZnJlZXplMlsnZGVmYXVsdCddKHZhbHVlKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnJvemVuO1xuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjb25zdGFudDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L2NvbnN0YW50LmpzXG4gKiogbW9kdWxlIGlkID0gMTgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gaXNGcmVlemFibGUob2JqZWN0KSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmplY3QpIHx8IHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBuZWVkc0ZyZWV6aW5nKG9iamVjdCkge1xuICByZXR1cm4gaXNGcmVlemFibGUob2JqZWN0KSAmJiAhT2JqZWN0LmlzRnJvemVuKG9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIHJlY3VyKG9iamVjdCkge1xuICBPYmplY3QuZnJlZXplKG9iamVjdCk7XG5cbiAgT2JqZWN0LmtleXMob2JqZWN0KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICBpZiAobmVlZHNGcmVlemluZyh2YWx1ZSkpIHtcbiAgICAgIHJlY3VyKHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbi8qKlxuICogRGVlcGx5IGZyZWV6ZSBhIHBsYWluIGphdmFzY3JpcHQgb2JqZWN0LlxuICpcbiAqIElmIGBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nYCwgdGhpcyByZXR1cm5zIHRoZSBvcmlnaW5hbCBvYmplY3RcbiAqIHdpdG91dCBmcmVlemluZy5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBzaWcgYSAtPiBhXG4gKiBAcGFyYW0gIHtvYmplY3R9IG9iamVjdCBPYmplY3QgdG8gZnJlZXplLlxuICogQHJldHVybiB7b2JqZWN0fSBGcm96ZW4gb2JqZWN0LCB1bmxlc3MgaW4gcHJvZHVjdGlvbiwgdGhlbiB0aGUgc2FtZSBvYmplY3QuXG4gKi9cbmZ1bmN0aW9uIGZyZWV6ZShvYmplY3QpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgaWYgKG5lZWRzRnJlZXppbmcob2JqZWN0KSkge1xuICAgIHJlY3VyKG9iamVjdCk7XG4gIH1cblxuICByZXR1cm4gb2JqZWN0O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmcmVlemU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC9mcmVlemUuanNcbiAqKiBtb2R1bGUgaWQgPSAxODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91dGlsU3BsaXRQYXRoID0gcmVxdWlyZSgnLi91dGlsL3NwbGl0UGF0aCcpO1xuXG52YXIgX3V0aWxTcGxpdFBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdXRpbFNwbGl0UGF0aCk7XG5cbnZhciBfdXRpbEN1cnJ5ID0gcmVxdWlyZSgnLi91dGlsL2N1cnJ5Jyk7XG5cbnZhciBfdXRpbEN1cnJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDdXJyeSk7XG5cbmZ1bmN0aW9uIGlzKHBhdGgsIHByZWRpY2F0ZSwgb2JqZWN0KSB7XG4gIHZhciBwYXJ0cyA9IF91dGlsU3BsaXRQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gIHZhciByZXN0ID0gb2JqZWN0O1xuICB2YXIgcGFydCA9IHVuZGVmaW5lZDtcbiAgZm9yICh2YXIgX2l0ZXJhdG9yID0gcGFydHMsIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheShfaXRlcmF0b3IpLCBfaSA9IDAsIF9pdGVyYXRvciA9IF9pc0FycmF5ID8gX2l0ZXJhdG9yIDogX2l0ZXJhdG9yW1N5bWJvbC5pdGVyYXRvcl0oKTs7KSB7XG4gICAgaWYgKF9pc0FycmF5KSB7XG4gICAgICBpZiAoX2kgPj0gX2l0ZXJhdG9yLmxlbmd0aCkgYnJlYWs7XG4gICAgICBwYXJ0ID0gX2l0ZXJhdG9yW19pKytdO1xuICAgIH0gZWxzZSB7XG4gICAgICBfaSA9IF9pdGVyYXRvci5uZXh0KCk7XG4gICAgICBpZiAoX2kuZG9uZSkgYnJlYWs7XG4gICAgICBwYXJ0ID0gX2kudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiByZXN0ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIGZhbHNlO1xuICAgIHJlc3QgPSByZXN0W3BhcnRdO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcHJlZGljYXRlKHJlc3QpO1xuICB9XG5cbiAgcmV0dXJuIHByZWRpY2F0ZSA9PT0gcmVzdDtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3V0aWxDdXJyeTJbJ2RlZmF1bHQnXShpcyk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC9pcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHNwbGl0UGF0aDtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25SZWplY3QgPSByZXF1aXJlKCdsb2Rhc2gvY29sbGVjdGlvbi9yZWplY3QnKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uUmVqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25SZWplY3QpO1xuXG5mdW5jdGlvbiBzcGxpdFBhdGgocGF0aCkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheShwYXRoKSA/IHBhdGggOiBfbG9kYXNoQ29sbGVjdGlvblJlamVjdDJbJ2RlZmF1bHQnXShwYXRoLnNwbGl0KCcuJyksIGZ1bmN0aW9uICh4KSB7XG4gICAgcmV0dXJuICF4O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3QvdXRpbC9zcGxpdFBhdGguanNcbiAqKiBtb2R1bGUgaWQgPSAxODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYXJyYXlGaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheUZpbHRlcicpLFxuICAgIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VGaWx0ZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRmlsdGVyJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKipcbiAqIFRoZSBvcHBvc2l0ZSBvZiBgXy5maWx0ZXJgOyB0aGlzIG1ldGhvZCByZXR1cm5zIHRoZSBlbGVtZW50cyBvZiBgY29sbGVjdGlvbmBcbiAqIHRoYXQgYHByZWRpY2F0ZWAgZG9lcyAqKm5vdCoqIHJldHVybiB0cnV0aHkgZm9yLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fHN0cmluZ30gW3ByZWRpY2F0ZT1fLmlkZW50aXR5XSBUaGUgZnVuY3Rpb24gaW52b2tlZFxuICogIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYHByZWRpY2F0ZWAuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5yZWplY3QoWzEsIDIsIDMsIDRdLCBmdW5jdGlvbihuKSB7XG4gKiAgIHJldHVybiBuICUgMiA9PSAwO1xuICogfSk7XG4gKiAvLyA9PiBbMSwgM11cbiAqXG4gKiB2YXIgdXNlcnMgPSBbXG4gKiAgIHsgJ3VzZXInOiAnYmFybmV5JywgJ2FnZSc6IDM2LCAnYWN0aXZlJzogZmFsc2UgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJywgICAnYWdlJzogNDAsICdhY3RpdmUnOiB0cnVlIH1cbiAqIF07XG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLm1hdGNoZXNgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5wbHVjayhfLnJlamVjdCh1c2VycywgeyAnYWdlJzogNDAsICdhY3RpdmUnOiB0cnVlIH0pLCAndXNlcicpO1xuICogLy8gPT4gWydiYXJuZXknXVxuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5tYXRjaGVzUHJvcGVydHlgIGNhbGxiYWNrIHNob3J0aGFuZFxuICogXy5wbHVjayhfLnJlamVjdCh1c2VycywgJ2FjdGl2ZScsIGZhbHNlKSwgJ3VzZXInKTtcbiAqIC8vID0+IFsnZnJlZCddXG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLnByb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ucGx1Y2soXy5yZWplY3QodXNlcnMsICdhY3RpdmUnKSwgJ3VzZXInKTtcbiAqIC8vID0+IFsnYmFybmV5J11cbiAqL1xuZnVuY3Rpb24gcmVqZWN0KGNvbGxlY3Rpb24sIHByZWRpY2F0ZSwgdGhpc0FyZykge1xuICB2YXIgZnVuYyA9IGlzQXJyYXkoY29sbGVjdGlvbikgPyBhcnJheUZpbHRlciA6IGJhc2VGaWx0ZXI7XG4gIHByZWRpY2F0ZSA9IGJhc2VDYWxsYmFjayhwcmVkaWNhdGUsIHRoaXNBcmcsIDMpO1xuICByZXR1cm4gZnVuYyhjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pIHtcbiAgICByZXR1cm4gIXByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSByZWplY3Q7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvY29sbGVjdGlvbi9yZWplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFsrK3Jlc0luZGV4XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5RmlsdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGJhc2VNYXRjaGVzID0gcmVxdWlyZSgnLi9iYXNlTWF0Y2hlcycpLFxuICAgIGJhc2VNYXRjaGVzUHJvcGVydHkgPSByZXF1aXJlKCcuL2Jhc2VNYXRjaGVzUHJvcGVydHknKSxcbiAgICBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2JpbmRDYWxsYmFjaycpLFxuICAgIGlkZW50aXR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9pZGVudGl0eScpLFxuICAgIHByb3BlcnR5ID0gcmVxdWlyZSgnLi4vdXRpbGl0eS9wcm9wZXJ0eScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmNhbGxiYWNrYCB3aGljaCBzdXBwb3J0cyBzcGVjaWZ5aW5nIHRoZVxuICogbnVtYmVyIG9mIGFyZ3VtZW50cyB0byBwcm92aWRlIHRvIGBmdW5jYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSBbZnVuYz1fLmlkZW50aXR5XSBUaGUgdmFsdWUgdG8gY29udmVydCB0byBhIGNhbGxiYWNrLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmFzZUNhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIGZ1bmM7XG4gIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdGhpc0FyZyA9PT0gdW5kZWZpbmVkXG4gICAgICA/IGZ1bmNcbiAgICAgIDogYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KTtcbiAgfVxuICBpZiAoZnVuYyA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0eXBlID09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIGJhc2VNYXRjaGVzKGZ1bmMpO1xuICB9XG4gIHJldHVybiB0aGlzQXJnID09PSB1bmRlZmluZWRcbiAgICA/IHByb3BlcnR5KGZ1bmMpXG4gICAgOiBiYXNlTWF0Y2hlc1Byb3BlcnR5KGZ1bmMsIHRoaXNBcmcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VDYWxsYmFjaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlQ2FsbGJhY2suanNcbiAqKiBtb2R1bGUgaWQgPSAxODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZUlzTWF0Y2ggPSByZXF1aXJlKCcuL2Jhc2VJc01hdGNoJyksXG4gICAgZ2V0TWF0Y2hEYXRhID0gcmVxdWlyZSgnLi9nZXRNYXRjaERhdGEnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzYCB3aGljaCBkb2VzIG5vdCBjbG9uZSBgc291cmNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IHNvdXJjZSBUaGUgb2JqZWN0IG9mIHByb3BlcnR5IHZhbHVlcyB0byBtYXRjaC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlTWF0Y2hlcyhzb3VyY2UpIHtcbiAgdmFyIG1hdGNoRGF0YSA9IGdldE1hdGNoRGF0YShzb3VyY2UpO1xuICBpZiAobWF0Y2hEYXRhLmxlbmd0aCA9PSAxICYmIG1hdGNoRGF0YVswXVsyXSkge1xuICAgIHZhciBrZXkgPSBtYXRjaERhdGFbMF1bMF0sXG4gICAgICAgIHZhbHVlID0gbWF0Y2hEYXRhWzBdWzFdO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCkge1xuICAgICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gdmFsdWUgJiYgKHZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiB0b09iamVjdChvYmplY3QpKSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VJc01hdGNoKG9iamVjdCwgbWF0Y2hEYXRhKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlTWF0Y2hlcztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vYmFzZUlzRXF1YWwnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc01hdGNoYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0FycmF5fSBtYXRjaERhdGEgVGhlIHByb3BlcnkgbmFtZXMsIHZhbHVlcywgYW5kIGNvbXBhcmUgZmxhZ3MgdG8gbWF0Y2guXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgb2JqZWN0YCBpcyBhIG1hdGNoLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc01hdGNoKG9iamVjdCwgbWF0Y2hEYXRhLCBjdXN0b21pemVyKSB7XG4gIHZhciBpbmRleCA9IG1hdGNoRGF0YS5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBpbmRleCxcbiAgICAgIG5vQ3VzdG9taXplciA9ICFjdXN0b21pemVyO1xuXG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiAhbGVuZ3RoO1xuICB9XG4gIG9iamVjdCA9IHRvT2JqZWN0KG9iamVjdCk7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIGlmICgobm9DdXN0b21pemVyICYmIGRhdGFbMl0pXG4gICAgICAgICAgPyBkYXRhWzFdICE9PSBvYmplY3RbZGF0YVswXV1cbiAgICAgICAgICA6ICEoZGF0YVswXSBpbiBvYmplY3QpXG4gICAgICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIGRhdGEgPSBtYXRjaERhdGFbaW5kZXhdO1xuICAgIHZhciBrZXkgPSBkYXRhWzBdLFxuICAgICAgICBvYmpWYWx1ZSA9IG9iamVjdFtrZXldLFxuICAgICAgICBzcmNWYWx1ZSA9IGRhdGFbMV07XG5cbiAgICBpZiAobm9DdXN0b21pemVyICYmIGRhdGFbMl0pIHtcbiAgICAgIGlmIChvYmpWYWx1ZSA9PT0gdW5kZWZpbmVkICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcmVzdWx0ID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIob2JqVmFsdWUsIHNyY1ZhbHVlLCBrZXkpIDogdW5kZWZpbmVkO1xuICAgICAgaWYgKCEocmVzdWx0ID09PSB1bmRlZmluZWQgPyBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqVmFsdWUsIGN1c3RvbWl6ZXIsIHRydWUpIDogcmVzdWx0KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc01hdGNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJc01hdGNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGJhc2VJc0VxdWFsRGVlcCA9IHJlcXVpcmUoJy4vYmFzZUlzRXF1YWxEZWVwJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pc0VxdWFsYCB3aXRob3V0IHN1cHBvcnQgZm9yIGB0aGlzYCBiaW5kaW5nXG4gKiBgY3VzdG9taXplcmAgZnVuY3Rpb25zLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHBhcmFtIHsqfSBvdGhlciBUaGUgb3RoZXIgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlSXNFcXVhbCh2YWx1ZSwgb3RoZXIsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIGlmICh2YWx1ZSA9PT0gb3RoZXIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvdGhlciA9PSBudWxsIHx8ICghaXNPYmplY3QodmFsdWUpICYmICFpc09iamVjdExpa2Uob3RoZXIpKSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdmFsdWUgJiYgb3RoZXIgIT09IG90aGVyO1xuICB9XG4gIHJldHVybiBiYXNlSXNFcXVhbERlZXAodmFsdWUsIG90aGVyLCBiYXNlSXNFcXVhbCwgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJc0VxdWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGVxdWFsQXJyYXlzID0gcmVxdWlyZSgnLi9lcXVhbEFycmF5cycpLFxuICAgIGVxdWFsQnlUYWcgPSByZXF1aXJlKCcuL2VxdWFsQnlUYWcnKSxcbiAgICBlcXVhbE9iamVjdHMgPSByZXF1aXJlKCcuL2VxdWFsT2JqZWN0cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc1R5cGVkQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzVHlwZWRBcnJheScpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgYXJnc1RhZyA9ICdbb2JqZWN0IEFyZ3VtZW50c10nLFxuICAgIGFycmF5VGFnID0gJ1tvYmplY3QgQXJyYXldJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbGAgZm9yIGFycmF5cyBhbmQgb2JqZWN0cyB3aGljaCBwZXJmb3Jtc1xuICogZGVlcCBjb21wYXJpc29ucyBhbmQgdHJhY2tzIHRyYXZlcnNlZCBvYmplY3RzIGVuYWJsaW5nIG9iamVjdHMgd2l0aCBjaXJjdWxhclxuICogcmVmZXJlbmNlcyB0byBiZSBjb21wYXJlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXF1YWxGdW5jIFRoZSBmdW5jdGlvbiB0byBkZXRlcm1pbmUgZXF1aXZhbGVudHMgb2YgdmFsdWVzLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaW5nIG9iamVjdHMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0E9W11dIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQj1bXV0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUlzRXF1YWxEZWVwKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIG9iaklzQXJyID0gaXNBcnJheShvYmplY3QpLFxuICAgICAgb3RoSXNBcnIgPSBpc0FycmF5KG90aGVyKSxcbiAgICAgIG9ialRhZyA9IGFycmF5VGFnLFxuICAgICAgb3RoVGFnID0gYXJyYXlUYWc7XG5cbiAgaWYgKCFvYmpJc0Fycikge1xuICAgIG9ialRhZyA9IG9ialRvU3RyaW5nLmNhbGwob2JqZWN0KTtcbiAgICBpZiAob2JqVGFnID09IGFyZ3NUYWcpIHtcbiAgICAgIG9ialRhZyA9IG9iamVjdFRhZztcbiAgICB9IGVsc2UgaWYgKG9ialRhZyAhPSBvYmplY3RUYWcpIHtcbiAgICAgIG9iaklzQXJyID0gaXNUeXBlZEFycmF5KG9iamVjdCk7XG4gICAgfVxuICB9XG4gIGlmICghb3RoSXNBcnIpIHtcbiAgICBvdGhUYWcgPSBvYmpUb1N0cmluZy5jYWxsKG90aGVyKTtcbiAgICBpZiAob3RoVGFnID09IGFyZ3NUYWcpIHtcbiAgICAgIG90aFRhZyA9IG9iamVjdFRhZztcbiAgICB9IGVsc2UgaWYgKG90aFRhZyAhPSBvYmplY3RUYWcpIHtcbiAgICAgIG90aElzQXJyID0gaXNUeXBlZEFycmF5KG90aGVyKTtcbiAgICB9XG4gIH1cbiAgdmFyIG9iaklzT2JqID0gb2JqVGFnID09IG9iamVjdFRhZyxcbiAgICAgIG90aElzT2JqID0gb3RoVGFnID09IG9iamVjdFRhZyxcbiAgICAgIGlzU2FtZVRhZyA9IG9ialRhZyA9PSBvdGhUYWc7XG5cbiAgaWYgKGlzU2FtZVRhZyAmJiAhKG9iaklzQXJyIHx8IG9iaklzT2JqKSkge1xuICAgIHJldHVybiBlcXVhbEJ5VGFnKG9iamVjdCwgb3RoZXIsIG9ialRhZyk7XG4gIH1cbiAgaWYgKCFpc0xvb3NlKSB7XG4gICAgdmFyIG9iaklzV3JhcHBlZCA9IG9iaklzT2JqICYmIGhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnX193cmFwcGVkX18nKSxcbiAgICAgICAgb3RoSXNXcmFwcGVkID0gb3RoSXNPYmogJiYgaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwgJ19fd3JhcHBlZF9fJyk7XG5cbiAgICBpZiAob2JqSXNXcmFwcGVkIHx8IG90aElzV3JhcHBlZCkge1xuICAgICAgcmV0dXJuIGVxdWFsRnVuYyhvYmpJc1dyYXBwZWQgPyBvYmplY3QudmFsdWUoKSA6IG9iamVjdCwgb3RoSXNXcmFwcGVkID8gb3RoZXIudmFsdWUoKSA6IG90aGVyLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQik7XG4gICAgfVxuICB9XG4gIGlmICghaXNTYW1lVGFnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEFzc3VtZSBjeWNsaWMgdmFsdWVzIGFyZSBlcXVhbC5cbiAgLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZGV0ZWN0aW5nIGNpcmN1bGFyIHJlZmVyZW5jZXMgc2VlIGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jSk8uXG4gIHN0YWNrQSB8fCAoc3RhY2tBID0gW10pO1xuICBzdGFja0IgfHwgKHN0YWNrQiA9IFtdKTtcblxuICB2YXIgbGVuZ3RoID0gc3RhY2tBLmxlbmd0aDtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgaWYgKHN0YWNrQVtsZW5ndGhdID09IG9iamVjdCkge1xuICAgICAgcmV0dXJuIHN0YWNrQltsZW5ndGhdID09IG90aGVyO1xuICAgIH1cbiAgfVxuICAvLyBBZGQgYG9iamVjdGAgYW5kIGBvdGhlcmAgdG8gdGhlIHN0YWNrIG9mIHRyYXZlcnNlZCBvYmplY3RzLlxuICBzdGFja0EucHVzaChvYmplY3QpO1xuICBzdGFja0IucHVzaChvdGhlcik7XG5cbiAgdmFyIHJlc3VsdCA9IChvYmpJc0FyciA/IGVxdWFsQXJyYXlzIDogZXF1YWxPYmplY3RzKShvYmplY3QsIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcblxuICBzdGFja0EucG9wKCk7XG4gIHN0YWNrQi5wb3AoKTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJc0VxdWFsRGVlcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlSXNFcXVhbERlZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYXJyYXlTb21lID0gcmVxdWlyZSgnLi9hcnJheVNvbWUnKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VJc0VxdWFsRGVlcGAgZm9yIGFycmF5cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBjb21wYXJlLlxuICogQHBhcmFtIHtBcnJheX0gb3RoZXIgVGhlIG90aGVyIGFycmF5IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBlcXVhbEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRldGVybWluZSBlcXVpdmFsZW50cyBvZiB2YWx1ZXMuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY3VzdG9taXplcl0gVGhlIGZ1bmN0aW9uIHRvIGN1c3RvbWl6ZSBjb21wYXJpbmcgYXJyYXlzLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNMb29zZV0gU3BlY2lmeSBwZXJmb3JtaW5nIHBhcnRpYWwgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge0FycmF5fSBbc3RhY2tBXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgb2JqZWN0cy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0JdIFRyYWNrcyB0cmF2ZXJzZWQgYG90aGVyYCBvYmplY3RzLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBhcnJheXMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxBcnJheXMoYXJyYXksIG90aGVyLCBlcXVhbEZ1bmMsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgYXJyTGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgb3RoTGVuZ3RoID0gb3RoZXIubGVuZ3RoO1xuXG4gIGlmIChhcnJMZW5ndGggIT0gb3RoTGVuZ3RoICYmICEoaXNMb29zZSAmJiBvdGhMZW5ndGggPiBhcnJMZW5ndGgpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIElnbm9yZSBub24taW5kZXggcHJvcGVydGllcy5cbiAgd2hpbGUgKCsraW5kZXggPCBhcnJMZW5ndGgpIHtcbiAgICB2YXIgYXJyVmFsdWUgPSBhcnJheVtpbmRleF0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJbaW5kZXhdLFxuICAgICAgICByZXN1bHQgPSBjdXN0b21pemVyID8gY3VzdG9taXplcihpc0xvb3NlID8gb3RoVmFsdWUgOiBhcnJWYWx1ZSwgaXNMb29zZSA/IGFyclZhbHVlIDogb3RoVmFsdWUsIGluZGV4KSA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChyZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gUmVjdXJzaXZlbHkgY29tcGFyZSBhcnJheXMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoaXNMb29zZSkge1xuICAgICAgaWYgKCFhcnJheVNvbWUob3RoZXIsIGZ1bmN0aW9uKG90aFZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyVmFsdWUgPT09IG90aFZhbHVlIHx8IGVxdWFsRnVuYyhhcnJWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKTtcbiAgICAgICAgICB9KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICghKGFyclZhbHVlID09PSBvdGhWYWx1ZSB8fCBlcXVhbEZ1bmMoYXJyVmFsdWUsIG90aFZhbHVlLCBjdXN0b21pemVyLCBpc0xvb3NlLCBzdGFja0EsIHN0YWNrQikpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGVxdWFsQXJyYXlzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2VxdWFsQXJyYXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMTkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uc29tZWAgZm9yIGFycmF5cyB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGFueSBlbGVtZW50IHBhc3NlcyB0aGUgcHJlZGljYXRlIGNoZWNrLFxuICogIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlTb21lKGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVNvbWU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlTb21lLmpzXG4gKiogbW9kdWxlIGlkID0gMTkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGJvb2xUYWcgPSAnW29iamVjdCBCb29sZWFuXScsXG4gICAgZGF0ZVRhZyA9ICdbb2JqZWN0IERhdGVdJyxcbiAgICBlcnJvclRhZyA9ICdbb2JqZWN0IEVycm9yXScsXG4gICAgbnVtYmVyVGFnID0gJ1tvYmplY3QgTnVtYmVyXScsXG4gICAgcmVnZXhwVGFnID0gJ1tvYmplY3QgUmVnRXhwXScsXG4gICAgc3RyaW5nVGFnID0gJ1tvYmplY3QgU3RyaW5nXSc7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlSXNFcXVhbERlZXBgIGZvciBjb21wYXJpbmcgb2JqZWN0cyBvZlxuICogdGhlIHNhbWUgYHRvU3RyaW5nVGFnYC5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBmdW5jdGlvbiBvbmx5IHN1cHBvcnRzIGNvbXBhcmluZyB2YWx1ZXMgd2l0aCB0YWdzIG9mXG4gKiBgQm9vbGVhbmAsIGBEYXRlYCwgYEVycm9yYCwgYE51bWJlcmAsIGBSZWdFeHBgLCBvciBgU3RyaW5nYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtzdHJpbmd9IHRhZyBUaGUgYHRvU3RyaW5nVGFnYCBvZiB0aGUgb2JqZWN0cyB0byBjb21wYXJlLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3RzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGVxdWFsQnlUYWcob2JqZWN0LCBvdGhlciwgdGFnKSB7XG4gIHN3aXRjaCAodGFnKSB7XG4gICAgY2FzZSBib29sVGFnOlxuICAgIGNhc2UgZGF0ZVRhZzpcbiAgICAgIC8vIENvZXJjZSBkYXRlcyBhbmQgYm9vbGVhbnMgdG8gbnVtYmVycywgZGF0ZXMgdG8gbWlsbGlzZWNvbmRzIGFuZCBib29sZWFuc1xuICAgICAgLy8gdG8gYDFgIG9yIGAwYCB0cmVhdGluZyBpbnZhbGlkIGRhdGVzIGNvZXJjZWQgdG8gYE5hTmAgYXMgbm90IGVxdWFsLlxuICAgICAgcmV0dXJuICtvYmplY3QgPT0gK290aGVyO1xuXG4gICAgY2FzZSBlcnJvclRhZzpcbiAgICAgIHJldHVybiBvYmplY3QubmFtZSA9PSBvdGhlci5uYW1lICYmIG9iamVjdC5tZXNzYWdlID09IG90aGVyLm1lc3NhZ2U7XG5cbiAgICBjYXNlIG51bWJlclRhZzpcbiAgICAgIC8vIFRyZWF0IGBOYU5gIHZzLiBgTmFOYCBhcyBlcXVhbC5cbiAgICAgIHJldHVybiAob2JqZWN0ICE9ICtvYmplY3QpXG4gICAgICAgID8gb3RoZXIgIT0gK290aGVyXG4gICAgICAgIDogb2JqZWN0ID09ICtvdGhlcjtcblxuICAgIGNhc2UgcmVnZXhwVGFnOlxuICAgIGNhc2Ugc3RyaW5nVGFnOlxuICAgICAgLy8gQ29lcmNlIHJlZ2V4ZXMgdG8gc3RyaW5ncyBhbmQgdHJlYXQgc3RyaW5ncyBwcmltaXRpdmVzIGFuZCBzdHJpbmdcbiAgICAgIC8vIG9iamVjdHMgYXMgZXF1YWwuIFNlZSBodHRwczovL2VzNS5naXRodWIuaW8vI3gxNS4xMC42LjQgZm9yIG1vcmUgZGV0YWlscy5cbiAgICAgIHJldHVybiBvYmplY3QgPT0gKG90aGVyICsgJycpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlcXVhbEJ5VGFnO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2VxdWFsQnlUYWcuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIga2V5cyA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzJyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZUlzRXF1YWxEZWVwYCBmb3Igb2JqZWN0cyB3aXRoIHN1cHBvcnQgZm9yXG4gKiBwYXJ0aWFsIGRlZXAgY29tcGFyaXNvbnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHtPYmplY3R9IG90aGVyIFRoZSBvdGhlciBvYmplY3QgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGVxdWFsRnVuYyBUaGUgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGVxdWl2YWxlbnRzIG9mIHZhbHVlcy5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjdXN0b21pemVyXSBUaGUgZnVuY3Rpb24gdG8gY3VzdG9taXplIGNvbXBhcmluZyB2YWx1ZXMuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpc0xvb3NlXSBTcGVjaWZ5IHBlcmZvcm1pbmcgcGFydGlhbCBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IFtzdGFja0FdIFRyYWNrcyB0cmF2ZXJzZWQgYHZhbHVlYCBvYmplY3RzLlxuICogQHBhcmFtIHtBcnJheX0gW3N0YWNrQl0gVHJhY2tzIHRyYXZlcnNlZCBgb3RoZXJgIG9iamVjdHMuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG9iamVjdHMgYXJlIGVxdWl2YWxlbnQsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gZXF1YWxPYmplY3RzKG9iamVjdCwgb3RoZXIsIGVxdWFsRnVuYywgY3VzdG9taXplciwgaXNMb29zZSwgc3RhY2tBLCBzdGFja0IpIHtcbiAgdmFyIG9ialByb3BzID0ga2V5cyhvYmplY3QpLFxuICAgICAgb2JqTGVuZ3RoID0gb2JqUHJvcHMubGVuZ3RoLFxuICAgICAgb3RoUHJvcHMgPSBrZXlzKG90aGVyKSxcbiAgICAgIG90aExlbmd0aCA9IG90aFByb3BzLmxlbmd0aDtcblxuICBpZiAob2JqTGVuZ3RoICE9IG90aExlbmd0aCAmJiAhaXNMb29zZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaW5kZXggPSBvYmpMZW5ndGg7XG4gIHdoaWxlIChpbmRleC0tKSB7XG4gICAgdmFyIGtleSA9IG9ialByb3BzW2luZGV4XTtcbiAgICBpZiAoIShpc0xvb3NlID8ga2V5IGluIG90aGVyIDogaGFzT3duUHJvcGVydHkuY2FsbChvdGhlciwga2V5KSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgdmFyIHNraXBDdG9yID0gaXNMb29zZTtcbiAgd2hpbGUgKCsraW5kZXggPCBvYmpMZW5ndGgpIHtcbiAgICBrZXkgPSBvYmpQcm9wc1tpbmRleF07XG4gICAgdmFyIG9ialZhbHVlID0gb2JqZWN0W2tleV0sXG4gICAgICAgIG90aFZhbHVlID0gb3RoZXJba2V5XSxcbiAgICAgICAgcmVzdWx0ID0gY3VzdG9taXplciA/IGN1c3RvbWl6ZXIoaXNMb29zZSA/IG90aFZhbHVlIDogb2JqVmFsdWUsIGlzTG9vc2U/IG9ialZhbHVlIDogb3RoVmFsdWUsIGtleSkgOiB1bmRlZmluZWQ7XG5cbiAgICAvLyBSZWN1cnNpdmVseSBjb21wYXJlIG9iamVjdHMgKHN1c2NlcHRpYmxlIHRvIGNhbGwgc3RhY2sgbGltaXRzKS5cbiAgICBpZiAoIShyZXN1bHQgPT09IHVuZGVmaW5lZCA/IGVxdWFsRnVuYyhvYmpWYWx1ZSwgb3RoVmFsdWUsIGN1c3RvbWl6ZXIsIGlzTG9vc2UsIHN0YWNrQSwgc3RhY2tCKSA6IHJlc3VsdCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgc2tpcEN0b3IgfHwgKHNraXBDdG9yID0ga2V5ID09ICdjb25zdHJ1Y3RvcicpO1xuICB9XG4gIGlmICghc2tpcEN0b3IpIHtcbiAgICB2YXIgb2JqQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgICAgb3RoQ3RvciA9IG90aGVyLmNvbnN0cnVjdG9yO1xuXG4gICAgLy8gTm9uIGBPYmplY3RgIG9iamVjdCBpbnN0YW5jZXMgd2l0aCBkaWZmZXJlbnQgY29uc3RydWN0b3JzIGFyZSBub3QgZXF1YWwuXG4gICAgaWYgKG9iakN0b3IgIT0gb3RoQ3RvciAmJlxuICAgICAgICAoJ2NvbnN0cnVjdG9yJyBpbiBvYmplY3QgJiYgJ2NvbnN0cnVjdG9yJyBpbiBvdGhlcikgJiZcbiAgICAgICAgISh0eXBlb2Ygb2JqQ3RvciA9PSAnZnVuY3Rpb24nICYmIG9iakN0b3IgaW5zdGFuY2VvZiBvYmpDdG9yICYmXG4gICAgICAgICAgdHlwZW9mIG90aEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBvdGhDdG9yIGluc3RhbmNlb2Ygb3RoQ3RvcikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXF1YWxPYmplY3RzO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2VxdWFsT2JqZWN0cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0JyksXG4gICAgc2hpbUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9zaGltS2V5cycpO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUtleXMgPSBnZXROYXRpdmUoT2JqZWN0LCAna2V5cycpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBOb24tb2JqZWN0IHZhbHVlcyBhcmUgY29lcmNlZCB0byBvYmplY3RzLiBTZWUgdGhlXG4gKiBbRVMgc3BlY10oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LmtleXMpXG4gKiBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiAgIHRoaXMuYiA9IDI7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gMztcbiAqXG4gKiBfLmtleXMobmV3IEZvbyk7XG4gKiAvLyA9PiBbJ2EnLCAnYiddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogXy5rZXlzKCdoaScpO1xuICogLy8gPT4gWycwJywgJzEnXVxuICovXG52YXIga2V5cyA9ICFuYXRpdmVLZXlzID8gc2hpbUtleXMgOiBmdW5jdGlvbihvYmplY3QpIHtcbiAgdmFyIEN0b3IgPSBvYmplY3QgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgaWYgKCh0eXBlb2YgQ3RvciA9PSAnZnVuY3Rpb24nICYmIEN0b3IucHJvdG90eXBlID09PSBvYmplY3QpIHx8XG4gICAgICAodHlwZW9mIG9iamVjdCAhPSAnZnVuY3Rpb24nICYmIGlzQXJyYXlMaWtlKG9iamVjdCkpKSB7XG4gICAgcmV0dXJuIHNoaW1LZXlzKG9iamVjdCk7XG4gIH1cbiAgcmV0dXJuIGlzT2JqZWN0KG9iamVjdCkgPyBuYXRpdmVLZXlzKG9iamVjdCkgOiBbXTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ga2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qva2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBpc05hdGl2ZSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNOYXRpdmUnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBuYXRpdmUgZnVuY3Rpb24gYXQgYGtleWAgb2YgYG9iamVjdGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgbWV0aG9kIHRvIGdldC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBmdW5jdGlvbiBpZiBpdCdzIG5hdGl2ZSwgZWxzZSBgdW5kZWZpbmVkYC5cbiAqL1xuZnVuY3Rpb24gZ2V0TmF0aXZlKG9iamVjdCwga2V5KSB7XG4gIHZhciB2YWx1ZSA9IG9iamVjdCA9PSBudWxsID8gdW5kZWZpbmVkIDogb2JqZWN0W2tleV07XG4gIHJldHVybiBpc05hdGl2ZSh2YWx1ZSkgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXROYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TmF0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gMTk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGlzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2lzRnVuY3Rpb24nKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGhvc3QgY29uc3RydWN0b3JzIChTYWZhcmkgPiA1KS4gKi9cbnZhciByZUlzSG9zdEN0b3IgPSAvXlxcW29iamVjdCAuKz9Db25zdHJ1Y3RvclxcXSQvO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZuVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBpZiBhIG1ldGhvZCBpcyBuYXRpdmUuICovXG52YXIgcmVJc05hdGl2ZSA9IFJlZ0V4cCgnXicgK1xuICBmblRvU3RyaW5nLmNhbGwoaGFzT3duUHJvcGVydHkpLnJlcGxhY2UoL1tcXFxcXiQuKis/KClbXFxde318XS9nLCAnXFxcXCQmJylcbiAgLnJlcGxhY2UoL2hhc093blByb3BlcnR5fChmdW5jdGlvbikuKj8oPz1cXFxcXFwoKXwgZm9yIC4rPyg/PVxcXFxcXF0pL2csICckMS4qPycpICsgJyQnXG4pO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgbmF0aXZlIGZ1bmN0aW9uLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIG5hdGl2ZSBmdW5jdGlvbiwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzTmF0aXZlKEFycmF5LnByb3RvdHlwZS5wdXNoKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzTmF0aXZlKF8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNOYXRpdmUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgcmV0dXJuIHJlSXNOYXRpdmUudGVzdChmblRvU3RyaW5nLmNhbGwodmFsdWUpKTtcbiAgfVxuICByZXR1cm4gaXNPYmplY3RMaWtlKHZhbHVlKSAmJiByZUlzSG9zdEN0b3IudGVzdCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNOYXRpdmU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc05hdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGZ1bmNUYWcgPSAnW29iamVjdCBGdW5jdGlvbl0nO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYEZ1bmN0aW9uYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNGdW5jdGlvbihfKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzRnVuY3Rpb24oL2FiYy8pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAvLyBUaGUgdXNlIG9mIGBPYmplY3QjdG9TdHJpbmdgIGF2b2lkcyBpc3N1ZXMgd2l0aCB0aGUgYHR5cGVvZmAgb3BlcmF0b3JcbiAgLy8gaW4gb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmkgd2hpY2ggcmV0dXJuICdmdW5jdGlvbicgZm9yIHJlZ2V4ZXNcbiAgLy8gYW5kIFNhZmFyaSA4IHdoaWNoIHJldHVybnMgJ29iamVjdCcgZm9yIHR5cGVkIGFycmF5IGNvbnN0cnVjdG9ycy5cbiAgcmV0dXJuIGlzT2JqZWN0KHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBmdW5jVGFnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzRnVuY3Rpb247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc0Z1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyB0aGUgW2xhbmd1YWdlIHR5cGVdKGh0dHBzOi8vZXM1LmdpdGh1Yi5pby8jeDgpIG9mIGBPYmplY3RgLlxuICogKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdCgxKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIC8vIEF2b2lkIGEgVjggSklUIGJ1ZyBpbiBDaHJvbWUgMTktMjAuXG4gIC8vIFNlZSBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MjI5MSBmb3IgbW9yZSBkZXRhaWxzLlxuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc09iamVjdDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9sYW5nL2lzT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc09iamVjdExpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgZ2V0TGVuZ3RoID0gcmVxdWlyZSgnLi9nZXRMZW5ndGgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4vaXNMZW5ndGgnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhcnJheS1saWtlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFycmF5LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNBcnJheUxpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgaXNMZW5ndGgoZ2V0TGVuZ3RoKHZhbHVlKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcnJheUxpa2U7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNBcnJheUxpa2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi9iYXNlUHJvcGVydHknKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBcImxlbmd0aFwiIHByb3BlcnR5IHZhbHVlIG9mIGBvYmplY3RgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gYXZvaWQgYSBbSklUIGJ1Z10oaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE0Mjc5MilcbiAqIHRoYXQgYWZmZWN0cyBTYWZhcmkgb24gYXQgbGVhc3QgaU9TIDguMS04LjMgQVJNNjQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBcImxlbmd0aFwiIHZhbHVlLlxuICovXG52YXIgZ2V0TGVuZ3RoID0gYmFzZVByb3BlcnR5KCdsZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBnZXRMZW5ndGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvZ2V0TGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMjAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5wcm9wZXJ0eWAgd2l0aG91dCBzdXBwb3J0IGZvciBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBiYXNlUHJvcGVydHkoa2V5KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gb2JqZWN0ID09IG51bGwgPyB1bmRlZmluZWQgOiBvYmplY3Rba2V5XTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZVByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBVc2VkIGFzIHRoZSBbbWF4aW11bSBsZW5ndGhdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW51bWJlci5tYXhfc2FmZV9pbnRlZ2VyKVxuICogb2YgYW4gYXJyYXktbGlrZSB2YWx1ZS5cbiAqL1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSA5MDA3MTk5MjU0NzQwOTkxO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgdmFsaWQgYXJyYXktbGlrZSBsZW5ndGguXG4gKlxuICogKipOb3RlOioqIFRoaXMgZnVuY3Rpb24gaXMgYmFzZWQgb24gW2BUb0xlbmd0aGBdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLXRvbGVuZ3RoKS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGxlbmd0aCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0xlbmd0aCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdudW1iZXInICYmIHZhbHVlID4gLTEgJiYgdmFsdWUgJSAxID09IDAgJiYgdmFsdWUgPD0gTUFYX1NBRkVfSU5URUdFUjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xlbmd0aDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9pc0xlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4vaXNJbmRleCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIGtleXNJbiA9IHJlcXVpcmUoJy4uL29iamVjdC9rZXlzSW4nKTtcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogQSBmYWxsYmFjayBpbXBsZW1lbnRhdGlvbiBvZiBgT2JqZWN0LmtleXNgIHdoaWNoIGNyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlXG4gKiBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBuYW1lcyBvZiBgb2JqZWN0YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBhcnJheSBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqL1xuZnVuY3Rpb24gc2hpbUtleXMob2JqZWN0KSB7XG4gIHZhciBwcm9wcyA9IGtleXNJbihvYmplY3QpLFxuICAgICAgcHJvcHNMZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICBsZW5ndGggPSBwcm9wc0xlbmd0aCAmJiBvYmplY3QubGVuZ3RoO1xuXG4gIHZhciBhbGxvd0luZGV4ZXMgPSAhIWxlbmd0aCAmJiBpc0xlbmd0aChsZW5ndGgpICYmXG4gICAgKGlzQXJyYXkob2JqZWN0KSB8fCBpc0FyZ3VtZW50cyhvYmplY3QpKTtcblxuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgcHJvcHNMZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmICgoYWxsb3dJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSB8fCBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkge1xuICAgICAgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaGltS2V5cztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9zaGltS2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzQXJyYXlMaWtlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gb2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgYXJndW1lbnRzYCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNBcmd1bWVudHMoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FyZ3VtZW50cyhbMSwgMiwgM10pO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNBcmd1bWVudHModmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NhbGxlZScpICYmICFwcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHZhbHVlLCAnY2FsbGVlJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBcmd1bWVudHM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc0FyZ3VtZW50cy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBnZXROYXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9nZXROYXRpdmUnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XSc7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzYuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmpUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZUlzQXJyYXkgPSBnZXROYXRpdmUoQXJyYXksICdpc0FycmF5Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhbiBgQXJyYXlgIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgY29ycmVjdGx5IGNsYXNzaWZpZWQsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xudmFyIGlzQXJyYXkgPSBuYXRpdmVJc0FycmF5IHx8IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzTGVuZ3RoKHZhbHVlLmxlbmd0aCkgJiYgb2JqVG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gYXJyYXlUYWc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGlzQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc0FycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMjA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqIFVzZWQgdG8gZGV0ZWN0IHVuc2lnbmVkIGludGVnZXIgdmFsdWVzLiAqL1xudmFyIHJlSXNVaW50ID0gL15cXGQrJC87XG5cbi8qKlxuICogVXNlZCBhcyB0aGUgW21heGltdW0gbGVuZ3RoXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1udW1iZXIubWF4X3NhZmVfaW50ZWdlcilcbiAqIG9mIGFuIGFycmF5LWxpa2UgdmFsdWUuXG4gKi9cbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gOTAwNzE5OTI1NDc0MDk5MTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBhIHZhbGlkIGFycmF5LWxpa2UgaW5kZXguXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGg9TUFYX1NBRkVfSU5URUdFUl0gVGhlIHVwcGVyIGJvdW5kcyBvZiBhIHZhbGlkIGluZGV4LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSB2YWxpZCBpbmRleCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBpc0luZGV4KHZhbHVlLCBsZW5ndGgpIHtcbiAgdmFsdWUgPSAodHlwZW9mIHZhbHVlID09ICdudW1iZXInIHx8IHJlSXNVaW50LnRlc3QodmFsdWUpKSA/ICt2YWx1ZSA6IC0xO1xuICBsZW5ndGggPSBsZW5ndGggPT0gbnVsbCA/IE1BWF9TQUZFX0lOVEVHRVIgOiBsZW5ndGg7XG4gIHJldHVybiB2YWx1ZSA+IC0xICYmIHZhbHVlICUgMSA9PSAwICYmIHZhbHVlIDwgbGVuZ3RoO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzSW5kZXg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNJbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcmd1bWVudHMnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5JyksXG4gICAgaXNJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzSW5kZXgnKSxcbiAgICBpc0xlbmd0aCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzTGVuZ3RoJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKiBVc2VkIGZvciBuYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgbmFtZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqICAgdGhpcy5iID0gMjtcbiAqIH1cbiAqXG4gKiBGb28ucHJvdG90eXBlLmMgPSAzO1xuICpcbiAqIF8ua2V5c0luKG5ldyBGb28pO1xuICogLy8gPT4gWydhJywgJ2InLCAnYyddIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIGtleXNJbihvYmplY3QpIHtcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIGlmICghaXNPYmplY3Qob2JqZWN0KSkge1xuICAgIG9iamVjdCA9IE9iamVjdChvYmplY3QpO1xuICB9XG4gIHZhciBsZW5ndGggPSBvYmplY3QubGVuZ3RoO1xuICBsZW5ndGggPSAobGVuZ3RoICYmIGlzTGVuZ3RoKGxlbmd0aCkgJiZcbiAgICAoaXNBcnJheShvYmplY3QpIHx8IGlzQXJndW1lbnRzKG9iamVjdCkpICYmIGxlbmd0aCkgfHwgMDtcblxuICB2YXIgQ3RvciA9IG9iamVjdC5jb25zdHJ1Y3RvcixcbiAgICAgIGluZGV4ID0gLTEsXG4gICAgICBpc1Byb3RvID0gdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBDdG9yLnByb3RvdHlwZSA9PT0gb2JqZWN0LFxuICAgICAgcmVzdWx0ID0gQXJyYXkobGVuZ3RoKSxcbiAgICAgIHNraXBJbmRleGVzID0gbGVuZ3RoID4gMDtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSAoaW5kZXggKyAnJyk7XG4gIH1cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmICghKHNraXBJbmRleGVzICYmIGlzSW5kZXgoa2V5LCBsZW5ndGgpKSAmJlxuICAgICAgICAhKGtleSA9PSAnY29uc3RydWN0b3InICYmIChpc1Byb3RvIHx8ICFoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSkpKSB7XG4gICAgICByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGtleXNJbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9vYmplY3Qva2V5c0luLmpzXG4gKiogbW9kdWxlIGlkID0gMjA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNMZW5ndGgnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIGFyZ3NUYWcgPSAnW29iamVjdCBBcmd1bWVudHNdJyxcbiAgICBhcnJheVRhZyA9ICdbb2JqZWN0IEFycmF5XScsXG4gICAgYm9vbFRhZyA9ICdbb2JqZWN0IEJvb2xlYW5dJyxcbiAgICBkYXRlVGFnID0gJ1tvYmplY3QgRGF0ZV0nLFxuICAgIGVycm9yVGFnID0gJ1tvYmplY3QgRXJyb3JdJyxcbiAgICBmdW5jVGFnID0gJ1tvYmplY3QgRnVuY3Rpb25dJyxcbiAgICBtYXBUYWcgPSAnW29iamVjdCBNYXBdJyxcbiAgICBudW1iZXJUYWcgPSAnW29iamVjdCBOdW1iZXJdJyxcbiAgICBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJyxcbiAgICByZWdleHBUYWcgPSAnW29iamVjdCBSZWdFeHBdJyxcbiAgICBzZXRUYWcgPSAnW29iamVjdCBTZXRdJyxcbiAgICBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJyxcbiAgICB3ZWFrTWFwVGFnID0gJ1tvYmplY3QgV2Vha01hcF0nO1xuXG52YXIgYXJyYXlCdWZmZXJUYWcgPSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nLFxuICAgIGZsb2F0MzJUYWcgPSAnW29iamVjdCBGbG9hdDMyQXJyYXldJyxcbiAgICBmbG9hdDY0VGFnID0gJ1tvYmplY3QgRmxvYXQ2NEFycmF5XScsXG4gICAgaW50OFRhZyA9ICdbb2JqZWN0IEludDhBcnJheV0nLFxuICAgIGludDE2VGFnID0gJ1tvYmplY3QgSW50MTZBcnJheV0nLFxuICAgIGludDMyVGFnID0gJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgIHVpbnQ4VGFnID0gJ1tvYmplY3QgVWludDhBcnJheV0nLFxuICAgIHVpbnQ4Q2xhbXBlZFRhZyA9ICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgdWludDE2VGFnID0gJ1tvYmplY3QgVWludDE2QXJyYXldJyxcbiAgICB1aW50MzJUYWcgPSAnW29iamVjdCBVaW50MzJBcnJheV0nO1xuXG4vKiogVXNlZCB0byBpZGVudGlmeSBgdG9TdHJpbmdUYWdgIHZhbHVlcyBvZiB0eXBlZCBhcnJheXMuICovXG52YXIgdHlwZWRBcnJheVRhZ3MgPSB7fTtcbnR5cGVkQXJyYXlUYWdzW2Zsb2F0MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbZmxvYXQ2NFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50OFRhZ10gPSB0eXBlZEFycmF5VGFnc1tpbnQxNlRhZ10gPVxudHlwZWRBcnJheVRhZ3NbaW50MzJUYWddID0gdHlwZWRBcnJheVRhZ3NbdWludDhUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQ4Q2xhbXBlZFRhZ10gPSB0eXBlZEFycmF5VGFnc1t1aW50MTZUYWddID1cbnR5cGVkQXJyYXlUYWdzW3VpbnQzMlRhZ10gPSB0cnVlO1xudHlwZWRBcnJheVRhZ3NbYXJnc1RhZ10gPSB0eXBlZEFycmF5VGFnc1thcnJheVRhZ10gPVxudHlwZWRBcnJheVRhZ3NbYXJyYXlCdWZmZXJUYWddID0gdHlwZWRBcnJheVRhZ3NbYm9vbFRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZGF0ZVRhZ10gPSB0eXBlZEFycmF5VGFnc1tlcnJvclRhZ10gPVxudHlwZWRBcnJheVRhZ3NbZnVuY1RhZ10gPSB0eXBlZEFycmF5VGFnc1ttYXBUYWddID1cbnR5cGVkQXJyYXlUYWdzW251bWJlclRhZ10gPSB0eXBlZEFycmF5VGFnc1tvYmplY3RUYWddID1cbnR5cGVkQXJyYXlUYWdzW3JlZ2V4cFRhZ10gPSB0eXBlZEFycmF5VGFnc1tzZXRUYWddID1cbnR5cGVkQXJyYXlUYWdzW3N0cmluZ1RhZ10gPSB0eXBlZEFycmF5VGFnc1t3ZWFrTWFwVGFnXSA9IGZhbHNlO1xuXG4vKiogVXNlZCBmb3IgbmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi82LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgb2JqVG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgdHlwZWQgYXJyYXkuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGNvcnJlY3RseSBjbGFzc2lmaWVkLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNUeXBlZEFycmF5KG5ldyBVaW50OEFycmF5KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzVHlwZWRBcnJheShbXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNMZW5ndGgodmFsdWUubGVuZ3RoKSAmJiAhIXR5cGVkQXJyYXlUYWdzW29ialRvU3RyaW5nLmNhbGwodmFsdWUpXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1R5cGVkQXJyYXk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvbGFuZy9pc1R5cGVkQXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhbiBvYmplY3QgaWYgaXQncyBub3Qgb25lLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgb2JqZWN0LlxuICovXG5mdW5jdGlvbiB0b09iamVjdCh2YWx1ZSkge1xuICByZXR1cm4gaXNPYmplY3QodmFsdWUpID8gdmFsdWUgOiBPYmplY3QodmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRvT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3RvT2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjExXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGlzU3RyaWN0Q29tcGFyYWJsZSA9IHJlcXVpcmUoJy4vaXNTdHJpY3RDb21wYXJhYmxlJyksXG4gICAgcGFpcnMgPSByZXF1aXJlKCcuLi9vYmplY3QvcGFpcnMnKTtcblxuLyoqXG4gKiBHZXRzIHRoZSBwcm9wZXJ5IG5hbWVzLCB2YWx1ZXMsIGFuZCBjb21wYXJlIGZsYWdzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG1hdGNoIGRhdGEgb2YgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGdldE1hdGNoRGF0YShvYmplY3QpIHtcbiAgdmFyIHJlc3VsdCA9IHBhaXJzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSByZXN1bHQubGVuZ3RoO1xuXG4gIHdoaWxlIChsZW5ndGgtLSkge1xuICAgIHJlc3VsdFtsZW5ndGhdWzJdID0gaXNTdHJpY3RDb21wYXJhYmxlKHJlc3VsdFtsZW5ndGhdWzFdKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1hdGNoRGF0YTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9nZXRNYXRjaERhdGEuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9sYW5nL2lzT2JqZWN0Jyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgc3VpdGFibGUgZm9yIHN0cmljdCBlcXVhbGl0eSBjb21wYXJpc29ucywgaS5lLiBgPT09YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpZiBzdWl0YWJsZSBmb3Igc3RyaWN0XG4gKiAgZXF1YWxpdHkgY29tcGFyaXNvbnMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNTdHJpY3RDb21wYXJhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gdmFsdWUgJiYgIWlzT2JqZWN0KHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1N0cmljdENvbXBhcmFibGU7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaXNTdHJpY3RDb21wYXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMjEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKSxcbiAgICB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3RvT2JqZWN0Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIHR3byBkaW1lbnNpb25hbCBhcnJheSBvZiB0aGUga2V5LXZhbHVlIHBhaXJzIGZvciBgb2JqZWN0YCxcbiAqIGUuZy4gYFtba2V5MSwgdmFsdWUxXSwgW2tleTIsIHZhbHVlMl1dYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2Yga2V5LXZhbHVlIHBhaXJzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnBhaXJzKHsgJ2Jhcm5leSc6IDM2LCAnZnJlZCc6IDQwIH0pO1xuICogLy8gPT4gW1snYmFybmV5JywgMzZdLCBbJ2ZyZWQnLCA0MF1dIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbmZ1bmN0aW9uIHBhaXJzKG9iamVjdCkge1xuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcHJvcHMgPSBrZXlzKG9iamVjdCksXG4gICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2luZGV4XTtcbiAgICByZXN1bHRbaW5kZXhdID0gW2tleSwgb2JqZWN0W2tleV1dO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGFpcnM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L3BhaXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMjE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL2Jhc2VHZXQnKSxcbiAgICBiYXNlSXNFcXVhbCA9IHJlcXVpcmUoJy4vYmFzZUlzRXF1YWwnKSxcbiAgICBiYXNlU2xpY2UgPSByZXF1aXJlKCcuL2Jhc2VTbGljZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4vaXNLZXknKSxcbiAgICBpc1N0cmljdENvbXBhcmFibGUgPSByZXF1aXJlKCcuL2lzU3RyaWN0Q29tcGFyYWJsZScpLFxuICAgIGxhc3QgPSByZXF1aXJlKCcuLi9hcnJheS9sYXN0JyksXG4gICAgdG9PYmplY3QgPSByZXF1aXJlKCcuL3RvT2JqZWN0JyksXG4gICAgdG9QYXRoID0gcmVxdWlyZSgnLi90b1BhdGgnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5tYXRjaGVzUHJvcGVydHlgIHdoaWNoIGRvZXMgbm90IGNsb25lIGBzcmNWYWx1ZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcGFyYW0geyp9IHNyY1ZhbHVlIFRoZSB2YWx1ZSB0byBjb21wYXJlLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VNYXRjaGVzUHJvcGVydHkocGF0aCwgc3JjVmFsdWUpIHtcbiAgdmFyIGlzQXJyID0gaXNBcnJheShwYXRoKSxcbiAgICAgIGlzQ29tbW9uID0gaXNLZXkocGF0aCkgJiYgaXNTdHJpY3RDb21wYXJhYmxlKHNyY1ZhbHVlKSxcbiAgICAgIHBhdGhLZXkgPSAocGF0aCArICcnKTtcblxuICBwYXRoID0gdG9QYXRoKHBhdGgpO1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBrZXkgPSBwYXRoS2V5O1xuICAgIG9iamVjdCA9IHRvT2JqZWN0KG9iamVjdCk7XG4gICAgaWYgKChpc0FyciB8fCAhaXNDb21tb24pICYmICEoa2V5IGluIG9iamVjdCkpIHtcbiAgICAgIG9iamVjdCA9IHBhdGgubGVuZ3RoID09IDEgPyBvYmplY3QgOiBiYXNlR2V0KG9iamVjdCwgYmFzZVNsaWNlKHBhdGgsIDAsIC0xKSk7XG4gICAgICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAga2V5ID0gbGFzdChwYXRoKTtcbiAgICAgIG9iamVjdCA9IHRvT2JqZWN0KG9iamVjdCk7XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Rba2V5XSA9PT0gc3JjVmFsdWVcbiAgICAgID8gKHNyY1ZhbHVlICE9PSB1bmRlZmluZWQgfHwgKGtleSBpbiBvYmplY3QpKVxuICAgICAgOiBiYXNlSXNFcXVhbChzcmNWYWx1ZSwgb2JqZWN0W2tleV0sIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZU1hdGNoZXNQcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlTWF0Y2hlc1Byb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBnZXRgIHdpdGhvdXQgc3VwcG9ydCBmb3Igc3RyaW5nIHBhdGhzXG4gKiBhbmQgZGVmYXVsdCB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBxdWVyeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggVGhlIHBhdGggb2YgdGhlIHByb3BlcnR5IHRvIGdldC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGF0aEtleV0gVGhlIGtleSByZXByZXNlbnRhdGlvbiBvZiBwYXRoLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCwgcGF0aEtleSkge1xuICBpZiAob2JqZWN0ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBhdGhLZXkgIT09IHVuZGVmaW5lZCAmJiBwYXRoS2V5IGluIHRvT2JqZWN0KG9iamVjdCkpIHtcbiAgICBwYXRoID0gW3BhdGhLZXldO1xuICB9XG4gIHZhciBpbmRleCA9IDAsXG4gICAgICBsZW5ndGggPSBwYXRoLmxlbmd0aDtcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbcGF0aFtpbmRleCsrXV07XG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VHZXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDIxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uc2xpY2VgIHdpdGhvdXQgYW4gaXRlcmF0ZWUgY2FsbCBndWFyZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNsaWNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgc3RhcnQgcG9zaXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2VuZD1hcnJheS5sZW5ndGhdIFRoZSBlbmQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHNsaWNlIG9mIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VTbGljZShhcnJheSwgc3RhcnQsIGVuZCkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBzdGFydCA9IHN0YXJ0ID09IG51bGwgPyAwIDogKCtzdGFydCB8fCAwKTtcbiAgaWYgKHN0YXJ0IDwgMCkge1xuICAgIHN0YXJ0ID0gLXN0YXJ0ID4gbGVuZ3RoID8gMCA6IChsZW5ndGggKyBzdGFydCk7XG4gIH1cbiAgZW5kID0gKGVuZCA9PT0gdW5kZWZpbmVkIHx8IGVuZCA+IGxlbmd0aCkgPyBsZW5ndGggOiAoK2VuZCB8fCAwKTtcbiAgaWYgKGVuZCA8IDApIHtcbiAgICBlbmQgKz0gbGVuZ3RoO1xuICB9XG4gIGxlbmd0aCA9IHN0YXJ0ID4gZW5kID8gMCA6ICgoZW5kIC0gc3RhcnQpID4+PiAwKTtcbiAgc3RhcnQgPj4+PSAwO1xuXG4gIHZhciByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBhcnJheVtpbmRleCArIHN0YXJ0XTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VTbGljZTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlU2xpY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKiogVXNlZCB0byBtYXRjaCBwcm9wZXJ0eSBuYW1lcyB3aXRoaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVJc0RlZXBQcm9wID0gL1xcLnxcXFsoPzpbXltcXF1dKnwoW1wiJ10pKD86KD8hXFwxKVteXFxuXFxcXF18XFxcXC4pKj9cXDEpXFxdLyxcbiAgICByZUlzUGxhaW5Qcm9wID0gL15cXHcqJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwcm9wZXJ0eSBuYW1lIGFuZCBub3QgYSBwcm9wZXJ0eSBwYXRoLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqZWN0XSBUaGUgb2JqZWN0IHRvIHF1ZXJ5IGtleXMgb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHByb3BlcnR5IG5hbWUsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gaXNLZXkodmFsdWUsIG9iamVjdCkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgaWYgKCh0eXBlID09ICdzdHJpbmcnICYmIHJlSXNQbGFpblByb3AudGVzdCh2YWx1ZSkpIHx8IHR5cGUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHJlc3VsdCA9ICFyZUlzRGVlcFByb3AudGVzdCh2YWx1ZSk7XG4gIHJldHVybiByZXN1bHQgfHwgKG9iamVjdCAhPSBudWxsICYmIHZhbHVlIGluIHRvT2JqZWN0KG9iamVjdCkpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzS2V5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2lzS2V5LmpzXG4gKiogbW9kdWxlIGlkID0gMjE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBHZXRzIHRoZSBsYXN0IGVsZW1lbnQgb2YgYGFycmF5YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgbGFzdCBlbGVtZW50IG9mIGBhcnJheWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8ubGFzdChbMSwgMiwgM10pO1xuICogLy8gPT4gM1xuICovXG5mdW5jdGlvbiBsYXN0KGFycmF5KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDA7XG4gIHJldHVybiBsZW5ndGggPyBhcnJheVtsZW5ndGggLSAxXSA6IHVuZGVmaW5lZDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2FycmF5L2xhc3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZVRvU3RyaW5nID0gcmVxdWlyZSgnLi9iYXNlVG9TdHJpbmcnKSxcbiAgICBpc0FycmF5ID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FycmF5Jyk7XG5cbi8qKiBVc2VkIHRvIG1hdGNoIHByb3BlcnR5IG5hbWVzIHdpdGhpbiBwcm9wZXJ0eSBwYXRocy4gKi9cbnZhciByZVByb3BOYW1lID0gL1teLltcXF1dK3xcXFsoPzooLT9cXGQrKD86XFwuXFxkKyk/KXwoW1wiJ10pKCg/Oig/IVxcMilbXlxcblxcXFxdfFxcXFwuKSo/KVxcMilcXF0vZztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggYmFja3NsYXNoZXMgaW4gcHJvcGVydHkgcGF0aHMuICovXG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBwcm9wZXJ0eSBwYXRoIGFycmF5IGlmIGl0J3Mgbm90IG9uZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gdG9QYXRoKHZhbHVlKSB7XG4gIGlmIChpc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gW107XG4gIGJhc2VUb1N0cmluZyh2YWx1ZSkucmVwbGFjZShyZVByb3BOYW1lLCBmdW5jdGlvbihtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3RyaW5nKSB7XG4gICAgcmVzdWx0LnB1c2gocXVvdGUgPyBzdHJpbmcucmVwbGFjZShyZUVzY2FwZUNoYXIsICckMScpIDogKG51bWJlciB8fCBtYXRjaCkpO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB0b1BhdGg7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvdG9QYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMjIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgc3RyaW5nIGlmIGl0J3Mgbm90IG9uZS4gQW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkXG4gKiBmb3IgYG51bGxgIG9yIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFJldHVybnMgdGhlIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gYmFzZVRvU3RyaW5nKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiAodmFsdWUgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVRvU3RyaW5nO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VUb1N0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDIyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBpZGVudGl0eSA9IHJlcXVpcmUoJy4uL3V0aWxpdHkvaWRlbnRpdHknKTtcblxuLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYGJhc2VDYWxsYmFja2Agd2hpY2ggb25seSBzdXBwb3J0cyBgdGhpc2AgYmluZGluZ1xuICogYW5kIHNwZWNpZnlpbmcgdGhlIG51bWJlciBvZiBhcmd1bWVudHMgdG8gcHJvdmlkZSB0byBgZnVuY2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbYXJnQ291bnRdIFRoZSBudW1iZXIgb2YgYXJndW1lbnRzIHRvIHByb3ZpZGUgdG8gYGZ1bmNgLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBjYWxsYmFjay5cbiAqL1xuZnVuY3Rpb24gYmluZENhbGxiYWNrKGZ1bmMsIHRoaXNBcmcsIGFyZ0NvdW50KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGlkZW50aXR5O1xuICB9XG4gIGlmICh0aGlzQXJnID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZnVuYztcbiAgfVxuICBzd2l0Y2ggKGFyZ0NvdW50KSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgdmFsdWUpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCwgY29sbGVjdGlvbik7XG4gICAgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFjY3VtdWxhdG9yLCB2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pO1xuICAgIH07XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24odmFsdWUsIG90aGVyLCBrZXksIG9iamVjdCwgc291cmNlKSB7XG4gICAgICByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIHZhbHVlLCBvdGhlciwga2V5LCBvYmplY3QsIHNvdXJjZSk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJndW1lbnRzKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kQ2FsbGJhY2s7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmluZENhbGxiYWNrLmpzXG4gKiogbW9kdWxlIGlkID0gMjIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBwcm92aWRlZCB0byBpdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ3VzZXInOiAnZnJlZCcgfTtcbiAqXG4gKiBfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdDtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL3V0aWxpdHkvaWRlbnRpdHkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZVByb3BlcnR5JyksXG4gICAgYmFzZVByb3BlcnR5RGVlcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VQcm9wZXJ0eURlZXAnKSxcbiAgICBpc0tleSA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2lzS2V5Jyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgYXQgYHBhdGhgIG9uIGFcbiAqIGdpdmVuIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxpdHlcbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byBnZXQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdHMgPSBbXG4gKiAgIHsgJ2EnOiB7ICdiJzogeyAnYyc6IDIgfSB9IH0sXG4gKiAgIHsgJ2EnOiB7ICdiJzogeyAnYyc6IDEgfSB9IH1cbiAqIF07XG4gKlxuICogXy5tYXAob2JqZWN0cywgXy5wcm9wZXJ0eSgnYS5iLmMnKSk7XG4gKiAvLyA9PiBbMiwgMV1cbiAqXG4gKiBfLnBsdWNrKF8uc29ydEJ5KG9iamVjdHMsIF8ucHJvcGVydHkoWydhJywgJ2InLCAnYyddKSksICdhLmIuYycpO1xuICogLy8gPT4gWzEsIDJdXG4gKi9cbmZ1bmN0aW9uIHByb3BlcnR5KHBhdGgpIHtcbiAgcmV0dXJuIGlzS2V5KHBhdGgpID8gYmFzZVByb3BlcnR5KHBhdGgpIDogYmFzZVByb3BlcnR5RGVlcChwYXRoKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwcm9wZXJ0eTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC91dGlsaXR5L3Byb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGJhc2VHZXQgPSByZXF1aXJlKCcuL2Jhc2VHZXQnKSxcbiAgICB0b1BhdGggPSByZXF1aXJlKCcuL3RvUGF0aCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgYmFzZVByb3BlcnR5YCB3aGljaCBzdXBwb3J0cyBkZWVwIHBhdGhzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGJhc2VQcm9wZXJ0eURlZXAocGF0aCkge1xuICB2YXIgcGF0aEtleSA9IChwYXRoICsgJycpO1xuICBwYXRoID0gdG9QYXRoKHBhdGgpO1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIGJhc2VHZXQob2JqZWN0LCBwYXRoLCBwYXRoS2V5KTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlUHJvcGVydHlEZWVwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VQcm9wZXJ0eURlZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZUVhY2ggPSByZXF1aXJlKCcuL2Jhc2VFYWNoJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYF8uZmlsdGVyYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmlsdGVyZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGaWx0ZXIoY29sbGVjdGlvbiwgcHJlZGljYXRlKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgYmFzZUVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24odmFsdWUsIGluZGV4LCBjb2xsZWN0aW9uKSB7XG4gICAgaWYgKHByZWRpY2F0ZSh2YWx1ZSwgaW5kZXgsIGNvbGxlY3Rpb24pKSB7XG4gICAgICByZXN1bHQucHVzaCh2YWx1ZSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmlsdGVyO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VGaWx0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZUZvck93biA9IHJlcXVpcmUoJy4vYmFzZUZvck93bicpLFxuICAgIGNyZWF0ZUJhc2VFYWNoID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRWFjaCcpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckVhY2hgIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R8c3RyaW5nfSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqL1xudmFyIGJhc2VFYWNoID0gY3JlYXRlQmFzZUVhY2goYmFzZUZvck93bik7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUVhY2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUVhY2guanNcbiAqKiBtb2R1bGUgaWQgPSAyMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZUZvciA9IHJlcXVpcmUoJy4vYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuLi9vYmplY3Qva2V5cycpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvck93bmAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xuZnVuY3Rpb24gYmFzZUZvck93bihvYmplY3QsIGl0ZXJhdGVlKSB7XG4gIHJldHVybiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvck93bi5qc1xuICoqIG1vZHVsZSBpZCA9IDIyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9jcmVhdGVCYXNlRm9yJyk7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGJhc2VGb3JJbmAgYW5kIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlc1xuICogb3ZlciBgb2JqZWN0YCBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgaW52b2tpbmcgYGl0ZXJhdGVlYCBmb3JcbiAqIGVhY2ggcHJvcGVydHkuIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseVxuICogcmV0dXJuaW5nIGBmYWxzZWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5c0Z1bmMgVGhlIGZ1bmN0aW9uIHRvIGdldCB0aGUga2V5cyBvZiBgb2JqZWN0YC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbnZhciBiYXNlRm9yID0gY3JlYXRlQmFzZUZvcigpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZUZvci5qc1xuICoqIG1vZHVsZSBpZCA9IDIyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vdG9PYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgYF8uZm9ySW5gIG9yIGBfLmZvckluUmlnaHRgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VGb3IoZnJvbVJpZ2h0KSB7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzRnVuYykge1xuICAgIHZhciBpdGVyYWJsZSA9IHRvT2JqZWN0KG9iamVjdCksXG4gICAgICAgIHByb3BzID0ga2V5c0Z1bmMob2JqZWN0KSxcbiAgICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgICBpbmRleCA9IGZyb21SaWdodCA/IGxlbmd0aCA6IC0xO1xuXG4gICAgd2hpbGUgKChmcm9tUmlnaHQgPyBpbmRleC0tIDogKytpbmRleCA8IGxlbmd0aCkpIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tpbmRleF07XG4gICAgICBpZiAoaXRlcmF0ZWUoaXRlcmFibGVba2V5XSwga2V5LCBpdGVyYWJsZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VGb3I7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvY3JlYXRlQmFzZUZvci5qc1xuICoqIG1vZHVsZSBpZCA9IDIzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBnZXRMZW5ndGggPSByZXF1aXJlKCcuL2dldExlbmd0aCcpLFxuICAgIGlzTGVuZ3RoID0gcmVxdWlyZSgnLi9pc0xlbmd0aCcpLFxuICAgIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBgYmFzZUVhY2hgIG9yIGBiYXNlRWFjaFJpZ2h0YCBmdW5jdGlvbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGJhc2UgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJhc2VFYWNoKGVhY2hGdW5jLCBmcm9tUmlnaHQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gICAgdmFyIGxlbmd0aCA9IGNvbGxlY3Rpb24gPyBnZXRMZW5ndGgoY29sbGVjdGlvbikgOiAwO1xuICAgIGlmICghaXNMZW5ndGgobGVuZ3RoKSkge1xuICAgICAgcmV0dXJuIGVhY2hGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbiAgICB9XG4gICAgdmFyIGluZGV4ID0gZnJvbVJpZ2h0ID8gbGVuZ3RoIDogLTEsXG4gICAgICAgIGl0ZXJhYmxlID0gdG9PYmplY3QoY29sbGVjdGlvbik7XG5cbiAgICB3aGlsZSAoKGZyb21SaWdodCA/IGluZGV4LS0gOiArK2luZGV4IDwgbGVuZ3RoKSkge1xuICAgICAgaWYgKGl0ZXJhdGVlKGl0ZXJhYmxlW2luZGV4XSwgaW5kZXgsIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUJhc2VFYWNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUJhc2VFYWNoLmpzXG4gKiogbW9kdWxlIGlkID0gMjMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyogZXNsaW50IG5vLXNoYWRvdzowLCBuby1wYXJhbS1yZWFzc2lnbjowICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmN1cnJ5MSA9IGN1cnJ5MTtcbmV4cG9ydHMuY3VycnkyID0gY3VycnkyO1xuZXhwb3J0cy5jdXJyeTMgPSBjdXJyeTM7XG5leHBvcnRzLmN1cnJ5NCA9IGN1cnJ5NDtcbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGN1cnJ5O1xudmFyIF8gPSAnQEB1cGRlZXAvcGxhY2Vob2xkZXInO1xuXG5leHBvcnRzLl8gPSBfO1xuZnVuY3Rpb24gY291bnRBcmd1bWVudHMoYXJncywgbWF4KSB7XG4gIHZhciBuID0gYXJncy5sZW5ndGg7XG4gIGlmIChuID4gbWF4KSBuID0gbWF4O1xuXG4gIHdoaWxlIChhcmdzW24gLSAxXSA9PT0gXykge1xuICAgIG4tLTtcbiAgfVxuXG4gIHJldHVybiBuO1xufVxuXG5mdW5jdGlvbiBjdXJyeTEoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoYSkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBfcmVmID0gQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgX3JlZltfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIGIgPSBfcmVmWzBdLFxuICAgICAgICBjID0gX3JlZlsxXTtcblxuICAgIHZhciBuID0gY291bnRBcmd1bWVudHMoYXJndW1lbnRzKTtcblxuICAgIGlmIChuID49IDEpIHJldHVybiBmbihhLCBiLCBjKTtcbiAgICByZXR1cm4gY3VycmllZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3VycnkyKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBjdXJyaWVkKGEsIGIpIHtcbiAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIF9yZWYyID0gQXJyYXkoX2xlbjIgPiAyID8gX2xlbjIgLSAyIDogMCksIF9rZXkyID0gMjsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgX3JlZjJbX2tleTIgLSAyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgfVxuXG4gICAgdmFyIGMgPSBfcmVmMlswXSxcbiAgICAgICAgZCA9IF9yZWYyWzFdO1xuXG4gICAgdmFyIG4gPSBjb3VudEFyZ3VtZW50cyhhcmd1bWVudHMsIDIpO1xuXG4gICAgaWYgKGIgPT09IF8gfHwgYyA9PT0gXyB8fCBkID09PSBfKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBvbmx5IHVzZSBwbGFjZWhvbGRlciBvbiBmaXJzdCBhcmd1bWVudCBvZiB0aGlzIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmIChuID49IDIpIHtcbiAgICAgIGlmIChhID09PSBfKSByZXR1cm4gY3VycnkxKGZ1bmN0aW9uIChhLCBjLCBkKSB7XG4gICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQpO1xuICAgIH1cblxuICAgIGlmIChuID09PSAxKSByZXR1cm4gY3VycnkxKGZ1bmN0aW9uIChiLCBjLCBkKSB7XG4gICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGN1cnJpZWQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGN1cnJ5Myhmbikge1xuICByZXR1cm4gZnVuY3Rpb24gY3VycmllZChhLCBiLCBjKSB7XG4gICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBfcmVmMyA9IEFycmF5KF9sZW4zID4gMyA/IF9sZW4zIC0gMyA6IDApLCBfa2V5MyA9IDM7IF9rZXkzIDwgX2xlbjM7IF9rZXkzKyspIHtcbiAgICAgIF9yZWYzW19rZXkzIC0gM10gPSBhcmd1bWVudHNbX2tleTNdO1xuICAgIH1cblxuICAgIHZhciBkID0gX3JlZjNbMF0sXG4gICAgICAgIGUgPSBfcmVmM1sxXTtcblxuICAgIHZhciBuID0gY291bnRBcmd1bWVudHMoYXJndW1lbnRzLCAzKTtcblxuICAgIGlmIChjID09PSBfIHx8IGQgPT09IF8gfHwgZSA9PT0gXykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW4gb25seSB1c2UgcGxhY2Vob2xkZXIgb24gZmlyc3Qgb3Igc2Vjb25kIGFyZ3VtZW50IG9mIHRoaXMgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKG4gPj0gMykge1xuICAgICAgaWYgKGEgPT09IF8pIHtcbiAgICAgICAgaWYgKGIgPT09IF8pIHJldHVybiBjdXJyeTIoZnVuY3Rpb24gKGEsIGIsIGQsIGUpIHtcbiAgICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY3VycnkxKGZ1bmN0aW9uIChhLCBkLCBlKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChiID09PSBfKSByZXR1cm4gY3VycnkxKGZ1bmN0aW9uIChiLCBkLCBlKSB7XG4gICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUpO1xuICAgIH1cblxuICAgIGlmIChuID09PSAyKSB7XG4gICAgICBpZiAoYSA9PT0gXykgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYSwgYywgZCwgZSkge1xuICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjdXJyeTEoZnVuY3Rpb24gKGMsIGQsIGUpIHtcbiAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG4gPT09IDEpIHJldHVybiBjdXJyeTIoZnVuY3Rpb24gKGIsIGMsIGQsIGUpIHtcbiAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjdXJyaWVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjdXJyeTQoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGN1cnJpZWQoYSwgYiwgYywgZCkge1xuICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgX3JlZjQgPSBBcnJheShfbGVuNCA+IDQgPyBfbGVuNCAtIDQgOiAwKSwgX2tleTQgPSA0OyBfa2V5NCA8IF9sZW40OyBfa2V5NCsrKSB7XG4gICAgICBfcmVmNFtfa2V5NCAtIDRdID0gYXJndW1lbnRzW19rZXk0XTtcbiAgICB9XG5cbiAgICB2YXIgZSA9IF9yZWY0WzBdLFxuICAgICAgICBmID0gX3JlZjRbMV07XG5cbiAgICB2YXIgbiA9IGNvdW50QXJndW1lbnRzKGFyZ3VtZW50cywgNCk7XG5cbiAgICBpZiAoZCA9PT0gXyB8fCBlID09PSBfIHx8IGYgPT09IF8pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2FuIG9ubHkgdXNlIHBsYWNlaG9sZGVyIG9uIGZpcnN0LCBzZWNvbmQgb3IgdGhpcmQgYXJndW1lbnQgb2YgdGhpcyBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAobiA+PSA0KSB7XG4gICAgICBpZiAoYSA9PT0gXykge1xuICAgICAgICBpZiAoYiA9PT0gXykge1xuICAgICAgICAgIGlmIChjID09PSBfKSByZXR1cm4gY3VycnkzKGZ1bmN0aW9uIChhLCBiLCBjLCBlLCBmKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYSwgYiwgZSwgZikge1xuICAgICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjID09PSBfKSByZXR1cm4gY3VycnkyKGZ1bmN0aW9uIChhLCBjLCBlLCBmKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGN1cnJ5MShmdW5jdGlvbiAoYSwgZSwgZikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYiA9PT0gXykge1xuICAgICAgICBpZiAoYyA9PT0gXykgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYiwgYywgZSwgZikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjdXJyeTEoZnVuY3Rpb24gKGIsIGUsIGYpIHtcbiAgICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKGMgPT09IF8pIHJldHVybiBjdXJyeTEoZnVuY3Rpb24gKGMsIGUsIGYpIHtcbiAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgfVxuXG4gICAgaWYgKG4gPT09IDMpIHtcbiAgICAgIGlmIChhID09PSBfKSB7XG4gICAgICAgIGlmIChiID09PSBfKSByZXR1cm4gY3VycnkzKGZ1bmN0aW9uIChhLCBiLCBkLCBlLCBmKSB7XG4gICAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYSwgZCwgZSwgZikge1xuICAgICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoYiA9PT0gXykgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYiwgZCwgZSwgZikge1xuICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjdXJyeTEoZnVuY3Rpb24gKGQsIGUsIGYpIHtcbiAgICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG4gPT09IDIpIHtcbiAgICAgIGlmIChhID09PSBfKSByZXR1cm4gY3VycnkzKGZ1bmN0aW9uIChhLCBjLCBkLCBlLCBmKSB7XG4gICAgICAgIHJldHVybiBmbihhLCBiLCBjLCBkLCBlLCBmKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGN1cnJ5MihmdW5jdGlvbiAoYywgZCwgZSwgZikge1xuICAgICAgICByZXR1cm4gZm4oYSwgYiwgYywgZCwgZSwgZik7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAobiA9PT0gMSkgcmV0dXJuIGN1cnJ5MyhmdW5jdGlvbiAoYiwgYywgZCwgZSwgZikge1xuICAgICAgcmV0dXJuIGZuKGEsIGIsIGMsIGQsIGUsIGYpO1xuICAgIH0pO1xuICAgIHJldHVybiBjdXJyaWVkO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjdXJyeShmbikge1xuICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gZm4ubGVuZ3RoIDogYXJndW1lbnRzWzFdO1xuICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gW2ZuLCBjdXJyeTEsIGN1cnJ5MiwgY3VycnkzLCBjdXJyeTRdW2xlbmd0aF0oZm4pO1xuICB9KSgpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L3V0aWwvY3VycnkuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pZkVsc2UgPSByZXF1aXJlKCcuL2lmRWxzZScpO1xuXG52YXIgX2lmRWxzZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pZkVsc2UpO1xuXG52YXIgX3V0aWxDdXJyeSA9IHJlcXVpcmUoJy4vdXRpbC9jdXJyeScpO1xuXG52YXIgX3V0aWxDdXJyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ3VycnkpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBfdXRpbEN1cnJ5MlsnZGVmYXVsdCddKGZ1bmN0aW9uIChwcmVkaWNhdGUsIHRydWVVcGRhdGVzLCBvYmplY3QpIHtcbiAgcmV0dXJuIF9pZkVsc2UyWydkZWZhdWx0J10ocHJlZGljYXRlLCB0cnVlVXBkYXRlcywgZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSwgb2JqZWN0KTtcbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3QvaWYuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpO1xuXG52YXIgX3VwZGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cGRhdGUpO1xuXG52YXIgX3dyYXAgPSByZXF1aXJlKCcuL3dyYXAnKTtcblxudmFyIF93cmFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXApO1xuXG5mdW5jdGlvbiB1cGRhdGVJZkVsc2UocHJlZGljYXRlLCB0cnVlVXBkYXRlcywgZmFsc2VVcGRhdGVzLCBvYmplY3QpIHtcbiAgdmFyIHRlc3QgPSB0eXBlb2YgcHJlZGljYXRlID09PSAnZnVuY3Rpb24nID8gcHJlZGljYXRlKG9iamVjdCkgOiBwcmVkaWNhdGU7XG5cbiAgdmFyIHVwZGF0ZXMgPSB0ZXN0ID8gdHJ1ZVVwZGF0ZXMgOiBmYWxzZVVwZGF0ZXM7XG5cbiAgcmV0dXJuIF91cGRhdGUyWydkZWZhdWx0J10odXBkYXRlcywgb2JqZWN0KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3dyYXAyWydkZWZhdWx0J10odXBkYXRlSWZFbHNlKTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L2lmRWxzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dyYXAgPSByZXF1aXJlKCcuL3dyYXAnKTtcblxudmFyIF93cmFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXApO1xuXG52YXIgX3V0aWxJc0VtcHR5ID0gcmVxdWlyZSgnLi91dGlsL2lzRW1wdHknKTtcblxudmFyIF91dGlsSXNFbXB0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsSXNFbXB0eSk7XG5cbnZhciBfdXRpbERlZmF1bHRPYmplY3QgPSByZXF1aXJlKCcuL3V0aWwvZGVmYXVsdE9iamVjdCcpO1xuXG52YXIgX3V0aWxEZWZhdWx0T2JqZWN0MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxEZWZhdWx0T2JqZWN0KTtcblxudmFyIF9sb2Rhc2hMYW5nSXNQbGFpbk9iamVjdCA9IHJlcXVpcmUoJ2xvZGFzaC9sYW5nL2lzUGxhaW5PYmplY3QnKTtcblxudmFyIF9sb2Rhc2hMYW5nSXNQbGFpbk9iamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hMYW5nSXNQbGFpbk9iamVjdCk7XG5cbmZ1bmN0aW9uIHJlZHVjZShvYmplY3QsIGNhbGxiYWNrLCBpbml0aWFsVmFsdWUpIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdCkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgIHJldHVybiBjYWxsYmFjayhhY2MsIG9iamVjdFtrZXldLCBrZXkpO1xuICB9LCBpbml0aWFsVmFsdWUpO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVXBkYXRlcyh1cGRhdGVzLCBvYmplY3QpIHtcbiAgcmV0dXJuIHJlZHVjZSh1cGRhdGVzLCBmdW5jdGlvbiAoYWNjLCB2YWx1ZSwga2V5KSB7XG4gICAgdmFyIHVwZGF0ZWRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB1cGRhdGVkVmFsdWUgPSB1cGRhdGUodmFsdWUsIG9iamVjdFtrZXldKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdXBkYXRlZFZhbHVlID0gdmFsdWUob2JqZWN0W2tleV0pO1xuICAgIH1cblxuICAgIGlmIChvYmplY3Rba2V5XSAhPT0gdXBkYXRlZFZhbHVlKSB7XG4gICAgICBhY2Nba2V5XSA9IHVwZGF0ZWRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFycmF5KHVwZGF0ZXMsIG9iamVjdCkge1xuICB2YXIgbmV3QXJyYXkgPSBbXS5jb25jYXQob2JqZWN0KTtcblxuICBPYmplY3Qua2V5cyh1cGRhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBuZXdBcnJheVtrZXldID0gdXBkYXRlc1trZXldO1xuICB9KTtcblxuICByZXR1cm4gbmV3QXJyYXk7XG59XG5cbi8qKlxuICogUmVjdXJzaXZlbHkgdXBkYXRlIGFuIG9iamVjdCBvciBhcnJheS5cbiAqXG4gKiBDYW4gdXBkYXRlIHdpdGggdmFsdWVzOlxuICogdXBkYXRlKHsgZm9vOiAzIH0sIHsgZm9vOiAxLCBiYXI6IDIgfSk7XG4gKiAvLyA9PiB7IGZvbzogMywgYmFyOiAyIH1cbiAqXG4gKiBPciB3aXRoIGEgZnVuY3Rpb246XG4gKiB1cGRhdGUoeyBmb286IHggPT4gKHggKyAxKSB9LCB7IGZvbzogMiB9KTtcbiAqIC8vID0+IHsgZm9vOiAzIH1cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBuYW1lIHVwZGF0ZVxuICogQHBhcmFtIHtPYmplY3R8RnVuY3Rpb259IHVwZGF0ZXNcbiAqIEBwYXJhbSB7T2JqZWN0fEFycmF5fSAgICBvYmplY3QgdG8gdXBkYXRlXG4gKiBAcmV0dXJuIHtPYmplY3R8QXJyYXl9ICAgbmV3IG9iamVjdCB3aXRoIG1vZGlmaWNhdGlvbnNcbiAqL1xuZnVuY3Rpb24gdXBkYXRlKHVwZGF0ZXMsIG9iamVjdCkge1xuICBpZiAodHlwZW9mIHVwZGF0ZXMgPT09ICdmdW5jdGlvbicpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4gPiAyID8gX2xlbiAtIDIgOiAwKSwgX2tleSA9IDI7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleSAtIDJdID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHJldHVybiB1cGRhdGVzLmFwcGx5KHVuZGVmaW5lZCwgW29iamVjdF0uY29uY2F0KGFyZ3MpKTtcbiAgfVxuXG4gIGlmICghX2xvZGFzaExhbmdJc1BsYWluT2JqZWN0MlsnZGVmYXVsdCddKHVwZGF0ZXMpKSB7XG4gICAgcmV0dXJuIHVwZGF0ZXM7XG4gIH1cblxuICB2YXIgZGVmYXVsdGVkT2JqZWN0ID0gX3V0aWxEZWZhdWx0T2JqZWN0MlsnZGVmYXVsdCddKG9iamVjdCwgdXBkYXRlcyk7XG5cbiAgdmFyIHJlc29sdmVkVXBkYXRlcyA9IHJlc29sdmVVcGRhdGVzKHVwZGF0ZXMsIGRlZmF1bHRlZE9iamVjdCk7XG5cbiAgaWYgKF91dGlsSXNFbXB0eTJbJ2RlZmF1bHQnXShyZXNvbHZlZFVwZGF0ZXMpKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRlZE9iamVjdDtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGRlZmF1bHRlZE9iamVjdCkpIHtcbiAgICByZXR1cm4gdXBkYXRlQXJyYXkocmVzb2x2ZWRVcGRhdGVzLCBkZWZhdWx0ZWRPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZWZhdWx0ZWRPYmplY3QsIHJlc29sdmVkVXBkYXRlcyk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF93cmFwMlsnZGVmYXVsdCddKHVwZGF0ZSwgMik7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC91cGRhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzWydkZWZhdWx0J10gPSB3cmFwO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfdXRpbEN1cnJ5ID0gcmVxdWlyZSgnLi91dGlsL2N1cnJ5Jyk7XG5cbnZhciBfdXRpbEN1cnJ5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3V0aWxDdXJyeSk7XG5cbnZhciBfZnJlZXplID0gcmVxdWlyZSgnLi9mcmVlemUnKTtcblxudmFyIF9mcmVlemUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZnJlZXplKTtcblxuZnVuY3Rpb24gd3JhcChmdW5jKSB7XG4gIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBmdW5jLmxlbmd0aCA6IGFyZ3VtZW50c1sxXTtcbiAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF91dGlsQ3VycnkyWydkZWZhdWx0J10oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIF9mcmVlemUyWydkZWZhdWx0J10oZnVuYy5hcHBseSh1bmRlZmluZWQsIGFyZ3VtZW50cykpO1xuICAgIH0sIGxlbmd0aCk7XG4gIH0pKCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L3dyYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGlzRW1wdHkob2JqZWN0KSB7XG4gIHJldHVybiAhT2JqZWN0LmtleXMob2JqZWN0KS5sZW5ndGg7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gaXNFbXB0eTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3QvdXRpbC9pc0VtcHR5LmpzXG4gKiogbW9kdWxlIGlkID0gMjM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaXNFbXB0eSA9IHJlcXVpcmUoJy4vaXNFbXB0eScpO1xuXG52YXIgX2lzRW1wdHkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNFbXB0eSk7XG5cbmZ1bmN0aW9uIGlzSW50KHZhbHVlKSB7XG4gIGlmIChpc05hTih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHggPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgcmV0dXJuICh4IHwgMCkgPT09IHg7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXlVcGRhdGUodXBkYXRlcykge1xuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBPYmplY3Qua2V5cyh1cGRhdGVzKSwgX2lzQXJyYXkgPSBBcnJheS5pc0FycmF5KF9pdGVyYXRvciksIF9pID0gMCwgX2l0ZXJhdG9yID0gX2lzQXJyYXkgPyBfaXRlcmF0b3IgOiBfaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSgpOzspIHtcbiAgICB2YXIgX3JlZjtcblxuICAgIGlmIChfaXNBcnJheSkge1xuICAgICAgaWYgKF9pID49IF9pdGVyYXRvci5sZW5ndGgpIGJyZWFrO1xuICAgICAgX3JlZiA9IF9pdGVyYXRvcltfaSsrXTtcbiAgICB9IGVsc2Uge1xuICAgICAgX2kgPSBfaXRlcmF0b3IubmV4dCgpO1xuICAgICAgaWYgKF9pLmRvbmUpIGJyZWFrO1xuICAgICAgX3JlZiA9IF9pLnZhbHVlO1xuICAgIH1cblxuICAgIHZhciB1cGRhdGVLZXkgPSBfcmVmO1xuXG4gICAgaWYgKCFpc0ludCh1cGRhdGVLZXkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGFycmF5T3JPYmplY3QodXBkYXRlcykge1xuICBpZiAoIV9pc0VtcHR5MlsnZGVmYXVsdCddKHVwZGF0ZXMpICYmIGlzQXJyYXlVcGRhdGUodXBkYXRlcykpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICByZXR1cm4ge307XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRPYmplY3Qob2JqZWN0LCB1cGRhdGVzKSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAndW5kZWZpbmVkJyB8fCBvYmplY3QgPT09IG51bGwpIHtcbiAgICByZXR1cm4gYXJyYXlPck9iamVjdCh1cGRhdGVzKTtcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGRlZmF1bHRPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC91dGlsL2RlZmF1bHRPYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZUZvckluID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUZvckluJyksXG4gICAgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2lzQXJndW1lbnRzJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RUYWcgPSAnW29iamVjdCBPYmplY3RdJztcblxuLyoqIFVzZWQgZm9yIG5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKiBVc2VkIHRvIGNoZWNrIG9iamVjdHMgZm9yIG93biBwcm9wZXJ0aWVzLiAqL1xudmFyIGhhc093blByb3BlcnR5ID0gb2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZSBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNi4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9ialRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIHRoYXQgaXMsIGFuIG9iamVjdCBjcmVhdGVkIGJ5IHRoZVxuICogYE9iamVjdGAgY29uc3RydWN0b3Igb3Igb25lIHdpdGggYSBgW1tQcm90b3R5cGVdXWAgb2YgYG51bGxgLlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBhc3N1bWVzIG9iamVjdHMgY3JlYXRlZCBieSB0aGUgYE9iamVjdGAgY29uc3RydWN0b3JcbiAqIGhhdmUgbm8gaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBwbGFpbiBvYmplY3QsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogZnVuY3Rpb24gRm9vKCkge1xuICogICB0aGlzLmEgPSAxO1xuICogfVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChuZXcgRm9vKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdCh7ICd4JzogMCwgJ3knOiAwIH0pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNQbGFpbk9iamVjdChPYmplY3QuY3JlYXRlKG51bGwpKTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWx1ZSkge1xuICB2YXIgQ3RvcjtcblxuICAvLyBFeGl0IGVhcmx5IGZvciBub24gYE9iamVjdGAgb2JqZWN0cy5cbiAgaWYgKCEoaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBvYmpUb1N0cmluZy5jYWxsKHZhbHVlKSA9PSBvYmplY3RUYWcgJiYgIWlzQXJndW1lbnRzKHZhbHVlKSkgfHxcbiAgICAgICghaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgJ2NvbnN0cnVjdG9yJykgJiYgKEN0b3IgPSB2YWx1ZS5jb25zdHJ1Y3RvciwgdHlwZW9mIEN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiAhKEN0b3IgaW5zdGFuY2VvZiBDdG9yKSkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIElFIDwgOSBpdGVyYXRlcyBpbmhlcml0ZWQgcHJvcGVydGllcyBiZWZvcmUgb3duIHByb3BlcnRpZXMuIElmIHRoZSBmaXJzdFxuICAvLyBpdGVyYXRlZCBwcm9wZXJ0eSBpcyBhbiBvYmplY3QncyBvd24gcHJvcGVydHkgdGhlbiB0aGVyZSBhcmUgbm8gaW5oZXJpdGVkXG4gIC8vIGVudW1lcmFibGUgcHJvcGVydGllcy5cbiAgdmFyIHJlc3VsdDtcbiAgLy8gSW4gbW9zdCBlbnZpcm9ubWVudHMgYW4gb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMgYXJlIGl0ZXJhdGVkIGJlZm9yZVxuICAvLyBpdHMgaW5oZXJpdGVkIHByb3BlcnRpZXMuIElmIHRoZSBsYXN0IGl0ZXJhdGVkIHByb3BlcnR5IGlzIGFuIG9iamVjdCdzXG4gIC8vIG93biBwcm9wZXJ0eSB0aGVuIHRoZXJlIGFyZSBubyBpbmhlcml0ZWQgZW51bWVyYWJsZSBwcm9wZXJ0aWVzLlxuICBiYXNlRm9ySW4odmFsdWUsIGZ1bmN0aW9uKHN1YlZhbHVlLCBrZXkpIHtcbiAgICByZXN1bHQgPSBrZXk7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0ID09PSB1bmRlZmluZWQgfHwgaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgcmVzdWx0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1BsYWluT2JqZWN0O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2xhbmcvaXNQbGFpbk9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9iYXNlRm9yJyksXG4gICAga2V5c0luID0gcmVxdWlyZSgnLi4vb2JqZWN0L2tleXNJbicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZvckluYCB3aXRob3V0IHN1cHBvcnQgZm9yIGNhbGxiYWNrXG4gKiBzaG9ydGhhbmRzIGFuZCBgdGhpc2AgYmluZGluZy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9ySW4ob2JqZWN0LCBpdGVyYXRlZSkge1xuICByZXR1cm4gYmFzZUZvcihvYmplY3QsIGl0ZXJhdGVlLCBrZXlzSW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JJbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRm9ySW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpO1xuXG52YXIgX3VwZGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cGRhdGUpO1xuXG52YXIgX3dyYXAgPSByZXF1aXJlKCcuL3dyYXAnKTtcblxudmFyIF93cmFwMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dyYXApO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25Gb3JFYWNoID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vZm9yRWFjaCcpO1xuXG52YXIgX2xvZGFzaENvbGxlY3Rpb25Gb3JFYWNoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2xvZGFzaENvbGxlY3Rpb25Gb3JFYWNoKTtcblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uTWFwID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vbWFwJyk7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvbk1hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uTWFwKTtcblxudmFyIF9sb2Rhc2hPYmplY3RNYXBWYWx1ZXMgPSByZXF1aXJlKCdsb2Rhc2gvb2JqZWN0L21hcFZhbHVlcycpO1xuXG52YXIgX2xvZGFzaE9iamVjdE1hcFZhbHVlczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3RNYXBWYWx1ZXMpO1xuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqZWN0LCBvdGhlck9iamVjdCkge1xuICB2YXIgZXF1YWwgPSB0cnVlO1xuICBfbG9kYXNoQ29sbGVjdGlvbkZvckVhY2gyWydkZWZhdWx0J10ob3RoZXJPYmplY3QsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgaWYgKHZhbHVlICE9PSBvYmplY3Rba2V5XSkge1xuICAgICAgZXF1YWwgPSBmYWxzZTtcblxuICAgICAgLy8gZXhpdCBlYXJseVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGVxdWFsO1xufVxuXG5mdW5jdGlvbiBtYXAoaXRlcmF0ZWUsIG9iamVjdCkge1xuICB2YXIgdXBkYXRlciA9IHR5cGVvZiBpdGVyYXRlZSA9PT0gJ2Z1bmN0aW9uJyA/IGl0ZXJhdGVlIDogX3VwZGF0ZTJbJ2RlZmF1bHQnXShpdGVyYXRlZSk7XG5cbiAgdmFyIG1hcHBlciA9IEFycmF5LmlzQXJyYXkob2JqZWN0KSA/IF9sb2Rhc2hDb2xsZWN0aW9uTWFwMlsnZGVmYXVsdCddIDogX2xvZGFzaE9iamVjdE1hcFZhbHVlczJbJ2RlZmF1bHQnXTtcblxuICB2YXIgbmV3T2JqZWN0ID0gbWFwcGVyKG9iamVjdCwgdXBkYXRlcik7XG4gIHZhciBlcXVhbCA9IHNoYWxsb3dFcXVhbChvYmplY3QsIG5ld09iamVjdCk7XG5cbiAgcmV0dXJuIGVxdWFsID8gb2JqZWN0IDogbmV3T2JqZWN0O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBfd3JhcDJbJ2RlZmF1bHQnXShtYXApO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3QvbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMjQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGFycmF5RWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2FycmF5RWFjaCcpLFxuICAgIGJhc2VFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUVhY2gnKSxcbiAgICBjcmVhdGVGb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvY3JlYXRlRm9yRWFjaCcpO1xuXG4vKipcbiAqIEl0ZXJhdGVzIG92ZXIgZWxlbWVudHMgb2YgYGNvbGxlY3Rpb25gIGludm9raW5nIGBpdGVyYXRlZWAgZm9yIGVhY2ggZWxlbWVudC5cbiAqIFRoZSBgaXRlcmF0ZWVgIGlzIGJvdW5kIHRvIGB0aGlzQXJnYCBhbmQgaW52b2tlZCB3aXRoIHRocmVlIGFyZ3VtZW50czpcbiAqICh2YWx1ZSwgaW5kZXh8a2V5LCBjb2xsZWN0aW9uKS4gSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseVxuICogYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiAqKk5vdGU6KiogQXMgd2l0aCBvdGhlciBcIkNvbGxlY3Rpb25zXCIgbWV0aG9kcywgb2JqZWN0cyB3aXRoIGEgXCJsZW5ndGhcIiBwcm9wZXJ0eVxuICogYXJlIGl0ZXJhdGVkIGxpa2UgYXJyYXlzLiBUbyBhdm9pZCB0aGlzIGJlaGF2aW9yIGBfLmZvckluYCBvciBgXy5mb3JPd25gXG4gKiBtYXkgYmUgdXNlZCBmb3Igb2JqZWN0IGl0ZXJhdGlvbi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGFsaWFzIGVhY2hcbiAqIEBjYXRlZ29yeSBDb2xsZWN0aW9uXG4gKiBAcGFyYW0ge0FycmF5fE9iamVjdHxzdHJpbmd9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0geyp9IFt0aGlzQXJnXSBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGl0ZXJhdGVlYC5cbiAqIEByZXR1cm5zIHtBcnJheXxPYmplY3R8c3RyaW5nfSBSZXR1cm5zIGBjb2xsZWN0aW9uYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXyhbMSwgMl0pLmZvckVhY2goZnVuY3Rpb24obikge1xuICogICBjb25zb2xlLmxvZyhuKTtcbiAqIH0pLnZhbHVlKCk7XG4gKiAvLyA9PiBsb2dzIGVhY2ggdmFsdWUgZnJvbSBsZWZ0IHRvIHJpZ2h0IGFuZCByZXR1cm5zIHRoZSBhcnJheVxuICpcbiAqIF8uZm9yRWFjaCh7ICdhJzogMSwgJ2InOiAyIH0sIGZ1bmN0aW9uKG4sIGtleSkge1xuICogICBjb25zb2xlLmxvZyhuLCBrZXkpO1xuICogfSk7XG4gKiAvLyA9PiBsb2dzIGVhY2ggdmFsdWUta2V5IHBhaXIgYW5kIHJldHVybnMgdGhlIG9iamVjdCAoaXRlcmF0aW9uIG9yZGVyIGlzIG5vdCBndWFyYW50ZWVkKVxuICovXG52YXIgZm9yRWFjaCA9IGNyZWF0ZUZvckVhY2goYXJyYXlFYWNoLCBiYXNlRWFjaCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZm9yRWFjaDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9jb2xsZWN0aW9uL2ZvckVhY2guanNcbiAqKiBtb2R1bGUgaWQgPSAyNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5RWFjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2JpbmRDYWxsYmFjaycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gZm9yIGBfLmZvckVhY2hgIG9yIGBfLmZvckVhY2hSaWdodGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFycmF5RnVuYyBUaGUgZnVuY3Rpb24gdG8gaXRlcmF0ZSBvdmVyIGFuIGFycmF5LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZWFjaEZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGl0ZXJhdGUgb3ZlciBhIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBlYWNoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVGb3JFYWNoKGFycmF5RnVuYywgZWFjaEZ1bmMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNvbGxlY3Rpb24sIGl0ZXJhdGVlLCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgaXRlcmF0ZWUgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzQXJnID09PSB1bmRlZmluZWQgJiYgaXNBcnJheShjb2xsZWN0aW9uKSlcbiAgICAgID8gYXJyYXlGdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKVxuICAgICAgOiBlYWNoRnVuYyhjb2xsZWN0aW9uLCBiaW5kQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDMpKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVGb3JFYWNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUZvckVhY2guanNcbiAqKiBtb2R1bGUgaWQgPSAyNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYXJyYXlNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9hcnJheU1hcCcpLFxuICAgIGJhc2VDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VNYXAgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlTWFwJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2xhbmcvaXNBcnJheScpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdmFsdWVzIGJ5IHJ1bm5pbmcgZWFjaCBlbGVtZW50IGluIGBjb2xsZWN0aW9uYCB0aHJvdWdoXG4gKiBgaXRlcmF0ZWVgLiBUaGUgYGl0ZXJhdGVlYCBpcyBib3VuZCB0byBgdGhpc0FyZ2AgYW5kIGludm9rZWQgd2l0aCB0aHJlZVxuICogYXJndW1lbnRzOiAodmFsdWUsIGluZGV4fGtleSwgY29sbGVjdGlvbikuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYGl0ZXJhdGVlYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzYCBzdHlsZVxuICogY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW5cbiAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIE1hbnkgbG9kYXNoIG1ldGhvZHMgYXJlIGd1YXJkZWQgdG8gd29yayBhcyBpdGVyYXRlZXMgZm9yIG1ldGhvZHMgbGlrZVxuICogYF8uZXZlcnlgLCBgXy5maWx0ZXJgLCBgXy5tYXBgLCBgXy5tYXBWYWx1ZXNgLCBgXy5yZWplY3RgLCBhbmQgYF8uc29tZWAuXG4gKlxuICogVGhlIGd1YXJkZWQgbWV0aG9kcyBhcmU6XG4gKiBgYXJ5YCwgYGNhbGxiYWNrYCwgYGNodW5rYCwgYGNsb25lYCwgYGNyZWF0ZWAsIGBjdXJyeWAsIGBjdXJyeVJpZ2h0YCxcbiAqIGBkcm9wYCwgYGRyb3BSaWdodGAsIGBldmVyeWAsIGBmaWxsYCwgYGZsYXR0ZW5gLCBgaW52ZXJ0YCwgYG1heGAsIGBtaW5gLFxuICogYHBhcnNlSW50YCwgYHNsaWNlYCwgYHNvcnRCeWAsIGB0YWtlYCwgYHRha2VSaWdodGAsIGB0ZW1wbGF0ZWAsIGB0cmltYCxcbiAqIGB0cmltTGVmdGAsIGB0cmltUmlnaHRgLCBgdHJ1bmNgLCBgcmFuZG9tYCwgYHJhbmdlYCwgYHNhbXBsZWAsIGBzb21lYCxcbiAqIGBzdW1gLCBgdW5pcWAsIGFuZCBgd29yZHNgXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBhbGlhcyBjb2xsZWN0XG4gKiBAY2F0ZWdvcnkgQ29sbGVjdGlvblxuICogQHBhcmFtIHtBcnJheXxPYmplY3R8c3RyaW5nfSBjb2xsZWN0aW9uIFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb258T2JqZWN0fHN0cmluZ30gW2l0ZXJhdGVlPV8uaWRlbnRpdHldIFRoZSBmdW5jdGlvbiBpbnZva2VkXG4gKiAgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgaXRlcmF0ZWVgLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiB0aW1lc1RocmVlKG4pIHtcbiAqICAgcmV0dXJuIG4gKiAzO1xuICogfVxuICpcbiAqIF8ubWFwKFsxLCAyXSwgdGltZXNUaHJlZSk7XG4gKiAvLyA9PiBbMywgNl1cbiAqXG4gKiBfLm1hcCh7ICdhJzogMSwgJ2InOiAyIH0sIHRpbWVzVGhyZWUpO1xuICogLy8gPT4gWzMsIDZdIChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKlxuICogdmFyIHVzZXJzID0gW1xuICogICB7ICd1c2VyJzogJ2Jhcm5leScgfSxcbiAqICAgeyAndXNlcic6ICdmcmVkJyB9XG4gKiBdO1xuICpcbiAqIC8vIHVzaW5nIHRoZSBgXy5wcm9wZXJ0eWAgY2FsbGJhY2sgc2hvcnRoYW5kXG4gKiBfLm1hcCh1c2VycywgJ3VzZXInKTtcbiAqIC8vID0+IFsnYmFybmV5JywgJ2ZyZWQnXVxuICovXG5mdW5jdGlvbiBtYXAoY29sbGVjdGlvbiwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgdmFyIGZ1bmMgPSBpc0FycmF5KGNvbGxlY3Rpb24pID8gYXJyYXlNYXAgOiBiYXNlTWFwO1xuICBpdGVyYXRlZSA9IGJhc2VDYWxsYmFjayhpdGVyYXRlZSwgdGhpc0FyZywgMyk7XG4gIHJldHVybiBmdW5jKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvY29sbGVjdGlvbi9tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheU1hcChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2FycmF5TWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMjQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGJhc2VFYWNoID0gcmVxdWlyZSgnLi9iYXNlRWFjaCcpLFxuICAgIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi9pc0FycmF5TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLm1hcGAgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFjayBzaG9ydGhhbmRzXG4gKiBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl8T2JqZWN0fHN0cmluZ30gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlTWFwKGNvbGxlY3Rpb24sIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgcmVzdWx0ID0gaXNBcnJheUxpa2UoY29sbGVjdGlvbikgPyBBcnJheShjb2xsZWN0aW9uLmxlbmd0aCkgOiBbXTtcblxuICBiYXNlRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbih2YWx1ZSwga2V5LCBjb2xsZWN0aW9uKSB7XG4gICAgcmVzdWx0WysraW5kZXhdID0gaXRlcmF0ZWUodmFsdWUsIGtleSwgY29sbGVjdGlvbik7XG4gIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VNYXA7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYmFzZU1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBjcmVhdGVPYmplY3RNYXBwZXIgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9jcmVhdGVPYmplY3RNYXBwZXInKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCB3aXRoIHRoZSBzYW1lIGtleXMgYXMgYG9iamVjdGAgYW5kIHZhbHVlcyBnZW5lcmF0ZWQgYnlcbiAqIHJ1bm5pbmcgZWFjaCBvd24gZW51bWVyYWJsZSBwcm9wZXJ0eSBvZiBgb2JqZWN0YCB0aHJvdWdoIGBpdGVyYXRlZWAuIFRoZVxuICogaXRlcmF0ZWUgZnVuY3Rpb24gaXMgYm91bmQgdG8gYHRoaXNBcmdgIGFuZCBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOlxuICogKHZhbHVlLCBrZXksIG9iamVjdCkuXG4gKlxuICogSWYgYSBwcm9wZXJ0eSBuYW1lIGlzIHByb3ZpZGVkIGZvciBgaXRlcmF0ZWVgIHRoZSBjcmVhdGVkIGBfLnByb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyB0aGUgcHJvcGVydHkgdmFsdWUgb2YgdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogSWYgYSB2YWx1ZSBpcyBhbHNvIHByb3ZpZGVkIGZvciBgdGhpc0FyZ2AgdGhlIGNyZWF0ZWQgYF8ubWF0Y2hlc1Byb3BlcnR5YFxuICogc3R5bGUgY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSBhIG1hdGNoaW5nIHByb3BlcnR5XG4gKiB2YWx1ZSwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIElmIGFuIG9iamVjdCBpcyBwcm92aWRlZCBmb3IgYGl0ZXJhdGVlYCB0aGUgY3JlYXRlZCBgXy5tYXRjaGVzYCBzdHlsZVxuICogY2FsbGJhY2sgcmV0dXJucyBgdHJ1ZWAgZm9yIGVsZW1lbnRzIHRoYXQgaGF2ZSB0aGUgcHJvcGVydGllcyBvZiB0aGUgZ2l2ZW5cbiAqIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R8c3RyaW5nfSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWRcbiAqICBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHsqfSBbdGhpc0FyZ10gVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBpdGVyYXRlZWAuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgbWFwcGVkIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5tYXBWYWx1ZXMoeyAnYSc6IDEsICdiJzogMiB9LCBmdW5jdGlvbihuKSB7XG4gKiAgIHJldHVybiBuICogMztcbiAqIH0pO1xuICogLy8gPT4geyAnYSc6IDMsICdiJzogNiB9XG4gKlxuICogdmFyIHVzZXJzID0ge1xuICogICAnZnJlZCc6ICAgIHsgJ3VzZXInOiAnZnJlZCcsICAgICdhZ2UnOiA0MCB9LFxuICogICAncGViYmxlcyc6IHsgJ3VzZXInOiAncGViYmxlcycsICdhZ2UnOiAxIH1cbiAqIH07XG4gKlxuICogLy8gdXNpbmcgdGhlIGBfLnByb3BlcnR5YCBjYWxsYmFjayBzaG9ydGhhbmRcbiAqIF8ubWFwVmFsdWVzKHVzZXJzLCAnYWdlJyk7XG4gKiAvLyA9PiB7ICdmcmVkJzogNDAsICdwZWJibGVzJzogMSB9IChpdGVyYXRpb24gb3JkZXIgaXMgbm90IGd1YXJhbnRlZWQpXG4gKi9cbnZhciBtYXBWYWx1ZXMgPSBjcmVhdGVPYmplY3RNYXBwZXIoKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtYXBWYWx1ZXM7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L21hcFZhbHVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDI0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBiYXNlQ2FsbGJhY2sgPSByZXF1aXJlKCcuL2Jhc2VDYWxsYmFjaycpLFxuICAgIGJhc2VGb3JPd24gPSByZXF1aXJlKCcuL2Jhc2VGb3JPd24nKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gZm9yIGBfLm1hcEtleXNgIG9yIGBfLm1hcFZhbHVlc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzTWFwS2V5c10gU3BlY2lmeSBtYXBwaW5nIGtleXMgaW5zdGVhZCBvZiB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBtYXAgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1hcHBlcihpc01hcEtleXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCwgaXRlcmF0ZWUsIHRoaXNBcmcpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgaXRlcmF0ZWUgPSBiYXNlQ2FsbGJhY2soaXRlcmF0ZWUsIHRoaXNBcmcsIDMpO1xuXG4gICAgYmFzZUZvck93bihvYmplY3QsIGZ1bmN0aW9uKHZhbHVlLCBrZXksIG9iamVjdCkge1xuICAgICAgdmFyIG1hcHBlZCA9IGl0ZXJhdGVlKHZhbHVlLCBrZXksIG9iamVjdCk7XG4gICAgICBrZXkgPSBpc01hcEtleXMgPyBtYXBwZWQgOiBrZXk7XG4gICAgICB2YWx1ZSA9IGlzTWFwS2V5cyA/IHZhbHVlIDogbWFwcGVkO1xuICAgICAgcmVzdWx0W2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZU9iamVjdE1hcHBlcjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9jcmVhdGVPYmplY3RNYXBwZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hPYmplY3RPbWl0ID0gcmVxdWlyZSgnbG9kYXNoL29iamVjdC9vbWl0Jyk7XG5cbnZhciBfbG9kYXNoT2JqZWN0T21pdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hPYmplY3RPbWl0KTtcblxudmFyIF93cmFwID0gcmVxdWlyZSgnLi93cmFwJyk7XG5cbnZhciBfd3JhcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwKTtcblxuZnVuY3Rpb24gb21pdChwcmVkaWNhdGUsIGNvbGxlY3Rpb24pIHtcbiAgcmV0dXJuIF9sb2Rhc2hPYmplY3RPbWl0MlsnZGVmYXVsdCddKGNvbGxlY3Rpb24sIHByZWRpY2F0ZSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF93cmFwMlsnZGVmYXVsdCddKG9taXQpO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3Qvb21pdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBhcnJheU1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFsL2FycmF5TWFwJyksXG4gICAgYmFzZURpZmZlcmVuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iYXNlRGlmZmVyZW5jZScpLFxuICAgIGJhc2VGbGF0dGVuID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvYmFzZUZsYXR0ZW4nKSxcbiAgICBiaW5kQ2FsbGJhY2sgPSByZXF1aXJlKCcuLi9pbnRlcm5hbC9iaW5kQ2FsbGJhY2snKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpLFxuICAgIHBpY2tCeUFycmF5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWwvcGlja0J5QXJyYXknKSxcbiAgICBwaWNrQnlDYWxsYmFjayA9IHJlcXVpcmUoJy4uL2ludGVybmFsL3BpY2tCeUNhbGxiYWNrJyksXG4gICAgcmVzdFBhcmFtID0gcmVxdWlyZSgnLi4vZnVuY3Rpb24vcmVzdFBhcmFtJyk7XG5cbi8qKlxuICogVGhlIG9wcG9zaXRlIG9mIGBfLnBpY2tgOyB0aGlzIG1ldGhvZCBjcmVhdGVzIGFuIG9iamVjdCBjb21wb3NlZCBvZiB0aGVcbiAqIG93biBhbmQgaW5oZXJpdGVkIGVudW1lcmFibGUgcHJvcGVydGllcyBvZiBgb2JqZWN0YCB0aGF0IGFyZSBub3Qgb21pdHRlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb258Li4uKHN0cmluZ3xzdHJpbmdbXSl9IFtwcmVkaWNhdGVdIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlclxuICogIGl0ZXJhdGlvbiBvciBwcm9wZXJ0eSBuYW1lcyB0byBvbWl0LCBzcGVjaWZpZWQgYXMgaW5kaXZpZHVhbCBwcm9wZXJ0eVxuICogIG5hbWVzIG9yIGFycmF5cyBvZiBwcm9wZXJ0eSBuYW1lcy5cbiAqIEBwYXJhbSB7Kn0gW3RoaXNBcmddIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgcHJlZGljYXRlYC5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIG5ldyBvYmplY3QuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICd1c2VyJzogJ2ZyZWQnLCAnYWdlJzogNDAgfTtcbiAqXG4gKiBfLm9taXQob2JqZWN0LCAnYWdlJyk7XG4gKiAvLyA9PiB7ICd1c2VyJzogJ2ZyZWQnIH1cbiAqXG4gKiBfLm9taXQob2JqZWN0LCBfLmlzTnVtYmVyKTtcbiAqIC8vID0+IHsgJ3VzZXInOiAnZnJlZCcgfVxuICovXG52YXIgb21pdCA9IHJlc3RQYXJhbShmdW5jdGlvbihvYmplY3QsIHByb3BzKSB7XG4gIGlmIChvYmplY3QgPT0gbnVsbCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuICBpZiAodHlwZW9mIHByb3BzWzBdICE9ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgcHJvcHMgPSBhcnJheU1hcChiYXNlRmxhdHRlbihwcm9wcyksIFN0cmluZyk7XG4gICAgcmV0dXJuIHBpY2tCeUFycmF5KG9iamVjdCwgYmFzZURpZmZlcmVuY2Uoa2V5c0luKG9iamVjdCksIHByb3BzKSk7XG4gIH1cbiAgdmFyIHByZWRpY2F0ZSA9IGJpbmRDYWxsYmFjayhwcm9wc1swXSwgcHJvcHNbMV0sIDMpO1xuICByZXR1cm4gcGlja0J5Q2FsbGJhY2sob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICByZXR1cm4gIXByZWRpY2F0ZSh2YWx1ZSwga2V5LCBvYmplY3QpO1xuICB9KTtcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9taXQ7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvb2JqZWN0L29taXQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCJ2YXIgYmFzZUluZGV4T2YgPSByZXF1aXJlKCcuL2Jhc2VJbmRleE9mJyksXG4gICAgY2FjaGVJbmRleE9mID0gcmVxdWlyZSgnLi9jYWNoZUluZGV4T2YnKSxcbiAgICBjcmVhdGVDYWNoZSA9IHJlcXVpcmUoJy4vY3JlYXRlQ2FjaGUnKTtcblxuLyoqIFVzZWQgYXMgdGhlIHNpemUgdG8gZW5hYmxlIGxhcmdlIGFycmF5IG9wdGltaXphdGlvbnMuICovXG52YXIgTEFSR0VfQVJSQVlfU0laRSA9IDIwMDtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5kaWZmZXJlbmNlYCB3aGljaCBhY2NlcHRzIGEgc2luZ2xlIGFycmF5XG4gKiBvZiB2YWx1ZXMgdG8gZXhjbHVkZS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0FycmF5fSB2YWx1ZXMgVGhlIHZhbHVlcyB0byBleGNsdWRlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgZmlsdGVyZWQgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlRGlmZmVyZW5jZShhcnJheSwgdmFsdWVzKSB7XG4gIHZhciBsZW5ndGggPSBhcnJheSA/IGFycmF5Lmxlbmd0aCA6IDAsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICBpZiAoIWxlbmd0aCkge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBpbmRleE9mID0gYmFzZUluZGV4T2YsXG4gICAgICBpc0NvbW1vbiA9IHRydWUsXG4gICAgICBjYWNoZSA9IChpc0NvbW1vbiAmJiB2YWx1ZXMubGVuZ3RoID49IExBUkdFX0FSUkFZX1NJWkUpID8gY3JlYXRlQ2FjaGUodmFsdWVzKSA6IG51bGwsXG4gICAgICB2YWx1ZXNMZW5ndGggPSB2YWx1ZXMubGVuZ3RoO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGluZGV4T2YgPSBjYWNoZUluZGV4T2Y7XG4gICAgaXNDb21tb24gPSBmYWxzZTtcbiAgICB2YWx1ZXMgPSBjYWNoZTtcbiAgfVxuICBvdXRlcjpcbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG5cbiAgICBpZiAoaXNDb21tb24gJiYgdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICB2YXIgdmFsdWVzSW5kZXggPSB2YWx1ZXNMZW5ndGg7XG4gICAgICB3aGlsZSAodmFsdWVzSW5kZXgtLSkge1xuICAgICAgICBpZiAodmFsdWVzW3ZhbHVlc0luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICBjb250aW51ZSBvdXRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpbmRleE9mKHZhbHVlcywgdmFsdWUsIDApIDwgMCkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VEaWZmZXJlbmNlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VEaWZmZXJlbmNlLmpzXG4gKiogbW9kdWxlIGlkID0gMjUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGluZGV4T2ZOYU4gPSByZXF1aXJlKCcuL2luZGV4T2ZOYU4nKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5pbmRleE9mYCB3aXRob3V0IHN1cHBvcnQgZm9yIGJpbmFyeSBzZWFyY2hlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mKGFycmF5LCB2YWx1ZSwgZnJvbUluZGV4KSB7XG4gIGlmICh2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICByZXR1cm4gaW5kZXhPZk5hTihhcnJheSwgZnJvbUluZGV4KTtcbiAgfVxuICB2YXIgaW5kZXggPSBmcm9tSW5kZXggLSAxLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGFycmF5W2luZGV4XSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VJbmRleE9mO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2Jhc2VJbmRleE9mLmpzXG4gKiogbW9kdWxlIGlkID0gMjUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwiLyoqXG4gKiBHZXRzIHRoZSBpbmRleCBhdCB3aGljaCB0aGUgZmlyc3Qgb2NjdXJyZW5jZSBvZiBgTmFOYCBpcyBmb3VuZCBpbiBgYXJyYXlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtudW1iZXJ9IGZyb21JbmRleCBUaGUgaW5kZXggdG8gc2VhcmNoIGZyb20uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtmcm9tUmlnaHRdIFNwZWNpZnkgaXRlcmF0aW5nIGZyb20gcmlnaHQgdG8gbGVmdC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIGBOYU5gLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGluZGV4T2ZOYU4oYXJyYXksIGZyb21JbmRleCwgZnJvbVJpZ2h0KSB7XG4gIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGgsXG4gICAgICBpbmRleCA9IGZyb21JbmRleCArIChmcm9tUmlnaHQgPyAwIDogLTEpO1xuXG4gIHdoaWxlICgoZnJvbVJpZ2h0ID8gaW5kZXgtLSA6ICsraW5kZXggPCBsZW5ndGgpKSB7XG4gICAgdmFyIG90aGVyID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChvdGhlciAhPT0gb3RoZXIpIHtcbiAgICAgIHJldHVybiBpbmRleDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIC0xO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluZGV4T2ZOYU47XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvaW5kZXhPZk5hTi5qc1xuICoqIG1vZHVsZSBpZCA9IDI1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2xhbmcvaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBpbiBgY2FjaGVgIG1pbWlja2luZyB0aGUgcmV0dXJuIHNpZ25hdHVyZSBvZlxuICogYF8uaW5kZXhPZmAgYnkgcmV0dXJuaW5nIGAwYCBpZiB0aGUgdmFsdWUgaXMgZm91bmQsIGVsc2UgYC0xYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IGNhY2hlIFRoZSBjYWNoZSB0byBzZWFyY2guXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyBgMGAgaWYgYHZhbHVlYCBpcyBmb3VuZCwgZWxzZSBgLTFgLlxuICovXG5mdW5jdGlvbiBjYWNoZUluZGV4T2YoY2FjaGUsIHZhbHVlKSB7XG4gIHZhciBkYXRhID0gY2FjaGUuZGF0YSxcbiAgICAgIHJlc3VsdCA9ICh0eXBlb2YgdmFsdWUgPT0gJ3N0cmluZycgfHwgaXNPYmplY3QodmFsdWUpKSA/IGRhdGEuc2V0Lmhhcyh2YWx1ZSkgOiBkYXRhLmhhc2hbdmFsdWVdO1xuXG4gIHJldHVybiByZXN1bHQgPyAwIDogLTE7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVJbmRleE9mO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NhY2hlSW5kZXhPZi5qc1xuICoqIG1vZHVsZSBpZCA9IDI1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBTZXRDYWNoZSA9IHJlcXVpcmUoJy4vU2V0Q2FjaGUnKSxcbiAgICBnZXROYXRpdmUgPSByZXF1aXJlKCcuL2dldE5hdGl2ZScpO1xuXG4vKiogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIFNldCA9IGdldE5hdGl2ZShnbG9iYWwsICdTZXQnKTtcblxuLyogTmF0aXZlIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVDcmVhdGUgPSBnZXROYXRpdmUoT2JqZWN0LCAnY3JlYXRlJyk7XG5cbi8qKlxuICogQ3JlYXRlcyBhIGBTZXRgIGNhY2hlIG9iamVjdCB0byBvcHRpbWl6ZSBsaW5lYXIgc2VhcmNoZXMgb2YgbGFyZ2UgYXJyYXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbdmFsdWVzXSBUaGUgdmFsdWVzIHRvIGNhY2hlLlxuICogQHJldHVybnMge251bGx8T2JqZWN0fSBSZXR1cm5zIHRoZSBuZXcgY2FjaGUgb2JqZWN0IGlmIGBTZXRgIGlzIHN1cHBvcnRlZCwgZWxzZSBgbnVsbGAuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKHZhbHVlcykge1xuICByZXR1cm4gKG5hdGl2ZUNyZWF0ZSAmJiBTZXQpID8gbmV3IFNldENhY2hlKHZhbHVlcykgOiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNyZWF0ZUNhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NyZWF0ZUNhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gMjU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGNhY2hlUHVzaCA9IHJlcXVpcmUoJy4vY2FjaGVQdXNoJyksXG4gICAgZ2V0TmF0aXZlID0gcmVxdWlyZSgnLi9nZXROYXRpdmUnKTtcblxuLyoqIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBTZXQgPSBnZXROYXRpdmUoZ2xvYmFsLCAnU2V0Jyk7XG5cbi8qIE5hdGl2ZSBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlQ3JlYXRlID0gZ2V0TmF0aXZlKE9iamVjdCwgJ2NyZWF0ZScpO1xuXG4vKipcbiAqXG4gKiBDcmVhdGVzIGEgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIHVuaXF1ZSB2YWx1ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIFNldENhY2hlKHZhbHVlcykge1xuICB2YXIgbGVuZ3RoID0gdmFsdWVzID8gdmFsdWVzLmxlbmd0aCA6IDA7XG5cbiAgdGhpcy5kYXRhID0geyAnaGFzaCc6IG5hdGl2ZUNyZWF0ZShudWxsKSwgJ3NldCc6IG5ldyBTZXQgfTtcbiAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgdGhpcy5wdXNoKHZhbHVlc1tsZW5ndGhdKTtcbiAgfVxufVxuXG4vLyBBZGQgZnVuY3Rpb25zIHRvIHRoZSBgU2V0YCBjYWNoZS5cblNldENhY2hlLnByb3RvdHlwZS5wdXNoID0gY2FjaGVQdXNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNldENhY2hlO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL1NldENhY2hlLmpzXG4gKiogbW9kdWxlIGlkID0gMjU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vbGFuZy9pc09iamVjdCcpO1xuXG4vKipcbiAqIEFkZHMgYHZhbHVlYCB0byB0aGUgY2FjaGUuXG4gKlxuICogQHByaXZhdGVcbiAqIEBuYW1lIHB1c2hcbiAqIEBtZW1iZXJPZiBTZXRDYWNoZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2FjaGUuXG4gKi9cbmZ1bmN0aW9uIGNhY2hlUHVzaCh2YWx1ZSkge1xuICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fCBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICBkYXRhLnNldC5hZGQodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGEuaGFzaFt2YWx1ZV0gPSB0cnVlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY2FjaGVQdXNoO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL2NhY2hlUHVzaC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsInZhciBhcnJheVB1c2ggPSByZXF1aXJlKCcuL2FycmF5UHVzaCcpLFxuICAgIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi4vbGFuZy9pc0FyZ3VtZW50cycpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9sYW5nL2lzQXJyYXknKSxcbiAgICBpc0FycmF5TGlrZSA9IHJlcXVpcmUoJy4vaXNBcnJheUxpa2UnKSxcbiAgICBpc09iamVjdExpa2UgPSByZXF1aXJlKCcuL2lzT2JqZWN0TGlrZScpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBfLmZsYXR0ZW5gIHdpdGggYWRkZWQgc3VwcG9ydCBmb3IgcmVzdHJpY3RpbmdcbiAqIGZsYXR0ZW5pbmcgYW5kIHNwZWNpZnlpbmcgdGhlIHN0YXJ0IGluZGV4LlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgZmxhdHRlbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzU3RyaWN0XSBSZXN0cmljdCBmbGF0dGVuaW5nIHRvIGFycmF5cy1saWtlIG9iamVjdHMuXG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0PVtdXSBUaGUgaW5pdGlhbCByZXN1bHQgdmFsdWUuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmbGF0dGVuZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGJhc2VGbGF0dGVuKGFycmF5LCBpc0RlZXAsIGlzU3RyaWN0LCByZXN1bHQpIHtcbiAgcmVzdWx0IHx8IChyZXN1bHQgPSBbXSk7XG5cbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIgdmFsdWUgPSBhcnJheVtpbmRleF07XG4gICAgaWYgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgaXNBcnJheUxpa2UodmFsdWUpICYmXG4gICAgICAgIChpc1N0cmljdCB8fCBpc0FycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgICBpZiAoaXNEZWVwKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBpc0RlZXAsIGlzU3RyaWN0LCByZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlQdXNoKHJlc3VsdCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlRmxhdHRlbjtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9iYXNlRmxhdHRlbi5qc1xuICoqIG1vZHVsZSBpZCA9IDI1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIi8qKlxuICogQXBwZW5kcyB0aGUgZWxlbWVudHMgb2YgYHZhbHVlc2AgdG8gYGFycmF5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gYXJyYXkgVGhlIGFycmF5IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgdmFsdWVzIHRvIGFwcGVuZC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheVB1c2goYXJyYXksIHZhbHVlcykge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGgsXG4gICAgICBvZmZzZXQgPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBhcnJheVtvZmZzZXQgKyBpbmRleF0gPSB2YWx1ZXNbaW5kZXhdO1xuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheVB1c2g7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9sb2Rhc2gvaW50ZXJuYWwvYXJyYXlQdXNoLmpzXG4gKiogbW9kdWxlIGlkID0gMjYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi90b09iamVjdCcpO1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5waWNrYCB3aGljaCBwaWNrcyBgb2JqZWN0YCBwcm9wZXJ0aWVzIHNwZWNpZmllZFxuICogYnkgYHByb3BzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHByb3BzIFRoZSBwcm9wZXJ0eSBuYW1lcyB0byBwaWNrLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGlja0J5QXJyYXkob2JqZWN0LCBwcm9wcykge1xuICBvYmplY3QgPSB0b09iamVjdChvYmplY3QpO1xuXG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gcHJvcHMubGVuZ3RoLFxuICAgICAgcmVzdWx0ID0ge307XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaW5kZXhdO1xuICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICByZXN1bHRba2V5XSA9IG9iamVjdFtrZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBpY2tCeUFycmF5O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbG9kYXNoL2ludGVybmFsL3BpY2tCeUFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMjYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDAgMiAzXG4gKiovIiwidmFyIGJhc2VGb3JJbiA9IHJlcXVpcmUoJy4vYmFzZUZvckluJyk7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLnBpY2tgIHdoaWNoIHBpY2tzIGBvYmplY3RgIHByb3BlcnRpZXMgYHByZWRpY2F0ZWBcbiAqIHJldHVybnMgdHJ1dGh5IGZvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgc291cmNlIG9iamVjdC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRpY2F0ZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gcGlja0J5Q2FsbGJhY2sob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBiYXNlRm9ySW4ob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwga2V5LCBvYmplY3QpIHtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBrZXksIG9iamVjdCkpIHtcbiAgICAgIHJlc3VsdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwaWNrQnlDYWxsYmFjaztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9pbnRlcm5hbC9waWNrQnlDYWxsYmFjay5qc1xuICoqIG1vZHVsZSBpZCA9IDI2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiBOYXRpdmUgbWV0aG9kIHJlZmVyZW5jZXMgZm9yIHRob3NlIHdpdGggdGhlIHNhbWUgbmFtZSBhcyBvdGhlciBgbG9kYXNoYCBtZXRob2RzLiAqL1xudmFyIG5hdGl2ZU1heCA9IE1hdGgubWF4O1xuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IGludm9rZXMgYGZ1bmNgIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIHRoZVxuICogY3JlYXRlZCBmdW5jdGlvbiBhbmQgYXJndW1lbnRzIGZyb20gYHN0YXJ0YCBhbmQgYmV5b25kIHByb3ZpZGVkIGFzIGFuIGFycmF5LlxuICpcbiAqICoqTm90ZToqKiBUaGlzIG1ldGhvZCBpcyBiYXNlZCBvbiB0aGUgW3Jlc3QgcGFyYW1ldGVyXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvRnVuY3Rpb25zL3Jlc3RfcGFyYW1ldGVycykuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgc2F5ID0gXy5yZXN0UGFyYW0oZnVuY3Rpb24od2hhdCwgbmFtZXMpIHtcbiAqICAgcmV0dXJuIHdoYXQgKyAnICcgKyBfLmluaXRpYWwobmFtZXMpLmpvaW4oJywgJykgK1xuICogICAgIChfLnNpemUobmFtZXMpID4gMSA/ICcsICYgJyA6ICcnKSArIF8ubGFzdChuYW1lcyk7XG4gKiB9KTtcbiAqXG4gKiBzYXkoJ2hlbGxvJywgJ2ZyZWQnLCAnYmFybmV5JywgJ3BlYmJsZXMnKTtcbiAqIC8vID0+ICdoZWxsbyBmcmVkLCBiYXJuZXksICYgcGViYmxlcydcbiAqL1xuZnVuY3Rpb24gcmVzdFBhcmFtKGZ1bmMsIHN0YXJ0KSB7XG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHN0YXJ0ID0gbmF0aXZlTWF4KHN0YXJ0ID09PSB1bmRlZmluZWQgPyAoZnVuYy5sZW5ndGggLSAxKSA6ICgrc3RhcnQgfHwgMCksIDApO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXG4gICAgICAgIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IG5hdGl2ZU1heChhcmdzLmxlbmd0aCAtIHN0YXJ0LCAwKSxcbiAgICAgICAgcmVzdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgcmVzdFtpbmRleF0gPSBhcmdzW3N0YXJ0ICsgaW5kZXhdO1xuICAgIH1cbiAgICBzd2l0Y2ggKHN0YXJ0KSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpcywgcmVzdCk7XG4gICAgICBjYXNlIDE6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgcmVzdCk7XG4gICAgICBjYXNlIDI6IHJldHVybiBmdW5jLmNhbGwodGhpcywgYXJnc1swXSwgYXJnc1sxXSwgcmVzdCk7XG4gICAgfVxuICAgIHZhciBvdGhlckFyZ3MgPSBBcnJheShzdGFydCArIDEpO1xuICAgIGluZGV4ID0gLTE7XG4gICAgd2hpbGUgKCsraW5kZXggPCBzdGFydCkge1xuICAgICAgb3RoZXJBcmdzW2luZGV4XSA9IGFyZ3NbaW5kZXhdO1xuICAgIH1cbiAgICBvdGhlckFyZ3Nbc3RhcnRdID0gcmVzdDtcbiAgICByZXR1cm4gZnVuYy5hcHBseSh0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlc3RQYXJhbTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2xvZGFzaC9mdW5jdGlvbi9yZXN0UGFyYW0uanNcbiAqKiBtb2R1bGUgaWQgPSAyNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9sb2Rhc2hDb2xsZWN0aW9uUmVqZWN0ID0gcmVxdWlyZSgnbG9kYXNoL2NvbGxlY3Rpb24vcmVqZWN0Jyk7XG5cbnZhciBfbG9kYXNoQ29sbGVjdGlvblJlamVjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9sb2Rhc2hDb2xsZWN0aW9uUmVqZWN0KTtcblxudmFyIF93cmFwID0gcmVxdWlyZSgnLi93cmFwJyk7XG5cbnZhciBfd3JhcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93cmFwKTtcblxuZnVuY3Rpb24gcmVqZWN0KHByZWRpY2F0ZSwgY29sbGVjdGlvbikge1xuICByZXR1cm4gX2xvZGFzaENvbGxlY3Rpb25SZWplY3QyWydkZWZhdWx0J10oY29sbGVjdGlvbiwgcHJlZGljYXRlKTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3dyYXAyWydkZWZhdWx0J10ocmVqZWN0KTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3VwZGVlcC9kaXN0L3JlamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3V0aWxDdXJyeSA9IHJlcXVpcmUoJy4vdXRpbC9jdXJyeScpO1xuXG52YXIgX3V0aWxDdXJyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ3VycnkpO1xuXG52YXIgX3VwZGF0ZTIgPSByZXF1aXJlKCcuL3VwZGF0ZScpO1xuXG52YXIgX3VwZGF0ZTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cGRhdGUyKTtcblxudmFyIF9tYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuXG52YXIgX21hcDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9tYXApO1xuXG52YXIgX3V0aWxTcGxpdFBhdGggPSByZXF1aXJlKCcuL3V0aWwvc3BsaXRQYXRoJyk7XG5cbnZhciBfdXRpbFNwbGl0UGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsU3BsaXRQYXRoKTtcblxudmFyIHdpbGRjYXJkID0gJyonO1xuXG5mdW5jdGlvbiByZWR1Y2VQYXRoKGFjYywga2V5KSB7XG4gIHZhciBfcmVmO1xuXG4gIGlmIChrZXkgPT09IHdpbGRjYXJkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgdmFyIF91cGRhdGU7XG5cbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHdpbGRjYXJkKSA/XG4gICAgICAvLyBJZiB3ZSBhY3R1YWxseSBoYXZlIHdpbGRjYXJkIGFzIGEgcHJvcGVydHksIHVwZGF0ZSB0aGF0XG4gICAgICBfdXBkYXRlM1snZGVmYXVsdCddKChfdXBkYXRlID0ge30sIF91cGRhdGVbd2lsZGNhcmRdID0gYWNjLCBfdXBkYXRlKSwgdmFsdWUpIDpcbiAgICAgIC8vIE90aGVyd2lzZSBtYXAgb3ZlciBhbGwgcHJvcGVydGllc1xuICAgICAgX21hcDJbJ2RlZmF1bHQnXShhY2MsIHZhbHVlKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIChfcmVmID0ge30sIF9yZWZba2V5XSA9IGFjYywgX3JlZik7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUluKHBhdGgsIHZhbHVlLCBvYmplY3QpIHtcbiAgdmFyIHBhcnRzID0gX3V0aWxTcGxpdFBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG4gIHZhciB1cGRhdGVzID0gcGFydHMucmVkdWNlUmlnaHQocmVkdWNlUGF0aCwgdmFsdWUpO1xuXG4gIHJldHVybiBfdXBkYXRlM1snZGVmYXVsdCddKHVwZGF0ZXMsIG9iamVjdCk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IF91dGlsQ3VycnkyWydkZWZhdWx0J10odXBkYXRlSW4pO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdXBkZWVwL2Rpc3QvdXBkYXRlSW4uanNcbiAqKiBtb2R1bGUgaWQgPSAyNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMCAyIDNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF91cGRhdGUgPSByZXF1aXJlKCcuL3VwZGF0ZScpO1xuXG52YXIgX3VwZGF0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91cGRhdGUpO1xuXG52YXIgX3V0aWxDdXJyeSA9IHJlcXVpcmUoJy4vdXRpbC9jdXJyeScpO1xuXG52YXIgX3V0aWxDdXJyeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF91dGlsQ3VycnkpO1xuXG5mdW5jdGlvbiB3aXRoRGVmYXVsdChkZWZhdWx0VmFsdWUsIHVwZGF0ZXMsIG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gX3VwZGF0ZTJbJ2RlZmF1bHQnXSh1cGRhdGVzLCBkZWZhdWx0VmFsdWUpO1xuICB9XG5cbiAgcmV0dXJuIF91cGRhdGUyWydkZWZhdWx0J10odXBkYXRlcywgb2JqZWN0KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gX3V0aWxDdXJyeTJbJ2RlZmF1bHQnXSh3aXRoRGVmYXVsdCk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi91cGRlZXAvZGlzdC93aXRoRGVmYXVsdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwIDIgM1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=