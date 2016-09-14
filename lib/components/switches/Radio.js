'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _BaseSwitch = require('./BaseSwitch');

var _BaseSwitch2 = _interopRequireDefault(_BaseSwitch);

var _TouchRipple = require('../ripple/TouchRipple');

var _TouchRipple2 = _interopRequireDefault(_TouchRipple);

var _ = require('../../');

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Radio = (0, _radium2.default)(_class = (0, _BaseSwitch2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(Radio, _Component);

	function Radio() {
		_classCallCheck(this, Radio);

		return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
	}

	_createClass(Radio, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var size = _props.size;
			var outlineColor = _props.outlineColor;
			var disabledColor = _props.disabledColor;
			var switchColor = _props.switchColor;
			var getValue = _props.getValue;
			var isDisabled = _props.isDisabled;
			var switched = _props.switched;


			var isSwitched = switched;

			// Apply disabled color if neccesary
			switchColor = isDisabled ? disabledColor : switchColor;
			outlineColor = isDisabled ? disabledColor : outlineColor;

			return _react2.default.createElement(
				'div',
				{ style: { width: size, height: size, cursor: isDisabled ? 'not-allowed' : 'pointer' } },
				_react2.default.createElement(
					_TouchRipple2.default,
					{ ref: 'ripple', handleMouseDown: function handleMouseDown() {}, overflowHidden: false, rippleColor: switchColor, speed: 150 },
					_react2.default.createElement(_.Icon, {
						icon: 'radio-outline',
						size: size,
						color: isSwitched ? switchColor : outlineColor,
						style: [styles.box] }),
					_react2.default.createElement(_.Icon, {
						icon: 'radio-on',
						size: size,
						color: switchColor,
						style: [styles.switch, isSwitched && styles.isSwitched] })
				)
			);
		}
	}]);

	return Radio;
}(_react.Component), _class2.propTypes = {
	outlineColor: _react.PropTypes.string,
	switchColor: _react.PropTypes.string,
	disabledColor: _react.PropTypes.string,
	size: _react.PropTypes.number.isRequired
}, _class2.defaultProps = {
	outlineColor: _colors.colors.grey800,
	disabledColor: _colors.colors.grey400,
	switchColor: _colors.colors.cyan500
}, _class2.options = {
	type: 'radio'
}, _temp)) || _class) || _class;

exports.default = Radio;


var styles = {
	box: {
		position: 'absolute'

	},
	switch: {
		position: 'absolute',
		opacity: 0,
		transform: 'scale(0)',
		transformOrigin: '50% 50%',
		transition: 'transform 200ms ease-out, opacity 200ms ease-out, fill 200ms ease-out'
	},
	isSwitched: {
		opacity: 1,
		transform: 'scale(1)'
	}
};