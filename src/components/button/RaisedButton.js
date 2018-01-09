import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, {Style} from 'radium';
import { BaseButton } from './BaseButton';
import { Paper } from '../../';
import { colors } from '../../utils/colors';
import TouchRipple from '../ripple/TouchRipple';
import uuid from 'uuid';


@Radium
@BaseButton
export default class RaisedButton extends Component {

	static propTypes = {
		hoverColor: PropTypes.string,
		rippleColor: PropTypes.string,
		label: PropTypes.string
	};

	static defaultProps = {
		hoverColor: colors.grey200
	};

	state = {
		depth: 1
	};

	//Event handlers
	_handleMouseDown(){
		this.setState(()=>{
			return {
				depth: 2
			}
		});
	}

	_handleMouseUp(){
		this.setState(()=>{
			return {
				depth: 1
			}
		});
	}

	render() {
		let { depth } = this.state;

		let {
			// Button Native Props
			label,
			disabled,
			style,
			onClick,
			onBlur,
			onKeyDown,
			onKeyUp,
			// Regular props
			fullWidth,
			rippleColor,
			disabledStyle,
			children,
			buttonStyles,
			hoverColor
		} = this.props;

		let id = uuid.v1();

		let buttonProps = {
			label, disabled, style, onClick, onBlur, onKeyDown, onKeyUp
		};

		return (
			<Paper fullWidth={this.props.fullWidth} fullHeight={false} style={styles.paper} depth={depth}>
				{/* Work-around fix for Radium throwing a unique key error --
					TODO: Re-Write TouchRipple to use ReactCSSTransitionGroups, which should alleviate the error */}
				<Style rules={{
					[`.emui-button-hover-${id}:hover`]:{
						backgroundColor: `${hoverColor} !important`,
					}
				}}/>
				<div style={styles.rippleContainer}>
					<TouchRipple ref="ripple" rippleColor={rippleColor}>
						<button
							{...buttonProps}
							className={!disabled && `emui-button-hover-${id}`}
							onMouseDown={this._handleMouseDown.bind(this)}
							onMouseUp={this._handleMouseUp.bind(this)}
							onMouseLeave={this._handleMouseUp.bind(this)}
							style={[
								buttonStyles,
								styles.button,
								disabled ? disabledStyle : style
							]}>

							{children ? children : label}

						</button>
					</TouchRipple>
				</div>
			</Paper>
		);
	}

}

const styles = {
	button: {
		textAlign: 'center',
		fontSize: 14,
		borderRadius: 4,
		margin: 0 // needed for Safari -- because it likes to add margin to <button> elements
	},
	rippleContainer: {
		overflow: 'hidden',
		position: 'relative'
	},
	paper: {
		display: 'inline-block',
		borderRadius: 4,
		overflow: 'hidden'
	}
}
