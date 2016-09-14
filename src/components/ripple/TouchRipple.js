import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Radium, { Style } from 'radium';
import { colors } from '../../utils/colors';
import TransitionGroup from 'react-addons-css-transition-group';
import Transitions from '../../utils/transitions';

@Radium
export default class TouchRipple extends Component {
	
	static propTypes = {
		rippleColor: PropTypes.string,
		overflowHidden: PropTypes.bool,
		// Handler Overrides
		handleMouseDown: PropTypes.func,
		handleMouseUp: PropTypes.func
	};

	static defaultProps = { 
		rippleColor: colors.grey600,
		overflowHidden: true
	};

	state = {
		ripples: [],
		mouse: []
	};

	componentDimensions = {
		rippleWidth: 0,
		rect: {
			left: 0,
			top: 0
		},
		height: 0
	};

	componentDidMount() {
		this._handleResize();
		this.resizeHandler = this._handleResize.bind(this);
		window.addEventListener('resize', this.resizeHandler);

	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.resizeHandler);
	}

	render() {
		let { children, rippleColor, overflowHidden } = this.props;

		let { ripples, mouse } = this.state;

		let rippleTransitionTime =  800 + ((this.componentDimensions.rippleWidth) / 10);

		return (
			<div
				onMouseDown={this._handleMouseDown.bind(this)}
				onMouseOut={this._handleMouseUp.bind(this)}
				onMouseUp={this._handleMouseUp.bind(this)}
				ref='ripple-container'
				style={[styles.rippleContainer, !overflowHidden && styles.overflowVisible]}>
				
				<Style rules={{
					'.touch-ripple-enter': {
						opacity: '0 !important',
						transform: 'scale(0) !important',
					},
					'.touch-ripple-enter-active': {
						opacity: '0.5 !important',
						transform: 'scale(0.85) !important',
					},
					'.touch-ripple-enter-leave': {
						opacity: '0.5 !important',
						transform: 'scale(0.85) !important',
					},
					'.touch-ripple-leave-active': {
						opacity: '0 !important',
						transform: 'scale(1) !important',
					}
				}} />

				<TransitionGroup
					transitionName={'touch-ripple'}
					transitionEnterTimeout={400}
					transitionLeaveTimeout={400}>


					{/* Ripple Div Generator */}

					{ripples.map( (ripple, i) => {

							let { id, x, y} = ripple;

						return (
							<div
								key={id}
								style={[styles.ripple, {
									width: this.componentDimensions.rippleWidth,
									height: this.componentDimensions.rippleWidth,
									background: rippleColor,
									left: x,
									top: y,
									transition: `transform ${rippleTransitionTime}ms ease-out, opacity ${400}ms ease-out`

								}]} 
							/>
						);
					})}

				</TransitionGroup>
				
				{children}
			</div>
		);
	}

	//event handlers
	_handleMouseUp() {
		this.setState(()=>{
			return  {
				ripples: []
			}

		});
	}

	_handleMouseDown({pageX, pageY}) {
		if (!this.props.handleMouseDown) {	
			// Current ripple key, needs to be unique
			let current = 'ripple-T' + Date.now();

			// Set Ripple Coords
			let rippleCoords = {
				x: pageX - this.componentDimensions.rippleWidth/2 - this.componentDimensions.rect.left,
				y: pageY - this.componentDimensions.rippleWidth/2 - this.componentDimensions.rect.top
			};

			// State changed queued instead of batched
			this.setState(()=>{
				return  { ripples: [{id: current, x: rippleCoords.x, y: rippleCoords.y}] }
			});
		} else {
			this.props.handleMouseDown();
		}

	}

	_handleResize() {
		let componentWidth = ReactDOM.findDOMNode(this.refs['ripple-container']).offsetWidth,
			componentHeight = ReactDOM.findDOMNode(this.refs['ripple-container']).offsetHeight,
			componentRect = ReactDOM.findDOMNode(this.refs['ripple-container']).getBoundingClientRect();

		this.componentDimensions = {rippleWidth: componentWidth * 2.5, rect: componentRect, height: componentHeight};
	}

	// Center Ripple
	startCenterRipple() {
		let current = 'ripple-T' + Date.now();

		let rippleCoords = {
			x: (this.componentDimensions.rippleWidth/2 - (this.componentDimensions.rippleWidth/2.5 * 0.5)) * -1 ,
			y: (this.componentDimensions.rippleWidth/2 - (this.componentDimensions.height * 0.5)) * -1
		};

		this.setState(()=>{
			return  { ripples: [{id: current, x: rippleCoords.x, y: rippleCoords.y}] }
		});
	}

	endCenterRipple() {
		this._handleMouseUp();
	}


}

const styles = {
	rippleContainer:{
		overflow: 'hidden',
		position: 'relative',
		height: '100%',
		width: '100%'
	},
	overflowVisible: {
		overflow: 'visible'
	},
	ripple: {
		opacity: 0.5,
		transform: 'scale(0.85)',
		borderRadius: '50%',
		position: 'absolute',
		pointerEvents: 'none',
		transformOrigin: 'center'
	},

}