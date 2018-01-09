import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-blueprint';
import Radium from 'radium';
import { Paper } from '../../';
import { colors } from '../../utils/colors';
import Icon from '../icon/Icon';

@Radium
export default class ChipItem extends Component {

	static propTypes = {
		color: PropTypes.string.isRequired,
		backgroundColor: PropTypes.string.isRequired,
		label: PropTypes.string,
		value: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.number,
		])
	};

	////////////
	// Events //
	////////////

	render() {
		let { label, value, color, backgroundColor } = this.props;

		return (
			<Paper style={[styles.chipContainer, {margin: 5}]} innerStyle={{backgroundColor}}>
				<div style={[ styles.label, {color} ]}>
					{label}
				</div>
				{/* Close Icon */}
				<div onClick={this._dismiss.bind(this)}>
					<View key='closeButton' style={styles.closeButton}>
						<Icon
							icon='close'
							color={color}
							size={15}
							color={colors.grey500}
							style={styles.close} />
					</View>
				</div>
			</Paper>
		);

	}

	_dismiss() {
		let {value, dismiss} = this.props;

		dismiss(value);
	}

}

const styles = {
	chipContainer: {
		position: 'relative',
		height: 26,
		borderRadius: 15,
		overflow: 'hidden'
	},
	label: {
		textOverflow: 'ellipsis',
		position: 'relative',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
        paddingLeft: 15,
        lineHeight: '16px',
        fontSize: 13,
        paddingRight: 35,
        paddingTop: 5,
        paddingBottom: 5,
    },
	closeButton: {
		position: 'absolute',
		right: 2.5,
		top: 0,
		cursor: 'pointer',
		height: 26,
		width: 26,
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0.5,
		transition: 'opacity 200ms ease-out',
		':hover':{
			opacity: 1
		}
	}
}
