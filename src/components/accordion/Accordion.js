import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import { colors } from '../../utils/colors';
import ReactDOM from 'react-dom';

@Radium
export default class Accordion extends Component {

	static displayName = 'Accordion';

	static propTypes = {
		// Component Configuartion
		expandDirection: PropTypes.oneOf(['up', 'down']),
		expandIsOverlay: PropTypes.bool, // If true expand content will be position: 'absolute'
		expandContent: PropTypes.any,
		expandContentStyle: React.PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.array
		]),
		expandContentContainerStyle: React.PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.array
		]),
		expandedOnMount: PropTypes.bool,
		transitionSpeed: PropTypes.number,
		disabled: PropTypes.bool,
		disabledStyle: React.PropTypes.oneOfType([
			React.PropTypes.object,
			React.PropTypes.array
		]),
		// Events
		onExpandOpen: PropTypes.func,
		onExpandClose: PropTypes.func
	};

	static defaultProps = {
		expandDirection: 'down',
		expandIsOverlay: false,
		expandedOnMount: false,
		transitionSpeed: 300,
		disabled: false
	};

	state = {
		expanded: this.props.expandedOnMount
	};

	componentDidMount() {
		if (this.props.expandedOnMount) {
			this.expandContent(true);
		}
	}

	render() {
		let { expandDirection, style, onClick, children, disabled, disabledStyle } = this.props,
			{ expanded } = this.state,
			topExpandContent,
			bottomExpandContent;

		let childrenContainerStyles = { cursor: onClick && !disabled ? 'pointer' : 'initial' };

		let expandContent = this._renderExpandContent();

		if (expandDirection === 'up') {
			topExpandContent = expandContent;
		} else if (expandDirection === 'down') {
			bottomExpandContent = expandContent
		}

		return (
			<div style={styles.container}>

				{/* Expanded Content when expandDirection prop is set to 'up' */}
				{ topExpandContent }

				{/* Child elements */}
				<div style={[childrenContainerStyles, style, disabledStyle]} onClick={!disabled && onClick}>
					{ children }
				</div>

				{/* Expanded Content when expandDirection prop is set to 'down' */}
				{ bottomExpandContent }
			</div>
		);
	}

	/////////////////////
	// Public Methods  //
	/////////////////////

	expandContent(open) {
		let { transitionSpeed } = this.props;
		let { expanded } = this.state;

		let container = ReactDOM.findDOMNode(this.refs.expandContentContainer),
			prevHeight = container.style.height;

		// DOM logic
		if (open) {container.style.height = 'auto'};

		let endHeight = getComputedStyle(container).height;

		container.style.height = open ? prevHeight : endHeight;

		container.offsetHeight; // forces a repaint, needed to trigger animation/reflow

		container.style.transition = `height ${transitionSpeed}ms ease-out`;

		container.style.height = open ? endHeight : '0px';

			// When transition ends, reset transition property to empty and set height property to auto
			container.addEventListener('transitionend', function transitionEnd(event) {
				if (event.propertyName == 'height') {
					container.style.transition = '';
					container.style.height = open ? 'auto' : '0px';
					container.removeEventListener('transitionend', transitionEnd, false);
				}
			}, false);

		// Fire events
		open ? this._onExpandOpen() : this._onExpandClose();

		// Change state
		this.setState({
			expanded: open
		});
	}

	toggleExpandContent() {
		this.state.expanded ? this.expandContent(false) : this.expandContent(true);
	}

	/////////////
	// Events  //
	/////////////

	_onExpandOpen() {
		let {onExpandOpen} = this.props;

		if (onExpandOpen) onExpandOpen();
	}

	_onExpandClose() {
		let {onExpandClose} = this.props;

		if (onExpandClose) onExpandClose();
	}

	/////////////////////
	// Private Methods //
	/////////////////////

	_renderExpandContent() {
		let {
			expandAmount,
			expandDirection,
			expandContent,
			expandContentStyle,
			expandContentContainerStyle,
			expandIsOverlay
		} = this.props;

		let contentContainerStyles;

		if (expandIsOverlay) {

			contentContainerStyles = {
				position: 'absolute',
				bottom: expandDirection === 'up' ? '100%' : 'initial',
				top: expandDirection === 'down' ? '100%' : 'initial'
			}
		};

		if (expandContent) {
			return (
				<div ref="expandContentContainer" style={[styles.expandContentContainer, contentContainerStyles, expandContentContainerStyle]}>
					<div style={expandContentStyle}>
						{expandContent}
					</div>
				</div>
			);
		}
	}
}

const styles = {
	container: {
		width: '100%',
		position: 'relative'
	},
	expandContentContainer: {
		width: '100%',
		overflow: 'hidden',
		height: 0,
		position: 'relative'
	}
}
