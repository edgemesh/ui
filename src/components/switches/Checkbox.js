import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import BaseSwitch from './BaseSwitch';
import TouchRipple from '../ripple/TouchRipple';
import { Icon } from '../../';
import { colors } from '../../utils/colors';


@Radium
@BaseSwitch
export default class Checkbox extends Component {

	static propTypes = {
		outlineColor: PropTypes.string,
		checkColor: PropTypes.string,
		disabledColor: PropTypes.string,
		size: PropTypes.number.isRequired
	};

	static defaultProps = {
		outlineColor: colors.grey800,
		disabledColor: colors.grey400,
		checkColor: colors.cyan500
	};

	// Touch Ripple Event Handler Override
	_startRipple() {
		this.refs.ripple.startCenterRipple()
	}

	render() {

		let {
			size,
			outlineColor,
			disabledColor,
			checkColor,
			getValue,
			isDisabled
		} = this.props;

		let isSwitched = getValue();

		// Apply disabled color if neccesary
		checkColor = isDisabled ? disabledColor : checkColor;
		outlineColor = isDisabled ? disabledColor : outlineColor;

		return (
			<div style={{ width: size, height: size }}>
				<TouchRipple ref="ripple" handleMouseDown={()=>{}} overflowHidden={false} rippleColor={checkColor} speed={150}>
					<Icon
						icon='checkbox-outline'
						size={size}
						color={isSwitched ? checkColor : outlineColor}
						style={[
							styles.box
					]} />
					<Icon
						icon='checkbox-checked'
						size={size}
						color={checkColor}
						style={[
						styles.check,
						isSwitched && styles.isSwitched
					]}/>
				</TouchRipple>
			</div>
		);
	}

}


const styles = {
	box: {
		position: 'absolute'

	},
	check: {
		position: 'absolute',
		opacity: 0,
		transform: 'scale(0)',
		transformOrigin: '50% 50%',
		transition: 'transform 200ms ease-out, opacity 200ms ease-out, fill 200ms ease-out'
	},
	isSwitched: {
		opacity: 1,
		transform: 'scale(1)'
	}
}
