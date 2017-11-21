'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactDom = require('react-dom');

var _ = require('../../');

var _colors = require('../../utils/colors');

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutocompleteSelector = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
	_inherits(AutocompleteSelector, _Component);

	function AutocompleteSelector() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, AutocompleteSelector);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = AutocompleteSelector.__proto__ || Object.getPrototypeOf(AutocompleteSelector)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			selectionIndex: null
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(AutocompleteSelector, [{
		key: 'componentDidUpdate',
		value: function componentDidUpdate(prevProps) {
			var open = this.props.open;


			if (prevProps.open !== open) {
				this.refs.accordion.expandContent(open);
				// console.log('props: ',open,'prevProps: ', prevProps.open)
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    options = _props.options,
			    accent = _props.accent,
			    hoverColor = _props.hoverColor,
			    selectorStyles = _props.selectorStyles,
			    selectorItemStyles = _props.selectorItemStyles,
			    maxSelectorHeight = _props.maxSelectorHeight,
			    expandDirection = _props.expandDirection;
			var selectionIndex = this.state.selectionIndex;


			var isUp = expandDirection === 'up';

			options = options.map(function (option, i) {
				return _react2.default.createElement(
					'div',
					{
						key: i,
						ref: option.label + '-' + i,
						className: 'autocomplete-selector-hover-item',
						onMouseDown: _this2._handleItemClick.bind(_this2, i),
						style: [styles.optionItem, i === 0 && { paddingTop: 16 }, selectorItemStyles, i == selectionIndex && { backgroundColor: accent }] },
					option.label
				);
			});

			return _react2.default.createElement(
				_.Paper,
				{
					ref: 'container',
					style: [styles.paper, { maxHeight: maxSelectorHeight }, isUp && { bottom: '100%', top: 'initial' }, isUp && styles.paperTop],
					innerStyle: styles.paperInner,
					fullWidth: true, zIndex: 1001
				},
				_react2.default.createElement(_radium.Style, { rules: {
						'.autocomplete-selector-hover-item:hover': {
							backgroundColor: hoverColor
						}
					} }),
				_react2.default.createElement(_.Accordion, {
					ref: 'accordion',
					expandContent: options,
					expandDirection: expandDirection,
					expandContentStyle: [styles.selector, selectorStyles],
					expandContentContainerStyle: styles.selectorContainer
				})
			);
		}
	}, {
		key: 'navUp',
		value: function navUp() {
			var _this3 = this;

			if (this.state.selectionIndex === null) {
				this.setState({ selectionIndex: 0 });
			} else {
				if (this.state.selectionIndex > 0) {
					this.setState({ selectionIndex: this.state.selectionIndex - 1 });
					setTimeout(function () {
						_this3.calculateScroll();
					});
				} else {
					this.setState({ selectionIndex: this.props.options.length - 1 });
					setTimeout(function () {
						_this3.calculateScroll();
					});
				}
			}
		}
	}, {
		key: 'navDown',
		value: function navDown() {
			var _this4 = this;

			if (this.state.selectionIndex === null) {
				this.setState({ selectionIndex: 0 });
			} else {
				if (this.state.selectionIndex + 1 < this.props.options.length) {
					this.setState({ selectionIndex: this.state.selectionIndex + 1 });
					setTimeout(function () {
						_this4.calculateScroll();
					});
				} else {
					this.setState({ selectionIndex: 0 });
					setTimeout(function () {
						_this4.calculateScroll();
					});
				}
			}
		}
	}, {
		key: 'calculateScroll',
		value: function calculateScroll() {
			var options = this.props.options;
			var selectionIndex = this.state.selectionIndex;


			if (options.length > 0) {

				var container = (0, _reactDom.findDOMNode)(this.refs.container);

				var label = options[selectionIndex].label;
				var item = (0, _reactDom.findDOMNode)(this.refs[label + '-' + selectionIndex]);

				var itemTop = item.offsetTop;
				var itemHeight = item.offsetHeight;
				var containerHeight = container.offsetHeight;

				container.scrollTop = itemTop - containerHeight + itemHeight;
			}
		}
	}, {
		key: 'setSelectionIndex',
		value: function setSelectionIndex(i) {
			this.setState({ selectionIndex: i });
		}
	}, {
		key: 'getSelectionIndex',
		value: function getSelectionIndex(i) {
			return this.state.selectionIndex;
		}
	}, {
		key: '_handleItemClick',
		value: function _handleItemClick(i) {
			var _this5 = this;

			this.setSelectionIndex(i);
			setTimeout(function () {
				_this5.props.handleSelect();
			});
		}
	}]);

	return AutocompleteSelector;
}(_react.Component), _class2.displayName = 'AutocompleteSelector', _class2.propTypes = {
	// Configuration
	options: _react.PropTypes.array,
	// Styling
	selectorStyles: _react.PropTypes.object,
	selectorItemStyles: _react.PropTypes.object,
	accent: _react.PropTypes.string,
	hoverColor: _react.PropTypes.string,
	maxSelectorHeight: _react.PropTypes.number,
	// Events
	onOptionSelected: _react.PropTypes.func
}, _class2.defaultProps = {
	accent: _colors.colors.cyan500,
	hoverColor: _colors.colors.grey300,
	open: false,
	maxSelectorHeight: 250,
	selectionIndex: 0,
	onOptionSelected: function onOptionSelected() {}
}, _temp2)) || _class;

exports.default = AutocompleteSelector;


var styles = {
	selectorContainer: {
		zIndex: 1001
	},
	paper: {
		zIndex: 1001,
		width: '100%',
		height: 'auto',
		position: 'absolute',
		top: 'calc(100% - 6px)',
		overflow: 'hidden',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
		overflowY: 'scroll'
	},
	paperTop: {
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		borderBottomLeftRadius: 0,
		borderBottomRightRadius: 0
	},
	paperInner: {
		zIndex: 1001,
		backgroundColor: _colors.colors.grey50,
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4
	},
	optionItem: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		cursor: 'pointer'
	}
};