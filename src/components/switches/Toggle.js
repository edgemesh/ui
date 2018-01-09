import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

// Coomponents
import Paper from '../paper/Paper';
import BaseSwitch from './BaseSwitch';
import TouchRipple from '../ripple/TouchRipple';
import View from '../view/View';

// Utilities
import { Icon } from '../../';
import { colors } from '../../utils/colors';

@Radium
@BaseSwitch
export default class Toggle extends Component {
	static propTypes = {
		toggleOnColor: PropTypes.string,
		toggleOffColor: PropTypes.string,
		disabledColor: PropTypes.string,
		size: PropTypes.number.isRequired
	};

	static defaultProps = {
		disabledColor: colors.grey400,
		toggleOnColor: colors.cyan500,
		toggleOffColor: colors.grey50,
	};

	static options = {
		type: 'toggle'
	};

	render() {

		let {
			size,
			outlineColor,
			disabledColor,
			toggleOnColor,
			toggleOffColor,
			getValue,
			isDisabled,
			toggled,
			labelPosition
		} = this.props;

		let isToggled = toggled ? toggled : getValue();

		// Apply disabled color if neccesary
		toggleOnColor = isDisabled ? disabledColor : toggleOnColor;
		toggleOffColor = isDisabled ? disabledColor : toggleOffColor;

		return (
			<View style={[ styles.container, { width: size, height: size, justifyContent: labelPosition === 'left' ? 'flex-end' : 'flex-start',} ]}>
				<div style={{position: 'relative', width: size}}>
					<Paper style={styles.track} innerStyle={{borderRadius: 10, backgroundColor: isToggled ? toggleOnColor : toggleOffColor }}/>
					<Paper style={[ styles.thumb, isToggled && styles.toggled ]} innerStyle={{ borderRadius: '50%', backgroundColor: isToggled ? toggleOnColor : toggleOffColor }}>
						<TouchRipple ref="ripple" handleMouseDown={()=>{}} overflowHidden={false} rippleColor={toggleOnColor} speed={150} />
					</Paper>
				</div>
			</View>
		);
	}

}


const styles = {
	container: {
		alignItems: 'center',
		position: 'relative'
	},
	track: {
		width: '100%',
		height: 10,
		borderRadius: 10
	},
	thumb: {
		bottom: ( (18/2) - (10/2) ) * -1, // Thumb height / 2 - Track height /2
		left: 0,
		height: 18,
		width: 18,
		borderRadius: '50%',
		position: 'absolute',
		transformOrigin: '50% 50%',
		transition: 'left 200ms ease-out, backgroundColor 200ms ease-out'
	},
	toggled: {
		left: 'calc(100% - 18px)'
	}
}
