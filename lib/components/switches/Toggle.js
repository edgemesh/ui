'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

// React Blue Print


// Coomponents


// Utilities


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactBlueprint = require('react-blueprint');

var _Paper = require('../paper/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

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

var Toggle = (0, _radium2.default)(_class = (0, _BaseSwitch2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(Toggle, _Component);

	function Toggle() {
		_classCallCheck(this, Toggle);

		return _possibleConstructorReturn(this, (Toggle.__proto__ || Object.getPrototypeOf(Toggle)).apply(this, arguments));
	}

	_createClass(Toggle, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var size = _props.size;
			var outlineColor = _props.outlineColor;
			var disabledColor = _props.disabledColor;
			var toggleOnColor = _props.toggleOnColor;
			var toggleOffColor = _props.toggleOffColor;
			var getValue = _props.getValue;
			var isDisabled = _props.isDisabled;
			var toggled = _props.toggled;
			var labelPosition = _props.labelPosition;


			var isToggled = toggled ? toggled : getValue();

			// Apply disabled color if neccesary
			toggleOnColor = isDisabled ? disabledColor : toggleOnColor;
			toggleOffColor = isDisabled ? disabledColor : toggleOffColor;

			return _react2.default.createElement(
				_reactBlueprint.View,
				{ style: [styles.container, { width: size, height: size, justifyContent: labelPosition === 'left' ? 'flex-end' : 'flex-start' }] },
				_react2.default.createElement(
					'div',
					{ style: { position: 'relative', width: size } },
					_react2.default.createElement(_Paper2.default, { style: styles.track, innerStyle: { borderRadius: 10, backgroundColor: isToggled ? toggleOnColor : toggleOffColor } }),
					_react2.default.createElement(
						_Paper2.default,
						{ style: [styles.thumb, isToggled && styles.toggled], innerStyle: { borderRadius: '50%', backgroundColor: isToggled ? toggleOnColor : toggleOffColor } },
						_react2.default.createElement(_TouchRipple2.default, { ref: 'ripple', handleMouseDown: function handleMouseDown() {}, overflowHidden: false, rippleColor: toggleOnColor, speed: 150 })
					)
				)
			);
		}
	}]);

	return Toggle;
}(_react.Component), _class2.propTypes = {
	toggleOnColor: _react.PropTypes.string,
	toggleOffColor: _react.PropTypes.string,
	disabledColor: _react.PropTypes.string,
	size: _react.PropTypes.number.isRequired
}, _class2.defaultProps = {
	disabledColor: _colors.colors.grey400,
	toggleOnColor: _colors.colors.cyan500,
	toggleOffColor: _colors.colors.grey50
}, _class2.options = {
	type: 'toggle'
}, _temp)) || _class) || _class;

exports.default = Toggle;


var styles = {
	container: {
		alignItems: 'center',
		position: 'relative'
	},
	track: {
		width: '100%',
		height: 10,
		borderRadius: 10
	},
	thumb: {
		bottom: (18 / 2 - 10 / 2) * -1, // Thumb height / 2 - Track height /2 
		left: 0,
		height: 18,
		width: 18,
		borderRadius: '50%',
		position: 'absolute',
		transformOrigin: '50% 50%',
		transition: 'left 200ms ease-out, backgroundColor 200ms ease-out'
	},
	toggled: {
		left: 'calc(100% - 18px)'
	}
};