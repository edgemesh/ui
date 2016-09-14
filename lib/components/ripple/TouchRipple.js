'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../utils/colors');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _transitions = require('../../utils/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TouchRipple = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
	_inherits(TouchRipple, _Component);

	function TouchRipple() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, TouchRipple);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TouchRipple.__proto__ || Object.getPrototypeOf(TouchRipple)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			ripples: [],
			mouse: []
		}, _this.componentDimensions = {
			rippleWidth: 0,
			rect: {
				left: 0,
				top: 0
			},
			height: 0
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(TouchRipple, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			this._handleResize();
			this.resizeHandler = this._handleResize.bind(this);
			window.addEventListener('resize', this.resizeHandler);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			window.removeEventListener('resize', this.resizeHandler);
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props;
			var children = _props.children;
			var rippleColor = _props.rippleColor;
			var overflowHidden = _props.overflowHidden;
			var _state = this.state;
			var ripples = _state.ripples;
			var mouse = _state.mouse;


			var rippleTransitionTime = 800 + this.componentDimensions.rippleWidth / 10;

			return _react2.default.createElement(
				'div',
				{
					onMouseDown: this._handleMouseDown.bind(this),
					onMouseOut: this._handleMouseUp.bind(this),
					onMouseUp: this._handleMouseUp.bind(this),
					ref: 'ripple-container',
					style: [styles.rippleContainer, !overflowHidden && styles.overflowVisible] },
				_react2.default.createElement(_radium.Style, { rules: {
						'.touch-ripple-enter': {
							opacity: '0 !important',
							transform: 'scale(0) !important'
						},
						'.touch-ripple-enter-active': {
							opacity: '0.5 !important',
							transform: 'scale(0.85) !important'
						},
						'.touch-ripple-enter-leave': {
							opacity: '0.5 !important',
							transform: 'scale(0.85) !important'
						},
						'.touch-ripple-leave-active': {
							opacity: '0 !important',
							transform: 'scale(1) !important'
						}
					} }),
				_react2.default.createElement(
					_reactAddonsCssTransitionGroup2.default,
					{
						transitionName: 'touch-ripple',
						transitionEnterTimeout: 400,
						transitionLeaveTimeout: 400 },
					ripples.map(function (ripple, i) {
						var id = ripple.id;
						var x = ripple.x;
						var y = ripple.y;


						return _react2.default.createElement('div', {
							key: id,
							style: [styles.ripple, {
								width: _this2.componentDimensions.rippleWidth,
								height: _this2.componentDimensions.rippleWidth,
								background: rippleColor,
								left: x,
								top: y,
								transition: 'transform ' + rippleTransitionTime + 'ms ease-out, opacity ' + 400 + 'ms ease-out'

							}]
						});
					})
				),
				children
			);
		}

		//event handlers

	}, {
		key: '_handleMouseUp',
		value: function _handleMouseUp() {
			this.setState(function () {
				return {
					ripples: []
				};
			});
		}
	}, {
		key: '_handleMouseDown',
		value: function _handleMouseDown(_ref2) {
			var _this3 = this;

			var pageX = _ref2.pageX;
			var pageY = _ref2.pageY;

			if (!this.props.handleMouseDown) {
				(function () {
					// Current ripple key, needs to be unique
					var current = 'ripple-T' + Date.now();

					// Set Ripple Coords
					var rippleCoords = {
						x: pageX - _this3.componentDimensions.rippleWidth / 2 - _this3.componentDimensions.rect.left,
						y: pageY - _this3.componentDimensions.rippleWidth / 2 - _this3.componentDimensions.rect.top
					};

					// State changed queued instead of batched
					_this3.setState(function () {
						return { ripples: [{ id: current, x: rippleCoords.x, y: rippleCoords.y }] };
					});
				})();
			} else {
				this.props.handleMouseDown();
			}
		}
	}, {
		key: '_handleResize',
		value: function _handleResize() {
			var componentWidth = _reactDom2.default.findDOMNode(this.refs['ripple-container']).offsetWidth,
			    componentHeight = _reactDom2.default.findDOMNode(this.refs['ripple-container']).offsetHeight,
			    componentRect = _reactDom2.default.findDOMNode(this.refs['ripple-container']).getBoundingClientRect();

			this.componentDimensions = { rippleWidth: componentWidth * 2.5, rect: componentRect, height: componentHeight };
		}

		// Center Ripple

	}, {
		key: 'startCenterRipple',
		value: function startCenterRipple() {
			var current = 'ripple-T' + Date.now();

			var rippleCoords = {
				x: (this.componentDimensions.rippleWidth / 2 - this.componentDimensions.rippleWidth / 2.5 * 0.5) * -1,
				y: (this.componentDimensions.rippleWidth / 2 - this.componentDimensions.height * 0.5) * -1
			};

			this.setState(function () {
				return { ripples: [{ id: current, x: rippleCoords.x, y: rippleCoords.y }] };
			});
		}
	}, {
		key: 'endCenterRipple',
		value: function endCenterRipple() {
			this._handleMouseUp();
		}
	}]);

	return TouchRipple;
}(_react.Component), _class2.propTypes = {
	rippleColor: _react.PropTypes.string,
	overflowHidden: _react.PropTypes.bool,
	// Handler Overrides
	handleMouseDown: _react.PropTypes.func,
	handleMouseUp: _react.PropTypes.func
}, _class2.defaultProps = {
	rippleColor: _colors.colors.grey600,
	overflowHidden: true
}, _temp2)) || _class;

exports.default = TouchRipple;


var styles = {
	rippleContainer: {
		overflow: 'hidden',
		position: 'relative',
		height: '100%',
		width: '100%'
	},
	overflowVisible: {
		overflow: 'visible'
	},
	ripple: {
		opacity: 0.5,
		transform: 'scale(0.85)',
		borderRadius: '50%',
		position: 'absolute',
		pointerEvents: 'none',
		transformOrigin: 'center'
	}

};