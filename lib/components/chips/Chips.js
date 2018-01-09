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

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactBlueprint = require('react-blueprint');

var _colors = require('../../utils/colors');

var _ChipItem = require('./ChipItem');

var _ChipItem2 = _interopRequireDefault(_ChipItem);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _transitions = require('../../utils/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var transitionSpeed = 300;

var Chips = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
	_inherits(Chips, _Component);

	function Chips() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Chips);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Chips.__proto__ || Object.getPrototypeOf(Chips)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			chips: _this.props.defaultChips
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Chips, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var chips = this.state.chips;
			var _props = this.props,
			    chipFontColor = _props.chipFontColor,
			    chipBackgroundColor = _props.chipBackgroundColor,
			    transition = _props.transition,
			    style = _props.style,
			    column = _props.column;


			if (chips.length > 0) {
				chips = chips.map(function (item, i) {
					return _react2.default.createElement(_ChipItem2.default, {
						key: item.value,
						label: item.label,
						value: item.value,
						dismiss: _this2.removeChip.bind(_this2),
						color: chipFontColor,
						backgroundColor: chipBackgroundColor
					});
				});
			}

			return _react2.default.createElement(
				'div',
				{ style: style },
				_react2.default.createElement(
					_reactAddonsCssTransitionGroup2.default,
					{
						style: column ? styles.chipsColumnsContainer : styles.chipsRowContainer,
						transitionAppear: true,
						transitionName: transition,
						transitionEnterTimeout: transitionSpeed,
						transitionLeaveTimeout: transitionSpeed,
						transitionAppearTimeout: transitionSpeed },
					_react2.default.createElement(_radium.Style, { rules: _transitions2.default[transition] }),
					chips
				)
			);
		}

		////////////////////
		// Public Methods //
		////////////////////

	}, {
		key: 'addChip',
		value: function addChip(chip) {
			var chips = this.state.chips;

			var chipArray = chips.slice(0); // Clone chip array

			if (chip.label && chip.value) {

				chipArray.push(chip);

				this.setState({
					chips: chipArray
				});
			} else {
				console.warn('You must provide a \'label\' and \'value\' for this chip, a chip is not valid unless it has both label and value.');
			}

			// trigger events
			this._onAdd(chipArray);
			this._onChange(chipArray);
		}
	}, {
		key: 'removeChip',
		value: function removeChip(value) {
			var chips = this.state.chips;

			var chipArray = chips.slice(0); // Clone chip array

			chips.some(function (item, i) {
				if (item.value === value) {
					chipArray.splice(i, 1);

					return true;
				}
			});

			this.setState({
				chips: chipArray
			});

			// trigger events
			this._onRemove(chipArray);
			this._onChange(chipArray);
		}
	}, {
		key: 'getValue',
		value: function getValue() {
			return this.state.chips;
		}
	}, {
		key: 'setValue',
		value: function setValue(chips) {
			this.setState({ chips: chips });
		}

		/////////////
		// Events  //
		/////////////

	}, {
		key: '_onAdd',
		value: function _onAdd(newValue) {
			if (this.props.onAdd) this.props.onAdd(newValue);
		}
	}, {
		key: '_onRemove',
		value: function _onRemove(newValue) {
			if (this.props.onRemove) this.props.onRemove(newValue);
		}
	}, {
		key: '_onChange',
		value: function _onChange(newValue) {
			if (this.props.onChange) this.props.onChange(newValue);
		}
	}]);

	return Chips;
}(_react.Component), _class2.propTypes = {
	// Chips configuration
	defaultChips: _propTypes2.default.array,
	column: _propTypes2.default.bool,
	// ChipItem configuration
	chipBackgroundColor: _propTypes2.default.string,
	chipFontColor: _propTypes2.default.string,
	// Events
	onAdd: _propTypes2.default.func,
	onRemove: _propTypes2.default.func,
	onChange: _propTypes2.default.func
}, _class2.defaultProps = {
	defaultChips: [],
	chipBackgroundColor: _colors.colors.grey200,
	chipFontColor: _colors.colors.grey700,
	transition: 'scale-in'
}, _temp2)) || _class;

exports.default = Chips;


var styles = {
	chipsRowContainer: {
		perspective: 2000,
		marginLeft: -5,
		marginRight: -5,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%'
	},
	chipsColumnsContainer: {
		perspective: 2000,
		marginLeft: -5,
		marginRight: -5,
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		height: '100%'
	}
};