'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _BaseTextField = require('./BaseTextField');

var _ = require('../../');

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextField = (0, _BaseTextField.BaseTextField)(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(TextField, _Component);

	function TextField() {
		_classCallCheck(this, TextField);

		return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
	}

	_createClass(TextField, [{
		key: 'componentWillMount',
		value: function componentWillMount(props) {}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _this2 = this;

			// This is needed to detect brwoser autocomplete/autofill 
			setTimeout(function () {
				var value = _this2.refs.input.value,
				    defaultValue = _this2.props.defaultValue;

				if (value !== defaultValue) {
					_this2.setState({ value: value });
				}
			}, 100);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var value = _props.value;
			var defaultValue = _props.defaultValue;
			var validate = _props.validate;
			var errorText = _props.errorText;
			var pushErrorText = _props.pushErrorText;
			var backgroundColor = _props.backgroundColor;
			var textColor = _props.textColor;
			var placeholderColor = _props.placeholderColor;
			var errorColor = _props.errorColor;
			var accentColor = _props.accentColor;
			var successColor = _props.successColor;
			var placeholder = _props.placeholder;
			var style = _props.style;
			var overline = _props.overline;
			var underline = _props.underline;
			var compact = _props.compact;
			var type = _props.type;
			var disabled = _props.disabled;
			var disabledTextColor = _props.disabledTextColor;
			var disabledBackgroundColor = _props.disabledBackgroundColor;
			var disabledPlaceholderColor = _props.disabledPlaceholderColor;
			var zIndex = _props.zIndex;
			var onKeyUp = _props.onKeyUp;
			var onKeyDown = _props.onKeyDown;
			var onInput = _props.onInput;
			var onKeyPress = _props.onKeyPress;
			var onFocus = _props.onFocus;
			var onBlur = _props.onBlur;
			var onEnter = _props.onEnter;
			var onEscape = _props.onEscape;
			var onTab = _props.onTab;


			var isFocused = this.props.isFocused(),
			    isValid = this.props.isValid(),
			    hasValue = this.hasValue(),
			    isError = errorText !== '';

			var line = _react2.default.createElement('div', { style: [styles.line, overline && styles.overline, underline && styles.underline, {
					backgroundColor: isError ? errorColor : validate && isValid ? successColor : disabled ? disabledBackgroundColor : accentColor,
					transform: 'scaleX(' + (isFocused || isError ? 1 : 0) + ')'
				}] });

			var lineHeight = compact ? 35 : 44;
			var yValue = lineHeight * -1;

			var floatingLabelColor = void 0;

			if (isFocused) {
				floatingLabelColor = !disabled ? accentColor : disabledPlaceholderColor;
			} else {
				if (hasValue) {
					floatingLabelColor = !disabled ? textColor : disabledPlaceholderColor;
				} else {
					floatingLabelColor = !disabled ? placeholderColor : disabledTextColor;
				}
			}

			var labelCoords = {
				x: hasValue || isFocused ? -10 : 0,
				y: hasValue || isFocused ? yValue : 0,
				scale: hasValue || isFocused ? 0.75 : 1
			};
			var floatingLabel = _react2.default.createElement(
				'div',
				{ style: [styles.floatingLabel, {
						color: floatingLabelColor,
						transform: 'scale(' + labelCoords.scale + ') translateX(' + labelCoords.x + 'px) translateY(' + labelCoords.y + 'px)',
						lineHeight: lineHeight + 'px'
					}, disabled && styles.disabled] },
				placeholder
			);

			var errorMessage = _react2.default.createElement(
				'div',
				{ style: [styles.errorMessage, !pushErrorText && styles.absolute, { height: isError ? 15 : 0 }] },
				_react2.default.createElement(
					'p',
					{ style: [styles.errorText, { color: errorColor }] },
					errorText
				)
			);

			var checkMark = _react2.default.createElement(
				'span',
				{ style: [styles.checkMark, {
						opacity: validate && isValid ? 1 : 0,
						transform: 'scale(' + (validate && isValid ? 1 : 0) + ')'
					}] },
				_react2.default.createElement(_.Icon, { icon: 'check', color: successColor, size: 14 })
			);

			var inputProps = {
				defaultValue: defaultValue,
				disabled: disabled,
				onKeyPress: onKeyPress,
				onKeyUp: onKeyUp,
				onKeyDown: onKeyDown,
				onInput: onInput,
				onFocus: onFocus,
				onBlur: onBlur,
				type: type
			};
			if (isFocused) inputProps.placeholder = placeholder;

			var inputPadding = underline ? compact ? styles.underlineCompactPadding : styles.underlinePadding : overline ? compact ? styles.overlineCompactPadding : styles.overlinePadding : 0;

			return _react2.default.createElement(
				'div',
				{ style: [!pushErrorText && styles.container, { marginTop: 20, position: 'relative' }, style] },
				_react2.default.createElement(_radium.Style, { rules: {
						'::-webkit-input-placeholder': {
							color: placeholderColor
						},
						':-moz-placeholder': {
							color: placeholderColor
						},
						'::-moz-placeholder': {
							color: placeholderColor
						},
						':-ms-input-placeholder': {
							color: placeholderColor
						}
					} }),
				_react2.default.createElement(
					_.Paper,
					{
						depth: isFocused ? 2 : 1,
						fullHeight: false,
						fullWidth: false,
						innerStyle: [styles.borderRadius, zIndex],
						zIndex: zIndex,
						style: [styles.paper, { backgroundColor: backgroundColor, zIndex: zIndex }, disabled && { backgroundColor: disabledBackgroundColor }] },
					this.props.floatingLabel && floatingLabel,
					_react2.default.createElement(
						'div',
						{ style: [styles.borderRadius, { overflow: 'hidden', position: 'relative', zIndex: 99 }] },
						overline && line,
						_react2.default.createElement(
							'div',
							{ style: { display: 'flex', position: 'relative' } },
							_react2.default.createElement('input', _extends({
								ref: 'input',
								autoComplete: this.props.autocomplete ? 'on' : 'off',
								placeholder: this.props.floatingLabel ? '' : this.props.placeholder,
								style: [styles.input, inputPadding, validate && isValid ? styles.paddingCheckMark : {}, { color: textColor }, disabled && { color: disabledTextColor, cursor: 'not-allowed' }]
							}, inputProps)),
							validate && _react2.default.createElement(
								'div',
								{ style: styles.checkContainer },
								checkMark
							)
						),
						underline && line
					)
				),
				errorMessage
			);
		}
	}, {
		key: 'hasValue',
		value: function hasValue() {
			return this.refs.input && this.refs.input.value || this.props.defaultValue && this.props.value;
		}
	}]);

	return TextField;
}(_react.Component), _class2.propTypes = {
	// Color styles
	accentColor: _react.PropTypes.string,
	errorColor: _react.PropTypes.string,
	successColor: _react.PropTypes.string,
	backgroundColor: _react.PropTypes.string,
	textColor: _react.PropTypes.string,
	placeholderColor: _react.PropTypes.string,
	// Disabled Styles
	disabledBackgroundColor: _react.PropTypes.string,
	disabledTextColor: _react.PropTypes.string,
	disabledPlaceholderColor: _react.PropTypes.string,
	// Config
	pushErrorText: _react.PropTypes.bool,
	underline: _react.PropTypes.bool,
	overline: _react.PropTypes.bool,
	compact: _react.PropTypes.bool,
	floatingLabel: _react.PropTypes.bool,
	autocomplete: _react.PropTypes.bool,
	zIndex: _react.PropTypes.number
}, _class2.defaultProps = {
	backgroundColor: _colors.colors.white,
	textColor: _colors.colors.grey800,
	placeholderColor: _colors.colors.grey400,
	accentColor: _colors.colors.cyan600,
	errorColor: _colors.colors.amber600,
	successColor: _colors.colors.lightGreen600,
	disabledTextColor: _colors.colors.grey500,
	disabledBackgroundColor: _colors.colors.grey400,
	disabledPlaceholderColor: _colors.colors.grey400,
	pushErrorText: true,
	underline: true,
	compact: false,
	overline: false,
	floatingLabel: true,
	autocomplete: true,
	zIndex: 999
}, _temp)) || _class) || _class;

exports.default = TextField;


var styles = {
	container: {
		marginBottom: 20,
		width: 200
	},
	paper: {
		borderRadius: 4,
		width: '100%'
	},
	input: {
		fontSize: 14,
		width: '100%',
		height: '100%',
		outline: 'none',
		border: 'none',
		boxSizing: 'border-box',
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		backgroundColor: 'transparent'
	},
	line: {
		width: '100%',
		height: 2,
		borderColor: _colors.colors.white,
		transition: 'background-color 0.3s ease-out, transform 0.3s ease-out',
		position: 'absolute',
		zIndex: 1
	},
	underline: {
		borderBottomLeftRadius: 2,
		borderBottomRightRadius: 2,
		bottom: 0
	},
	underlinePadding: {
		paddingTop: 12,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10
	},
	underlineCompactPadding: {
		paddingTop: 7,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 10
	},
	overline: {
		borderTopWidth: 1,
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		top: 0
	},
	overlinePadding: {
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 12,
		paddingLeft: 10
	},
	overlineCompactPadding: {
		padding: 5,
		paddingRight: 10,
		paddingBottom: 7,
		paddingLeft: 10
	},
	paddingCheckMark: {
		paddingRight: 30,
		marginRight: -20
	},
	containerWidthCheckMark: {
		width: 'calc(100% - 20px)'
	},
	borderRadius: { borderRadius: 4 },
	floatingLabel: {
		fontSize: 14,
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		width: 'auto',
		overflow: 'hidden',
		position: 'absolute',
		opacity: 1,
		paddingLeft: 10,
		paddingRight: 10,
		pointerEvents: 'none',
		transform: 'scale(1) translateX(0) translateY(0)',
		transformOrigin: 'left',
		transition: 'color 0.3s ease-out, transform 0.3s ease-out'
	},
	absolute: { position: 'absolute' },
	errorText: {
		margin: '4px 0',
		fontSize: 10,
		textAlign: 'left',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	},
	errorMessage: {
		transition: 'height 0.3s ease-out'
	},
	checkContainer: {
		width: 25,
		position: 'absolute',
		top: 'calc(50% - 12.5px)',
		right: 5,
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		flexDirection: 'column',
		borderTopRightRadius: 4,
		borderBottomRightRadius: 4
	},
	checkMark: {
		transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
	}
};