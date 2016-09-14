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

var _reactDom = require('react-dom');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../utils/colors');

var _fuzzy = require('fuzzy');

var _fuzzy2 = _interopRequireDefault(_fuzzy);

var _ = require('../../');

var _AutocompleteSelector = require('./AutocompleteSelector');

var _AutocompleteSelector2 = _interopRequireDefault(_AutocompleteSelector);

var _keyCode = require('../../utils/keyCode');

var _keyCode2 = _interopRequireDefault(_keyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Autocomplete = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
	_inherits(Autocomplete, _Component);

	function Autocomplete() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Autocomplete);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			visible: _this._filterOptions(_this.props.entryValue, _this.props.options),
			entryValue: _this.props.defaultLabel ? _this.props.defaultLabel : _this.props.defaultValue ? _this._filterOptions(_this.props.defaultValue, _this.props.options, true)[0].label : '',
			selection: _this.props.defaultLabel ? _this._filterOptions(_this.props.defaultLabel, _this.props.options)[0] : _this.props.defaultValue ? _this._filterOptions(_this.props.defaultValue, _this.props.options, true)[0] : null,
			selectedValue: _this.props.defaultLabel ? _this._filterOptions(_this.props.defaultLabel, _this.props.options)[0] : _this.props.defaultValue ? _this._filterOptions(_this.props.defaultValue, _this.props.options, true)[0] : null,
			open: false
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Autocomplete, [{
		key: 'componentDidMount',
		value: function componentDidMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props;
			var placeholder = _props.placeholder;
			var floatingLabel = _props.floatingLabel;
			var accentColor = _props.accentColor;
			var optionValidate = _props.optionValidate;
			var openSelectorOnFocus = _props.openSelectorOnFocus;
			var selectorPosition = _props.selectorPosition;
			var selectorStyles = _props.selectorStyles;
			var textFieldStyles = _props.textFieldStyles;
			var maxSelectorHeight = _props.maxSelectorHeight;
			var hoverColor = _props.hoverColor;
			var errorColor = _props.errorColor;
			var open = this.state.open;


			var textFieldProps = {
				textFieldStyles: textFieldStyles
			};

			var selectorProps = {
				accentColor: accentColor,
				open: open,
				selectorStyles: selectorStyles,
				maxSelectorHeight: maxSelectorHeight,
				hoverColor: hoverColor
			};

			return _react2.default.createElement(
				'div',
				{ style: styles.container },
				_react2.default.createElement(_.TextField, _extends({}, this.props, textFieldProps, {
					ref: 'input',
					onKeyDown: this._handleKeyDown.bind(this),
					onInput: this._handleInput.bind(this),
					onFocus: this._handleFocus.bind(this),
					onBlur: this._handleBlur.bind(this),
					errorColor: errorColor,
					zIndex: 1002 })),
				_react2.default.createElement(_AutocompleteSelector2.default, _extends({ ref: 'selector' }, selectorProps, { options: this.state.visible, open: open, handleSelect: this._handleSelect.bind(this) }))
			);
		}

		/////////////////////
		// Public Methods  //
		/////////////////////


		// Getters

	}, {
		key: 'getSelectedValue',
		value: function getSelectedValue() {
			return this.state.selectedValue;
		}
	}, {
		key: 'getSelection',
		value: function getSelection() {
			return this.state.selection;
		}
	}, {
		key: 'getEntryValue',
		value: function getEntryValue() {
			return this.state.entryValue;
		}

		// Setters

	}, {
		key: 'setEntryValue',
		value: function setEntryValue(value) {
			var _this2 = this;

			var input = this.refs.input;


			input.setValue(value);

			setTimeout(function () {
				_this2._handleInput(value);
				_this2._handleSelect();
			});
		}
	}, {
		key: 'setErrorText',
		value: function setErrorText(text) {
			var input = this.refs.input;


			this.clear();

			setTimeout(function () {
				input.setErrorText(text);
			});
		}
	}, {
		key: 'clear',
		value: function clear() {
			var _this3 = this;

			var input = this.refs.input;


			input.setValue('');

			setTimeout(function () {
				_this3.setState({
					selection: null,
					selectedValue: null,
					entryValue: '',
					open: false
				});
			});
		}

		//////////////////////
		// Private Methods  //
		//////////////////////

	}, {
		key: '_filterOptions',
		value: function _filterOptions(value, list, returnValue) {
			var maxVisible = this.props.maxVisible;

			// when returnValue is true, return the value of the filtered options, 
			// instead of the label.

			var options = {
				extract: function extract(option) {
					return returnValue ? option.value : option.label;
				}
			};

			if (!value) return [];

			var results = _fuzzy2.default.filter(value, list, options).map(function (result) {
				return { label: result.string, value: result.original.value };
			});

			if (maxVisible) {
				results = results.slice(0, maxVisible);
			}

			return results;
		}

		/////////////////////
		// Event Handlers  //
		/////////////////////

	}, {
		key: '_handleFocus',
		value: function _handleFocus() {
			var options = this.props.options;
			var _refs = this.refs;
			var selector = _refs.selector;
			var input = _refs.input;


			if (input.getErrorText !== '') input.clearErrorText();

			if (this.state.entryValue == '') {
				this.setState({
					visible: options,
					selection: null,
					selectedValue: null,
					open: options.length > 0
				});
			} else {

				if (!this.state.selection) {
					var visible = this._filterOptions(this.state.entryValue, options);

					this.setState({
						visible: visible,
						open: visible.length > 0
					});
				}
			}

			selector.setSelectionIndex(null);
		}
	}, {
		key: '_handleInput',
		value: function _handleInput(e) {
			var _props2 = this.props;
			var options = _props2.options;
			var optionValidate = _props2.optionValidate;
			var _refs2 = this.refs;
			var selector = _refs2.selector;
			var input = _refs2.input;
			var entryValue = this.state.entryValue;

			var value = typeof e === 'string' ? e : e.target.value;
			var visible = this._filterOptions(value, options);

			visible = visible.length > 0 ? visible : value == '' ? options : [];

			this.setState({
				visible: visible,
				selection: null,
				selectedValue: null,
				entryValue: value,
				open: visible.length > 0
			});

			if (optionValidate && value != '' && visible.length == 0) {
				if (input.getErrorText() == '') input.setErrorText('You must select a valid option.');
			} else if (optionValidate && value != '' && visible.length > 0) {
				if (input.getErrorText() != '') input.clearErrorText();
			}

			selector.setSelectionIndex(null);
		}
	}, {
		key: '_handleSelect',
		value: function _handleSelect() {
			var onSelect = this.props.onSelect;
			var _refs3 = this.refs;
			var selector = _refs3.selector;
			var input = _refs3.input;


			if (selector.getSelectionIndex() !== null) {

				input.setValue(this.state.visible[selector.getSelectionIndex()].label);
				if (onSelect) onSelect(this.state.visible[selector.getSelectionIndex()]);

				this.setState({
					entryValue: this.state.visible[selector.getSelectionIndex()].label,
					selectedValue: this.state.visible[selector.getSelectionIndex()].value,
					selection: this.state.visible[selector.getSelectionIndex()],
					open: false
				});
			} else {

				if (this.state.visible.length) {

					input.setValue(this.state.visible[0].label);
					if (onSelect) onSelect(this.state.visible[0]);

					this.setState({
						entryValue: this.state.visible[0].label,
						selectedValue: this.state.visible[0].value.value,
						selection: this.state.visible[0],
						open: false
					});
				}
			}
		}
	}, {
		key: '_handleBlur',
		value: function _handleBlur(e) {
			var _state = this.state;
			var entryValue = _state.entryValue;
			var visible = _state.visible;
			var selection = _state.selection;


			if (entryValue !== '' && visible.length > 0 && !selection) {
				this._handleSelect();
			} else {
				this.setState({
					open: false
				});
			}
		}
	}, {
		key: '_handleKeyDown',
		value: function _handleKeyDown(e) {
			var selector = this.refs.selector;
			var open = this.state.open;


			switch (e.keyCode) {
				case _keyCode2.default.UP:
					if (open) selector.navUp();
					break;
				case _keyCode2.default.DOWN:
					if (open) {
						selector.navDown();
					} else {
						this._handleFocus();
					}
					break;
				case _keyCode2.default.ENTER:
					this._handleSelect();
					break;
				case _keyCode2.default.TAB:
					if (!this.state.selection) e.preventDefault();
					this._handleSelect();
					break;
				default:
					break;
			}
		}
	}]);

	return Autocomplete;
}(_react.Component), _class2.displayName = 'Autocomplete', _class2.propTypes = {
	// Config
	options: _react.PropTypes.array.isRequired, // [{label:'label', value:'value'}]
	maxVisible: _react.PropTypes.number, // Amount of visible results, 0 which is default value, will return all results.
	defaultLabel: _react.PropTypes.string,
	defaultValue: _react.PropTypes.string,
	placeholder: _react.PropTypes.string,
	floatingLabel: _react.PropTypes.string,
	optionValidate: _react.PropTypes.bool,
	openSelectorOnFocus: _react.PropTypes.bool,
	selectorPosition: _react.PropTypes.oneOf(['top', 'bottom']),
	// Styling
	accentColor: _react.PropTypes.string,
	textFieldStyles: _react.PropTypes.object,
	selectorStyles: _react.PropTypes.object,
	maxSelectorHeight: _react.PropTypes.number,
	errorColor: _react.PropTypes.string,
	hoverColor: _react.PropTypes.string,
	// Events
	onSelect: _react.PropTypes.func
}, _class2.defaultProps = {
	options: [],
	optionValidate: true,
	maxVisible: 0,
	accentColor: _colors.colors.cyan500,
	openSelectorOnFocus: true,
	selectorPosition: 'bottom'
}, _temp2)) || _class;

exports.default = Autocomplete;


var styles = {
	container: {
		width: '100%',
		position: 'relative'
	}
};