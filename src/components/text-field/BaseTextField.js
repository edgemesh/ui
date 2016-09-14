import React, { Component, PropTypes } from 'react';
import Validator from 'validator';
import keyCode from '../../utils/keyCode';

function isUndo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? keyCode.Y : keyCode.Z)
}

function isRedo(e) {
  return (e.ctrlKey || e.metaKey) && e.keyCode === (e.shiftKey ? keyCode.Z : keyCode.Y)
}

export const BaseTextField = (ComposedComponent) => {

    return class extends Component {

        static displayName = 'BaseTextField';

        static propTypes = {
            // Configuration
            disabled: PropTypes.bool,
            defaultValue: PropTypes.string,
            placeholder: PropTypes.string,
            keyUpDelay: PropTypes.number,
            style: PropTypes.object,
            // Events
            onKeyUp: PropTypes.func,
            onKeyDown: PropTypes.func,
            onInput: PropTypes.func,
            onEnter: PropTypes.func,
            onTab: PropTypes.func,
            onEscape: PropTypes.func,
            onBlur: PropTypes.func,
            onFocus: PropTypes.func,
            validateOptions: PropTypes.object,
            type: PropTypes.string,
            validate: PropTypes.oneOf([
                'phone',
                'credit-card',
                'ip-address',
                'mac-address',
                'email',
                'currency',
                'date',
                'decimal',
                'number',
                'url',
                'regex',
                'length',
                'isIn'
            ])
        };

        static defaultProps = {
            validateOptions: {},
            keyUpDelay: 0,
            type: 'text',
            disabled: false,
            defaultValue: ''
        };

        state = {
            value: '',
            errorText: '',
            isFocused: false,
            isValid: false
        };

        // Instance Variables
        keyUpDelay = null;

        constructor(props) {

            super(props);

            let {
                defaultValue
            } = props;

            if(defaultValue) this.state.value = defaultValue;

        }

        // Public Methods
        setValue(value) { 
            this._getInputNode().value = value;
            this._updateValue();
        }

        setErrorText(errorText) { this.setState({ errorText })}
    
        clearErrorText() { this.setState({ errorText: '' })}
        
        getValue() { 
            let stateValue = this.state.value,
                domValue = this._getInputNode().value;

            if(stateValue !== domValue) {
                if(process.env.NODE_ENV !== 'production') {
                    console.warn(
                        'DOM value and state value are out of sync.  ' +
                        'This is because you are calling \`TextField.getValue()\` ' +
                        'before your \`keyUpDelay\` resolved.  ' + 
                        'You may use the returned DOM value, but it may not be validated by validator. ' +
                        'Otherwise, you may want to decrease your \`keyUpDelay\` timeout.'
                    );
                }
                return domValue;
            } else {
                return stateValue;
            }
        }

        getErrorText() { return this.state.errorText }

        blur() { 
            this._getInputNode().blur();
            this.setState({ isFocused: false });
        }

        focus() { 
            this._getInputNode().focus();
            this.setState({ isFocused: true });
        }

        selectAll() {
            if(!this.isFocused()) this.focus();
            this._getInputNode().select();
        }

        isFocused() { return this.state.isFocused }

        isValid() { return this.state.isValid }

        hasChanged() { 
            if(!this.props.defaultValue && !this.getValue()) return false;
            return this.props.defaultValue !== this.getValue()
        }

        // Internal Methods
        _getInputNode() {
            if(!this.refs.composed || !this.refs.composed.refs.input) {
                return console.error('Could not find input node.');
            }
            return this.refs.composed.refs.input;
        }

        _validateInput(value) {

            let { validate, validateOptions } = this.props;

            switch(validate) {
                case 'phone':
                    if(!validateOptions.locale) return console.error('Must provide `validateOptions.locale` to `phone` validator.')
                    return {
                        isValid: Validator.isMobilePhone(value, validateOptions.locale),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid phone number.'
                    };
                case 'credit-card':
                    return {
                        isValid: Validator.isCreditCard(value),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid credit card number.'
                    };
                case 'ip-address':
                    return {
                        isValid: Validator.isIpAddress(value, validateOptions),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid ip address.'
                    };
                case 'mac-address':
                    return {
                        isValid: Validator.isMacAddress(value),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid mac address.'
                    };
                case 'email':
                    return {
                        isValid: Validator.isEmail(value, validateOptions),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid email address.'
                    };
                case 'currency':
                    return {
                        isValid: Validator.isCurrency(value, validateOptions),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid amount.'
                    };
                case 'date':
                    return {
                        isValid: Validator.isDate(value),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid date.'
                    };
                case 'decimal':
                    return {
                        isValid: Validator.isDecimal(value),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid decimal.'
                    };
                case 'number':
                    return {
                        isValid: Validator.isNumeric(value),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid number.'
                    };
                case 'url':
                    return {
                        isValid: Validator.isUrl(value, validateOptions),
                        error: validateOptions.error ? validateOptions.error : 'Not a valid url.'
                    };
                case 'regex':
                    if(!validateOptions.pattern) return console.error('Must provide `validateOptions.pattern` to `match` validator.');
                    return {
                        isValid: Validator.matches(value, validateOptions),
                        error: validateOptions.error ? validateOptions.error : `This field does not match.`
                    };
                case 'length': 
                    if(!validateOptions.length) console.error('Must provide `validateOptions.length` to `length` validator.');
                    return {
                        isValid: Validator.isLength(value, validateOptions),
                        error: validateOptions.error ? validateOptions.error : (
                            validateOptions.max ? `Input must between ${validateOptions.min} and ${validateOptions.max} characters.` : `Input must at least ${validateOptions.min} characters.`
                        )
                    }
                case 'isIn': 
                    if(!validateOptions.whitelist) return console.error('Must provide `validateOptions.whitelist` to `isIn` validator.');
                    return {
                        isValid: Validator.isIn(value, validateOptions.whitelist),
                        error: validateOptions.error ? validateOptions.error : `Input must be one of '${validateOptions.whitelist.join(', ')}'`
                    };
                default:
                    return true;
            }
        }

        _updateValue(value) {

            if(!value) return this.setState({ value, isValid: false });

            if(this.props.validate) {
                let validate = this._validateInput(value),
                    isValid = validate.isValid,
                    errorText = !isValid ? validate.error : '';

                if(this.props.defaultValue === value) isValid = false;

                this.setState({ value, isValid, errorText });

            } else {
                this.setState({ value });
            }
        }

        // Events
        _onKeyUp(e) {

            let { keyUpDelay, onKeyUp, validate } = this.props;
            let value = e.target.value;

            // Keydown update delay
            if(keyUpDelay) {
                if(this.keyUpDelay) clearTimeout(this.keyUpDelay);
                this.keyUpDelay = setTimeout(() => { 
                    this._updateValue(value);
                    if(onKeyUp) onKeyUp(e);
                }, keyUpDelay);
            } else {
                this._updateValue(value);
                if(onKeyUp) onKeyUp(e);
            }
        }

        _onKeyDown(e) {

            let { onKeyDown } = this.props;
            if(onKeyDown) onKeyDown(e);
        }

        _onInput(e) {

            let { onInput } = this.props;
            if(onInput) onInput(e);
        }

        _onKeyPress(e) {

            let code = e.charCode;

            switch(code) {
                case keyCode.TAB:
                    return this._onTab(e);
                    break;
                case keyCode.ENTER:
                    return this._onEnter(e)
                    break;
                case keyCode.ESC:
                    return this._onEscape(e);
                    break;
                default:

            }
        }

        _onEnter(e) {
            let { onEnter } = this.props;
            if(onEnter) onEnter(e);
        }

        _onEscape(e) {
            let { onEscape } = this.props;
            if(onEscape) onEscape(e);
        }

        _onTab(e) {
            let { onTab } = this.props;
            if(onTab) onTab(e);
        }

        _onFocus(e) { 
            let { onFocus } = this.props;
            this.setState({ isFocused: true });
            if(onFocus) onFocus(e);
        }

        _onBlur(e) {
            let { onBlur } = this.props;
            this.setState({ isFocused: false });
            if(onBlur) onBlur(e);
        }

        // Render
        render() {

            let { value, errorText } = this.state;
            let { placeholder, defaultValue, style, type, disabled, disabledStyles } = this.props;

            let onKeyUp = this._onKeyUp.bind(this),
                onKeyDown = this._onKeyDown.bind(this),
                onInput = this._onInput.bind(this),
                onKeyPress = this._onKeyPress.bind(this),
                onEnter = this._onEnter.bind(this),
                onEscape = this._onEscape.bind(this),
                onTab = this._onTab.bind(this),
                onFocus = this._onFocus.bind(this),
                onBlur = this._onBlur.bind(this),
                isFocused = this.isFocused.bind(this),
                isValid = this.isValid.bind(this),
                getValue = this.getValue.bind(this),
                setValue = this.getValue.bind(this);

            let passedProps = Object.assign({}, this.props, {
                value,
                errorText,
                defaultValue,
                placeholder,
                style,
                disabled,
                disabledStyles,
                onKeyPress,
                onKeyUp,
                onEnter,
                onEscape,
                onTab,
                onFocus,
                onBlur,
                isFocused,
                isValid,
                getValue,
                setValue,
                type
            });

            return <ComposedComponent ref='composed' {...passedProps} />;

        }
    }

}

export default BaseTextField;