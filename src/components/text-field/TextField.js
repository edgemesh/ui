import React, { Component, PropTypes } from 'react';
import Radium, { Style } from 'radium';
import { BaseTextField } from './BaseTextField';
import { Paper, Icon } from '../../';
import { colors } from '../../utils/colors';

@BaseTextField
@Radium
export default class TextField extends Component {

	static propTypes = {
		// Color styles
		accentColor: PropTypes.string,
		errorColor: PropTypes.string,
		successColor: PropTypes.string,
		backgroundColor: PropTypes.string,
		textColor: PropTypes.string,
		placeholderColor: PropTypes.string,
		// Disabled Styles
		disabledBackgroundColor: PropTypes.string,
		disabledTextColor: PropTypes.string,
		disabledPlaceholderColor: PropTypes.string,
		// Config
		pushErrorText: PropTypes.bool,
		underline: PropTypes.bool,
		overline: PropTypes.bool,
		compact: PropTypes.bool,
		floatingLabel: PropTypes.bool,
		autocomplete: PropTypes.bool,
		zIndex: PropTypes.number
	};

	static defaultProps = {
		backgroundColor: colors.white,
		textColor: colors.grey800,
		placeholderColor: colors.grey400,
		accentColor: colors.cyan600,
		errorColor: colors.amber600,
		successColor: colors.lightGreen600,
		disabledTextColor: colors.grey500,
		disabledBackgroundColor: colors.grey400,
		disabledPlaceholderColor: colors.grey400,
		pushErrorText: true,
		underline: true,
		compact: false,
		overline: false,
		floatingLabel: true,
		autocomplete: true,
		zIndex: 999
	};

	componentWillMount(props) {

	}

	componentDidMount() {
		// This is needed to detect brwoser autocomplete/autofill 
        setTimeout(()=>{
			let value = this.refs.input.value,
				defaultValue = this.props.defaultValue;

        	if (value !== defaultValue) {
        		this.setState({value})
        	}
        }, 100)
    }

	render() {

		let { 
			value,
			defaultValue,
			validate,
			errorText,
			pushErrorText,
			backgroundColor,
			textColor,
			placeholderColor,
			errorColor,
			accentColor,
			successColor,
			placeholder,
			style,
			overline,
			underline,
			compact,
			type,
			disabled,
			disabledTextColor,
			disabledBackgroundColor,
			disabledPlaceholderColor,
			zIndex,
			// Events
			onKeyUp,
			onKeyDown,
			onInput,
			onKeyPress,
			onFocus,
			onBlur,
			onEnter,
			onEscape,
			onTab,
		} = this.props;
		
		let isFocused = this.props.isFocused(),
			isValid = this.props.isValid(),
			hasValue = this.hasValue(),
			isError = errorText !== '';

		let line = (
			<div style={[
				styles.line,
				overline && styles.overline,
				underline && styles.underline,
				{
					backgroundColor: isError ? errorColor : (validate && isValid) ? successColor : disabled ? disabledBackgroundColor : accentColor,
					transform: `scaleX(${isFocused || isError ? 1 : 0})` 
				 },
			]} />
		);



		let lineHeight = compact ? 35 : 44;
		let yValue = lineHeight * -1;

		let floatingLabelColor;

		if (isFocused) {
			floatingLabelColor = !disabled ? accentColor : disabledPlaceholderColor; 
		} else {
			if (hasValue){
				floatingLabelColor = !disabled ? textColor : disabledPlaceholderColor;
			} else {
				floatingLabelColor = !disabled ? placeholderColor : disabledTextColor;
			}
		}

		let labelCoords = {
			x: hasValue || isFocused ? -10 : 0,
			y: hasValue || isFocused ? yValue : 0,
			scale: hasValue || isFocused ? 0.75 : 1
		}
		let floatingLabel = (

			<div style={[
				styles.floatingLabel,
				{ 
					color: floatingLabelColor,
					transform: `scale(${labelCoords.scale}) translateX(${labelCoords.x}px) translateY(${labelCoords.y}px)`,
					lineHeight: `${lineHeight}px`
				},
				disabled && styles.disabled
			]}>{ placeholder }</div>
		);


		let errorMessage = (

			<div style={[ 
				styles.errorMessage,
				!pushErrorText && styles.absolute,
				{ height: isError ? 15 : 0 }
			]}>
				<p style={[ 
					styles.errorText,
					{ color: errorColor }
				]}>{errorText}</p>
			</div>
		);

		let checkMark = (

			<span style={[styles.checkMark, { 
				opacity: validate && isValid ? 1 : 0,
				transform: `scale(${validate && isValid ? 1 : 0})`
			}]}>
				<Icon icon='check' color={successColor} size={14} />
			</span>
		);


		let inputProps = { 
			defaultValue,
			disabled,
			onKeyPress,
			onKeyUp,
			onKeyDown,
			onInput,
			onFocus,
			onBlur,
			type,
		};
		if(isFocused) inputProps.placeholder = placeholder;

		let inputPadding = (underline ? (compact ? styles.underlineCompactPadding : styles.underlinePadding) : 
							overline ? (compact ? styles.overlineCompactPadding : styles.overlinePadding) : 0);

		return (
			<div style={[
				!pushErrorText && styles.container,
				{ marginTop: 20, position: 'relative' },
				style
			]}>
				<Style rules={{
			        '::-webkit-input-placeholder': {
			            color: placeholderColor
			        },
			        ':-moz-placeholder': {
			            color: placeholderColor
			        },
			       '::-moz-placeholder': {
			            color: placeholderColor
			        },
			        ':-ms-input-placeholder': {
			            color: placeholderColor
			        }
			    }} />
				<Paper
					depth={isFocused ? 2 : 1}
					fullHeight={false}
					fullWidth={false}
					innerStyle={[styles.borderRadius, zIndex]}
					zIndex={zIndex}
					style={[
						styles.paper,
						{ backgroundColor, zIndex },
						disabled && { backgroundColor: disabledBackgroundColor },
					]}>

						{ this.props.floatingLabel && floatingLabel }
					<div style={[styles.borderRadius, {overflow: 'hidden', position: 'relative', zIndex: 99}]}>
						{ overline && line }
						<div style={{ display: 'flex', position: 'relative' }}>
							<input
								ref='input' 
								autoComplete={this.props.autocomplete ? 'on' : 'off'}
								placeholder={this.props.floatingLabel ? '' : this.props.placeholder}
								style={[ 
									styles.input,
									inputPadding,
									validate && isValid ? styles.paddingCheckMark : {},
									{ color: textColor },
									disabled && {color: disabledTextColor, cursor: 'not-allowed' }
									]} 
								{...inputProps} />
							{validate && (<div style={ styles.checkContainer }>{ checkMark }</div>)}
						</div>
						{ underline && line }
					</div>
				</Paper>
				{ errorMessage }
			</div>
		);
	}

	hasValue() {
		return (this.refs.input && this.refs.input.value) || (this.props.defaultValue && this.props.value);
	}

}

const styles = {
	container: {
		marginBottom: 20,
		width: 200
	},
	paper: { 
		borderRadius: 4,
		width: '100%'
	},
	input: {
		fontSize: 14,
		width: '100%',
		height: '100%',
		outline: 'none',
		border: 'none',
		boxSizing: 'border-box',
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
		borderTopLeftRadius: 4,
		borderTopRightRadius: 4,
		backgroundColor: 'transparent'
	},
	line: {
		width: '100%',
		height: 2,
		borderColor: colors.white,
		transition: 'background-color 0.3s ease-out, transform 0.3s ease-out',
		position: 'absolute',
		zIndex: 1
	},
	underline: {
		borderBottomLeftRadius: 2,
		borderBottomRightRadius: 2,
		bottom: 0
	},
	underlinePadding: { 
		paddingTop: 12,
		paddingRight: 10,
		paddingBottom: 10,
		paddingLeft: 10
	},
	underlineCompactPadding: { 
		paddingTop: 7,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 10
	},
	overline: {
		borderTopWidth: 1,
		borderTopLeftRadius: 50,
		borderTopRightRadius: 50,
		top: 0
	},
	overlinePadding: { 
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 12,
		paddingLeft: 10
	},
	overlineCompactPadding: { 
		padding: 5,
		paddingRight: 10,
		paddingBottom: 7,
		paddingLeft: 10
	},
	paddingCheckMark: {
		paddingRight: 30,
		marginRight: -20
	},	
	containerWidthCheckMark: {
		width: 'calc(100% - 20px)' 
	},
	borderRadius: { borderRadius: 4 },
	floatingLabel: {
		fontSize: 14,
		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',
		width: 'auto',
		overflow: 'hidden',
		position: 'absolute',
		opacity: 1,
		paddingLeft: 10,
		paddingRight: 10,
		pointerEvents: 'none',
		transform: 'scale(1) translateX(0) translateY(0)',
		transformOrigin: 'left',
		transition: 'color 0.3s ease-out, transform 0.3s ease-out'
	},
	absolute: { position: 'absolute' },
	errorText: {
		margin: '4px 0',
		fontSize: 10,
		textAlign: 'left',
		whiteSpace: 'nowrap',
		overflow: 'hidden',
		textOverflow: 'ellipsis'
	},
	errorMessage: {
		transition: 'height 0.3s ease-out'
	},
	checkContainer: {
		width: 25,
		position: 'absolute',
		top: 'calc(50% - 12.5px)',
		right: 5,
	    display: 'flex',
	    justifyContent: 'center',
	    alignContent: 'center',
	    flexDirection: 'column',
	    borderTopRightRadius: 4,
	    borderBottomRightRadius: 4
	},
	checkMark: {
		transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
	}
}