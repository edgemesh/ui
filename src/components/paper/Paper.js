import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import { colors } from '../../utils';

@Radium
export default class Paper extends Component {

	static displayName = 'Paper';

	static propTypes = {
		style: PropTypes.object,
		depth: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
		circle: PropTypes.bool,
		fullHeight: PropTypes.bool,
		fullWidth: PropTypes.bool,
		healLeft: PropTypes.bool,
		healRight: PropTypes.bool,
		healTop: PropTypes.bool,
		healBottom: PropTypes.bool,
		zIndex: PropTypes.number
	};

	static defaultProps = {
		style: {},
		depth: 1,
		circle: false,
		healLeft: false,
		healRight: false,
		healTop: false,
		healBottom: false,
		fullHeight: true,
		fullWidth: false,
		zIndex: 999
	};

	render() {
		let {
			style,
			innerStyle,
			depth,
			circle,
			healLeft,
			healRight,
			healTop,
			healBottom,
			zIndex
		} = this.props;

		let paperStyles = [
			styles.paper,
			depths[depth],
			this.props.fullWidth && styles.fullWidth,
			this.props.fullHeight && styles.fullHeight,
			circle && styles.circle
		];

		let innerStyles = [
			styles.container,
			bottomDepths[depth],
			innerStyle
		];

		let healStyles = [
			heals.container,
			healTop && heals.top,
			healRight && heals.right,
			healBottom && heals.bottom,
			healLeft && heals.left
		];


		if (healTop || healRight || healBottom || healLeft) {
			return (
				<div style={[healStyles, style]}>
					<div style={[ paperStyles, {zIndex} ]}>
						<div ref="innerContainer" style={innerStyles}>
							{this.props.children}
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div style={[ paperStyles, style, {zIndex} ]}>
					<div ref="innerContainer" style={innerStyles}>
						{this.props.children}
					</div>
				</div>
			)
		}
	}

	getInnerContainer() {
		return this.refs.innerContainer;
	}

}

const depths = {
	1: { boxShadow: '0 1px 4px rgba(0, 0, 0, 0.24)' },
	2: { boxShadow: '0 3px 10px rgba(0, 0, 0, 0.23)' },
	3: { boxShadow: '0 6px 10px rgba(0, 0, 0, 0.23)' },
	4: { boxShadow: '0 10px 18px rgba(0, 0, 0, 0.22)' },
	5: { boxShadow: '0 15px 20px rgba(0, 0, 0, 0.22)' }
}

const bottomDepths = {
	1: { boxShadow: '0 1px 6px rgba(0, 0, 0, 0.12)' },
	2: { boxShadow: '0 3px 10px rgba(0, 0, 0, 0.16)' },
	3: { boxShadow: '0 10px 30px rgba(0, 0, 0, 0.19)' },
	4: { boxShadow: '0 14px 45px rgba(0, 0, 0, 0.25)' },
	5: { boxShadow: '0 19px 60px rgba(0, 0, 0, 0.30)' }
}

const heals = {
	container: {
		pointerEvents: 'none',
		overflow: 'hidden',
		marginTop: '-60px',
		marginRight: '-60px',
		marginLeft: '-60px',
		marginBottom: '-60px',
		paddingTop: '60px',
		paddingLeft: '60px',
		paddingRight: '60px',
		paddingBottom: '60px',
		zIndex: 9999
	},
	top: { marginTop: 0, paddingTop: 0 },
	right: { marginRight: 0, paddingRight: 0 },
	bottom: { marginBottom: 0, paddingBottom: 0 },
	left: { marginLeft: 0, paddingLeft: 0 }
}

const styles = {
	paper: {
		backgroundColor: colors.white,
		pointerEvents: 'all',
		transition: 'box-shadow 0.1s ease-out',
		position: 'relative'
	},
	container: {
		width: '100%',
		height: '100%',
		transition: 'box-shadow 0.1s ease-out'
	},
	circle: {
		borderRadius: '50%',
		lineHeight: 0
	},
	zIndex: {
		zIndex: 999
	},
	fullWidth: { width: '100%' },
	fullHeight: { height: '100%' }
};
