webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _Demo5 = __webpack_require__(288);
	
	var _Demo52 = _interopRequireDefault(_Demo5);
	
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
	        _react2['default'].createElement(_Demo52['default'], null)
	      );
	    }
	  }]);
	
	  return App;
	})(_react.Component);
	
	_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('example'));

/***/ },

/***/ 288:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactImation = __webpack_require__(153);
	
	var _functionalEasing = __webpack_require__(173);
	
	var easeIn = (0, _reactImation.ease)(new _functionalEasing.Easer().using('in-cubic'));
	var easeOut = (0, _reactImation.ease)(new _functionalEasing.Easer().using('out-cubic'));
	
	var ballDiameter = 50;
	
	var containerStyle = {
	  position: 'relative',
	  width: '100vw',
	  height: '100vh'
	};
	
	var ballContainerStyle = {
	  position: 'absolute',
	  left: '50%',
	  top: 'calc(100vh - 450px)',
	  width: ballDiameter,
	  transform: 'translate(-50%, -50%)'
	};
	
	var Demo5 = (function (_Component) {
	  _inherits(Demo5, _Component);
	
	  function Demo5() {
	    _classCallCheck(this, Demo5);
	
	    _get(Object.getPrototypeOf(Demo5.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(Demo5, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { style: containerStyle },
	        _react2['default'].createElement(
	          'div',
	          { style: ballContainerStyle },
	          _react2['default'].createElement(
	            _reactImation.Timeline,
	            { loop: true, min: 0, max: 100, playOnMount: true },
	            function (_ref) {
	              var twn = _ref.tween;
	
	              var y = twn({
	                0: easeIn(0),
	                50: easeOut(400),
	                100: 0 });
	
	              return _react2['default'].createElement('div', {
	                style: {
	                  position: 'absolute',
	                  borderRadius: '50%',
	                  background: 'red',
	                  width: ballDiameter,
	                  height: ballDiameter + (0, _reactImation.tween)(y, { 0: 0, 370: 0, 400: -40 }),
	                  transform: 'translateY(' + y + 'px)'
	                } });
	            }
	          )
	        )
	      );
	    }
	  }]);
	
	  return Demo5;
	})(_react.Component);
	
	exports['default'] = Demo5;
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9kZW1vNS9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vZXhhbXBsZXMvZGVtbzUvRGVtbzUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBQStCLENBQU87Ozs7a0NBQ3BCLEdBQVM7Ozs7S0FFckIsR0FBRzthQUFILEdBQUc7O1lBQUgsR0FBRzsyQkFBSCxHQUFHOztnQ0FBSCxHQUFHOzs7Z0JBQUgsR0FBRzs7WUFDRCxrQkFBRztBQUNQLGNBQ0U7OztTQUNFOzthQUFHLElBQUksRUFBQyx5Q0FBeUM7V0FDL0M7QUFDRSxrQkFBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFHO0FBQzFFLGdCQUFHLEVBQUMsd05BQXdOO0FBQzVOLGdCQUFHLEVBQUMsbUJBQW1CO0FBQ3ZCLDZCQUFnQixFQUFDLHVFQUF1RSxHQUFHO1VBQUk7U0FDbkcsMERBQVM7UUFDTCxDQUNQO01BQ0Y7OztVQWJHLEdBQUc7OztBQWdCVCxvQkFBTSxNQUFNLENBQUMsaUNBQUMsR0FBRyxPQUFFLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0NuQnpCLENBQU87Ozs7eUNBQ0YsR0FBZTs7NkNBQy9CLEdBQW1COztBQUV2QyxLQUFNLE1BQU0sR0FBRyx3QkFBSyw2QkFBVyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQ25ELEtBQU0sT0FBTyxHQUFHLHdCQUFLLDZCQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7O0FBRXJELEtBQU0sWUFBWSxHQUFHLEVBQUUsQ0FBQzs7QUFFeEIsS0FBTSxjQUFjLEdBQUc7QUFDckIsV0FBUSxFQUFFLFVBQVU7QUFDcEIsUUFBSyxFQUFFLE9BQU87QUFDZCxTQUFNLEVBQUUsT0FBTztFQUNoQixDQUFDOztBQUVGLEtBQU0sa0JBQWtCLEdBQUc7QUFDekIsV0FBUSxFQUFFLFVBQVU7QUFDcEIsT0FBSSxFQUFFLEtBQUs7QUFDWCxNQUFHLEVBQUUscUJBQXFCO0FBQzFCLFFBQUssRUFBRSxZQUFZO0FBQ25CLFlBQVMsRUFBRSx1QkFBdUI7RUFDbkM7O0tBRW9CLEtBQUs7YUFBTCxLQUFLOztZQUFMLEtBQUs7MkJBQUwsS0FBSzs7Z0NBQUwsS0FBSzs7O2dCQUFMLEtBQUs7O1lBQ2xCLGtCQUFHO0FBQ1AsY0FDRTs7V0FBSyxLQUFLLEVBQUUsY0FBZTtTQUN6Qjs7YUFBSyxLQUFLLEVBQUUsa0JBQW1CO1dBQzdCOztlQUFVLElBQUksRUFBRSxJQUFLLEVBQUMsR0FBRyxFQUFFLENBQUUsRUFBQyxHQUFHLEVBQUUsR0FBSSxFQUFDLFdBQVcsRUFBRSxJQUFLO2FBQ3pELFVBQUMsSUFBVyxFQUFLO21CQUFULEdBQUcsR0FBVixJQUFXLENBQVYsS0FBSzs7QUFFTixtQkFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ1osa0JBQUMsRUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQ2QsbUJBQUUsRUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDO0FBQ2pCLG9CQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7QUFFWixzQkFBTztBQUNMLHNCQUFLLEVBQUU7QUFDTCwyQkFBUSxFQUFFLFVBQVU7QUFDcEIsK0JBQVksRUFBRSxLQUFLO0FBQ25CLDZCQUFVLEVBQUUsS0FBSztBQUNqQix3QkFBSyxFQUFFLFlBQVk7QUFDbkIseUJBQU0sRUFBRSxZQUFZLEdBQUcseUJBQU0sQ0FBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxHQUFHLEVBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO0FBQ3RELDRCQUFTLGtCQUFnQixDQUFDLFFBQUs7a0JBQy9CLEdBQUc7Y0FDUjtZQUFZO1VBQ1Q7UUFDRixDQUNQO01BQ0Y7OztVQTFCa0IsS0FBSzs7O3NCQUFMLEtBQUsiLCJmaWxlIjoiZGVtbzUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBEZW1vNCBmcm9tICcuL0RlbW81JztcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dpbGJveC9yZWFjdC1pbWF0aW9uXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3R5bGU9e3sgcG9zaXRpb246ICdhYnNvbHV0ZScsIHRvcDogMCwgcmlnaHQ6IDAsIGJvcmRlcjogMCwgekluZGV4OiAxMDAgfX1cbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vY2Ftby5naXRodWJ1c2VyY29udGVudC5jb20vZTdiYmIwNTIxYjM5N2VkYmQ1ZmU0M2U3Zjc2MDc1OTMzNmI1ZTA1Zi82ODc0NzQ3MDczM2EyZjJmNzMzMzJlNjE2ZDYxN2E2ZjZlNjE3NzczMmU2MzZmNmQyZjY3Njk3NDY4NzU2MjJmNzI2OTYyNjI2ZjZlNzMyZjY2NmY3MjZiNmQ2NTVmNzI2OTY3Njg3NDVmNjc3MjY1NjU2ZTVmMzAzMDM3MzIzMDMwMmU3MDZlNjdcIlxuICAgICAgICAgICAgYWx0PVwiRm9yayBtZSBvbiBHaXRIdWJcIlxuICAgICAgICAgICAgZGF0YUNhbm9uaWNhbFNyYz1cImh0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9naXRodWIvcmliYm9ucy9mb3JrbWVfcmlnaHRfZ3JlZW5fMDA3MjAwLnBuZ1wiIC8+PC9hPlxuICAgICAgICA8RGVtbzQgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdC5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZXhhbXBsZXMvZGVtbzUvYXBwLmpzXG4gKiovIiwiaW1wb3J0IFJlYWN0LCB7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1RpbWVsaW5lLCB0d2VlbiwgZWFzZX0gZnJvbSAncmVhY3QtaW1hdGlvbic7XG5pbXBvcnQge0Vhc2VyfSBmcm9tICdmdW5jdGlvbmFsLWVhc2luZyc7XG5cbmNvbnN0IGVhc2VJbiA9IGVhc2UobmV3IEVhc2VyKCkudXNpbmcoJ2luLWN1YmljJykpO1xuY29uc3QgZWFzZU91dCA9IGVhc2UobmV3IEVhc2VyKCkudXNpbmcoJ291dC1jdWJpYycpKTtcblxuY29uc3QgYmFsbERpYW1ldGVyID0gNTA7XG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgd2lkdGg6ICcxMDB2dycsXG4gIGhlaWdodDogJzEwMHZoJyxcbn07XG5cbmNvbnN0IGJhbGxDb250YWluZXJTdHlsZSA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGxlZnQ6ICc1MCUnLFxuICB0b3A6ICdjYWxjKDEwMHZoIC0gNDUwcHgpJyxcbiAgd2lkdGg6IGJhbGxEaWFtZXRlcixcbiAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJ1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZW1vNSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgICAgICA8ZGl2IHN0eWxlPXtiYWxsQ29udGFpbmVyU3R5bGV9PlxuICAgICAgICAgIDxUaW1lbGluZSBsb29wPXt0cnVlfSBtaW49ezB9IG1heD17MTAwfSBwbGF5T25Nb3VudD17dHJ1ZX0+XG4gICAgICAgICAgeyh7dHdlZW46dHdufSkgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCB5ID0gdHduKHtcbiAgICAgICAgICAgICAgMDogICBlYXNlSW4oMCksXG4gICAgICAgICAgICAgIDUwOiAgZWFzZU91dCg0MDApLFxuICAgICAgICAgICAgICAxMDA6IDAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiA8ZGl2XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAncmVkJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogYmFsbERpYW1ldGVyLFxuICAgICAgICAgICAgICAgIGhlaWdodDogYmFsbERpYW1ldGVyICsgdHdlZW4oeSwgezA6MCwgMzcwOjAsIDQwMDotNDB9KSxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7eX1weClgXG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgfX08L1RpbWVsaW5lPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9leGFtcGxlcy9kZW1vNS9EZW1vNS5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=