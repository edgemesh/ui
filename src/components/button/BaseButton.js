import React, { Component, PropTypes } from 'react';
import { Paper } from '../../';
import { colors } from '../../utils/colors';

const KEYCODE = {
	ENTER: 13,
	SPACE: 32,
	TAB: 9
}

export const BaseButton = (ComposedComponent, ref) => {

	return class extends Component {

		static displayName = 'BaseButton';

		static propTypes = {
			// Configuration
			style: PropTypes.object,
			disabledStyle: PropTypes.object,
			disabled: PropTypes.bool,
			fullWidth: PropTypes.bool,
			hoverColor: PropTypes.string,
			// Events
			onClick: PropTypes.func,
			onBlur: PropTypes.func,
			onFocus: PropTypes.func
		};

		tabPressed = false;

		// Events
		_onClick(e) {
			let { onClick } = this.props;
			
			if(this.tabPressed){
				this.refs.composed.refs.ripple.endCenterRipple();
				this.tabPressed = false;
			}

			if( onClick ) onClick(e);

		}

		_onFocus(e) {
			let { onFocus } = this.props;
			
			if( onFocus ) onFocus(e);
		}

		_onBlur(e) {
			let { onBlur } = this.props;

			if(this.tabPressed){
				this.refs.composed.refs.ripple.endCenterRipple();
				this.tabPressed = false;
			}
						
			if( onBlur ) onBlur(e);
		}

		_onKeyDown(e) {
			if (e.keyCode == KEYCODE.ENTER){
				this._onClick(e);
			}

		}

		_onKeyUp(e) {
			if (e.keyCode == KEYCODE.SPACE){
				this._onClick(e);
			}

			if (e.keyCode == KEYCODE.TAB){
				this.tabPressed = true;
				this.refs.composed.refs.ripple.startCenterRipple();
			}

		}

		// Render
		render() {

			let { style, disabled, fullWidth, hoverColor, disabledStyle } = this.props;

			let onClick = !disabled ? this._onClick.bind(this) : ()=>{}, 
				onFocus = !disabled ? this._onFocus.bind(this) : ()=>{},
				onBlur = !disabled ? this._onBlur.bind(this) : ()=>{},
				onKeyDown = !disabled ? this._onKeyDown.bind(this) : ()=>{},
				onKeyUp = !disabled ? this._onKeyUp.bind(this) : ()=>{};

			let buttonStyles = [
				fullWidth && styles.fullWidth,
				styles.button,
				!disabled && style,
				disabled && styles.disabled,
				disabled && styles.disabledStyle
			];

			let buttonProps = Object.assign({}, this.props, {
				disabled,
				onClick,
				onFocus,
				onBlur,
				onKeyUp,
				onKeyDown,
				buttonStyles
			});

			return (
				<ComposedComponent ref="composed" {...buttonProps}/>
			);

		}
	}

}

export default BaseButton;

const styles = {
	button: {
		backgroundColor: colors.grey300,
		padding: 10,
		border: 0,
		cursor: 'pointer',
		color: colors.grey700
	},
	disabled: {
		backgroundColor: colors.grey400,
		cursor: 'initial',
		color: colors.grey500
	},
	fullWidth: {
		width: '100%'
	}
}