'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BaseTextField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _validator = require('validator');

var _validator2 = _interopRequireDefault(_validator);

var _keyCode = require('../../utils/keyCode');

var _keyCode2 = _interopRequireDefault(_keyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function isUndo(e) {
    return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? _keyCode2.default.Y : _keyCode2.default.Z);
}

function isRedo(e) {
    return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? _keyCode2.default.Z : _keyCode2.default.Y);
}

var BaseTextField = exports.BaseTextField = function BaseTextField(ComposedComponent) {
    var _class, _temp;

    return _temp = _class = function (_Component) {
        _inherits(_class, _Component);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this.state = {
                value: '',
                errorText: '',
                isFocused: false,
                isValid: false
            };
            _this.keyUpDelay = null;
            var defaultValue = props.defaultValue;


            if (defaultValue) _this.state.value = defaultValue;

            return _this;
        }

        // Public Methods


        // Instance Variables


        _createClass(_class, [{
            key: 'setValue',
            value: function setValue(value) {
                this._getInputNode().value = value;
                this._updateValue();
            }
        }, {
            key: 'setErrorText',
            value: function setErrorText(errorText) {
                this.setState({ errorText: errorText });
            }
        }, {
            key: 'clearErrorText',
            value: function clearErrorText() {
                this.setState({ errorText: '' });
            }
        }, {
            key: 'getValue',
            value: function getValue() {
                var stateValue = this.state.value,
                    domValue = this._getInputNode().value;

                if (stateValue !== domValue) {
                    if (process.env.NODE_ENV !== 'production') {
                        console.warn('DOM value and state value are out of sync.  ' + 'This is because you are calling \`TextField.getValue()\` ' + 'before your \`keyUpDelay\` resolved.  ' + 'You may use the returned DOM value, but it may not be validated by validator. ' + 'Otherwise, you may want to decrease your \`keyUpDelay\` timeout.');
                    }
                    return domValue;
                } else {
                    return stateValue;
                }
            }
        }, {
            key: 'getErrorText',
            value: function getErrorText() {
                return this.state.errorText;
            }
        }, {
            key: 'blur',
            value: function blur() {
                this._getInputNode().blur();
                this.setState({ isFocused: false });
            }
        }, {
            key: 'focus',
            value: function focus() {
                this._getInputNode().focus();
                this.setState({ isFocused: true });
            }
        }, {
            key: 'selectAll',
            value: function selectAll() {
                if (!this.isFocused()) this.focus();
                this._getInputNode().select();
            }
        }, {
            key: 'isFocused',
            value: function isFocused() {
                return this.state.isFocused;
            }
        }, {
            key: 'isValid',
            value: function isValid() {
                return this.state.isValid;
            }
        }, {
            key: 'hasChanged',
            value: function hasChanged() {
                if (!this.props.defaultValue && !this.getValue()) return false;
                return this.props.defaultValue !== this.getValue();
            }

            // Internal Methods

        }, {
            key: '_getInputNode',
            value: function _getInputNode() {
                if (!this.refs.composed || !this.refs.composed.refs.input) {
                    return console.error('Could not find input node.');
                }
                return this.refs.composed.refs.input;
            }
        }, {
            key: '_validateInput',
            value: function _validateInput(value) {
                var _props = this.props,
                    validate = _props.validate,
                    validateOptions = _props.validateOptions;


                switch (validate) {
                    case 'phone':
                        if (!validateOptions.locale) return console.error('Must provide `validateOptions.locale` to `phone` validator.');
                        return {
                            isValid: _validator2.default.isMobilePhone(value, validateOptions.locale),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid phone number.'
                        };
                    case 'credit-card':
                        return {
                            isValid: _validator2.default.isCreditCard(value),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid credit card number.'
                        };
                    case 'ip-address':
                        return {
                            isValid: _validator2.default.isIpAddress(value, validateOptions),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid ip address.'
                        };
                    case 'mac-address':
                        return {
                            isValid: _validator2.default.isMacAddress(value),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid mac address.'
                        };
                    case 'email':
                        return {
                            isValid: _validator2.default.isEmail(value, validateOptions),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid email address.'
                        };
                    case 'currency':
                        return {
                            isValid: _validator2.default.isCurrency(value, validateOptions),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid amount.'
                        };
                    case 'date':
                        return {
                            isValid: _validator2.default.isDate(value),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid date.'
                        };
                    case 'decimal':
                        return {
                            isValid: _validator2.default.isDecimal(value),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid decimal.'
                        };
                    case 'number':
                        return {
                            isValid: _validator2.default.isNumeric(value),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid number.'
                        };
                    case 'url':
                        return {
                            isValid: _validator2.default.isUrl(value, validateOptions),
                            error: validateOptions.error ? validateOptions.error : 'Not a valid url.'
                        };
                    case 'regex':
                        if (!validateOptions.pattern) return console.error('Must provide `validateOptions.pattern` to `match` validator.');
                        return {
                            isValid: _validator2.default.matches(value, validateOptions),
                            error: validateOptions.error ? validateOptions.error : 'This field does not match.'
                        };
                    case 'length':
                        if (!validateOptions.length) console.error('Must provide `validateOptions.length` to `length` validator.');
                        return {
                            isValid: _validator2.default.isLength(value, validateOptions),
                            error: validateOptions.error ? validateOptions.error : validateOptions.max ? 'Input must between ' + validateOptions.min + ' and ' + validateOptions.max + ' characters.' : 'Input must at least ' + validateOptions.min + ' characters.'
                        };
                    case 'isIn':
                        if (!validateOptions.whitelist) return console.error('Must provide `validateOptions.whitelist` to `isIn` validator.');
                        return {
                            isValid: _validator2.default.isIn(value, validateOptions.whitelist),
                            error: validateOptions.error ? validateOptions.error : 'Input must be one of \'' + validateOptions.whitelist.join(', ') + '\''
                        };
                    default:
                        return true;
                }
            }
        }, {
            key: '_updateValue',
            value: function _updateValue(value) {

                if (!value) return this.setState({ value: value, isValid: false });

                if (this.props.validate) {
                    var validate = this._validateInput(value),
                        isValid = validate.isValid,
                        errorText = !isValid ? validate.error : '';

                    if (this.props.defaultValue === value) isValid = false;

                    this.setState({ value: value, isValid: isValid, errorText: errorText });
                } else {
                    this.setState({ value: value });
                }
            }

            // Events

        }, {
            key: '_onKeyUp',
            value: function _onKeyUp(e) {
                var _this2 = this;

                var _props2 = this.props,
                    keyUpDelay = _props2.keyUpDelay,
                    onKeyUp = _props2.onKeyUp,
                    validate = _props2.validate;

                var value = e.target.value;

                // Keydown update delay
                if (keyUpDelay) {
                    if (this.keyUpDelay) clearTimeout(this.keyUpDelay);
                    this.keyUpDelay = setTimeout(function () {
                        _this2._updateValue(value);
                        if (onKeyUp) onKeyUp(e);
                    }, keyUpDelay);
                } else {
                    this._updateValue(value);
                    if (onKeyUp) onKeyUp(e);
                }
            }
        }, {
            key: '_onKeyDown',
            value: function _onKeyDown(e) {
                var onKeyDown = this.props.onKeyDown;

                if (onKeyDown) onKeyDown(e);
            }
        }, {
            key: '_onInput',
            value: function _onInput(e) {
                var onInput = this.props.onInput;

                if (onInput) onInput(e);
            }
        }, {
            key: '_onKeyPress',
            value: function _onKeyPress(e) {

                var code = e.charCode;

                switch (code) {
                    case _keyCode2.default.TAB:
                        return this._onTab(e);
                        break;
                    case _keyCode2.default.ENTER:
                        return this._onEnter(e);
                        break;
                    case _keyCode2.default.ESC:
                        return this._onEscape(e);
                        break;
                    default:

                }
            }
        }, {
            key: '_onEnter',
            value: function _onEnter(e) {
                var onEnter = this.props.onEnter;

                if (onEnter) onEnter(e);
            }
        }, {
            key: '_onEscape',
            value: function _onEscape(e) {
                var onEscape = this.props.onEscape;

                if (onEscape) onEscape(e);
            }
        }, {
            key: '_onTab',
            value: function _onTab(e) {
                var onTab = this.props.onTab;

                if (onTab) onTab(e);
            }
        }, {
            key: '_onFocus',
            value: function _onFocus(e) {
                var onFocus = this.props.onFocus;

                this.setState({ isFocused: true });
                if (onFocus) onFocus(e);
            }
        }, {
            key: '_onBlur',
            value: function _onBlur(e) {
                var onBlur = this.props.onBlur;

                this.setState({ isFocused: false });
                if (onBlur) onBlur(e);
            }

            // Render

        }, {
            key: 'render',
            value: function render() {
                var _state = this.state,
                    value = _state.value,
                    errorText = _state.errorText;
                var _props3 = this.props,
                    placeholder = _props3.placeholder,
                    defaultValue = _props3.defaultValue,
                    style = _props3.style,
                    type = _props3.type,
                    disabled = _props3.disabled,
                    disabledStyles = _props3.disabledStyles;


                var onKeyUp = this._onKeyUp.bind(this),
                    onKeyDown = this._onKeyDown.bind(this),
                    onInput = this._onInput.bind(this),
                    onKeyPress = this._onKeyPress.bind(this),
                    onEnter = this._onEnter.bind(this),
                    onEscape = this._onEscape.bind(this),
                    onTab = this._onTab.bind(this),
                    onFocus = this._onFocus.bind(this),
                    onBlur = this._onBlur.bind(this),
                    isFocused = this.isFocused.bind(this),
                    isValid = this.isValid.bind(this),
                    getValue = this.getValue.bind(this),
                    setValue = this.getValue.bind(this);

                var passedProps = Object.assign({}, this.props, {
                    value: value,
                    errorText: errorText,
                    defaultValue: defaultValue,
                    placeholder: placeholder,
                    style: style,
                    disabled: disabled,
                    disabledStyles: disabledStyles,
                    onKeyPress: onKeyPress,
                    onKeyUp: onKeyUp,
                    onEnter: onEnter,
                    onEscape: onEscape,
                    onTab: onTab,
                    onFocus: onFocus,
                    onBlur: onBlur,
                    isFocused: isFocused,
                    isValid: isValid,
                    getValue: getValue,
                    setValue: setValue,
                    type: type
                });

                return _react2.default.createElement(ComposedComponent, _extends({ ref: 'composed' }, passedProps));
            }
        }]);

        return _class;
    }(_react.Component), _class.displayName = 'BaseTextField', _class.propTypes = {
        // Configuration
        disabled: _propTypes2.default.bool,
        defaultValue: _propTypes2.default.string,
        placeholder: _propTypes2.default.string,
        keyUpDelay: _propTypes2.default.number,
        style: _propTypes2.default.object,
        // Events
        onKeyUp: _propTypes2.default.func,
        onKeyDown: _propTypes2.default.func,
        onInput: _propTypes2.default.func,
        onEnter: _propTypes2.default.func,
        onTab: _propTypes2.default.func,
        onEscape: _propTypes2.default.func,
        onBlur: _propTypes2.default.func,
        onFocus: _propTypes2.default.func,
        validateOptions: _propTypes2.default.object,
        type: _propTypes2.default.string,
        validate: _propTypes2.default.oneOf(['phone', 'credit-card', 'ip-address', 'mac-address', 'email', 'currency', 'date', 'decimal', 'number', 'url', 'regex', 'length', 'isIn'])
    }, _class.defaultProps = {
        validateOptions: {},
        keyUpDelay: 0,
        type: 'text',
        disabled: false,
        defaultValue: ''
    }, _temp;
};

exports.default = BaseTextField;