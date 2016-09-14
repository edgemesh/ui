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

var _colors = require('../../utils/colors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Icon = (0, _radium2.default)(_class = (_temp = _class2 = function (_Component) {
	_inherits(Icon, _Component);

	function Icon() {
		_classCallCheck(this, Icon);

		return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
	}

	_createClass(Icon, [{
		key: 'renderGraphic',
		value: function renderGraphic() {
			switch (this.props.icon) {
				// React SVG
				// 
				case 'check':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M9 16.17l-4.17-4.17-1.42 1.41 5.59 5.59 12-12-1.41-1.41z' })
					);
				case 'checkbox-checked':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M10,17l-5-5l1.4-1.4 l3.6,3.6l7.6-7.6L19,8L10,17z' })
					);
				case 'checkbox-outline':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z' })
					);
				case 'drawer':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M20,4H4C2.8,4,2,4.8,2,6v12c0,1.2,0.8,2,2,2h16c1,0,2-0.8,2-2V6C22,4.8,21,4,20,4z M20,18h-6V6h6V18z' })
					);
				case 'signal-wifi-0-bar':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { fillOpacity: '.3', d: 'M12.01 21.49l11.63-14.49c-.45-.34-4.93-4-11.64-4-6.72 0-11.19 3.66-11.64 4l11.63 14.49.01.01.01-.01z' })
					);
				case 'signal-wifi-1-bar':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { fillOpacity: '.3', d: 'M12.01 21.49l11.63-14.49c-.45-.34-4.93-4-11.64-4-6.72 0-11.19 3.66-11.64 4l11.63 14.49.01.01.01-.01z' }),
						_react2.default.createElement('path', { style: { fill: this.props.accentColor }, d: 'M6.67 14.86l5.33 6.63v.01l.01-.01 5.33-6.63c-.28-.21-2.31-1.86-5.34-1.86s-5.06 1.65-5.33 1.86z' })
					);
				case 'signal-wifi-2-bar':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { fillOpacity: '.3', d: 'M12.01 21.49l11.63-14.49c-.45-.34-4.93-4-11.64-4-6.72 0-11.19 3.66-11.64 4l11.63 14.49.01.01.01-.01z' }),
						_react2.default.createElement('path', { style: { fill: this.props.accentColor }, d: 'M4.79 12.52l7.2 8.98h.01l.01-.01 7.2-8.98c-.36-.27-3.11-2.51-7.21-2.51s-6.85 2.24-7.21 2.52z' })
					);
				case 'signal-wifi-3-bar':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { fillOpacity: '.3', d: 'M12.01 21.49l11.63-14.49c-.45-.34-4.93-4-11.64-4-6.72 0-11.19 3.66-11.64 4l11.63 14.49.01.01.01-.01z' }),
						_react2.default.createElement('path', { style: { fill: this.props.accentColor }, d: 'M3.53 10.95l8.46 10.54.01.01.01-.01 8.46-10.54c-.43-.33-3.66-2.95-8.47-2.95-4.81 0-8.04 2.62-8.47 2.95z' })
					);
				case 'signal-wifi-4-bar':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12.01 21.49l11.63-14.49c-.45-.34-4.93-4-11.64-4-6.72 0-11.19 3.66-11.64 4l11.63 14.49.01.01.01-.01z' })
					);
				case 'signal-wifi-off':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48l10.33 10.32 5.46-6.8zm-6.6 8.22l-13.77-13.78-1.27 1.28 2.05 2.06c-2.14.98-3.46 2.04-3.69 2.22l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z' })
					);
				case 'signal-wifi-not-connected':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { fillOpacity: '.3', d: 'M21 8.5c.85 0 1.64.23 2.34.62l2.24-2.79c-.48-.37-5.32-4.33-12.58-4.33s-12.1 3.96-12.58 4.32l12.57 15.66.01.02.01-.01 4.21-5.24c-.76-.87-1.22-2-1.22-3.25 0-2.76 2.24-5 5-5z' }),
						_react2.default.createElement('path', { style: { fill: this.props.accentColor }, d: 'M21 10c-1.93 0-3.5 1.57-3.5 3.5h1.75c0-.97.78-1.75 1.75-1.75s1.75.78 1.75 1.75c0 .48-.2.92-.51 1.24l-1.09 1.1c-.63.63-1.02 1.51-1.02 2.47v.44h1.75c0-1.31.39-1.84 1.03-2.47l.78-.8c.5-.5.82-1.2.82-1.97-.01-1.94-1.58-3.51-3.51-3.51zm-.95 11.95h1.9v-1.9h-1.9v1.9z' })
					);
				case 'signal-wifi-null':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M13 4c4.25 0 7.62 1.51 9.68 2.75l-9.68 12.05-9.67-12.05c2.05-1.24 5.42-2.75 9.67-2.75m0-2c-7.26 0-12.1 3.96-12.58 4.32l12.57 15.66.01.02.01-.01 12.57-15.67c-.48-.36-5.32-4.32-12.58-4.32z' })
					);
				case 'signal-wifi-lock':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M20.5 9.5c.28 0 .55.04.81.08l2.69-3.58c-3.34-2.51-7.5-4-12-4s-8.66 1.49-12 4l12 16 3.5-4.67v-2.83c0-2.76 2.24-5 5-5zm2.5 6.5v-1.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v1.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1zm-1 0h-3v-1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v1.5z' })
					);
				case 'radio-on':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
					);
				case 'radio-outline':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z' })
					);
				case 'close':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z' })
					);
				case 'expand-more':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M16.59 8.59l-4.59 4.58-4.59-4.58-1.41 1.41 6 6 6-6z' })
					);
				case 'expand-less':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12 8l-6 6 1.41 1.41 4.59-4.58 4.59 4.58 1.41-1.41z' })
					);
				case 'key':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12.65 10c-.82-2.33-3.04-4-5.65-4-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4h4.35v4h4v-4h2v-4h-10.35zm-5.65 4c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z' })
					);
				case 'account-circle':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' })
					);
				case 'supervisor-account':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('circle', { cx: '12', cy: '13.49', r: '1.5' }),
						_react2.default.createElement('path', { d: 'M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 2.5c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25-2.25-1.01-2.25-2.25 1.01-2.25 2.25-2.25zm5 10.56v2.5c-.45.41-.96.77-1.5 1.05v-.68c0-.34-.17-.65-.46-.92-.65-.62-1.89-1.02-3.04-1.02-.96 0-1.96.28-2.65.73l-.17.12-.21.17c.78.47 1.63.72 2.54.82l1.33.15c.37.04.66.36.66.75 0 .29-.16.53-.4.66-.28.15-.64.09-.95.09-.35 0-.69-.01-1.03-.05-.5-.06-.99-.17-1.46-.33-.49-.16-.97-.38-1.42-.64-.22-.13-.44-.27-.65-.43l-.31-.24c-.04-.02-.28-.18-.28-.23v-4.28c0-1.58 2.63-2.78 5-2.78s5 1.2 5 2.78v1.78z' })
					);
				case 'security':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12 1l-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94v-8.93h-7v-5.7l7-3.11v8.8z' })
					);
				case 'account-box':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2h-14c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1h-12v-1z' })
					);
				case 'filter-list':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M10 18h4v-2h-4v2zm-7-12v2h18v-2h-18zm3 7h12v-2h-12v2z' })
					);
				case 'edit':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M3 17.25v3.75h3.75l11.06-11.06-3.75-3.75-11.06 11.06zm17.71-10.21c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z' })
					);
				case 'mail':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M20 4h-16c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 4l-8 5-8-5v-2l8 5 8-5v2z' })
					);
				case 'dashboard':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M3 13h8v-10h-8v10zm0 8h8v-6h-8v6zm10 0h8v-10h-8v10zm0-18v6h8v-6h-8z' })
					);
				case 'lock':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M18 8h-1v-2c0-2.76-2.24-5-5-5s-5 2.24-5 5v2h-1c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9h-6.2v-2c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z' })
					);
				case 'markunread-mailbox':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M20 6h-10v6h-2v-8h6v-4h-8v6h-2c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2z' })
					);
				case 'perm-identity':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1-2.1-.94-2.1-2.1.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1h-12.2v-1.1c0-.64 3.13-2.1 6.1-2.1m0-10.9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z' })
					);
				case 'notifications':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M11.5 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6.5-6v-5.5c0-3.07-2.13-5.64-5-6.32v-.68c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-2.87.68-5 3.25-5 6.32v5.5l-2 2v1h17v-1l-2-2z' })
					);
				case 'expand-more':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M16.59 8.59l-4.59 4.58-4.59-4.58-1.41 1.41 6 6 6-6z' })
					);
				case 'file-download':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M19 9h-4v-6h-6v6h-4l7 7 7-7zm-14 9v2h14v-2h-14z' })
					);
				case 'computer':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M20 18c1.1 0 1.99-.9 1.99-2l.01-10c0-1.1-.9-2-2-2h-16c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h-4v2h24v-2h-4zm-16-12h16v10h-16v-10z' })
					);
				case 'menu':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M3 18h18v-2h-18v2zm0-5h18v-2h-18v2zm0-7v2h18v-2h-18z' })
					);
				case 'add-circle-o':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M13 7h-2v4h-4v2h4v4h2v-4h4v-2h-4v-4zm-1-5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' })
					);
				case 'verified-user':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M12 1l-9 4v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12v-6l-9-4zm-2 16l-4-4 1.41-1.41 2.59 2.58 6.59-6.59 1.41 1.42-8 8z' })
					);
				case 'dvr':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M21 3h-18c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2l.01-12c0-1.1-.9-2-2-2zm0 14h-18v-12h18v12zm-2-9h-11v2h11v-2zm0 4h-11v2h11v-2zm-12-4h-2v2h2v-2zm0 4h-2v2h2v-2z' })
					);
				case 'swap-horiz':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M6.99 11l-3.99 4 3.99 4v-3h7.01v-2h-7.01v-3zm14.01-2l-3.99-4v3h-7.01v2h7.01v3l3.99-4z' })
					);
				case 'web':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z' })
					);
				case 'chevron-left':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M15.41 7.41l-1.41-1.41-6 6 6 6 1.41-1.41-4.58-4.59z' })
					);
				case 'dotted-circle-dot':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M11 4.07v-2.02c-2.01.2-3.84 1-5.32 2.21l1.42 1.43c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19c-1.48-1.21-3.31-2.01-5.32-2.21v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zm1.61 6.74h2.02c-.2-2.01-1-3.84-2.21-5.32l-1.43 1.42c.86 1.11 1.44 2.44 1.62 3.9zm-14.24-3.9l-1.43-1.42c-1.21 1.48-2.01 3.31-2.21 5.32h2.02c.18-1.46.76-2.79 1.62-3.9zm-1.62 5.9h-2.02c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zm10.93-1c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zm-5.31 3.03v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19c1.48 1.21 3.32 2.01 5.32 2.21v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z' })
					);
				case 'chevron-right':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M10 6l-1.41 1.41 4.58 4.59-4.58 4.59 1.41 1.41 6-6z' })
					);
				// Font Awesome
				//
				case 'code-fork':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M672 1472q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm0-1152q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm640 128q0-40-28-68t-68-28-68 28-28 68 28 68 68 28 68-28 28-68zm96 0q0 52-26 96.5t-70 69.5q-2 287-226 414-68 38-203 81-128 40-169.5 71t-41.5 100v26q44 25 70 69.5t26 96.5q0 80-56 136t-136 56-136-56-56-136q0-52 26-96.5t70-69.5v-820q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136q0 52-26 96.5t-70 69.5v497q54-26 154-57 55-17 87.5-29.5t70.5-31 59-39.5 40.5-51 28-69.5 8.5-91.5q-44-25-70-69.5t-26-96.5q0-80 56-136t136-56 136 56 56 136z' })
					);
				case 'scale':
					return _react2.default.createElement(
						'g',
						null,
						_react2.default.createElement('path', { d: 'M1472 448l-384 704h768zm-1280 0l-384 704h768zm821-192q-14 40-45.5 71.5t-71.5 45.5v1291h608q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1344q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h608v-1291q-40-14-71.5-45.5t-45.5-71.5h-491q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h491q21-57 70-92.5t111-35.5 111 35.5 70 92.5h491q14 0 23 9t9 23v64q0 14-9 23t-23 9h-491zm-181 16q33 0 56.5-23.5t23.5-56.5-23.5-56.5-56.5-23.5-56.5 23.5-23.5 56.5 23.5 56.5 56.5 23.5zm1088 880q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81zm-1280 0q0 73-46.5 131t-117.5 91-144.5 49.5-139.5 16.5-139.5-16.5-144.5-49.5-117.5-91-46.5-131q0-11 35-81t92-174.5 107-195.5 102-184 56-100q18-33 56-33t56 33q4 7 56 100t102 184 107 195.5 92 174.5 35 81z' })
					);
				default:
					return _react2.default.createElement('g', null);
			}
		}
	}, {
		key: 'render',
		value: function render() {

			switch (this.props.icon) {
				// Font Awesome
				// 
				case 'scale':
				case 'code-fork':
					return _react2.default.createElement(
						'svg',
						{ className: this.props.className, viewBox: '0 0 1700 2000', preserveAspectRatio: 'xMidYMid meet',
							style: [{
								verticalAlign: 'middle',
								fill: this.props.color,
								width: this.props.size,
								height: this.props.size,
								overflow: 'visible'
								// transform: 'rotate(180deg)'
							}, this.props.style] },
						this.renderGraphic()
					);
				// React SVG
				// 
				default:
					return _react2.default.createElement(
						'svg',
						{ className: this.props.className, viewBox: '0 0 24 24', preserveAspectRatio: 'xMidYMid meet',
							style: [{
								verticalAlign: 'middle',
								fill: this.props.color,
								width: this.props.size,
								height: this.props.size,
								overflow: 'visible'
							}, this.props.style] },
						this.renderGraphic()
					);
			}
		}
	}]);

	return Icon;
}(_react.Component), _class2.displayName = 'Icon', _class2.propTypes = {
	icon: _react.PropTypes.string.isRequired,
	size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
	style: _react.PropTypes.object,
	color: _react.PropTypes.string,
	accentColor: _react.PropTypes.string,
	className: _react.PropTypes.string
}, _class2.defaultProps = {
	color: _colors.colors.grey800,
	accentColor: _colors.colors.cyan500,
	size: 16
}, _temp)) || _class;

exports.default = Icon;


var styles = {};