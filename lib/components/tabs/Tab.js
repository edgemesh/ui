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

var _colors = require('../../utils/colors');

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _View = require('../view/View');

var _View2 = _interopRequireDefault(_View);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(Tab, _Component);

	function Tab() {
		_classCallCheck(this, Tab);

		return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
	}

	_createClass(Tab, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    label = _props.label,
			    value = _props.value,
			    style = _props.style,
			    disabled = _props.disabled,
			    disabledStyles = _props.disabledStyles,
			    selected = _props.selected,
			    accent = _props.accent,
			    fixedWidth = _props.fixedWidth,
			    selectedStyles = _props.selectedStyles;


			return _react2.default.createElement(
				_View2.default,
				{ onClick: !disabled && this._handleSelect.bind(this), style: [styles.container, selected && styles.selected, selected && selectedStyles, style, selected && { color: accent }, disabled && styles.disabled, disabled && disabledStyles, !fixedWidth && styles.noFlex] },
				label
			);
		}

		/////////////////////
		// Private Methods //
		/////////////////////

	}, {
		key: '_handleSelect',
		value: function _handleSelect() {
			var _props2 = this.props,
			    onSelect = _props2.onSelect,
			    value = _props2.value,
			    onClick = _props2.onClick,
			    index = _props2.index;


			onClick();

			if (onSelect) onSelect(value, index);
		}
	}]);

	return Tab;
}(_react.Component), _class2.propTypes = {
	// Tab configuration
	label: _propTypes2.default.string.isRequired,
	value: _propTypes2.default.string,
	selected: _propTypes2.default.bool,
	onSelect: _propTypes2.default.func,
	disabled: _propTypes2.default.bool,
	// This prop exists purely as a means to identify this as a tab component
	tab: _propTypes2.default.bool
}, _class2.defaultProps = {
	tab: true,
	disabled: false,
	fixedWidth: true
}, _temp)) || _class;

exports.default = Tab;


var styles = {
	container: {
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		userSelect: 'none'
	},
	noFlex: {
		flexGrow: 0,
		flexBasis: 'auto',
		width: 'auto'
	},
	selected: {
		backgroundColor: _colors.colors.grey300
	},
	disabled: {
		color: _colors.colors.grey400,
		cursor: 'initial'
	}
};