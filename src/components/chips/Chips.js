import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import { colors } from '../../utils/colors';
import ChipItem from './ChipItem';
import TransitionGroup from 'react-addons-css-transition-group';
import Transitions from '../../utils/transitions';
import View from '../view/View';

const transitionSpeed = 300;

@Radium
export default class Chips extends Component {

	static propTypes = {
		// Chips configuration
		defaultChips: PropTypes.array,
		column: PropTypes.bool,
		// ChipItem configuration
		chipBackgroundColor: PropTypes.string,
		chipFontColor: PropTypes.string,
		// Events
		onAdd: PropTypes.func,
		onRemove: PropTypes.func,
		onChange: PropTypes.func
	};

	static defaultProps = {
		defaultChips: [],
		chipBackgroundColor: colors.grey200,
		chipFontColor: colors.grey700,
		transition: 'scale-in'
	};

	state = {
		chips: this.props.defaultChips
	};

	render() {

		let { chips } = this.state;

		let {
			chipFontColor,
			chipBackgroundColor,
			transition,
			style,column
		} = this.props;

		if (chips.length > 0) {
			chips = chips.map((item, i)=>{
				return (
					<ChipItem
						key={item.value}
						label={item.label}
						value={item.value}
						dismiss={this.removeChip.bind(this)}
						color={chipFontColor}
						backgroundColor={chipBackgroundColor}
					/>
				);
			});
		}

		return (
			<div style={style}>
				<TransitionGroup
					style={column ? styles.chipsColumnsContainer : styles.chipsRowContainer}
					transitionAppear
					transitionName={transition}
					transitionEnterTimeout={transitionSpeed}
					transitionLeaveTimeout={transitionSpeed}
					transitionAppearTimeout={transitionSpeed}>

					{/* Custom Styles/Classes to power TransitionGroup */}
					<Style rules={Transitions[transition]} />

					{chips}

				</TransitionGroup>
			</div>

		);

	}

	////////////////////
	// Public Methods //
	////////////////////

	addChip(chip){
		let {chips} = this.state;
		let chipArray = chips.slice(0); // Clone chip array

		if (chip.label && chip.value) {

			chipArray.push(chip)

			this.setState({
				chips: chipArray
			});

		} else {
			console.warn('You must provide a \'label\' and \'value\' for this chip, a chip is not valid unless it has both label and value.')
		}

		// trigger events
		this._onAdd(chipArray);
		this._onChange(chipArray);
	}

	removeChip(value) {
		let {chips} = this.state;
		let chipArray = chips.slice(0); // Clone chip array

		chips.some((item, i)=>{
			if (item.value === value) {
				chipArray.splice(i, 1);

				return true;
			}
		})

		this.setState({
			chips: chipArray
		})

		// trigger events
		this._onRemove(chipArray);
		this._onChange(chipArray);
	}

	getValue(){
		return this.state.chips;
	}

	setValue(chips) {
		this.setState({chips});
	}

	/////////////
	// Events  //
	/////////////

	_onAdd(newValue){
		if (this.props.onAdd) this.props.onAdd(newValue);
	}

	_onRemove(newValue){
		if (this.props.onRemove) this.props.onRemove(newValue);
	}

	_onChange(newValue) {
		if (this.props.onChange) this.props.onChange(newValue);
	}

}

const styles = {
	chipsRowContainer: {
		perspective: 2000,
		marginLeft: -5,
		marginRight: -5,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: '100%'
	},
	chipsColumnsContainer: {
		perspective: 2000,
		marginLeft: -5,
		marginRight: -5,
		display: 'flex',
		flexDirection: 'column',
		flexWrap: 'wrap',
		height: '100%'
	}
}
