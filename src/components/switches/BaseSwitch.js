import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import keyCode from '../../utils/keyCode';
import TouchRipple from '../ripple/TouchRipple';
import { colors } from '../../utils/colors';

export const BaseSwitch = (ComposedComponent) => {
	let options = {
		type: 'toggle'
	};

	if (ComposedComponent.options) options = ComposedComponent.options;

	return class extends Component {

		// React Lifecycle
		//
		static propTypes = {
			size: PropTypes.number,
			label: PropTypes.string,
			labelPosition: PropTypes.oneOf(['left', 'right']),
			labelStyle: PropTypes.object,

			// Booleans
			defaultValue: PropTypes.bool,
			disableFocusRipple: PropTypes.bool,
			disableTouchRipple: PropTypes.bool,
			required: PropTypes.bool,
			disabled: PropTypes.bool,
			radio: PropTypes.bool // Needed so that RadioGroup can identify Radio elements
		};

		static defaultProps = {
			size: 28,
			label: '',
			labelPosition: 'right',
			disabled: false,
			disabledColor: colors.grey400,
			radio: options.type === 'radio'
		};

		state = {
			value: false,
			focused: false
		};

		tabPressed = false;

		constructor(props) {
			super(props);
			let { defaultValue } = props;
			if(defaultValue) this.state.value = defaultValue;
		}

		render() {
			let { value } = this.state;
			let {
				size,
				disabled,
				label,
				labelPosition,
				labelStyle,
				disabledColor
			} = this.props;

			let labelDisabledStyle = {};

			if (disabled) labelDisabledStyle = { color: disabledColor };

			let labelComponent = (
				<div style={[
					styles.label,
					labelStyle,
					{
						lineHeight: `${size}px`,
						paddingRight: labelPosition === 'left' ? 10 : 0,
						paddingLeft: labelPosition === 'right' ? 10 : 0
					},
					labelDisabledStyle
				]}>{label}</div>
			);

			let passedProps = Object.assign({}, this.props, {
				getValue: this.getValue.bind(this),
				isDisabled: disabled
			});

			let events = {
				onClick: !disabled ? this._onClick.bind(this) : ()=>{},
				onMouseDown: !disabled ? this._onMouseDown.bind(this) : ()=>{},
				onMouseUp: !disabled ? this._onMouseUp.bind(this) : ()=>{},
				onMouseOver: !disabled ? this._onMouseOver.bind(this) : ()=>{},
				onMouseOut: !disabled ? this._onMouseOut.bind(this) : ()=>{},
				onBlur: !disabled ? this._onBlur.bind(this) : ()=>{},
				onFocus: !disabled ? this._onFocus.bind(this) : ()=>{},
				onKeyDown: !disabled ? this._onKeyDown.bind(this) : ()=>{},
				onKeyUp: !disabled ? this._onKeyUp.bind(this) : ()=>{}
			}

			let disabledStyles = {
				cursor: 'not-allowed'
			}

			return (
				<div style={[styles.baseSwitch, disabled && disabledStyles]} {...events} tabIndex={disabled ? -1 : 0}>
					{(labelPosition === 'left') && labelComponent}
					<ComposedComponent ref="composed" {...passedProps} />
					{(labelPosition === 'right') && labelComponent}
				</div>
			)
		}

		// Action Methods
		//
		setValue(value) { this.setState({ value }) }

		getValue() { return this.state.value }

		hasChanged() { return this.props.defaultValue !== this.state.value }

		toggle() { this.setState({ value: !this.state.value }) }

		// Events
		//
		_onClick(e) {
			let { value } = this.props;

			switch (options.type) {
				case 'toggle':
					this.toggle();
					break;
				case 'radio':
					this.setValue(true)
					break;
			}

			if(this.tabPressed){
				this.refs.composed.refs.ripple.endCenterRipple();
				this.tabPressed = false;
			}

			if (this.props.onClick) this.props.onClick(e);

			options.type === 'toggle' ? this._onToggle(e, !this.state.value) : ()=>{};

			e.stopPropagation();
		}

		_onKeyDown(e) {
			if (e.keyCode == keyCode.ENTER){
				this._onClick(e)
			}

			if (this.props.onKeyDown) this.props.onKeyDown(e);
		}

		_onKeyUp(e) {
			if (e.keyCode == keyCode.SPACE){
				this._onClick(e);
			}

			if (e.keyCode == keyCode.TAB){
				this.tabPressed = true;
				this.refs.composed.refs.ripple.startCenterRipple();
			}
		}

		_onMouseDown(e) {
			if (this.props.onMouseDown) this.props.onMouseDown(e);

			this.refs.composed.refs.ripple.startCenterRipple();
		}

		_onMouseUp(e) {
			if (this.props.onMouseUp) this.props.onMouseUp(e);

			this.refs.composed.refs.ripple.endCenterRipple();
		}

		_onMouseOver(e) {
			if (this.props.onMouseOver) this.props.onMouseOver(e);
		}

		_onMouseOut(e) {
			if (this.props.onMouseOut) this.props.onMouseOut(e);
		}

		_onBlur(e) {
			let { onBlur } = this.props;

			if(this.tabPressed){
				this.refs.composed.refs.ripple.endCenterRipple();
				this.tabPressed = false;
			}

			if( onBlur ) onBlur(e);
		}

		_onFocus(e) {
			if (this.props.onFocus) this.props.onFocus(e);
		}

		_onToggle(e) {
			if (this.props.onToggle) this.props.onToggle(e);
		}
	}
}

export default BaseSwitch;

const styles = {
	// Base
	baseSwitch: {
		display: 'inline-flex',
		justifyContent: 'center',
		cursor: 'pointer',
		outline: 'none'
	},
	label: { userSelect: 'none', pointerEvents: 'none'}
}
