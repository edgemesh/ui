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

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProgressBar = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
	_inherits(ProgressBar, _Component);

	function ProgressBar() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, ProgressBar);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			percent: _this.props.percent
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ProgressBar, [{
		key: 'increment',
		value: function increment() {
			var percent = this.state.percent + (Math.random() + 1 - Math.random());
			percent = percent < 99 ? percent : 99;
			this.setState({ percent: percent });
		}
	}, {
		key: 'handleProps',
		value: function handleProps(props) {
			var _this2 = this;

			if (props.autoIncrement && props.percent >= 0 && props.percent < 99) {
				this.interval = setInterval(this.increment, props.intervalTime);
			}

			if (props.percent >= 100) {
				this.setState({
					percent: 99.9
				}, function () {
					_this2.timeout = setTimeout(function () {
						_this2.setState({
							percent: -1
						});
					}, 400);
				});
			} else {
				this.setState({
					percent: props.percent
				});
			}
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this.handleProps(this.props);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			if (this.interval) {
				clearInterval(this.interval);
			}
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
			this.handleProps(nextProps);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			if (this.interval) {
				clearInterval(this.interval);
			}
			if (this.timeout) {
				clearTimeout(this.timeout);
			}
		}
	}, {
		key: 'render',
		value: function render() {

			var style = {
				width: (this.state.percent < 0 ? 0 : this.state.percent) + '%'
			};

			return _react2.default.createElement(
				'div',
				{ style: [styles.bar, this.props.onTop && styles.onTop, (this.state.percent < 0 || this.state.percent >= 100) && styles.hide] },
				_react2.default.createElement('div', { style: [styles.percent, style] })
			);
		}
	}]);

	return ProgressBar;
}(_react.Component), _class2.propTypes = {
	percent: _react.PropTypes.number.isRequired,
	onTop: _react.PropTypes.bool,
	autoIncrement: _react.PropTypes.bool,
	intervalTime: _react.PropTypes.number,
	color: _react.PropTypes.string
}, _class2.defaultProps = {
	color: _colors.colors.cyan500,
	percent: -1,
	onTop: false,
	autoIncrement: false,
	intervalTime: 200
}, _temp2)) || _class;

exports.default = ProgressBar;


var styles = {
	bar: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		visibility: 'visible',
		opacity: 1,
		transition: 'all 400ms',
		zIndex: 9999999
	},
	onTop: {
		height: '100%'
	},
	hide: {
		opacity: 0,
		visibility: 'hidden',
		zIndex: -10
	},
	percent: {
		height: '2px',
		background: '#29D',
		boxShadow: '0 0 10px #29D, 0 0 5px #29D',
		transition: 'all 200ms ease'
	}
};