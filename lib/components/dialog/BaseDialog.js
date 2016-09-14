'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BaseDialog = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _reactBlueprint = require('react-blueprint');

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _transitions = require('../../utils/transitions');

var _transitions2 = _interopRequireDefault(_transitions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var transitionSpeed = 300;

var BaseDialog = exports.BaseDialog = function BaseDialog(ComposedComponent, ref) {
	var _class, _temp2;

	return _temp2 = _class = function (_Component) {
		_inherits(_class, _Component);

		function _class() {
			var _ref;

			var _temp, _this, _ret;

			_classCallCheck(this, _class);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
				show: _this.props.openOnMount
			}, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(_class, [{
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this._allowScrolling();
			}
		}, {
			key: 'render',
			value: function render() {
				var show = this.state.show;
				var _props = this.props;
				var transition = _props.transition;
				var renderInBody = _props.renderInBody;
				var lockScrolling = _props.lockScrolling;

				// Bind show and dismiss functions to ComposedComponent via props

				var passedProps = Object.assign({}, this.props, {
					show: this.show.bind(this),
					dismiss: this.dismiss.bind(this)
				});

				// Some transitions require style changes to the dialogContainer
				var dialogContainerStyles = {};

				switch (transition) {
					case 'sticky-top':
						dialogContainerStyles = {
							justifyContent: 'flex-start'
						};
						break;
					case 'sticky-bottom':
						dialogContainerStyles = {
							justifyContent: 'flex-end'
						};
						break;
				}

				// Lock Body scrolling to prevent scrolling abnormalities (proppable)
				if (lockScrolling) {
					show ? this._preventScrolling() : this._allowScrolling();
				};

				var content = _react2.default.createElement(
					'div',
					{ style: [styles.container, show ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }] },
					_react2.default.createElement(_radium.Style, { rules: _transitions2.default[transition] }),
					_react2.default.createElement(
						_reactBlueprint.View,
						{ column: true, style: [styles.dialogContainer, dialogContainerStyles] },
						_react2.default.createElement(
							_reactAddonsCssTransitionGroup2.default,
							{
								transitionAppear: true,
								transitionName: transition,
								transitionEnterTimeout: transitionSpeed,
								transitionLeaveTimeout: transitionSpeed,
								transitionAppearTimeout: transitionSpeed },
							show && _react2.default.createElement(ComposedComponent, _extends({ key: 'composed' }, passedProps))
						)
					),
					_react2.default.createElement('div', { style: [styles.overlay, !show && styles.hidden, show ? { pointerEvents: 'all' } : { pointerEvents: 'none' }], onClick: this._onClickAway.bind(this) })
				);

				return renderInBody ? _react2.default.createElement(
					_reactBlueprint.RenderInBody,
					null,
					content
				) : content;
			}

			////////////////////
			// Public Methods //
			////////////////////

		}, {
			key: 'show',
			value: function show() {
				var _this2 = this;

				this.setState({ show: true });
				setTimeout(function () {
					_this2._onShow();
				}, 1);
			}
		}, {
			key: 'dismiss',
			value: function dismiss() {
				var _this3 = this;

				this.setState({ show: false });
				setTimeout(function () {
					_this3._onDismiss();
				}, 1);
			}

			/////////////
			// Events  //
			/////////////

		}, {
			key: '_onClickAway',
			value: function _onClickAway() {
				if (this.props.dismissOnClickAway) this.dismiss();
				if (this.props.onClickAway) this.props.onClickAway();
			}
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

			//////////////////////
			// Private Methods  //
			//////////////////////

		}, {
			key: '_preventScrolling',
			value: function _preventScrolling() {
				var body = document.getElementsByTagName('body')[0];
				body.style.overflow = 'hidden';
			}
		}, {
			key: '_allowScrolling',
			value: function _allowScrolling() {
				var body = document.getElementsByTagName('body')[0];
				body.style.overflow = '';
			}
		}]);

		return _class;
	}(_react.Component), _class.displayName = 'BaseDialog', _class.PropTypes = {
		// Configuration
		openOnMount: _react.PropTypes.bool,
		renderInBody: _react.PropTypes.bool,
		dismissOnClickAway: _react.PropTypes.bool,
		lockScrolling: _react.PropTypes.bool,
		transition: _react.PropTypes.oneOf(['sticky-top', 'sticky-bottom', 'slide-in', 'scale-in', 'scale-out', 'sign-flip', 'flipX', 'flipY', 'slide-and-rotate']),
		// Events
		onClickAway: _react.PropTypes.func,
		onDismiss: _react.PropTypes.func,
		onShow: _react.PropTypes.func
	}, _class.defaultProps = {
		renderInBody: false,
		lockScrolling: true,
		openOnMount: false,
		dismissOnClickAway: true,
		transition: 'drop-down'
	}, _temp2;
};

exports.default = BaseDialog;

////////////
// Styles //
////////////

var styles = {
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%'
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 9999,
		opacity: 1,
		transition: 'opacity 300ms ease-out'
	},
	dialogContainer: {
		width: '100%',
		height: '100%',
		zIndex: 99999,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		perspective: 1300,
		pointerEvents: 'none'
	},
	hidden: {
		opacity: 0
	}
};