import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

import { Icon } from '../../';
import { colors } from '../../utils/colors';

import Radio from './Radio';

export default class RadioGroup extends Component {

	static propTypes = {
		value: React.PropTypes.string,
		defaultValue: React.PropTypes.string,
		labelPosition: React.PropTypes.oneOf(['left', 'right']),
		onChange: React.PropTypes.func
	};

	switchedRadios = 0;

	state = {};

	constructor(props) {
		super(props);
		if(props.defaultValue) this.state.value = props.defaultValue;
	}

	componentWillMount() {
		let i = 0;

		React.Children.forEach(this.props.children, (child)=> {
			if(child.props.radio){
				if (this._hasCheckAttribute(child)) i++;
			}
		});

		this.switchedRadios = i;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.hasOwnProperty('value')) {
			this._updateRadios(nextProps.value)
		}
	}

	render() {
		let { children, style } = this.props;

		// Iterate through the children, for every child return a radio
		let radios;

		if (children) {
			radios = React.Children.map(children, (child)=> {
				if(child.props && child.props.radio){
					let {
						name,
						value,
						label,
						labelPosition,
						onCheck
					} = child.props;

					return <Radio
						{...child.props}
						ref={`radio-${child.props.value}`}
						key={`radio-${child.props.value}`}
						value={child.props.value}
						label={child.props.label}
						labelPosition={labelPosition}
						onClick={this._onChange.bind(this, child.props.value)}
						switched={child.props.value == this.state.value} />
				} else {
					// Iterate through descendants, to see if there are any radios
					return this._checkDescendants(child);
				}
			});
		}

		return (
			<div style={style} >
				{radios}
			</div>
		);

	}

	// Events
	//
	_onChange(selection, e) {
		this._updateRadios(selection);

		// On a successfull click
		if (this.switchedRadios == 0) {
			setTimeout(()=> {
				if (this.props.onChange) this.props.onChange(e, selection);
			});
		}
	}

	// Private Methods
	//
	_checkDescendants(component) {
		let { labelPosition } = this.props;

		return React.Children.map(component,(child)=> {
			// If any descendants are Radio's apply RadioGroup props to them
			if(child.props && child.props.radio){
				return React.cloneElement(child, {
					onClick: this._onChange.bind(this, child.props.value),
					switched: child.props.value == this.state.value,
					labelPosition: child.props.labelPosition
				})
			// If descendant is not a Radio, recursively keep checking all the way down
			} else {
				if (React.Children.count(child) !== 0 && child.props !== undefined){
					return React.cloneElement(child, {}, this._checkDescendants(child.props.children));
				} else {
					return child;
				}
			}
		});
	}

	_updateRadios(selection) {
		if (this.switchedRadios === 0) {
			this.setState({
				value: selection
			});
		} else if (process.NODE_ENV !== 'production') {
			let message = 'Cannot select a different radio button while another radio button has the \'switched\' property set to true.';
			console.error(message);
		}
	}

	_hasCheckAttribute(radio) {
		return radio.props.hasOwnProperty('switched') && radio.props.switched;
	}

	// Public Methods
	//
	getValue() {
		return this.state.value;
	}

	setValue(selection) {
		this._updateRadios(selection);
	}

	getDefaultValue() {
		return this.props.defaultValue;
	}

	clearValue() {
		this.setValue('');
	}

	hasChanged() {
		return this.props.defaultValue !== this.state.value;
	}
};
