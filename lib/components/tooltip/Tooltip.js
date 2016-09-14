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

var _reactBlueprint = require('react-blueprint');

var _BaseTooltip = require('./BaseTooltip');

var _BaseTooltip2 = _interopRequireDefault(_BaseTooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tooltip = (0, _BaseTooltip2.default)(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(Tooltip, _Component);

	function Tooltip() {
		_classCallCheck(this, Tooltip);

		return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
	}

	_createClass(Tooltip, [{
		key: 'render',
		value: function render() {
			var _props = this.props;
			var placeholder = _props.placeholder;
			var tooltipStyles = _props.tooltipStyles;
			var position = _props.position;
			var visible = _props.visible;
			var hPosition = _props.hPosition;
			var vPosition = _props.vPosition;


			var left = void 0;
			var bottom = void 0;
			var top = void 0;

			var startingX = '0px';
			var startingY = '0px';

			var visibleX = '0px';
			var visibleY = '0px';

			var triangle = 'topTriangle';

			var backgroundColor = 'rgba(0,0,0,0.5)';

			if (tooltipStyles && tooltipStyles.backgroundColor) {
				backgroundColor = tooltipStyles.backgroundColor;
			};

			var triangleColor = {};

			triangleColor.borderColor = 'transparent transparent ' + backgroundColor + ' transparent';

			switch (hPosition) {
				case 'left':
					left = 0;
					startingX = 0;
					visibleX = startingX;
					break;
				case 'right':
					left = '100%';
					startingX = '-100%';
					visibleX = startingX;
					break;
				case 'center':
					left = '50%';
					startingX = '-50%';
					visibleX = startingX;
			}

			switch (vPosition) {
				case 'top':
					visibleY = '-10px';
					bottom = '100%';
					triangle = 'bottomTriangle';
					triangleColor.borderColor = backgroundColor + ' transparent transparent transparent';
					break;
				case 'bottom':
					top = '100%';
					visibleY = '10px';
					triangle = 'topTriangle';
					triangleColor.borderColor = 'transparent transparent ' + backgroundColor + ' transparent';
					break;
				case 'center':
					top = '50%';
					startingY = '-50%';
					visibleY = startingY;

					if (hPosition === 'left') {
						startingX = '-100%';
						visibleX = 'calc(-100% - 10px)';
						triangle = 'rightTriangle';
						triangleColor.borderColor = 'transparent transparent transparent ' + backgroundColor;
					} else if (hPosition === 'right') {
						startingX = '0px';
						visibleX = '10px';
						triangle = 'leftTriangle';
						triangleColor.borderColor = 'transparent ' + backgroundColor + ' transparent transparent';
					}
					break;
			}
			var tooltipDynamicStyles = {
				left: left,
				top: top,
				bottom: bottom,
				transform: 'translate(' + startingX + ', ' + startingY + ')',
				opacity: visible ? 1 : 0
			};

			var visibleStyles = {
				transform: 'translate(' + visibleX + ', ' + visibleY + ')'
			};

			return _react2.default.createElement(
				'div',
				{ style: [styles.container, tooltipDynamicStyles, visible && visibleStyles] },
				_react2.default.createElement(
					_reactBlueprint.View,
					{ column: vPosition === 'top' || vPosition === 'bottom', style: { justifyContent: 'center', alignItems: 'center' } },
					vPosition === 'bottom' || vPosition === 'center' && hPosition === 'right' ? _react2.default.createElement('div', { style: [styles[triangle], triangleColor] }) : null,
					_react2.default.createElement(
						'div',
						{ style: [styles.tooltip, tooltipStyles] },
						placeholder
					),
					vPosition === 'top' || vPosition === 'center' && hPosition === 'left' ? _react2.default.createElement('div', { style: [styles[triangle], triangleColor] }) : null
				)
			);
		}
	}]);

	return Tooltip;
}(_react.Component), _class2.displayName = 'Tooltip', _class2.options = {
	type: 'tooltip'
}, _temp)) || _class) || _class;

exports.default = Tooltip;


var styles = {
	container: {
		overflow: 'hidden',
		transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
		position: 'absolute',
		zIndex: 9999999,
		pointerEvents: 'none'
	},
	tooltip: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		color: '#fff',
		padding: 10,
		pointerEvents: 'none'
	},
	topTriangle: {
		width: 0,
		height: 0,
		borderStyle: 'solid',
		borderWidth: '0 7.5px 13.0px 7.5px',
		borderColor: 'transparent transparent rgba(0,0,0,0.5) transparent'
	},
	bottomTriangle: {
		width: 0,
		height: 0,
		borderStyle: 'solid',
		borderWidth: '13.0px 7.5px 0 7.5px',
		borderColor: 'rgba(0,0,0,0.5) transparent transparent transparent'
	},
	leftTriangle: {
		width: 0,
		height: 0,
		borderStyle: 'solid',
		borderWidth: '7.5px 15px 7.5px 0',
		borderColor: 'transparent rgba(0,0,0,0.5) transparent transparent'
	},
	rightTriangle: {
		width: 0,
		height: 0,
		borderStyle: 'solid',
		borderWidth: '7.5px 0 7.5px 15px',
		borderColor: 'transparent transparent transparent rgba(0,0,0,0.5)'
	}

};