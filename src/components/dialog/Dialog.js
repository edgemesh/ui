import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode as $ } from 'react-dom';
import Icon from '../icon/Icon';
import Radium from 'radium';
import Paper from '../paper/Paper';
import BaseDialog from './BaseDialog';
import RaisedButton from '../button/RaisedButton'
import { View, RenderInBody } from 'react-blueprint';
import { colors } from '../../utils/colors';

@Radium
@BaseDialog
export default class Dialog extends Component {

	static displayName = 'Dialog';

	static propTypes = {
		title: PropTypes.string.isRequired,
		body: PropTypes.any,
		actions: PropTypes.array,
		accentColor: PropTypes.string,
		backgroundColor: PropTypes.string,
		titleStyle: PropTypes.object,
		bodyStyle: PropTypes.object
	};

	static defaultProps = {
		accentColor: colors.grey200,
		backgroundColor: colors.grey50,
		closeStyle: {},
		closeColor: colors.grey500
	};

	render() {

		let {
			show,
			dismiss,
			isShown,
			transitionTiming,
			title,
			body,
			actions,
			accentColor,
			backgroundColor,
			style,
			titleStyle,
			bodyStyle,
			closeStyle,
			closeColor
		} = this.props;


		// Render buttons from action array, if no actions in array, create dismiss button
		if (actions && actions.length) {
			actions = actions.map((action, i)=>{
				return (
					<div key={i} style={styles.actionButton}>
						<RaisedButton
							{...action.props}
							label={action.label}
							onClick={action.onClick}
							style={[{ backgroundColor: accentColor }, action.style]}
							disabled={action.disabled}/>
					</div>
				);
			});
		}

		return  (

			<Paper depth={1} style={[style, styles.container]}>
				<div style={{backgroundColor}}>

					{/* Title */}
					<div style={[styles.title, {backgroundColor: accentColor}, titleStyle]}>

						{title}

						{/* Close Icon */}
						<div onClick={dismiss}>
							<Icon
								key='close'
								icon='close'
								size={28}
								color={closeColor}
								style={[ styles.close, closeStyle ]} />
						</div>
					</div>


					{/* Body */}
					<div style={[styles.body, bodyStyle]}>
						{body}
					</div>

					{/* Actions */}
					<View style={styles.actions}>
						{actions}
					</View>

				</div>
			</Paper>
		);
	}

	show() {
		this.props.show();
	}

	dismiss() {
		this.props.dismiss();
	}
}

const styles = {
	container: {
		borderRadius: 4,
		overflow: 'hidden',
		margin: 50,
		maxWidth: 700
	},
	title: {
		fontSize: 25,
		fontWeight: '200',
		textAlign: 'center',
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 50,
		paddingRight: 50,
		color: colors.grey700,
		position: 'relative'
	},
	body: {
		padding: 10,
		textAlign: 'center',
		fontSize: 17,
		color: colors.grey500
	},
	actions: {
		padding: 10,
		justifyContent: 'center'

	},
	actionButton: {
		marginLeft: 10,
		marginRight: 10
	},
	close: {
		position: 'absolute',
		top: 'calc(50% - 14px)',
		right: 20,
		cursor: 'pointer',
		':hover':{
			fill: colors.grey700
		}
	}

}
