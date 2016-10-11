import React, { Component, PropTypes } from 'react';
import { View } from 'react-blueprint';
import Radium, {Style} from 'radium';
import { colors } from '../../utils/colors';
import Accordion from '../accordion/Accordion';
import Icon from '../icon/Icon';
import Paper from '../paper/Paper';
import uuid from 'uuid';


let id = uuid.v1();

@Radium
export default class Select extends Component {

	static propTypes = {
        // Config
        options: PropTypes.array,
        placeholder: PropTypes.string,
        defaultLabel: PropTypes.string,
        defaultValue: PropTypes.string,
        disabled: PropTypes.bool,
        floatingLabel: PropTypes.bool,

        // Events
        onSelect: PropTypes.func,

        // Styling
        accentColor: PropTypes.string,
        hoverBackground: PropTypes.string,
        floatingLabelColor: PropTypes.string,
        backgroundColor: PropTypes.string,
        placeholderColor: PropTypes.string,
        textColor: PropTypes.string,
        alignSelector: PropTypes.oneOf(['left', 'right','center']),
        fullWidth: PropTypes.bool,
        maxSelectorHeight: PropTypes.number,
        minWidth: PropTypes.number,
        maxWidth: PropTypes.number,

        // Disabled state styling
        disabledTextColor: PropTypes.string,
        disabledPlaceholderColor: PropTypes.string,
        disabledBackground: PropTypes.string,
       
        // Custom Style
        style: PropTypes.object,
        placeholderStyle: PropTypes.object,
        dropdownContainerStyle: PropTypes.object,
        optionContainerStyle: PropTypes.object,
        disabledStyle: PropTypes.object
	};

	static defaultProps = {
        accentColor: colors.cyan500,
        floatingLabelColor: colors.cyan500,
        backgroundColor: 'white',
        floatingLabel: true,
        hoverBackground: colors.grey100,
        placeholderColor: colors.grey500,
        textColor: colors.grey700,
        alignSelector: 'left',
        fullWidth: false,
        disabled: false,
        minWidth: 200,
        maxWidth: 300,
        disabledTextColor: colors.grey500,
        disabledPlaceholderColor: colors.grey400,
        disabledBackground: colors.grey200,
        maxSelectorHeight: 200

	};

    state = {
        currentSelection: {},
        selectionIndex: null,
        isFocused: false
    }

    componentWillMount() {
        let { options, defaultLabel, defaultValue } = this.props;

        let result;

        if (defaultLabel && defaultValue) {
            console.warn('You can\'t have both the "defaultLabel" and "defaultValue props defined, please choose one.');
            return
        }

        if (defaultLabel){
            result = options.filter((el)=>{
                return el.label === defaultLabel
            })[0];
        }

        if (defaultValue){
            result = options.filter((el)=>{
                return el.value === defaultValue
            })[0];
        }

        if (result) { 
            this.setState({
                currentSelection: result
            })
        }

    }

	render() {
        let { 
            placeholder,
            disabled,
            accentColor,
            hoverBackground,
            placeholderColor,
            textColor,
            fullWidth,
            style,
            placeholderStyle,
            dropdownContainerStyle,
            disabledStyle,
            minWidth,
            maxWidth,
            floatingLabel,
            backgroundColor,
            floatingLabelColor,
            disabledTextColor,
            disabledPlaceholderColor,
            disabledBackground
        } = this.props;

        let { currentSelection, isFocused } = this.state;

        let hasValue = Object.keys(currentSelection).length ? true : false; 

        let _textColor = !disabled ? textColor : disabledTextColor;
        let _placeholderColor = !disabled ? placeholderColor : disabledPlaceholderColor;

        let placeholderStyles = {
            color: hasValue ?  _textColor : _placeholderColor,
            fill: hasValue ?  _textColor : _placeholderColor,
            maxWidth: fullWidth ? undefined : maxWidth, 
            minWidth,
        };

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
			x: hasValue ? -10 : 0,
			y: hasValue ? 'calc(-100% - 10px)' : 0,
			scale: hasValue ? 0.75 : 1
		}

		let floatingLabelRender = (

			<div style={[
				styles.floatingLabel,
				{ 
                    visibility: hasValue ? 'visible' : 'hidden',
					color: floatingLabelColor,
					transform: `scale(${labelCoords.scale}) translateX(${labelCoords.x}px) translateY(${labelCoords.y})`,
				},
				disabled && styles.disabled
			]}>{ placeholder }</div>
		);

        let floatingLabelMargin = {marginTop: 20};

        let wrapperBackground = {
            backgroundColor: !disabled ? backgroundColor : disabledBackground
        }

		return (
            <div style={[
                styles.container,
                floatingLabel ? floatingLabelMargin : {},
                fullWidth ? styles.fullWidth : {},
                {cursor: !disabled ? 'pointer' : 'not-allowed'},
                style
            ]}>
                <Style rules={{		
					[`.emui-hover-${id}:hover`]:{
						color: `${accentColor} !important`,
						fill: `${accentColor} !important`,
                        backgroundColor: `${hoverBackground} !important`
                        
					},
                    [`.emui-hover-option-${id}:hover`]:{
						color: `${accentColor} !important`,
						fill: `${accentColor} !important`,
                        backgroundColor: `${hoverBackground} !important`
					},
				}}/>

                <div 
                    tabIndex={0}
                    onFocus={this._handleFocus.bind(this)}
                    onClick={!disabled ? this._handleDropDown.bind(this) : ()=>{}}
                    onBlur={this._handleBlur.bind(this)}
                    style={{outline: 'none'}}>

                    { floatingLabel ? floatingLabelRender : null }

                    <Paper style={styles.placeholderWrapper} innerStyle={[styles.placeholderWrapper, wrapperBackground, disabledStyle]}>
                        <View 
                            className={!disabled ? `emui-hover-${id}` : ''}
                            style={[
                                styles.placeholderContainer,
                                placeholderStyles,
                                placeholderStyle
                            ]}>
                            <div style={styles.placeholder}>
                                {Object.keys(currentSelection).length ? currentSelection.label : placeholder}
                            </div>

                            <Icon icon="expand-more" size={20} style={styles.dropDownIcon}/>

                        </View>
                    </Paper>
                    
                    <Paper 
                        depth={2} 
                        style={[styles.dropdownContainer, this._getAlignment(), dropdownContainerStyle]}>
                        <Accordion ref="dropdown" expandContent={this._renderOptions()} />
                    </Paper>
                </div>


            </div>
		);

	}

    getSelectedValue() {
        return this.state.currentSelection.value;
    }

	/////////////////////
	// Private Methods //
	/////////////////////

    _handleFocus() {
        this.setState({
            isFocused: true
        })
    }

    _handleBlur() {
        this.refs.dropdown.expandContent(false);
        this.setState({
            isFocused: false
        })
    }

    _handleDropDown() {
        
        this.refs.dropdown.toggleExpandContent();
    }

	_handleSelect(option, i) {
        let { onSelect } = this.props;

        this._handleDropDown();

        if (onSelect) {
            this.props.onSelect(option)
        }

        this.setState({
            currentSelection: option,
            selectionIndex: i
        })
	}
    _renderOptions() {
        let { options, optionContainerStyle, maxSelectorHeight } = this.props;
        let { selectionIndex } = this.state;

        let maxHeight = {
            maxHeight: maxSelectorHeight
        };

        let renderedOptions = options.map((option, i)=>{

            if (i === selectionIndex ) return;

            return (
                <li className={`emui-hover-option-${id}`} key={i} onClick={this._handleSelect.bind(this, option, i)} style={styles.option}>
                    {option.content ? option.content : option.label}
                </li>
            );
        })

        return (
            <ul style={[styles.optionsContainer, maxHeight, optionContainerStyle]}>
                {renderedOptions}
            </ul>
        );
    }

    _getAlignment(){
        let { alignSelector } = this.props;

        let selectorAlignment = {};
  
        switch (alignSelector) {
            case 'left':
                selectorAlignment = styles.alignSelectorLeft;
                break;
            case 'right':
                selectorAlignment = styles.alignSelectorRight;
                break;
            case 'center':
                selectorAlignment = styles.alignSelectorCenter;
                break;
            
            default:
                selectorAlignment = styles.alignSelectorleft;
        }

        return selectorAlignment;
    }


}

const styles = {
    container: {
        position: 'relative',
        width: 'auto',
        display: 'table',
        zIndex: 1010
    },
    placeholderWrapper:{
        borderRadius: 4,
        overflow: 'hidden'
    },
    placeholderContainer: {
        justifyContent: 'space-between',
        padding: 10
    },
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
    placeholder: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: 'auto',
        overflow: 'hidden'
    },
    dropdownContainer: {
        position: 'absolute',
        top: 'calc(100% + 5px)',
        height: 'auto',
        width: 'auto',
        backgroundColor: 'white',
        minWidth: '100%'
    },
    option: {
        listStyleType: 'none',
        paddingTop: 2.5,
        paddingBottom: 2.5,
        paddingLeft: 20,
        paddingRight: 20,
        whiteSpace: 'nowrap'
    },
    dropDownIcon: {
        marginLeft: 10,
        fill: 'inherit'
    },
    optionsContainer: {
        paddingLeft: 0,
        overflowY: 'scroll'
    },

    // utility
    alignLeft: {
        justifyContent: 'flex-start',
    },
    alignRight: {
        justifyContent: 'flex-end',
    },
    alignCenter: {
        justifyContent: 'center'
    },
    alignSelectorLeft: {
        left: 0,
        minWidth: '100%'
    },
    alignSelectorRight: {
        right: 0,
        minWidth: '100%'
    },
    alignSelectorCenter: {
        left: '50%',
        transform: 'translateX(-50%)'
    },
    fullWidth: {
        width: '100%'
    }
}