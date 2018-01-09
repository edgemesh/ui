import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import BaseSwitch from './BaseSwitch';
import TouchRipple from '../ripple/TouchRipple';
import { Icon } from '../../';
import { colors } from '../../utils/colors';


@Radium
@BaseSwitch
export default class Radio extends Component {
	static propTypes = {
		outlineColor: PropTypes.string,
		switchColor: PropTypes.string,
		disabledColor: PropTypes.string,
		size: PropTypes.number.isRequired
	};

	static defaultProps = {
		outlineColor: colors.grey800,
		disabledColor: colors.grey400,
		switchColor: colors.cyan500
	};

	static options = {
		type: 'radio'
	};

	render() {

		let {
			size,
			outlineColor,
			disabledColor,
			switchColor,
			getValue,
			isDisabled,
			switched
		} = this.props;

		let isSwitched = switched;

		// Apply disabled color if neccesary
		switchColor = isDisabled ? disabledColor : switchColor;
		outlineColor = isDisabled ? disabledColor : outlineColor;

		return (
			<div style={{ width: size, height: size, cursor: isDisabled ? 'not-allowed' : 'pointer' }}>
				<TouchRipple ref="ripple" handleMouseDown={()=>{}} overflowHidden={false} rippleColor={switchColor} speed={150}>
					<Icon
						icon='radio-outline'
						size={size}
						color={isSwitched ? switchColor : outlineColor}
						style={[
							styles.box
					]} />
					<Icon
						icon='radio-on'
						size={size}
						color={switchColor}
						style={[
						styles.switch,
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
	switch: {
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
