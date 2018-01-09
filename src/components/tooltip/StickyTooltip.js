import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import BaseTooltip from './BaseTooltip';
import RenderInBody from '../render-in-body/RenderInBody';

@BaseTooltip
@Radium
export default class StickyTooltip extends Component {
	static options = {
		type: 'stickyTooltip'
	};

	render() {

		let { placeholder, tooltipStyles, position, visible } = this.props;

		let tooltipDynamicStyles = {
			transform: this._getTranslateOffset(),
			left: position.x,
			top: position.y,
			opacity: visible ? 1 : 0
		};

		return (
			<RenderInBody>
				<div style={[ styles.tooltip, tooltipDynamicStyles, tooltipStyles ]}>
					{placeholder}
				</div>
			</RenderInBody>

		);
	}

	/////////////////////
	// Private Methods //
	/////////////////////

	// Gets the offset based on the hPosition and vPosition prop
	_getTranslateOffset(){

		let x,y;

		switch(this.props.hPosition) {
			case 'left':
				x = 'calc(-100% - 5px)'
				break;
			case 'right':
				x = '10px';
				break;
			default:
				break;
		}

		switch(this.props.vPosition) {
			case 'top':
				y = '-100%'
				break;
			case 'bottom':
				y = '0px';
				break;
			default:
				break;
		}
		return `translate(${x},${y})`
	}
}

const styles = {
	tooltip: {
		backgroundColor: 'rgba(0,0,0,0.5)',
		color: '#fff',
		padding: 10,
		position: 'absolute',
		transition: 'opacity 0.2s',
		pointerEvents: 'none',
		zIndex: 9999999
	}
}
