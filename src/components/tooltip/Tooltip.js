import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { View } from 'react-blueprint';
import BaseTooltip from './BaseTooltip';

@BaseTooltip
@Radium
export default class Tooltip extends Component {

	static displayName = 'Tooltip';

	static options = {
		type: 'tooltip'
	};

	render() {
		let { placeholder, tooltipStyles, position, visible, hPosition, vPosition } = this.props;

		let left;
		let bottom;
		let top;

		let startingX = '0px';
		let startingY = '0px';

		let visibleX = '0px'
		let visibleY = '0px';

		let triangle = 'topTriangle';

		let backgroundColor = 'rgba(0,0,0,0.5)';

		if (tooltipStyles && tooltipStyles.backgroundColor) {
			backgroundColor = tooltipStyles.backgroundColor;
		};

		let triangleColor = {};

		triangleColor.borderColor = `transparent transparent ${backgroundColor} transparent`;

		switch(hPosition) {
			case 'left':
				left = 0;
				startingX = 0;
				visibleX = startingX;
				break;
			case 'right':
				left = '100%';
				startingX = '-100%';
				visibleX = startingX;
				break;
			case 'center':
				left = '50%';
				startingX = '-50%';
				visibleX = startingX;
		}

		switch(vPosition) {
			case 'top':
				visibleY = '-10px';
				bottom = '100%';
				triangle = 'bottomTriangle';
				triangleColor.borderColor = `${backgroundColor} transparent transparent transparent`;
				break;
			case 'bottom':
				top = '100%';
				visibleY = '10px';
				triangle = 'topTriangle';
				triangleColor.borderColor = `transparent transparent ${backgroundColor} transparent`;
				break;
			case 'center':
				top = '50%';
				startingY = '-50%';
				visibleY = startingY;

				if (hPosition === 'left') {
					startingX = '-100%';
					visibleX = 'calc(-100% - 10px)';
					triangle = 'rightTriangle';
					triangleColor.borderColor = `transparent transparent transparent ${backgroundColor}`;

				} else if (hPosition === 'right') {
					startingX = '0px';
					visibleX = '10px';
					triangle = 'leftTriangle';
					triangleColor.borderColor = `transparent ${backgroundColor} transparent transparent`;
				}
				break;
		}
		let tooltipDynamicStyles = {
			left,
			top,
			bottom,
			transform: `translate(${startingX}, ${startingY})`,
			opacity: visible ? 1 : 0,
		};

		let visibleStyles = {
			transform: `translate(${ visibleX }, ${ visibleY })`,
		};

		return (
			<div style={[styles.container, tooltipDynamicStyles, visible && visibleStyles]}>
				<View column={vPosition === 'top' || vPosition === 'bottom'} style={{justifyContent: 'center', alignItems: 'center'}}>

					{ vPosition === 'bottom' || ( vPosition === 'center' && hPosition === 'right') ? (<div style={[styles[triangle],  triangleColor ]}/>) : null }

					<div style={[ styles.tooltip, tooltipStyles ]}>
						{placeholder}
					</div>

					{ vPosition === 'top' || ( vPosition === 'center' && hPosition === 'left' ) ? (<div style={[ styles[triangle], triangleColor ]}/>) : null }

				</View>
			</div>
		);
	}
}

const styles = {
	container: {
		overflow: 'hidden',
		transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
		position: 'absolute',
		zIndex: 9999999,
		pointerEvents: 'none'
	},
	tooltip: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		color: '#fff',
		padding: 10,
		pointerEvents: 'none'
	},
	topTriangle: {
		width: 0,
		height: 0,
		borderStyle: 'solid',
		borderWidth: '0 7.5px 13.0px 7.5px',
		borderColor: 'transparent transparent rgba(0,0,0,0.5) transparent'
	},
	bottomTriangle: {
		width: 0,
		height: 0,
		borderStyle: 'solid',
		borderWidth: '13.0px 7.5px 0 7.5px',
		borderColor: 'rgba(0,0,0,0.5) transparent transparent transparent'
	},
	leftTriangle: {
		width: 0,
		height: 0,
		borderStyle: 'solid',
		borderWidth: '7.5px 15px 7.5px 0',
		borderColor: 'transparent rgba(0,0,0,0.5) transparent transparent'
	},
	rightTriangle: {
		width: 0,
		height: 0,
		borderStyle: 'solid',
		borderWidth: '7.5px 0 7.5px 15px',
		borderColor: 'transparent transparent transparent rgba(0,0,0,0.5)'
	},

}
