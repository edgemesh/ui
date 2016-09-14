import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';
import { View } from 'react-blueprint';
import { colors } from '../../utils/colors';
import Paper from '../paper/Paper';
import RaisedButton from '../button/RaisedButton'
import TransitionGroup from 'react-addons-css-transition-group';
import Transitions from '../../utils/transitions';
import colorTools from '../../utils/colorTools';

const transitionSpeed = 300;

@Radium
export default class Chips extends Component {

	static propTypes = {
		// IceCream configuration
		hPosition: PropTypes.oneOf(['left', 'right']),
		vPosition: PropTypes.oneOf(['top', 'bottom']),
		fontColor: PropTypes.string,
		backgroundColor: PropTypes.string,
		transition: PropTypes.string,
		// Events
		onShow: PropTypes.func,
		onDismiss: PropTypes.func
	};

	static defaultProps = {
		hPosition: 'left',
		vPosition: 'bottom',
		fontColor: colors.grey300,
		backgroundColor: colors.grey900,
		transition: 'drop-down'
	};

	state = {
		iceCreamBar: null
	};

	render() {

		let { iceCreamBar } = this.state;
	
		let {
			transition,
			style
		} = this.props;

		return (
			<div style={[ styles.container, {width: '100%'}, this._getPlacement(), style ]}>
				<TransitionGroup
					transitionName={transition}
					transitionEnterTimeout={transitionSpeed}
					transitionLeaveTimeout={transitionSpeed}>

					{/* Custom Styles/Classes to power TransitionGroup */}
					<Style rules={Transitions[transition]} />
					{ iceCreamBar }
				</TransitionGroup>
			</div>

		);

	}

	//////////////////////
	// Private Methods  //
	//////////////////////

	_getPlacement() {
		let { hPosition, vPosition } = this.props;

		// Horizontal
		if ( hPosition === 'left' ) {
			hPosition = { left: 25 }
		} else {
			hPosition = { right: 25 }
		}

		// Vertical
		if (vPosition === 'bottom') {
			vPosition = { bottom: 25 }
		} else {
			vPosition = { top: 25 }
		}

		let placement = Object.assign(hPosition, vPosition);

		return placement;
	}

	////////////////////
	// Public Methods //
	////////////////////

	pushMessage(message, accent){

		let { backgroundColor, fontColor } = this.props;

		if(!accent) accent = colors.cyan500;

		let hoverColor = colorTools.shadeBlend( -0.2 , accent );
		let rippleColor = colorTools.shadeBlend(0.4 , accent );

		let iceCreamBar = (
			<Paper depth={3} key={Date.now()} fullHeight={false} fullWidth={false} style={[styles.container, styles.iceCreamBarWrapper, this._getPlacement()]}>	
				<View row auto style={[ styles.iceCreamBar, { borderLeft: `5px solid ${accent}`, backgroundColor } ]}>
					<View auto column style={[styles.message, {color: fontColor}]}>
						{message}
					</View>

					<View auto column style={styles.dismissButton}>
						<RaisedButton label="Dismiss" style={{ backgroundColor: accent, color: fontColor }} onClick={this.dismiss.bind(this)} hoverColor={hoverColor} rippleColor={rippleColor} />
					</View>
				</View>
			</Paper>
		);

		this.setState({ iceCreamBar });
		this._onShow();
	}

	dismiss(){
		this.setState({ iceCreamBar: null });
		this._onDismiss();
	}

	/////////////
	// Events  //
	/////////////

	_onShow() {
		if (this.props.onShow) this.props.onShow();
	}

	_onDismiss() {
		if (this.props.onDismiss) this.props.onDismiss();
	}

}

const styles = {
	container: {
		position: 'absolute',
		borderRadius: 3,
		zIndex: 99999
	},
	iceCreamBarWrapper: {
		overflow: 'hidden',
		position: 'absolute'
	},
	iceCreamBar: {
		position: 'relative',
		maxWidth: 450,
		minWidth: 300,
		padding: 10,
		borderRadius: 3
	},
	message: {
		justifyContent: 'center',
		wordBreak:'break-word'
	},
	dismissButton: {
		marginLeft: 15,
		justifyContent: 'center',
		alignItems: 'flex-end',
		maxWidth: 75

	}
}