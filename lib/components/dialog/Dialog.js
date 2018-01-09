'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = require('react-dom');

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _Paper = require('../paper/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _BaseDialog = require('./BaseDialog');

var _BaseDialog2 = _interopRequireDefault(_BaseDialog);

var _RaisedButton = require('../button/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _reactBlueprint = require('react-blueprint');

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dialog = (0, _radium2.default)(_class = (0, _BaseDialog2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(Dialog, _Component);

	function Dialog() {
		_classCallCheck(this, Dialog);

		return _possibleConstructorReturn(this, (Dialog.__proto__ || Object.getPrototypeOf(Dialog)).apply(this, arguments));
	}

	_createClass(Dialog, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    show = _props.show,
			    dismiss = _props.dismiss,
			    isShown = _props.isShown,
			    transitionTiming = _props.transitionTiming,
			    title = _props.title,
			    body = _props.body,
			    actions = _props.actions,
			    accentColor = _props.accentColor,
			    backgroundColor = _props.backgroundColor,
			    style = _props.style,
			    titleStyle = _props.titleStyle,
			    bodyStyle = _props.bodyStyle,
			    closeStyle = _props.closeStyle,
			    closeColor = _props.closeColor;

			// Render buttons from action array, if no actions in array, create dismiss button

			if (actions && actions.length) {
				actions = actions.map(function (action, i) {
					return _react2.default.createElement(
						'div',
						{ key: i, style: styles.actionButton },
						_react2.default.createElement(_RaisedButton2.default, _extends({}, action.props, {
							label: action.label,
							onClick: action.onClick,
							style: [{ backgroundColor: accentColor }, action.style],
							disabled: action.disabled }))
					);
				});
			}

			return _react2.default.createElement(
				_Paper2.default,
				{ depth: 1, style: [style, styles.container] },
				_react2.default.createElement(
					'div',
					{ style: { backgroundColor: backgroundColor } },
					_react2.default.createElement(
						'div',
						{ style: [styles.title, { backgroundColor: accentColor }, titleStyle] },
						title,
						_react2.default.createElement(
							'div',
							{ onClick: dismiss },
							_react2.default.createElement(_Icon2.default, {
								key: 'close',
								icon: 'close',
								size: 28,
								color: closeColor,
								style: [styles.close, closeStyle] })
						)
					),
					_react2.default.createElement(
						'div',
						{ style: [styles.body, bodyStyle] },
						body
					),
					_react2.default.createElement(
						_reactBlueprint.View,
						{ style: styles.actions },
						actions
					)
				)
			);
		}
	}, {
		key: 'show',
		value: function show() {
			this.props.show();
		}
	}, {
		key: 'dismiss',
		value: function dismiss() {
			this.props.dismiss();
		}
	}]);

	return Dialog;
}(_react.Component), _class2.displayName = 'Dialog', _class2.propTypes = {
	title: _propTypes2.default.string.isRequired,
	body: _propTypes2.default.any,
	actions: _propTypes2.default.array,
	accentColor: _propTypes2.default.string,
	backgroundColor: _propTypes2.default.string,
	titleStyle: _propTypes2.default.object,
	bodyStyle: _propTypes2.default.object
}, _class2.defaultProps = {
	accentColor: _colors.colors.grey200,
	backgroundColor: _colors.colors.grey50,
	closeStyle: {},
	closeColor: _colors.colors.grey500
}, _temp)) || _class) || _class;

exports.default = Dialog;


var styles = {
	container: {
		borderRadius: 4,
		overflow: 'hidden',
		margin: 50,
		maxWidth: 700
	},
	title: {
		fontSize: 25,
		fontWeight: '200',
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 50,
		paddingRight: 50,
		color: _colors.colors.grey700,
		position: 'relative'
	},
	body: {
		padding: 10,
		textAlign: 'center',
		fontSize: 17,
		color: _colors.colors.grey500
	},
	actions: {
		padding: 10,
		justifyContent: 'center'

	},
	actionButton: {
		marginLeft: 10,
		marginRight: 10
	},
	close: {
		position: 'absolute',
		top: 'calc(50% - 14px)',
		right: 20,
		cursor: 'pointer',
		':hover': {
			fill: _colors.colors.grey700
		}
	}

};