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

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Paper = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(Paper, _Component);

	function Paper() {
		_classCallCheck(this, Paper);

		return _possibleConstructorReturn(this, (Paper.__proto__ || Object.getPrototypeOf(Paper)).apply(this, arguments));
	}

	_createClass(Paper, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    style = _props.style,
			    innerStyle = _props.innerStyle,
			    depth = _props.depth,
			    circle = _props.circle,
			    healLeft = _props.healLeft,
			    healRight = _props.healRight,
			    healTop = _props.healTop,
			    healBottom = _props.healBottom,
			    zIndex = _props.zIndex;


			var paperStyles = [styles.paper, depths[depth], this.props.fullWidth && styles.fullWidth, this.props.fullHeight && styles.fullHeight, circle && styles.circle];

			var innerStyles = [styles.container, bottomDepths[depth], innerStyle];

			var healStyles = [heals.container, healTop && heals.top, healRight && heals.right, healBottom && heals.bottom, healLeft && heals.left];

			if (healTop || healRight || healBottom || healLeft) {
				return _react2.default.createElement(
					'div',
					{ style: [healStyles, style] },
					_react2.default.createElement(
						'div',
						{ style: [paperStyles, { zIndex: zIndex }] },
						_react2.default.createElement(
							'div',
							{ ref: 'innerContainer', style: innerStyles },
							this.props.children
						)
					)
				);
			} else {
				return _react2.default.createElement(
					'div',
					{ style: [paperStyles, style, { zIndex: zIndex }] },
					_react2.default.createElement(
						'div',
						{ ref: 'innerContainer', style: innerStyles },
						this.props.children
					)
				);
			}
		}
	}, {
		key: 'getInnerContainer',
		value: function getInnerContainer() {
			return this.refs.innerContainer;
		}
	}]);

	return Paper;
}(_react.Component), _class2.displayName = 'Paper', _class2.propTypes = {
	style: _react.PropTypes.object,
	depth: _react.PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
	circle: _react.PropTypes.bool,
	fullHeight: _react.PropTypes.bool,
	fullWidth: _react.PropTypes.bool,
	healLeft: _react.PropTypes.bool,
	healRight: _react.PropTypes.bool,
	healTop: _react.PropTypes.bool,
	healBottom: _react.PropTypes.bool,
	zIndex: _react.PropTypes.number
}, _class2.defaultProps = {
	style: {},
	depth: 1,
	circle: false,
	healLeft: false,
	healRight: false,
	healTop: false,
	healBottom: false,
	fullHeight: true,
	fullWidth: false,
	zIndex: 999
}, _temp)) || _class;

exports.default = Paper;


var depths = {
	1: { boxShadow: '0 1px 4px rgba(0, 0, 0, 0.24)' },
	2: { boxShadow: '0 3px 10px rgba(0, 0, 0, 0.23)' },
	3: { boxShadow: '0 6px 10px rgba(0, 0, 0, 0.23)' },
	4: { boxShadow: '0 10px 18px rgba(0, 0, 0, 0.22)' },
	5: { boxShadow: '0 15px 20px rgba(0, 0, 0, 0.22)' }
};

var bottomDepths = {
	1: { boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12)' },
	2: { boxShadow: '0 3px 10px rgba(0, 0, 0, 0.16)' },
	3: { boxShadow: '0 10px 30px rgba(0, 0, 0, 0.19)' },
	4: { boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25)' },
	5: { boxShadow: '0 19px 60px rgba(0, 0, 0, 0.30)' }
};

var heals = {
	container: {
		pointerEvents: 'none',
		overflow: 'hidden',
		marginTop: '-60px',
		marginRight: '-60px',
		marginLeft: '-60px',
		marginBottom: '-60px',
		paddingTop: '60px',
		paddingLeft: '60px',
		paddingRight: '60px',
		paddingBottom: '60px',
		zIndex: 9999
	},
	top: { marginTop: 0, paddingTop: 0 },
	right: { marginRight: 0, paddingRight: 0 },
	bottom: { marginBottom: 0, paddingBottom: 0 },
	left: { marginLeft: 0, paddingLeft: 0 }
};

var styles = {
	paper: {
		backgroundColor: _utils.colors.white,
		pointerEvents: 'all',
		transition: 'box-shadow 0.1s ease-out',
		position: 'relative'
	},
	container: {
		width: '100%',
		height: '100%',
		transition: 'box-shadow 0.1s ease-out'
	},
	circle: {
		borderRadius: '50%',
		lineHeight: 0
	},
	zIndex: {
		zIndex: 999
	},
	fullWidth: { width: '100%' },
	fullHeight: { height: '100%' }
};