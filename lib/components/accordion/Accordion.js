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

var _colors = require('../../utils/colors');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
	_inherits(Accordion, _Component);

	function Accordion() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, Accordion);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accordion.__proto__ || Object.getPrototypeOf(Accordion)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			expanded: _this.props.expandedOnMount
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Accordion, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (this.props.expandedOnMount) {
				this.expandContent(true);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    expandDirection = _props.expandDirection,
			    style = _props.style,
			    onClick = _props.onClick,
			    children = _props.children,
			    disabled = _props.disabled,
			    disabledStyle = _props.disabledStyle,
			    expanded = this.state.expanded,
			    topExpandContent = void 0,
			    bottomExpandContent = void 0;


			var childrenContainerStyles = { cursor: onClick && !disabled ? 'pointer' : 'initial' };

			var expandContent = this._renderExpandContent();

			if (expandDirection === 'up') {
				topExpandContent = expandContent;
			} else if (expandDirection === 'down') {
				bottomExpandContent = expandContent;
			}

			return _react2.default.createElement(
				'div',
				{ style: styles.container },
				topExpandContent,
				_react2.default.createElement(
					'div',
					{ style: [childrenContainerStyles, style, disabledStyle], onClick: !disabled && onClick },
					children
				),
				bottomExpandContent
			);
		}

		/////////////////////
		// Public Methods  //
		/////////////////////

	}, {
		key: 'expandContent',
		value: function expandContent(open) {
			var transitionSpeed = this.props.transitionSpeed;
			var expanded = this.state.expanded;


			var container = _reactDom2.default.findDOMNode(this.refs.expandContentContainer),
			    prevHeight = container.style.height;

			// DOM logic
			if (open) {
				container.style.height = 'auto';
			};

			var endHeight = getComputedStyle(container).height;

			container.style.height = open ? prevHeight : endHeight;

			container.offsetHeight; // forces a repaint, needed to trigger animation/reflow

			container.style.transition = 'height ' + transitionSpeed + 'ms ease-out';

			container.style.height = open ? endHeight : '0px';

			// When transition ends, reset transition property to empty and set height property to auto
			container.addEventListener('transitionend', function transitionEnd(event) {
				if (event.propertyName == 'height') {
					container.style.transition = '';
					container.style.height = open ? 'auto' : '0px';
					container.removeEventListener('transitionend', transitionEnd, false);
				}
			}, false);

			// Fire events
			open ? this._onExpandOpen() : this._onExpandClose();

			// Change state
			this.setState({
				expanded: open
			});
		}
	}, {
		key: 'toggleExpandContent',
		value: function toggleExpandContent() {
			this.state.expanded ? this.expandContent(false) : this.expandContent(true);
		}

		/////////////
		// Events  //
		/////////////

	}, {
		key: '_onExpandOpen',
		value: function _onExpandOpen() {
			var onExpandOpen = this.props.onExpandOpen;


			if (onExpandOpen) onExpandOpen();
		}
	}, {
		key: '_onExpandClose',
		value: function _onExpandClose() {
			var onExpandClose = this.props.onExpandClose;


			if (onExpandClose) onExpandClose();
		}

		/////////////////////
		// Private Methods //
		/////////////////////

	}, {
		key: '_renderExpandContent',
		value: function _renderExpandContent() {
			var _props2 = this.props,
			    expandAmount = _props2.expandAmount,
			    expandDirection = _props2.expandDirection,
			    expandContent = _props2.expandContent,
			    expandContentStyle = _props2.expandContentStyle,
			    expandContentContainerStyle = _props2.expandContentContainerStyle,
			    expandIsOverlay = _props2.expandIsOverlay;


			var contentContainerStyles = void 0;

			if (expandIsOverlay) {

				contentContainerStyles = {
					position: 'absolute',
					bottom: expandDirection === 'up' ? '100%' : 'initial',
					top: expandDirection === 'down' ? '100%' : 'initial'
				};
			};

			if (expandContent) {
				return _react2.default.createElement(
					'div',
					{ ref: 'expandContentContainer', style: [styles.expandContentContainer, contentContainerStyles, expandContentContainerStyle] },
					_react2.default.createElement(
						'div',
						{ style: expandContentStyle },
						expandContent
					)
				);
			}
		}
	}]);

	return Accordion;
}(_react.Component), _class2.displayName = 'Accordion', _class2.propTypes = {
	// Component Configuartion
	expandDirection: _propTypes2.default.oneOf(['up', 'down']),
	expandIsOverlay: _propTypes2.default.bool, // If true expand content will be position: 'absolute'
	expandContent: _propTypes2.default.any,
	expandContentStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
	expandContentContainerStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
	expandedOnMount: _propTypes2.default.bool,
	transitionSpeed: _propTypes2.default.number,
	disabled: _propTypes2.default.bool,
	disabledStyle: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.array]),
	// Events
	onExpandOpen: _propTypes2.default.func,
	onExpandClose: _propTypes2.default.func
}, _class2.defaultProps = {
	expandDirection: 'down',
	expandIsOverlay: false,
	expandedOnMount: false,
	transitionSpeed: 300,
	disabled: false
}, _temp2)) || _class;

exports.default = Accordion;


var styles = {
	container: {
		width: '100%',
		position: 'relative'
	},
	expandContentContainer: {
		width: '100%',
		overflow: 'hidden',
		height: 0,
		position: 'relative'
	}
};