import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import { View, RenderInBody } from 'react-blueprint';
import TransitionGroup from 'react-addons-css-transition-group';
import Transitions from '../../utils/transitions';

const transitionSpeed = 300;

export const BaseDialog = (ComposedComponent, ref) => {

	return class extends Component {

		static displayName = 'BaseDialog';

		static PropTypes = {
			// Configuration
			openOnMount: PropTypes.bool,
			renderInBody: PropTypes.bool,
			dismissOnClickAway: PropTypes.bool,
			lockScrolling: PropTypes.bool,
			transition: PropTypes.oneOf([
				'sticky-top',
				'sticky-bottom',
				'slide-in',
				'scale-in',
				'scale-out',
				'sign-flip',
				'flipX',
				'flipY',
				'slide-and-rotate'
			]),
			// Events
			onClickAway: PropTypes.func,
			onDismiss: PropTypes.func,
			onShow: PropTypes.func
		};

		static defaultProps = {
			renderInBody: false,
			lockScrolling: true,
			openOnMount: false,
			dismissOnClickAway: true,
			transition: 'drop-down'
		};

		state = {
			show: this.props.openOnMount
		};

		componentWillUnmount() {
			this._allowScrolling();
		}

		render() {
			let { show } = this.state,
				{ transition, renderInBody, lockScrolling } = this.props;

			// Bind show and dismiss functions to ComposedComponent via props
			let passedProps = Object.assign({}, this.props, {
				show: this.show.bind(this),
				dismiss: this.dismiss.bind(this)
			});

			// Some transitions require style changes to the dialogContainer
			let dialogContainerStyles = {};

			switch(transition) {
				case 'sticky-top':
					dialogContainerStyles = {
						justifyContent: 'flex-start'
					};
					break;
				case 'sticky-bottom':
					dialogContainerStyles = {
						justifyContent: 'flex-end'
					};
					break;
			}

			// Lock Body scrolling to prevent scrolling abnormalities (proppable)
			if (lockScrolling) { show ? this._preventScrolling() : this._allowScrolling() };

			let content = (

				<div style={[styles.container, show ? {pointerEvents: 'auto'} : {pointerEvents: 'none'}]}>

					{/* Custom Styles/Classes to power TransitionGroup */}
					<Style rules={Transitions[transition]} />

					{/* Transition Group Container */}
					<View column style={[styles.dialogContainer, dialogContainerStyles]}>
						<TransitionGroup
							transitionAppear
							transitionName={transition}
							transitionEnterTimeout={transitionSpeed}
							transitionLeaveTimeout={transitionSpeed}
							transitionAppearTimeout={transitionSpeed}>
							{show && <ComposedComponent key="composed" {...passedProps} />}
						</TransitionGroup>
					</View>

					{/* Semi transparent overlay */}
					<div style={[styles.overlay, !show && styles.hidden, show ? {pointerEvents: 'all'} : {pointerEvents: 'none'}]} onClick={this._onClickAway.bind(this)}/>
				</div>
			);

			return renderInBody ? (<RenderInBody>{content}</RenderInBody>) : content;
		}

		////////////////////
		// Public Methods //
		////////////////////

		show() {
			this.setState({ show: true });
			setTimeout(() => { this._onShow() }, 1)
		}

		dismiss() {
			this.setState({ show: false });
			setTimeout(() => { this._onDismiss() }, 1)
		}

		/////////////
		// Events  //
		/////////////

		_onClickAway() {
			if (this.props.dismissOnClickAway) this.dismiss();
			if (this.props.onClickAway) this.props.onClickAway();
		}

		_onShow() {
			if (this.props.onShow) this.props.onShow();
		}

		_onDismiss() {
			if (this.props.onDismiss) this.props.onDismiss();
		}

		//////////////////////
		// Private Methods  //
		//////////////////////

		_preventScrolling() {
			let body = document.getElementsByTagName('body')[0];
			body.style.overflow = 'hidden';
		}

		_allowScrolling() {
			let body = document.getElementsByTagName('body')[0];
			body.style.overflow = '';
		}

	}
}

export default BaseDialog;

////////////
// Styles //
////////////

const styles = {
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
	},
	overlay: {
		backgroundColor: 'rgba(0,0,0,0.8)',
		width: '100%',
		height: '100%',
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 9999,
		opacity: 1,
		transition: 'opacity 300ms ease-out'
	},
	dialogContainer: {
		width: '100%',
		height: '100%',
		zIndex: 99999,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'relative',
		perspective: 1300,
		pointerEvents: 'none'
	},
	hidden: {
		opacity: 0
	}
}
