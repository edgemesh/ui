'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BaseSwitch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _keyCode = require('../../utils/keyCode');

var _keyCode2 = _interopRequireDefault(_keyCode);

var _TouchRipple = require('../ripple/TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseSwitch = exports.BaseSwitch = function BaseSwitch(ComposedComponent) {
	var _class, _temp;

	var options = {
		type: 'toggle'
	};

	if (ComposedComponent.options) options = ComposedComponent.options;

	return _temp = _class = function (_Component) {
		_inherits(_class, _Component);

		// React Lifecycle
		// 
		function _class(props) {
			_classCallCheck(this, _class);

			var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

			_this.state = {
				value: false,
				focused: false
			};
			_this.tabPressed = false;
			var defaultValue = props.defaultValue;

			if (defaultValue) _this.state.value = defaultValue;
			return _this;
		}

		_createClass(_class, [{
			key: 'render',
			value: function render() {
				var value = this.state.value;
				var _props = this.props;
				var size = _props.size;
				var disabled = _props.disabled;
				var label = _props.label;
				var labelPosition = _props.labelPosition;
				var labelStyle = _props.labelStyle;
				var disabledColor = _props.disabledColor;


				var labelDisabledStyle = {};

				if (disabled) labelDisabledStyle = { color: disabledColor };

				var labelComponent = _react2.default.createElement(
					'div',
					{ style: [styles.label, labelStyle, {
							lineHeight: size + 'px',
							paddingRight: labelPosition === 'left' ? 10 : 0,
							paddingLeft: labelPosition === 'right' ? 10 : 0
						}, labelDisabledStyle] },
					label
				);

				var passedProps = Object.assign({}, this.props, {
					getValue: this.getValue.bind(this),
					isDisabled: disabled
				});

				var events = {
					onClick: !disabled ? this._onClick.bind(this) : function () {},
					onMouseDown: !disabled ? this._onMouseDown.bind(this) : function () {},
					onMouseUp: !disabled ? this._onMouseUp.bind(this) : function () {},
					onMouseOver: !disabled ? this._onMouseOver.bind(this) : function () {},
					onMouseOut: !disabled ? this._onMouseOut.bind(this) : function () {},
					onBlur: !disabled ? this._onBlur.bind(this) : function () {},
					onFocus: !disabled ? this._onFocus.bind(this) : function () {},
					onKeyDown: !disabled ? this._onKeyDown.bind(this) : function () {},
					onKeyUp: !disabled ? this._onKeyUp.bind(this) : function () {}
				};

				var disabledStyles = {
					cursor: 'not-allowed'
				};

				return _react2.default.createElement(
					'div',
					_extends({ style: [styles.baseSwitch, disabled && disabledStyles] }, events, { tabIndex: disabled ? -1 : 0 }),
					labelPosition === 'left' && labelComponent,
					_react2.default.createElement(ComposedComponent, _extends({ ref: 'composed' }, passedProps)),
					labelPosition === 'right' && labelComponent
				);
			}

			// Action Methods
			//

		}, {
			key: 'setValue',
			value: function setValue(value) {
				this.setState({ value: value });
			}
		}, {
			key: 'getValue',
			value: function getValue() {
				return this.state.value;
			}
		}, {
			key: 'hasChanged',
			value: function hasChanged() {
				return this.props.defaultValue !== this.state.value;
			}
		}, {
			key: 'toggle',
			value: function toggle() {
				this.setState({ value: !this.state.value });
			}

			// Events
			//

		}, {
			key: '_onClick',
			value: function _onClick(e) {
				var value = this.props.value;


				switch (options.type) {
					case 'toggle':
						this.toggle();
						break;
					case 'radio':
						this.setValue(true);
						break;
				}

				if (this.tabPressed) {
					this.refs.composed.refs.ripple.endCenterRipple();
					this.tabPressed = false;
				}

				if (this.props.onClick) this.props.onClick(e);

				options.type === 'toggle' ? this._onToggle(e, !this.state.value) : function () {};

				e.stopPropagation();
			}
		}, {
			key: '_onKeyDown',
			value: function _onKeyDown(e) {
				if (e.keyCode == _keyCode2.default.ENTER) {
					this._onClick(e);
				}

				if (this.props.onKeyDown) this.props.onKeyDown(e);
			}
		}, {
			key: '_onKeyUp',
			value: function _onKeyUp(e) {
				if (e.keyCode == _keyCode2.default.SPACE) {
					this._onClick(e);
				}

				if (e.keyCode == _keyCode2.default.TAB) {
					this.tabPressed = true;
					this.refs.composed.refs.ripple.startCenterRipple();
				}
			}
		}, {
			key: '_onMouseDown',
			value: function _onMouseDown(e) {
				if (this.props.onMouseDown) this.props.onMouseDown(e);

				this.refs.composed.refs.ripple.startCenterRipple();
			}
		}, {
			key: '_onMouseUp',
			value: function _onMouseUp(e) {
				if (this.props.onMouseUp) this.props.onMouseUp(e);

				this.refs.composed.refs.ripple.endCenterRipple();
			}
		}, {
			key: '_onMouseOver',
			value: function _onMouseOver(e) {
				if (this.props.onMouseOver) this.props.onMouseOver(e);
			}
		}, {
			key: '_onMouseOut',
			value: function _onMouseOut(e) {
				if (this.props.onMouseOut) this.props.onMouseOut(e);
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
			key: '_onFocus',
			value: function _onFocus(e) {
				if (this.props.onFocus) this.props.onFocus(e);
			}
		}, {
			key: '_onToggle',
			value: function _onToggle(e) {
				if (this.props.onToggle) this.props.onToggle(e);
			}
		}]);

		return _class;
	}(_react.Component), _class.propTypes = {
		size: _react.PropTypes.number,
		label: _react.PropTypes.string,
		labelPosition: _react.PropTypes.oneOf(['left', 'right']),
		labelStyle: _react.PropTypes.object,

		// Booleans 
		defaultValue: _react.PropTypes.bool,
		disableFocusRipple: _react.PropTypes.bool,
		disableTouchRipple: _react.PropTypes.bool,
		required: _react.PropTypes.bool,
		disabled: _react.PropTypes.bool,
		radio: _react.PropTypes.bool // Needed so that RadioGroup can identify Radio elements
	}, _class.defaultProps = {
		size: 28,
		label: '',
		labelPosition: 'right',
		disabled: false,
		disabledColor: _colors.colors.grey400,
		radio: options.type === 'radio'
	}, _temp;
};

exports.default = BaseSwitch;


var styles = {
	// Base
	baseSwitch: {
		display: 'inline-flex',
		justifyContent: 'center',
		cursor: 'pointer',
		outline: 'none'
	},
	label: { userSelect: 'none', pointerEvents: 'none' }
};