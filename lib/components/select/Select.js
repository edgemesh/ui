'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBlueprint = require('react-blueprint');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../utils/colors');

var _Accordion = require('../accordion/Accordion');

var _Accordion2 = _interopRequireDefault(_Accordion);

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Paper = require('../paper/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var id = _uuid2.default.v1();

var Select = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            currentSelection: {},
            selectionIndex: null,
            isFocused: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Select, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                options = _props.options,
                defaultLabel = _props.defaultLabel,
                defaultValue = _props.defaultValue;


            var result = void 0;

            if (defaultLabel && defaultValue) {
                console.warn('You can\'t have both the "defaultLabel" and "defaultValue props defined, please choose one.');
                return;
            }

            if (defaultLabel) {
                result = options.filter(function (el) {
                    return el.label === defaultLabel;
                })[0];
            }

            if (defaultValue) {
                result = options.filter(function (el) {
                    return el.value === defaultValue;
                })[0];
            }

            if (result) {
                this.setState({
                    currentSelection: result
                });
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _props2 = this.props,
                options = _props2.options,
                defaultValue = _props2.defaultValue,
                defaultLabel = _props2.defaultLabel;

            if (nextProps.defaultValue !== defaultValue || nextProps.defaultLabel !== defaultLabel) {
                var currentSelection = options.find(function (option) {
                    return option.value === nextProps.defaultValue || option.label === nextProps.defaultLabel;
                });
                console.log(nextProps.defaultValue, nextProps.defaultLabel);
                var selectionIndex = options.findIndex(function (option) {
                    return option.value === nextProps.defaultValue || option.label === nextProps.defaultLabel;
                });

                if (!currentSelection) {
                    currentSelection = nextProps.options[0];
                };

                this.setState({
                    currentSelection: currentSelection,
                    selectionIndex: selectionIndex
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _ref2;

            var _props3 = this.props,
                placeholder = _props3.placeholder,
                disabled = _props3.disabled,
                accentColor = _props3.accentColor,
                hoverBackground = _props3.hoverBackground,
                placeholderColor = _props3.placeholderColor,
                textColor = _props3.textColor,
                fullWidth = _props3.fullWidth,
                style = _props3.style,
                placeholderStyle = _props3.placeholderStyle,
                dropdownContainerStyle = _props3.dropdownContainerStyle,
                disabledStyle = _props3.disabledStyle,
                minWidth = _props3.minWidth,
                maxWidth = _props3.maxWidth,
                floatingLabel = _props3.floatingLabel,
                backgroundColor = _props3.backgroundColor,
                floatingLabelColor = _props3.floatingLabelColor,
                disabledTextColor = _props3.disabledTextColor,
                disabledPlaceholderColor = _props3.disabledPlaceholderColor,
                disabledBackground = _props3.disabledBackground;
            var _state = this.state,
                currentSelection = _state.currentSelection,
                isFocused = _state.isFocused;


            var hasValue = Object.keys(currentSelection).length ? true : false;

            var _textColor = !disabled ? textColor : disabledTextColor;
            var _placeholderColor = !disabled ? placeholderColor : disabledPlaceholderColor;

            var placeholderStyles = {
                color: hasValue ? _textColor : _placeholderColor,
                fill: hasValue ? _textColor : _placeholderColor,
                maxWidth: fullWidth ? undefined : maxWidth,
                minWidth: minWidth
            };

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
                x: hasValue ? -10 : 0,
                y: hasValue ? 'calc(-100% - 10px)' : 0,
                scale: hasValue ? 0.75 : 1
            };

            var floatingLabelRender = _react2.default.createElement(
                'div',
                { style: [styles.floatingLabel, {
                        visibility: hasValue ? 'visible' : 'hidden',
                        color: floatingLabelColor,
                        transform: 'scale(' + labelCoords.scale + ') translateX(' + labelCoords.x + 'px) translateY(' + labelCoords.y + ')'
                    }, disabled && styles.disabled] },
                placeholder
            );

            var floatingLabelMargin = { marginTop: 20 };

            var wrapperBackground = {
                backgroundColor: !disabled ? backgroundColor : disabledBackground
            };

            return _react2.default.createElement(
                'div',
                { style: [styles.container, floatingLabel ? floatingLabelMargin : {}, fullWidth ? styles.fullWidth : {}, { cursor: !disabled ? 'pointer' : 'not-allowed' }, style] },
                _react2.default.createElement(_radium.Style, { rules: (_ref2 = {}, _defineProperty(_ref2, '.emui-hover-' + id + ':hover', {
                        color: accentColor + ' !important',
                        fill: accentColor + ' !important',
                        backgroundColor: hoverBackground + ' !important'

                    }), _defineProperty(_ref2, '.emui-hover-option-' + id + ':hover', {
                        color: accentColor + ' !important',
                        fill: accentColor + ' !important',
                        backgroundColor: hoverBackground + ' !important'
                    }), _ref2) }),
                _react2.default.createElement(
                    'div',
                    {
                        tabIndex: 0,
                        onFocus: this._handleFocus.bind(this),
                        onClick: !disabled ? this._handleDropDown.bind(this) : function () {},
                        onBlur: this._handleBlur.bind(this),
                        style: { outline: 'none' } },
                    floatingLabel ? floatingLabelRender : null,
                    _react2.default.createElement(
                        _Paper2.default,
                        { style: styles.placeholderWrapper, innerStyle: [styles.placeholderWrapper, wrapperBackground, disabledStyle] },
                        _react2.default.createElement(
                            _reactBlueprint.View,
                            {
                                className: !disabled ? 'emui-hover-' + id : '',
                                style: [styles.placeholderContainer, placeholderStyles, placeholderStyle] },
                            _react2.default.createElement(
                                'div',
                                { style: styles.placeholder },
                                Object.keys(currentSelection).length ? currentSelection.label : placeholder
                            ),
                            _react2.default.createElement(_Icon2.default, { icon: 'expand-more', size: 20, style: styles.dropDownIcon })
                        )
                    ),
                    _react2.default.createElement(
                        _Paper2.default,
                        {
                            depth: 2,
                            style: [styles.dropdownContainer, this._getAlignment(), dropdownContainerStyle] },
                        _react2.default.createElement(_Accordion2.default, { ref: 'dropdown', expandContent: this._renderOptions() })
                    )
                )
            );
        }
    }, {
        key: 'getSelectedValue',
        value: function getSelectedValue() {
            return this.state.currentSelection.value;
        }

        /////////////////////
        // Private Methods //
        /////////////////////

    }, {
        key: '_handleFocus',
        value: function _handleFocus() {
            this.setState({
                isFocused: true
            });
        }
    }, {
        key: '_handleBlur',
        value: function _handleBlur() {
            this.refs.dropdown.expandContent(false);
            this.setState({
                isFocused: false
            });
        }
    }, {
        key: '_handleDropDown',
        value: function _handleDropDown() {

            this.refs.dropdown.toggleExpandContent();
        }
    }, {
        key: '_handleSelect',
        value: function _handleSelect(option, i) {
            var onSelect = this.props.onSelect;


            this._handleDropDown();

            if (onSelect) {
                this.props.onSelect(option);
            }

            this.setState({
                currentSelection: option,
                selectionIndex: i
            });
        }
    }, {
        key: '_renderOptions',
        value: function _renderOptions() {
            var _this2 = this;

            var _props4 = this.props,
                options = _props4.options,
                optionContainerStyle = _props4.optionContainerStyle,
                maxSelectorHeight = _props4.maxSelectorHeight,
                defaultLabel = _props4.defaultLabel,
                defaultValue = _props4.defaultValue;
            var _state2 = this.state,
                selectionIndex = _state2.selectionIndex,
                currentSelection = _state2.currentSelection;


            var maxHeight = {
                maxHeight: maxSelectorHeight
            };

            var renderedOptions = options.map(function (option, i) {

                if (i === selectionIndex || option.label === defaultLabel && defaultLabel === currentSelection.label || option.value === defaultValue && defaultValue === currentSelection.value) {
                    return;
                };

                return _react2.default.createElement(
                    'li',
                    { className: 'emui-hover-option-' + id, key: i, onClick: _this2._handleSelect.bind(_this2, option, i), style: styles.option },
                    option.content ? option.content : option.label
                );
            });

            return _react2.default.createElement(
                'ul',
                { style: [styles.optionsContainer, maxHeight, optionContainerStyle] },
                renderedOptions
            );
        }
    }, {
        key: '_getAlignment',
        value: function _getAlignment() {
            var alignSelector = this.props.alignSelector;


            var selectorAlignment = {};

            switch (alignSelector) {
                case 'left':
                    selectorAlignment = styles.alignSelectorLeft;
                    break;
                case 'right':
                    selectorAlignment = styles.alignSelectorRight;
                    break;
                case 'center':
                    selectorAlignment = styles.alignSelectorCenter;
                    break;

                default:
                    selectorAlignment = styles.alignSelectorleft;
            }

            return selectorAlignment;
        }
    }]);

    return Select;
}(_react.Component), _class2.propTypes = {
    // Config
    options: _propTypes2.default.array,
    placeholder: _propTypes2.default.string,
    defaultLabel: _propTypes2.default.string,
    defaultValue: _propTypes2.default.string,
    disabled: _propTypes2.default.bool,
    floatingLabel: _propTypes2.default.bool,

    // Events
    onSelect: _propTypes2.default.func,

    // Styling
    accentColor: _propTypes2.default.string,
    hoverBackground: _propTypes2.default.string,
    floatingLabelColor: _propTypes2.default.string,
    backgroundColor: _propTypes2.default.string,
    placeholderColor: _propTypes2.default.string,
    textColor: _propTypes2.default.string,
    alignSelector: _propTypes2.default.oneOf(['left', 'right', 'center']),
    fullWidth: _propTypes2.default.bool,
    maxSelectorHeight: _propTypes2.default.number,
    minWidth: _propTypes2.default.number,
    maxWidth: _propTypes2.default.number,

    // Disabled state styling
    disabledTextColor: _propTypes2.default.string,
    disabledPlaceholderColor: _propTypes2.default.string,
    disabledBackground: _propTypes2.default.string,

    // Custom Style
    style: _propTypes2.default.object,
    placeholderStyle: _propTypes2.default.object,
    dropdownContainerStyle: _propTypes2.default.object,
    optionContainerStyle: _propTypes2.default.object,
    disabledStyle: _propTypes2.default.object
}, _class2.defaultProps = {
    accentColor: _colors.colors.cyan500,
    floatingLabelColor: _colors.colors.cyan500,
    backgroundColor: 'white',
    floatingLabel: true,
    hoverBackground: _colors.colors.grey100,
    placeholderColor: _colors.colors.grey500,
    textColor: _colors.colors.grey700,
    alignSelector: 'left',
    fullWidth: false,
    disabled: false,
    minWidth: 200,
    maxWidth: 300,
    disabledTextColor: _colors.colors.grey500,
    disabledPlaceholderColor: _colors.colors.grey400,
    disabledBackground: _colors.colors.grey200,
    maxSelectorHeight: 200

}, _temp2)) || _class;

exports.default = Select;


var styles = {
    container: {
        position: 'relative',
        width: 'auto',
        display: 'table',
        zIndex: 1010
    },
    placeholderWrapper: {
        borderRadius: 4,
        overflow: 'hidden'
    },
    placeholderContainer: {
        justifyContent: 'space-between',
        padding: 10
    },
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
    placeholder: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 'auto',
        overflow: 'hidden'
    },
    dropdownContainer: {
        position: 'absolute',
        top: 'calc(100% + 5px)',
        height: 'auto',
        width: 'auto',
        backgroundColor: 'white',
        minWidth: '100%'
    },
    option: {
        listStyleType: 'none',
        paddingTop: 2.5,
        paddingBottom: 2.5,
        paddingLeft: 20,
        paddingRight: 20,
        whiteSpace: 'nowrap'
    },
    dropDownIcon: {
        marginLeft: 10,
        fill: 'inherit'
    },
    optionsContainer: {
        paddingLeft: 0,
        overflowY: 'scroll'
    },

    // utility
    alignLeft: {
        justifyContent: 'flex-start'
    },
    alignRight: {
        justifyContent: 'flex-end'
    },
    alignCenter: {
        justifyContent: 'center'
    },
    alignSelectorLeft: {
        left: 0,
        minWidth: '100%'
    },
    alignSelectorRight: {
        right: 0,
        minWidth: '100%'
    },
    alignSelectorCenter: {
        left: '50%',
        transform: 'translateX(-50%)'
    },
    fullWidth: {
        width: '100%'
    }
};