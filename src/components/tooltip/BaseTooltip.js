import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

@Radium
export const BaseTooltip = (ComposedComponent) => {

	let options = {
		type: ''
	};

	if (ComposedComponent.options) options = ComposedComponent.options;

	return class extends Component {

		static propTypes = {
			vPosition: React.PropTypes.oneOf(['top','bottom', 'center']),     	// Horizontal positioning of the Tooltip - StickyTooltips do not support 'center'
			hPosition: React.PropTypes.oneOf(['left','right', 'center']),     	// Vertical positioning of the Tooltip - StickyTooltips do not support 'center'
			placeholder: React.PropTypes.any,                       			// The tooltip content
			tooltipStyles: React.PropTypes.object,                  			// Use this to pass styles to the actual Tooltip
			disabled: React.PropTypes.bool 										// Disables the tooltip but still renders the children
		};

		static defaultProps = {
			hPosition: options.type === 'tooltip' ?  'center' : 'right',
			vPosition: 'bottom',
			disabled: false
		};

		state = {
			visible: false,
			position: { x: 0, y: 0 }
		};

		render() {

			let { style, children, disabled, hPosition, vPosition } = this.props;

			if(disabled) return <div>{children}</div>;

			if (hPosition === 'center' && vPosition === 'center' ) {
				hPosition = 'left';
				console.warn(`Both hPosition and vPosition props cannot be 'center' in 'Tooltip' component -- hPosition has been changed to 'left'`)
			}

			if (options.type === 'stickyTooltip' && hPosition === 'center' || options.type === 'stickyTooltip' && vPosition === 'center') {
				if (hPosition === 'center') hPosition = 'right';
				if (vPosition === 'center') vPosition = 'bottom';
				console.warn(`Both the hPosition and vPosition props do not support 'center' for 'StickyTooltip' components -- using 'center' as a prop for 'StickyTooltips' will result in those props being reset to default which 'hPosition: 'right'' and 'vPosition: 'bottom''`)
			}

			return (
				<div
					style={[{position: 'relative'},style]}
					onMouseMove={options.type === 'stickyTooltip' && this._onMouseMove.bind(this)}
					onMouseEnter={this._onMouseEnter.bind(this)}
					onMouseLeave={this._onMouseLeave.bind(this)}>

					{children}

					<ComposedComponent {...this.props} {...this.state} hPosition={hPosition} vPosition={vPosition} />

				</div>
			)
		}

		////////////
		// Events //
		////////////

		//Use the Synthetic Event's pageX/pageY properties to update state.
		_onMouseMove(e){
			this.setState({
				position:{ x: e.pageX, y: e.pageY }
			})
		}

		_onMouseEnter(e){
			this.setState({
				visible: true
			})
		}

		_onMouseLeave(e){
			this.setState({
				visible: false
			})
		}
	}

}

export default BaseTooltip;
