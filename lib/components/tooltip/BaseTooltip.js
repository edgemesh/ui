'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BaseTooltip = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BaseTooltip = exports.BaseTooltip = function BaseTooltip(ComposedComponent) {
	var _class, _class2, _temp2;

	var options = {
		type: ''
	};

	if (ComposedComponent.options) options = ComposedComponent.options;

	return (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
		_inherits(_class, _Component);

		function _class() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, _class);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
				visible: false,
				position: { x: 0, y: 0 }
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(_class, [{
			key: 'render',
			value: function render() {
				var _props = this.props,
				    style = _props.style,
				    children = _props.children,
				    disabled = _props.disabled,
				    hPosition = _props.hPosition,
				    vPosition = _props.vPosition;


				if (disabled) return _react2.default.createElement(
					'div',
					null,
					children
				);

				if (hPosition === 'center' && vPosition === 'center') {
					hPosition = 'left';
					console.warn('Both hPosition and vPosition props cannot be \'center\' in \'Tooltip\' component -- hPosition has been changed to \'left\'');
				}

				if (options.type === 'stickyTooltip' && hPosition === 'center' || options.type === 'stickyTooltip' && vPosition === 'center') {
					if (hPosition === 'center') hPosition = 'right';
					if (vPosition === 'center') vPosition = 'bottom';
					console.warn('Both the hPosition and vPosition props do not support \'center\' for \'StickyTooltip\' components -- using \'center\' as a prop for \'StickyTooltips\' will result in those props being reset to default which \'hPosition: \'right\'\' and \'vPosition: \'bottom\'\'');
				}

				return _react2.default.createElement(
					'div',
					{
						style: [{ position: 'relative' }, style],
						onMouseMove: options.type === 'stickyTooltip' && this._onMouseMove.bind(this),
						onMouseEnter: this._onMouseEnter.bind(this),
						onMouseLeave: this._onMouseLeave.bind(this) },
					children,
					_react2.default.createElement(ComposedComponent, _extends({}, this.props, this.state, { hPosition: hPosition, vPosition: vPosition }))
				);
			}

			////////////
			// Events //
			////////////

			//Use the Synthetic Event's pageX/pageY properties to update state.

		}, {
			key: '_onMouseMove',
			value: function _onMouseMove(e) {
				this.setState({
					position: { x: e.pageX, y: e.pageY }
				});
			}
		}, {
			key: '_onMouseEnter',
			value: function _onMouseEnter(e) {
				this.setState({
					visible: true
				});
			}
		}, {
			key: '_onMouseLeave',
			value: function _onMouseLeave(e) {
				this.setState({
					visible: false
				});
			}
		}]);

		return _class;
	}(_react.Component), _class2.propTypes = {
		vPosition: _propTypes2.default.oneOf(['top', 'bottom', 'center']), // Horizontal positioning of the Tooltip - StickyTooltips do not support 'center'
		hPosition: _propTypes2.default.oneOf(['left', 'right', 'center']), // Vertical positioning of the Tooltip - StickyTooltips do not support 'center'
		placeholder: _propTypes2.default.any, // The tooltip content
		tooltipStyles: _propTypes2.default.object, // Use this to pass styles to the actual Tooltip
		disabled: _propTypes2.default.bool // Disables the tooltip but still renders the children
	}, _class2.defaultProps = {
		hPosition: options.type === 'tooltip' ? 'center' : 'right',
		vPosition: 'bottom',
		disabled: false
	}, _temp2)) || _class;
};

exports.default = BaseTooltip;