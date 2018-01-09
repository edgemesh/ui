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

var _Paper = require('../paper/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = require('../button/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _transitions = require('../../utils/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

var _colorTools = require('../../utils/colorTools');

var _colorTools2 = _interopRequireDefault(_colorTools);

var _View = require('../view/View');

var _View2 = _interopRequireDefault(_View);

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
			iceCreamBar: null
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(Chips, [{
		key: 'render',
		value: function render() {
			var iceCreamBar = this.state.iceCreamBar;
			var _props = this.props,
			    transition = _props.transition,
			    style = _props.style;


			return _react2.default.createElement(
				'div',
				{ style: [styles.container, { width: '100%' }, this._getPlacement(), style] },
				_react2.default.createElement(
					_reactAddonsCssTransitionGroup2.default,
					{
						transitionName: transition,
						transitionEnterTimeout: transitionSpeed,
						transitionLeaveTimeout: transitionSpeed },
					_react2.default.createElement(_radium.Style, { rules: _transitions2.default[transition] }),
					iceCreamBar
				)
			);
		}

		//////////////////////
		// Private Methods  //
		//////////////////////

	}, {
		key: '_getPlacement',
		value: function _getPlacement() {
			var _props2 = this.props,
			    hPosition = _props2.hPosition,
			    vPosition = _props2.vPosition;

			// Horizontal

			if (hPosition === 'left') {
				hPosition = { left: 25 };
			} else {
				hPosition = { right: 25 };
			}

			// Vertical
			if (vPosition === 'bottom') {
				vPosition = { bottom: 25 };
			} else {
				vPosition = { top: 25 };
			}

			var placement = Object.assign(hPosition, vPosition);

			return placement;
		}

		////////////////////
		// Public Methods //
		////////////////////

	}, {
		key: 'pushMessage',
		value: function pushMessage(message, accent) {
			var _props3 = this.props,
			    backgroundColor = _props3.backgroundColor,
			    fontColor = _props3.fontColor;


			if (!accent) accent = _colors.colors.cyan500;

			var hoverColor = _colorTools2.default.shadeBlend(-0.2, accent);
			var rippleColor = _colorTools2.default.shadeBlend(0.4, accent);

			var iceCreamBar = _react2.default.createElement(
				_Paper2.default,
				{ depth: 3, key: Date.now(), fullHeight: false, fullWidth: false, style: [styles.container, styles.iceCreamBarWrapper, this._getPlacement()] },
				_react2.default.createElement(
					_View2.default,
					{ row: true, auto: true, style: [styles.iceCreamBar, { borderLeft: '5px solid ' + accent, backgroundColor: backgroundColor }] },
					_react2.default.createElement(
						_View2.default,
						{ auto: true, column: true, style: [styles.message, { color: fontColor }] },
						message
					),
					_react2.default.createElement(
						_View2.default,
						{ auto: true, column: true, style: styles.dismissButton },
						_react2.default.createElement(_RaisedButton2.default, { label: 'Dismiss', style: { backgroundColor: accent, color: fontColor }, onClick: this.dismiss.bind(this), hoverColor: hoverColor, rippleColor: rippleColor })
					)
				)
			);

			this.setState({ iceCreamBar: iceCreamBar });
			this._onShow();
		}
	}, {
		key: 'dismiss',
		value: function dismiss() {
			this.setState({ iceCreamBar: null });
			this._onDismiss();
		}

		/////////////
		// Events  //
		/////////////

	}, {
		key: '_onShow',
		value: function _onShow() {
			if (this.props.onShow) this.props.onShow();
		}
	}, {
		key: '_onDismiss',
		value: function _onDismiss() {
			if (this.props.onDismiss) this.props.onDismiss();
		}
	}]);

	return Chips;
}(_react.Component), _class2.propTypes = {
	// IceCream configuration
	hPosition: _propTypes2.default.oneOf(['left', 'right']),
	vPosition: _propTypes2.default.oneOf(['top', 'bottom']),
	fontColor: _propTypes2.default.string,
	backgroundColor: _propTypes2.default.string,
	transition: _propTypes2.default.string,
	// Events
	onShow: _propTypes2.default.func,
	onDismiss: _propTypes2.default.func
}, _class2.defaultProps = {
	hPosition: 'left',
	vPosition: 'bottom',
	fontColor: _colors.colors.grey300,
	backgroundColor: _colors.colors.grey900,
	transition: 'drop-down'
}, _temp2)) || _class;

exports.default = Chips;


var styles = {
	container: {
		position: 'absolute',
		borderRadius: 3,
		zIndex: 99999
	},
	iceCreamBarWrapper: {
		overflow: 'hidden',
		position: 'absolute'
	},
	iceCreamBar: {
		position: 'relative',
		maxWidth: 450,
		minWidth: 300,
		padding: 10,
		borderRadius: 3
	},
	message: {
		justifyContent: 'center',
		wordBreak: 'break-word'
	},
	dismissButton: {
		marginLeft: 15,
		justifyContent: 'center',
		alignItems: 'flex-end',
		maxWidth: 75

	}
};