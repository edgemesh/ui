import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { findDOMNode as $ } from 'react-dom';
import Radium from 'radium';
import { colors } from '../../utils/colors';
import fuzzy from 'fuzzy';
import { Paper, Accordion, TextField } from '../../';
import Selector from './AutocompleteSelector';
import keyCode from '../../utils/keyCode';

@Radium
export default class Autocomplete extends Component {

	static displayName = 'Autocomplete';

	static propTypes = {
		// Config
		options: PropTypes.array.isRequired,					// [{label:'label', value:'value'}]
		maxVisible: PropTypes.number, 							// Amount of visible results, 0 which is default value, will return all results.
		defaultLabel: PropTypes.string,
		defaultValue: PropTypes.string,
		placeholder: PropTypes.string,
		floatingLabel: PropTypes.string,
		optionValidate: PropTypes.bool,
		openSelectorOnFocus: PropTypes.bool,
		selectorPosition: PropTypes.oneOf(['top','bottom']),
		// Styling
		accentColor: PropTypes.string,
		accentFontColor: PropTypes.string,
		textFieldStyles: PropTypes.object,
		selectorStyles: PropTypes.object,
		maxSelectorHeight: PropTypes.number,
		errorColor: PropTypes.string,
		hoverColor: PropTypes.string,
		// Events
		onSelect: PropTypes.func
	};

	static defaultProps = {
		options: [],
		optionValidate: true,
		maxVisible: 0,
		accentColor: colors.cyan500,
		accentFontColor: colors.grey700,
		openSelectorOnFocus: true,
		selectorPosition: 'bottom'
	};

	state = {
		visible: this.props.options,
		entryValue: this.props.defaultLabel ?
			this.props.defaultLabel : this.props.defaultValue ?
			this._filterOptions(this.props.defaultValue, this.props.options, true)[0].label : '',
		selection: this.props.defaultLabel ?
			this._filterOptions(this.props.defaultLabel, this.props.options)[0] : this.props.defaultValue ?
			this._filterOptions(this.props.defaultValue, this.props.options, true)[0] : null,
		selectedValue: this.props.defaultLabel ?
			this._filterOptions(this.props.defaultLabel, this.props.options)[0] : this.props.defaultValue ?
			this._filterOptions(this.props.defaultValue, this.props.options, true)[0] : null,
		open: false
	};

	componentDidMount() {

	}

	render() {
		let {
			placeholder,
			floatingLabel,
			accentColor,
			accentFontColor,
			optionValidate,
			openSelectorOnFocus,
			selectorPosition,
			selectorStyles,
			textFieldStyles,
			maxSelectorHeight,
			hoverColor,
			errorColor
		} = this.props;

		let { open } = this.state;

		let textFieldProps = {
			textFieldStyles,
		};

		let selectorProps = {
			accentColor,
			accentFontColor,
			open,
			selectorStyles,
			maxSelectorHeight,
			hoverColor
		};

		const selectorTop = selectorPosition === 'top';


		return (
			<div style={styles.container}>
				{selectorTop && <Selector
					expandDirection="up"
					ref="selector"
					{...selectorProps}
					options={this.state.visible}
					open={open}
					handleSelect={this._handleSelect.bind(this)}
				/>}
				<TextField
					{...this.props}
					{...textFieldProps}
					ref="input"
					floatingLabel={!selectorTop}
					onKeyDown={this._handleKeyDown.bind(this)}
					onInput={this._handleInput.bind(this)}
					onFocus={this._handleFocus.bind(this)}
					onBlur={this._handleBlur.bind(this)}
					errorColor={errorColor}
					zIndex={1002} />

					{!selectorTop && <Selector
						expandDirection="down"
						ref="selector"
						{...selectorProps}
						options={this.state.visible}
						open={open}
						handleSelect={this._handleSelect.bind(this)}
					/>}

			</div>
		);
	}

	/////////////////////
	// Public Methods  //
	/////////////////////


	// Getters
	getSelectedValue () {
		return this.state.selectedValue;
	}

	getSelection () {
		return this.state.selection;
	}

	getEntryValue () {
		return this.state.entryValue;
	}

	// Setters
	setEntryValue(value) {
		let { input } = this.refs;

		input.setValue(value);

		setTimeout(()=>{
			this._handleInput(value);
			this._handleSelect();
		})
	}

	setErrorText(text) {
		let { input } = this.refs;

		this.clear();

		setTimeout(()=>{
			input.setErrorText(text);
		});

	}

	clear(){
		let { input } = this.refs;

		input.setValue('');

		setTimeout(()=>{
			this.setState({
				selection: null,
				selectedValue: null,
				entryValue: '',
				open: false
			});
		});

	}

	//////////////////////
	// Private Methods  //
	//////////////////////

	_filterOptions(value, list, returnValue) {

		let { maxVisible } = this.props;

		// when returnValue is true, return the value of the filtered options,
		// instead of the label.

		let options = {
			extract: (option)=> { return returnValue ? option.value : option.label }
		}

		if(!value) return [];

		let results = fuzzy.filter(value, list, options).map((result)=> {
			return {label:result.string, value: result.original.value};
		});

		if (maxVisible) {
			results = results.slice(0, maxVisible);
		}

		return results;
	}

	/////////////////////
	// Event Handlers  //
	/////////////////////

	_handleFocus(){
		let { options } = this.props;
		let { selector, input } = this.refs;

		if (input.getErrorText !== '') input.clearErrorText();

		if (this.state.entryValue == '') {
			this.setState({
				visible: options,
				selection: null,
				selectedValue: null,
				open: options.length > 0
			});
		} else {

			if (!this.state.selection) {
				let visible = this._filterOptions(this.state.entryValue, options);

				this.setState({
					visible,
					open: visible.length > 0
				});
			}
		}

		selector.setSelectionIndex(null);
	}

	_handleInput(e){
		let { options, optionValidate } = this.props;
		let { selector, input } = this.refs;
		let { entryValue } = this.state;
		let value = typeof e === 'string' ? e : e.target.value;
		let visible = this._filterOptions(value, options);

		visible = visible.length > 0 ? visible : value == '' ? options : [];

		this.setState({
			visible,
			selection: null,
			selectedValue: null,
			entryValue: value,
			open: visible.length > 0
		});

		if (optionValidate && value != '' && visible.length == 0) {
			if (input.getErrorText() == '') input.setErrorText('You must select a valid option.');
		} else if (optionValidate && value != '' && visible.length > 0) {
			if (input.getErrorText() != '') input.clearErrorText();
		}

		selector.setSelectionIndex(null);
	}

	_handleSelect() {
		let { onSelect } = this.props;
		let { selector, input } = this.refs;

		if (selector.getSelectionIndex() !== null) {

			input.setValue(this.state.visible[selector.getSelectionIndex()].label);
			if (onSelect) onSelect(this.state.visible[selector.getSelectionIndex()]);

			this.setState({
				entryValue: this.state.visible[selector.getSelectionIndex()].label,
				selectedValue: this.state.visible[selector.getSelectionIndex()].value,
				selection: this.state.visible[selector.getSelectionIndex()],
				open: false
			});
		} else {

			if (this.state.visible.length) {

				input.setValue(this.state.visible[0].label);
				if (onSelect) onSelect(this.state.visible[0]);

				this.setState({
					entryValue: this.state.visible[0].label,
					selectedValue: this.state.visible[0].value.value,
					selection: this.state.visible[0],
					open: false
				});
			}
		}
	}

	_handleBlur(e) {
		let {entryValue, visible, selection} = this.state;

		if (entryValue !== '' && visible.length > 0 && !selection) {
			this._handleSelect();
		} else {
			this.setState({
				open: false
			});
		}
	}

	_handleKeyDown(e) {

		let { selector } = this.refs;
		let { open } = this.state;

		switch(e.keyCode) {
			case keyCode.UP:
				if (open) selector.navUp();
				break;
			case keyCode.DOWN:
				if (open) {
					selector.navDown()
				} else {
					this._handleFocus();
				}
				break;
			case keyCode.ENTER:
				this._handleSelect();
				break;
			case keyCode.TAB:
				if(!this.state.selection) e.preventDefault();
				this._handleSelect();
				break;
			default:
				break;
		}
	}
}

const styles = {
	container: {
		width: '100%',
		position: 'relative'
	}
}
