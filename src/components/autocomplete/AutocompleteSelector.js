import React, { Component, PropTypes } from 'react';
import Radium, {Style} from 'radium';
import { findDOMNode as $ } from 'react-dom';
import { Paper, Accordion } from '../../';
import { colors } from '../../utils/colors';
import uuid from 'uuid';


@Radium
export default class AutocompleteSelector extends Component {
	static displayName = 'AutocompleteSelector';

	static propTypes = {
		// Configuration
		options: PropTypes.array,
		// Styling
		selectorStyles: PropTypes.object,
		selectorItemStyles: PropTypes.object,
		accent: PropTypes.string,
		hoverColor: PropTypes.string,
		maxSelectorHeight: PropTypes.number,
		// Events
		onOptionSelected: PropTypes.func
	};

	static defaultProps = {
		accent: colors.cyan500,
		hoverColor: colors.grey300,
		open: false,
		maxSelectorHeight: 250,
		selectionIndex: 0,
		onOptionSelected: ()=>{}
	};
	state = {
		selectionIndex: null
	};

	componentDidUpdate(prevProps) {
		let { open } = this.props;

		if ( prevProps.open !== open ) {
			this.refs.accordion.expandContent(open);
			// console.log('props: ',open,'prevProps: ', prevProps.open)
		}
	}

	render() {

		let { options, accent, hoverColor, selectorStyles, selectorItemStyles, maxSelectorHeight } = this.props;
		let { selectionIndex } = this.state;



		options = options.map((option, i)=>{
			return(
				<div
					key={i}
					ref={`${option.label}-${i}`}
					className="autocomplete-selector-hover-item"
					onMouseDown={this._handleItemClick.bind(this, i)}
					style={[styles.optionItem, i === 0 && {paddingTop: 16}, selectorItemStyles, i == selectionIndex && {backgroundColor: accent}]}>
					{option.label}
				</div>
			);
		});

		return (
			<Paper ref="container" style={[styles.paper, { maxHeight: maxSelectorHeight }]} innerStyle={styles.paperInner} fullWidth zIndex={1001}>
				{/* Work around for Radiums bad hover support */}
				<Style rules={{
					'.autocomplete-selector-hover-item:hover': {
						backgroundColor: hoverColor
					}
				}} />
				<Accordion
					ref="accordion"
					expandContent={options}
					expandContentStyle={[styles.selector, selectorStyles]}
					expandContentContainerStyle={styles.selectorContainer}
				/>
			</Paper>
		);
	}

	navUp() {
		if (this.state.selectionIndex === null) {
			this.setState({selectionIndex: 0 })
		} else {
			if ((this.state.selectionIndex) > 0) {
				this.setState({selectionIndex: this.state.selectionIndex - 1});
				setTimeout(()=>{this.calculateScroll()});
			} else {
				this.setState({ selectionIndex:  this.props.options.length - 1});
				setTimeout(()=>{this.calculateScroll()});
			}
		}
	}

	navDown() {
		if (this.state.selectionIndex === null) {
			this.setState({selectionIndex: 0 })
		} else {
			if ((this.state.selectionIndex + 1) < this.props.options.length) {
				this.setState({selectionIndex: this.state.selectionIndex + 1});
				setTimeout(()=>{this.calculateScroll()});
			} else {
				this.setState({ selectionIndex: 0 });
				setTimeout(()=>{this.calculateScroll()});
			}
		}
	}

	calculateScroll() {
		let { options } = this.props;
		let { selectionIndex } = this.state;

		if (options.length > 0) {
			
			let container = $( this.refs.container );

			let label = options[selectionIndex].label;
			let item = $( this.refs[`${label}-${selectionIndex}`] );

			let itemTop = item.offsetTop;
			let itemHeight = item.offsetHeight;
			let containerHeight = container.offsetHeight;

			container.scrollTop = itemTop - containerHeight + itemHeight;
		}
	}
	
	setSelectionIndex(i){
		this.setState({ selectionIndex: i });
	}	

	getSelectionIndex(i){
		return this.state.selectionIndex;
	}

	_handleItemClick(i){
		this.setSelectionIndex(i);
		setTimeout(()=>{this.props.handleSelect()});
	}
}

const styles = {
	selectorContainer: {
		zIndex: 1001,
	},
	paper: {
		zIndex:1001,
		width: '100%',
		height: 'auto',
		position: 'absolute',
		top: 'calc(100% - 6px)',
		overflow: 'hidden',
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4,
		overflowY: 'scroll'
	},
	paperInner: {
		zIndex: 1001,
		backgroundColor: colors.grey50, 
		borderTopLeftRadius: 0,
		borderTopRightRadius: 0,
		borderBottomLeftRadius: 4,
		borderBottomRightRadius: 4
	},
	optionItem: {
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 10,
		paddingRight: 10,
		cursor: 'pointer'
	}
}