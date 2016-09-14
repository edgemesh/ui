import React, { Component, PropTypes } from 'react';
import { View } from 'react-blueprint';
import Radium from 'radium';
import { colors } from '../../utils/colors';
import Icon from '../icon/Icon';

@Radium
export default class Tab extends Component {

	static propTypes = {
		// Tab configuration
		label: PropTypes.string.isRequired,
		value: PropTypes.string,
		selected: PropTypes.bool,
		onSelect: PropTypes.func,
		disabled: PropTypes.bool,
		// This prop exists purely as a means to identify this as a tab component
		tab: PropTypes.bool
	};

	static defaultProps = {
		tab: true,
		disabled: false,
		fixedWidth: true
	};

	render() {
		let { label, value, style, disabled, disabledStyles, selected, accent, fixedWidth, selectedStyles } = this.props;

		return (
			<View onClick={!disabled && this._handleSelect.bind(this)} style={[
				styles.container,
				selected && styles.selected,
				selected && selectedStyles,
				style,
				selected && {color: accent},
				disabled && styles.disabled,
				disabled && disabledStyles,
				!fixedWidth && styles.noFlex
			]}>
				{label}
			</View>
		);

	}

	/////////////////////
	// Private Methods //
	/////////////////////

	_handleSelect() {
		let { onSelect, value, onClick, index } = this.props;

		onClick();

		if (onSelect) onSelect(value, index);
	}
}

const styles = {
	container: {
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
		cursor: 'pointer',
		userSelect: 'none'
	},
	noFlex: {
		flexGrow: 0,
		flexBasis: 'auto',
		width: 'auto'
	},
	selected: {
		backgroundColor: colors.grey300
	},
	disabled: {
		color: colors.grey400,
		cursor: 'initial'
	}
}