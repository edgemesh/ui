'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _ = require('../../');

var _colors = require('../../utils/colors');

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioGroup = (_temp = _class = function (_Component) {
	_inherits(RadioGroup, _Component);

	function RadioGroup(props) {
		_classCallCheck(this, RadioGroup);

		var _this = _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).call(this, props));

		_this.switchedRadios = 0;
		_this.state = {};

		if (props.defaultValue) _this.state.value = props.defaultValue;
		return _this;
	}

	_createClass(RadioGroup, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			var i = 0;

			_react2.default.Children.forEach(this.props.children, function (child) {
				if (child.props.radio) {
					if (_this2._hasCheckAttribute(child)) i++;
				}
			});

			this.switchedRadios = i;
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (nextProps.hasOwnProperty('value')) {
				this._updateRadios(nextProps.value);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this3 = this;

			var _props = this.props,
			    children = _props.children,
			    style = _props.style;

			// Iterate through the children, for every child return a radio

			var radios = void 0;

			if (children) {
				radios = _react2.default.Children.map(children, function (child) {
					if (child.props && child.props.radio) {
						var _child$props = child.props,
						    name = _child$props.name,
						    value = _child$props.value,
						    label = _child$props.label,
						    labelPosition = _child$props.labelPosition,
						    onCheck = _child$props.onCheck;


						return _react2.default.createElement(_Radio2.default, _extends({}, child.props, {
							ref: 'radio-' + child.props.value,
							key: 'radio-' + child.props.value,
							value: child.props.value,
							label: child.props.label,
							labelPosition: labelPosition,
							onClick: _this3._onChange.bind(_this3, child.props.value),
							switched: child.props.value == _this3.state.value }));
					} else {
						// Iterate through descendants, to see if there are any radios
						return _this3._checkDescendants(child);
					}
				});
			}

			return _react2.default.createElement(
				'div',
				{ style: style },
				radios
			);
		}

		// Events
		//

	}, {
		key: '_onChange',
		value: function _onChange(selection, e) {
			var _this4 = this;

			this._updateRadios(selection);

			// On a successfull click
			if (this.switchedRadios == 0) {
				setTimeout(function () {
					if (_this4.props.onChange) _this4.props.onChange(e, selection);
				});
			}
		}

		// Private Methods
		//

	}, {
		key: '_checkDescendants',
		value: function _checkDescendants(component) {
			var _this5 = this;

			var labelPosition = this.props.labelPosition;


			return _react2.default.Children.map(component, function (child) {
				// If any descendants are Radio's apply RadioGroup props to them
				if (child.props && child.props.radio) {
					return _react2.default.cloneElement(child, {
						onClick: _this5._onChange.bind(_this5, child.props.value),
						switched: child.props.value == _this5.state.value,
						labelPosition: child.props.labelPosition
					});
					// If descendant is not a Radio, recursively keep checking all the way down
				} else {
					if (_react2.default.Children.count(child) !== 0 && child.props !== undefined) {
						return _react2.default.cloneElement(child, {}, _this5._checkDescendants(child.props.children));
					} else {
						return child;
					}
				}
			});
		}
	}, {
		key: '_updateRadios',
		value: function _updateRadios(selection) {
			if (this.switchedRadios === 0) {
				this.setState({
					value: selection
				});
			} else if (process.NODE_ENV !== 'production') {
				var message = 'Cannot select a different radio button while another radio button has the \'switched\' property set to true.';
				console.error(message);
			}
		}
	}, {
		key: '_hasCheckAttribute',
		value: function _hasCheckAttribute(radio) {
			return radio.props.hasOwnProperty('switched') && radio.props.switched;
		}

		// Public Methods
		//

	}, {
		key: 'getValue',
		value: function getValue() {
			return this.state.value;
		}
	}, {
		key: 'setValue',
		value: function setValue(selection) {
			this._updateRadios(selection);
		}
	}, {
		key: 'getDefaultValue',
		value: function getDefaultValue() {
			return this.props.defaultValue;
		}
	}, {
		key: 'clearValue',
		value: function clearValue() {
			this.setValue('');
		}
	}, {
		key: 'hasChanged',
		value: function hasChanged() {
			return this.props.defaultValue !== this.state.value;
		}
	}]);

	return RadioGroup;
}(_react.Component), _class.propTypes = {
	value: _propTypes2.default.string,
	defaultValue: _propTypes2.default.string,
	labelPosition: _propTypes2.default.oneOf(['left', 'right']),
	onChange: _propTypes2.default.func
}, _temp);
exports.default = RadioGroup;
;