import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

@Radium
export default class View extends Component {

	static propTypes = {
		row: PropTypes.bool,
		column: PropTypes.bool,
		auto: PropTypes.bool,
		className: PropTypes.string,
		onClick: PropTypes.func,
		height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
		style: PropTypes.object,
		width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
	};

	static defaultProps = {
		width: 1,
		row: true,
		column: false,
		auto: false,
		className: '',
		height: null,
		style: {},
		onClick: () => {}
	};

	render() {
		const dynamicStyles = {};
		let widthClass;

		if (typeof this.props.width === 'number') {
			dynamicStyles.flexGrow = this.props.width;
		} else if (this.props.width) {
			dynamicStyles.width = this.props.width;
			widthClass = styles.width;
		}

		if (this.props.height) {
			dynamicStyles.height = this.props.height;
		}

		if (this.props.auto) {
			dynamicStyles.flex = '1 0 0';
		}

		const passedProps = {
			onClick: this.props.onClick ? this.props.onClick : () => {},
			className: this.props.className || ''
		};

		let style;
		if (this.props.style) {
			style = [
				styles.flex,
				this.props.row && styles.row,
				this.props.column && styles.column,
				this.props.height && styles.height,
				widthClass,
				dynamicStyles,
				this.props.style
			];
		} else {
			style = [
				styles.flex,
				this.props.row && styles.row,
				this.props.column && styles.column,
				this.props.height && styles.height,
				widthClass,
				dynamicStyles
			];
		}

		return (
			<div style={style} {...passedProps}>
				{this.props.children}
			</div>
		);
	}

}

const styles = {
	flex: {
		boxSizing: 'border-box',
		display: 'flex',
		flexWrap: 'nowrap',
		flex: '1 0 auto',
		justifyContent: 'space-between',
		alignContent: 'space-between',
		alignItems: 'stretch'
	},
	row: {
		flexDirection: 'row'
	},
	column: {
		flexDirection: 'column'
	},
	width: {
		flexBasis: 'auto',
		flexGrow: 0,
		flexShrink: 0
	},
	height: {
		flexBasis: 'auto',
		flexGrow: 0,
		flexShrink: 0
	}
};
