'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactBlueprint = require('react-blueprint');

var _radium = require('radium');

var _radium2 = _interopRequireDefault(_radium);

var _colors = require('../../utils/colors');

var _Paper = require('../paper/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _Icon = require('../icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = (0, _radium2.default)(_class = (_temp2 = _class2 = function (_Component) {
    _inherits(Tab, _Component);

    function Tab() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Tab);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selectedIndex: _this.props.defaultTab,
            selectedTabWidth: 0,
            selectedTabLeft: 0,
            tabsContainerWidth: 0
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Tab, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.resizeHandler = this._getSelectedTabWidth.bind(this, true);

            window.addEventListener('resize', this.resizeHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            window.removeEventListener('resize', this.resizeHandler);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            var firstActiveTab = this._findFirstActiveTab(this.props.children);

            if (firstActiveTab !== this.props.defaultTab) {
                this.handleSelect(firstActiveTab);
            }

            setTimeout(function () {
                _this2._getSelectedTabWidth(true, _this2.state.selectedIndex);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                children = _props.children,
                tabStyles = _props.tabStyles,
                tabSelectedStyles = _props.tabSelectedStyles,
                accent = _props.accent,
                onSelect = _props.onSelect,
                style = _props.style,
                fixedWidthTabs = _props.fixedWidthTabs,
                contentContainerStyles = _props.contentContainerStyles,
                tabContainerStyles = _props.tabContainerStyles,
                contentContainerClassName = _props.contentContainerClassName,
                tabDisabledStyles = _props.tabDisabledStyles,
                depth = _props.depth;
            var selectedIndex = this.state.selectedIndex;

            var currentTabContent = void 0;

            var tabs = _react2.default.Children.map(children, function (child, i) {
                // Determine if Tab component via default set 'tab' prop
                if (child.props.tab) {

                    // If tab is selected, set it's children as the currentTabContent
                    if (i == selectedIndex) {
                        currentTabContent = !child.props.disabled && child.props.children;
                    }

                    return _react2.default.cloneElement(child, {
                        index: i,
                        onClick: _this3.handleSelect.bind(_this3, i),
                        onSelect: onSelect ? onSelect : child.onSelect, // optionally override onSelect event for all Tab components
                        selected: i == selectedIndex, // Determine if selected
                        selectedStyles: tabSelectedStyles,
                        style: tabStyles,
                        fixedWidth: fixedWidthTabs,
                        ref: 'Tab-' + i,
                        disabledStyles: tabDisabledStyles,
                        accent: accent
                    });
                } else {
                    // If it's not a Tab component, fire a warning
                    console.warn('Only \'Tab\' components should be direct children of a \'Tabs\' component.');
                }
            }, this);

            return _react2.default.createElement(
                _Paper2.default,
                { style: [styles.container, style], depth: depth },
                _react2.default.createElement(
                    _Paper2.default,
                    { healLeft: true, healRight: true, healTop: true, depth: 1 },
                    _react2.default.createElement(
                        _reactBlueprint.View,
                        { ref: 'tabs-container', row: true, style: [styles.rowHeader, tabContainerStyles] },
                        tabs
                    ),
                    this._renderInkBar()
                ),
                _react2.default.createElement(
                    'div',
                    { className: contentContainerClassName, style: [styles.fullHeight, contentContainerStyles] },
                    currentTabContent
                )
            );
        }

        /////////////////////
        // Public Methods  //
        /////////////////////

    }, {
        key: 'handleSelect',
        value: function handleSelect(index) {
            var _getSelectedTabWidth2 = this._getSelectedTabWidth(false, index),
                selectedTabWidth = _getSelectedTabWidth2.selectedTabWidth,
                selectedTabLeft = _getSelectedTabWidth2.selectedTabLeft;

            this.setState({
                selectedIndex: index,
                selectedTabWidth: selectedTabWidth,
                selectedTabLeft: selectedTabLeft
            });
        }

        /////////////////////
        // Private Methods //
        /////////////////////

    }, {
        key: '_renderInkBar',
        value: function _renderInkBar() {
            var accent = this.props.accent;
            var _state = this.state,
                selectedTabWidth = _state.selectedTabWidth,
                selectedTabLeft = _state.selectedTabLeft,
                tabsContainerWidth = _state.tabsContainerWidth;

            // Keeping our width in percentage versus pixel value, removes the perceived lag when resizing.

            var width = selectedTabWidth / tabsContainerWidth * 100;
            var left = selectedTabLeft / tabsContainerWidth * 100;

            // This is mostly to handle on mount, so that the Inkbar is not stretched all the way across
            if (!width || width === Infinity) {
                width = 0, left = 0;
            }

            width = width + '%';
            left = left + '%';

            var inkBarContainerStyles = {
                width: '100%',
                transform: 'translateX(' + left + ')'
            };

            var inkBarStyles = {
                width: width,
                backgroundColor: accent
            };

            return _react2.default.createElement(
                'div',
                { style: [styles.inkBar, inkBarContainerStyles] },
                _react2.default.createElement('div', { style: [styles.inkBar, inkBarStyles] })
            );
        }
    }, {
        key: '_getSelectedTabWidth',
        value: function _getSelectedTabWidth(setState, index) {
            var children = this.props.children;


            if (index !== undefined && index !== null) {
                if (setState) index = this.state.selectedIndex;

                var selectedTabWidth = (0, _reactDom.findDOMNode)(this.refs['Tab-' + index]).offsetWidth;
                var selectedTabLeft = (0, _reactDom.findDOMNode)(this.refs['Tab-' + index]).offsetLeft;
                var tabsContainerWidth = (0, _reactDom.findDOMNode)(this.refs['tabs-container']).offsetWidth;

                if (setState) {
                    this.setState({ selectedTabWidth: selectedTabWidth, selectedTabLeft: selectedTabLeft, tabsContainerWidth: tabsContainerWidth });
                } else {
                    return { selectedTabWidth: selectedTabWidth, selectedTabLeft: selectedTabLeft, tabsContainerWidth: tabsContainerWidth };
                }
            } else {
                return { selectedTabWidth: 0, selectedTabLeft: 0, tabsContainerWidth: 0 };
            }
        }
    }, {
        key: '_findFirstActiveTab',
        value: function _findFirstActiveTab(children) {
            var firstActiveTab = void 0;

            var activeTab = _react2.default.Children.toArray(children).some(function (child, i) {
                if (child.props.tab) {
                    if (!child.props.disabled) {
                        firstActiveTab = i;
                        return true;
                    }
                }
            });

            if (!activeTab) {
                console.warn('You must have at least ONE `Tab` element that is not disabled!');
            }

            return firstActiveTab;
        }
    }]);

    return Tab;
}(_react.Component), _class2.propTypes = {
    // Tabs configuration
    defaultTab: _react.PropTypes.number, // Index of the children array
    tabStyles: _react.PropTypes.object, // Pass style to all child `Tab` elements
    tabDisabledStyles: _react.PropTypes.object, // Pass disabled style to all child `Tab` elements
    tabSelectedStyles: _react.PropTypes.object, // Pass style to the selected `Tab` element
    tabContainerStyles: _react.PropTypes.object, // Pass style to the container of the `Tab` elements
    depth: _react.PropTypes.number, // Sets the depth of the outer `Paper` element of the Tabs component
    contentContainerStyles: _react.PropTypes.object, // Pass style to the content container of the `Tabs` elements
    accent: _react.PropTypes.string, // InkBar and active `Tab` text color
    contentContainerClassName: _react.PropTypes.string, // Just here for webkit scrollbar support 
    fixedWidthTabs: _react.PropTypes.bool, // True: Children `Tab` elements are fixed equal width --
    // False: Children `Tab` elements are auto width aligned flex-start
    // Event
    onSelect: _react.PropTypes.func // Optional onSelect event override for all `Tab` components -- 
    // onSelect will return value and tab index of selected tab on trigger
}, _class2.defaultProps = {
    defaultTab: 0,
    depth: 1,
    accent: _colors.colors.cyan500,
    fixedWidthTabs: true
}, _temp2)) || _class;

exports.default = Tab;


var styles = {
    fullHeight: {
        height: '100%'
    },
    rowHeader: {
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inkBar: {
        height: 2,
        transition: 'transform 200ms ease-out, width 200ms ease-out'
    }
};