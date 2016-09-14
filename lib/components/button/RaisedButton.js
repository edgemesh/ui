'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _BaseButton = require('./BaseButton');

var _ = require('../../');

var _colors = require('../../utils/colors');

var _TouchRipple = require('../ripple/TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RaisedButton = (0, _radium2.default)(_class = (0, _BaseButton.BaseButton)(_class = (_temp2 = _class2 = function (_Component) {
	_inherits(RaisedButton, _Component);

	function RaisedButton() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, RaisedButton);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RaisedButton.__proto__ || Object.getPrototypeOf(RaisedButton)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			depth: 1
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(RaisedButton, [{
		key: '_handleMouseDown',


		//Event handlers
		value: function _handleMouseDown() {
			this.setState(function () {
				return {
					depth: 2
				};
			});
		}
	}, {
		key: '_handleMouseUp',
		value: function _handleMouseUp() {
			this.setState(function () {
				return {
					depth: 1
				};
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var depth = this.state.depth;
			var _props = this.props;
			var label = _props.label;
			var disabled = _props.disabled;
			var style = _props.style;
			var onClick = _props.onClick;
			var onBlur = _props.onBlur;
			var onKeyDown = _props.onKeyDown;
			var onKeyUp = _props.onKeyUp;
			var fullWidth = _props.fullWidth;
			var rippleColor = _props.rippleColor;
			var disabledStyle = _props.disabledStyle;
			var children = _props.children;
			var buttonStyles = _props.buttonStyles;
			var hoverColor = _props.hoverColor;


			var id = _uuid2.default.v1();

			var buttonProps = {
				label: label, disabled: disabled, style: style, onClick: onClick, onBlur: onBlur, onKeyDown: onKeyDown, onKeyUp: onKeyUp
			};

			return _react2.default.createElement(
				_.Paper,
				{ fullWidth: this.props.fullWidth, fullHeight: false, style: styles.paper, depth: depth },
				_react2.default.createElement(_radium.Style, { rules: _defineProperty({}, '.emui-button-hover-' + id + ':hover', {
						backgroundColor: hoverColor + ' !important'
					}) }),
				_react2.default.createElement(
					'div',
					{ style: styles.rippleContainer },
					_react2.default.createElement(
						_TouchRipple2.default,
						{ ref: 'ripple', rippleColor: rippleColor },
						_react2.default.createElement(
							'button',
							_extends({}, buttonProps, {
								className: !disabled && 'emui-button-hover-' + id,
								onMouseDown: this._handleMouseDown.bind(this),
								onMouseUp: this._handleMouseUp.bind(this),
								onMouseLeave: this._handleMouseUp.bind(this),
								style: [buttonStyles, styles.button, disabled ? disabledStyle : style] }),
							children ? children : label
						)
					)
				)
			);
		}
	}]);

	return RaisedButton;
}(_react.Component), _class2.propTypes = {
	hoverColor: _react.PropTypes.string,
	rippleColor: _react.PropTypes.string,
	label: _react.PropTypes.string
}, _class2.defaultProps = {
	hoverColor: _colors.colors.grey200
}, _temp2)) || _class) || _class;

exports.default = RaisedButton;


var styles = {
	button: {
		textAlign: 'center',
		fontSize: 14,
		borderRadius: 4,
		margin: 0 // needed for Safari -- because it likes to add margin to <button> elements
	},
	rippleContainer: {
		overflow: 'hidden',
		position: 'relative'
	},
	paper: {
		display: 'inline-block',
		borderRadius: 4,
		overflow: 'hidden'
	}
};