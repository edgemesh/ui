'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBlueprint = require('react-blueprint');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _ = require('../../');

var _colors = require('../../utils/colors');

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChipItem = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(ChipItem, _Component);

	function ChipItem() {
		_classCallCheck(this, ChipItem);

		return _possibleConstructorReturn(this, (ChipItem.__proto__ || Object.getPrototypeOf(ChipItem)).apply(this, arguments));
	}

	_createClass(ChipItem, [{
		key: 'render',


		////////////
		// Events //
		////////////

		value: function render() {
			var _React$createElement;

			var _props = this.props;
			var label = _props.label;
			var value = _props.value;
			var color = _props.color;
			var backgroundColor = _props.backgroundColor;


			return _react2.default.createElement(
				_.Paper,
				{ style: [styles.chipContainer, { margin: 5 }], innerStyle: { backgroundColor: backgroundColor } },
				_react2.default.createElement(
					'div',
					{ style: [styles.label, { color: color }] },
					label
				),
				_react2.default.createElement(
					'div',
					{ onClick: this._dismiss.bind(this) },
					_react2.default.createElement(
						_reactBlueprint.View,
						{ key: 'closeButton', style: styles.closeButton },
						_react2.default.createElement(_Icon2.default, (_React$createElement = {
							icon: 'close',
							color: color,
							size: 15
						}, _defineProperty(_React$createElement, 'color', _colors.colors.grey500), _defineProperty(_React$createElement, 'style', styles.close), _React$createElement))
					)
				)
			);
		}
	}, {
		key: '_dismiss',
		value: function _dismiss() {
			var _props2 = this.props;
			var value = _props2.value;
			var dismiss = _props2.dismiss;


			dismiss(value);
		}
	}]);

	return ChipItem;
}(_react.Component), _class2.propTypes = {
	color: _react.PropTypes.string.isRequired,
	backgroundColor: _react.PropTypes.string.isRequired,
	label: _react.PropTypes.string,
	value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number])
}, _temp)) || _class;

exports.default = ChipItem;


var styles = {
	chipContainer: {
		position: 'relative',
		height: 26,
		borderRadius: 15,
		overflow: 'hidden'
	},
	label: {
		textOverflow: 'ellipsis',
		position: 'relative',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		paddingLeft: 15,
		lineHeight: '16px',
		fontSize: 13,
		paddingRight: 35,
		paddingTop: 5,
		paddingBottom: 5
	},
	closeButton: {
		position: 'absolute',
		right: 2.5,
		top: 0,
		cursor: 'pointer',
		height: 26,
		width: 26,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.5,
		transition: 'opacity 200ms ease-out',
		':hover': {
			opacity: 1
		}
	}
};