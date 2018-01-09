import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium, { Style } from 'radium';
import { colors } from '../../utils/colors';

@Radium
export default class ProgressBar extends Component {

	static propTypes = {
		percent: PropTypes.number.isRequired,
		onTop: PropTypes.bool,
		autoIncrement: PropTypes.bool,
		intervalTime: PropTypes.number,
		color: PropTypes.string
	};

	static defaultProps = {
		color: colors.cyan500,
		percent: -1,
		onTop: false,
		autoIncrement: false,
		intervalTime: 200
	};

	state = {
		percent: this.props.percent
	};

	increment() {
		let percent = this.state.percent + (Math.random() + 1 - Math.random());
		percent = percent < 99 ? percent : 99;
		this.setState({ percent });
	};

	handleProps(props) {

		if (props.autoIncrement && props.percent >= 0 && props.percent < 99) {
			this.interval = setInterval(this.increment, props.intervalTime);
		}

		if (props.percent >= 100) {
			this.setState({
				percent: 99.9
			}, () => {
				this.timeout = setTimeout(() => {
					this.setState({
						percent: -1
					});
				}, 400);
			});
		} else {
			this.setState({
				percent: props.percent
			});
		}
	};

	componentDidMount() {
		this.handleProps(this.props);
	};

	componentWillReceiveProps(nextProps) {
		if (this.interval) {
			clearInterval(this.interval);
		}
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
		this.handleProps(nextProps);
	};

	componentWillUnmount() {
		if (this.interval) {
			clearInterval(this.interval);
		}
		if (this.timeout) {
			clearTimeout(this.timeout);
		}
	};

	render() {


		let style = {
			width: (this.state.percent < 0 ? 0 : this.state.percent) + '%'
		};

		return (
			<div style={[
				styles.bar,
				this.props.onTop && styles.onTop,
				(this.state.percent < 0 || this.state.percent >= 100) && styles.hide
			]}>
				<div style={[ styles.percent, style ]} />
			</div>
		);
	}
}

const styles = {
	bar: {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		visibility: 'visible',
		opacity: 1,
		transition: 'all 400ms',
		zIndex: 9999999
	},
  	onTop: {
		height: '100%'
	},
  	hide: {
    	opacity: 0,
    	visibility: 'hidden',
    	zIndex: -10
  	},
	percent: {
	  height: '2px',
	  background: '#29D',
	  boxShadow: '0 0 10px #29D, 0 0 5px #29D',
	  transition: 'all 200ms ease'
	}
}
