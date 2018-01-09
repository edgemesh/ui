'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _BaseTooltip = require('./BaseTooltip');

var _BaseTooltip2 = _interopRequireDefault(_BaseTooltip);

var _RenderInBody = require('../render-in-body/RenderInBody');

var _RenderInBody2 = _interopRequireDefault(_RenderInBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StickyTooltip = (0, _BaseTooltip2.default)(_class = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(StickyTooltip, _Component);

	function StickyTooltip() {
		_classCallCheck(this, StickyTooltip);

		return _possibleConstructorReturn(this, (StickyTooltip.__proto__ || Object.getPrototypeOf(StickyTooltip)).apply(this, arguments));
	}

	_createClass(StickyTooltip, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    placeholder = _props.placeholder,
			    tooltipStyles = _props.tooltipStyles,
			    position = _props.position,
			    visible = _props.visible;


			var tooltipDynamicStyles = {
				transform: this._getTranslateOffset(),
				left: position.x,
				top: position.y,
				opacity: visible ? 1 : 0
			};

			return _react2.default.createElement(
				_RenderInBody2.default,
				null,
				_react2.default.createElement(
					'div',
					{ style: [styles.tooltip, tooltipDynamicStyles, tooltipStyles] },
					placeholder
				)
			);
		}

		/////////////////////
		// Private Methods //
		/////////////////////

		// Gets the offset based on the hPosition and vPosition prop

	}, {
		key: '_getTranslateOffset',
		value: function _getTranslateOffset() {

			var x = void 0,
			    y = void 0;

			switch (this.props.hPosition) {
				case 'left':
					x = 'calc(-100% - 5px)';
					break;
				case 'right':
					x = '10px';
					break;
				default:
					break;
			}

			switch (this.props.vPosition) {
				case 'top':
					y = '-100%';
					break;
				case 'bottom':
					y = '0px';
					break;
				default:
					break;
			}
			return 'translate(' + x + ',' + y + ')';
		}
	}]);

	return StickyTooltip;
}(_react.Component), _class2.options = {
	type: 'stickyTooltip'
}, _temp)) || _class) || _class;

exports.default = StickyTooltip;


var styles = {
	tooltip: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		color: '#fff',
		padding: 10,
		position: 'absolute',
		transition: 'opacity 0.2s',
		pointerEvents: 'none',
		zIndex: 9999999
	}
};