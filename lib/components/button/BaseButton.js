'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BaseButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ = require('../../');

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var KEYCODE = {
	ENTER: 13,
	SPACE: 32,
	TAB: 9
};

var BaseButton = exports.BaseButton = function BaseButton(ComposedComponent, ref) {
	var _class, _temp2;

	return _temp2 = _class = function (_Component) {
		_inherits(_class, _Component);

		function _class() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, _class);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.tabPressed = false, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(_class, [{
			key: '_onClick',


			// Events
			value: function _onClick(e) {
				var onClick = this.props.onClick;


				if (this.tabPressed) {
					this.refs.composed.refs.ripple.endCenterRipple();
					this.tabPressed = false;
				}

				if (onClick) onClick(e);
			}
		}, {
			key: '_onFocus',
			value: function _onFocus(e) {
				var onFocus = this.props.onFocus;


				if (onFocus) onFocus(e);
			}
		}, {
			key: '_onBlur',
			value: function _onBlur(e) {
				var onBlur = this.props.onBlur;


				if (this.tabPressed) {
					this.refs.composed.refs.ripple.endCenterRipple();
					this.tabPressed = false;
				}

				if (onBlur) onBlur(e);
			}
		}, {
			key: '_onKeyDown',
			value: function _onKeyDown(e) {
				if (e.keyCode == KEYCODE.ENTER) {
					this._onClick(e);
				}
			}
		}, {
			key: '_onKeyUp',
			value: function _onKeyUp(e) {
				if (e.keyCode == KEYCODE.SPACE) {
					this._onClick(e);
				}

				if (e.keyCode == KEYCODE.TAB) {
					this.tabPressed = true;
					this.refs.composed.refs.ripple.startCenterRipple();
				}
			}

			// Render

		}, {
			key: 'render',
			value: function render() {
				var _props = this.props,
				    style = _props.style,
				    disabled = _props.disabled,
				    fullWidth = _props.fullWidth,
				    hoverColor = _props.hoverColor,
				    disabledStyle = _props.disabledStyle;


				var onClick = !disabled ? this._onClick.bind(this) : function () {},
				    onFocus = !disabled ? this._onFocus.bind(this) : function () {},
				    onBlur = !disabled ? this._onBlur.bind(this) : function () {},
				    onKeyDown = !disabled ? this._onKeyDown.bind(this) : function () {},
				    onKeyUp = !disabled ? this._onKeyUp.bind(this) : function () {};

				var buttonStyles = [fullWidth && styles.fullWidth, styles.button, !disabled && style, disabled && styles.disabled, disabled && styles.disabledStyle];

				var buttonProps = Object.assign({}, this.props, {
					disabled: disabled,
					onClick: onClick,
					onFocus: onFocus,
					onBlur: onBlur,
					onKeyUp: onKeyUp,
					onKeyDown: onKeyDown,
					buttonStyles: buttonStyles
				});

				return _react2.default.createElement(ComposedComponent, _extends({ ref: 'composed' }, buttonProps));
			}
		}]);

		return _class;
	}(_react.Component), _class.displayName = 'BaseButton', _class.propTypes = {
		// Configuration
		style: _propTypes2.default.object,
		disabledStyle: _propTypes2.default.object,
		disabled: _propTypes2.default.bool,
		fullWidth: _propTypes2.default.bool,
		hoverColor: _propTypes2.default.string,
		// Events
		onClick: _propTypes2.default.func,
		onBlur: _propTypes2.default.func,
		onFocus: _propTypes2.default.func
	}, _temp2;
};

exports.default = BaseButton;


var styles = {
	button: {
		backgroundColor: _colors.colors.grey300,
		padding: 10,
		border: 0,
		cursor: 'pointer',
		color: _colors.colors.grey700
	},
	disabled: {
		backgroundColor: _colors.colors.grey400,
		cursor: 'initial',
		color: _colors.colors.grey500
	},
	fullWidth: {
		width: '100%'
	}
};