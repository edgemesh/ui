import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM, { findDOMNode as $ } from 'react-dom';
import Radium from 'radium';
import { colors } from '../../utils/colors';
import Paper from '../paper/Paper';
import Icon from '../icon/Icon';
import View from '../view/View';

@Radium
export default class Tab extends Component {

    static propTypes = {
        // Tabs configuration
        defaultTab: PropTypes.number,                // Index of the children array
        tabStyles: PropTypes.object,                 // Pass style to all child `Tab` elements
        tabDisabledStyles: PropTypes.object,         // Pass disabled style to all child `Tab` elements
        tabSelectedStyles: PropTypes.object,         // Pass style to the selected `Tab` element
        tabContainerStyles: PropTypes.object,        // Pass style to the container of the `Tab` elements
        depth: PropTypes.number,                     // Sets the depth of the outer `Paper` element of the Tabs component
        contentContainerStyles: PropTypes.object,    // Pass style to the content container of the `Tabs` elements
        accent: PropTypes.string,                    // InkBar and active `Tab` text color
        contentContainerClassName: PropTypes.string, // Just here for webkit scrollbar support
        fixedWidthTabs: PropTypes.bool,              // True: Children `Tab` elements are fixed equal width --
                                                     // False: Children `Tab` elements are auto width aligned flex-start
        // Event
        onSelect: PropTypes.func                     // Optional onSelect event override for all `Tab` components --
                                                     // onSelect will return value and tab index of selected tab on trigger
    };

    static defaultProps = {
        defaultTab: 0,
        depth: 1,
        accent: colors.cyan500,
        fixedWidthTabs: true
    };

    state = {
        selectedIndex: this.props.defaultTab,
        selectedTabWidth: 0,
        selectedTabLeft: 0,
        tabsContainerWidth: 0
    };

    componentWillMount() {
       this.resizeHandler = this._getSelectedTabWidth.bind(this, true);

        window.addEventListener('resize', this.resizeHandler);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resizeHandler);
    }

    componentDidMount() {
        let firstActiveTab = this._findFirstActiveTab(this.props.children);

        if (firstActiveTab !== this.props.defaultTab) {
            this.handleSelect(firstActiveTab);
        }

        setTimeout(()=>{
            this._getSelectedTabWidth(true, this.state.selectedIndex);

        })
    }

    render() {
        let {
            children,
            tabStyles,
            tabSelectedStyles,
            accent,
            onSelect,
            style,
            fixedWidthTabs,
            contentContainerStyles,
            tabContainerStyles,
            contentContainerClassName,
            tabDisabledStyles,
            depth
        } = this.props;

        let { selectedIndex } = this.state;
        let currentTabContent;

        let tabs = React.Children.map( children, (child, i)=>{
            // Determine if Tab component via default set 'tab' prop
            if (child.props.tab) {

                // If tab is selected, set it's children as the currentTabContent
                if (i == selectedIndex) {
                    currentTabContent = !child.props.disabled && child.props.children
                }

                return React.cloneElement(child, {
                    index: i,
                    onClick: this.handleSelect.bind(this, i),
                    onSelect: onSelect ? onSelect : child.onSelect, // optionally override onSelect event for all Tab components
                    selected: i == selectedIndex, // Determine if selected
                    selectedStyles: tabSelectedStyles,
                    style: tabStyles,
                    fixedWidth: fixedWidthTabs,
                    ref: `Tab-${i}`,
                    disabledStyles: tabDisabledStyles,
                    accent,
                })

            } else {
                // If it's not a Tab component, fire a warning
                console.warn('Only \'Tab\' components should be direct children of a \'Tabs\' component.')
            }
        }, this)

        return (
            <Paper style={[styles.container, style]} depth={depth}>

                {/* Tab Header Row - Row containing Tab components */}
                <Paper healLeft healRight healTop depth={1}>
                    <View ref="tabs-container" row style={[styles.rowHeader, tabContainerStyles]}>
                        {tabs}
                    </View>
                    {this._renderInkBar()}
                </Paper>

                {/* Content of the currently selected Tab */}
                <div className={contentContainerClassName} style={[styles.fullHeight, contentContainerStyles]}>
                    {currentTabContent}
                </div>
            </Paper>
        );

    }

    /////////////////////
    // Public Methods  //
    /////////////////////

    handleSelect(index){
        let { selectedTabWidth, selectedTabLeft } = this._getSelectedTabWidth(false, index);

        this.setState({
            selectedIndex: index,
            selectedTabWidth,
            selectedTabLeft
        });
    }

    /////////////////////
    // Private Methods //
    /////////////////////

    _renderInkBar(){
        let { accent } = this.props;
        let { selectedTabWidth, selectedTabLeft, tabsContainerWidth } = this.state;

        // Keeping our width in percentage versus pixel value, removes the perceived lag when resizing.
        let width = ( selectedTabWidth/tabsContainerWidth ) * 100;
        let left = ( selectedTabLeft/tabsContainerWidth ) * 100;

        // This is mostly to handle on mount, so that the Inkbar is not stretched all the way across
        if (!width || width === Infinity ) {
            width = 0,
            left = 0
        }

        width = width + '%';
        left = left + '%';

        let inkBarContainerStyles = {
            width: '100%',
            transform:  `translateX(${left})`
        };

        let inkBarStyles = {
            width,
            backgroundColor: accent
        };

        return (
            <div style={[ styles.inkBar, inkBarContainerStyles ]}>
                <div style={[styles.inkBar, inkBarStyles]}></div>
            </div>
        );
    }

    _getSelectedTabWidth(setState, index){
        let { children } = this.props;

        if(index !== undefined && index !== null){
            if (setState) index = this.state.selectedIndex;

            let selectedTabWidth = $(this.refs[`Tab-${index}`]).offsetWidth;
            let selectedTabLeft = $(this.refs[`Tab-${index}`]).offsetLeft;
            let tabsContainerWidth = $(this.refs['tabs-container']).offsetWidth;

            if (setState) {
                this.setState({ selectedTabWidth, selectedTabLeft, tabsContainerWidth });
            } else {
                return { selectedTabWidth, selectedTabLeft, tabsContainerWidth };
            }
        } else {
            return { selectedTabWidth: 0, selectedTabLeft: 0, tabsContainerWidth: 0 }
        }
    }

    _findFirstActiveTab(children){
        let firstActiveTab;

        let activeTab = React.Children.toArray(children).some((child, i)=>{
            if (child.props.tab) {
                if (!child.props.disabled){
                    firstActiveTab = i;
                    return true;
                }
            }
        });

        if (!activeTab) { console.warn('You must have at least ONE `Tab` element that is not disabled!')}

        return firstActiveTab;
    }
}

const styles = {
    fullHeight: {
        height: '100%'
    },
    rowHeader: {
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    inkBar: {
        height: 2,
        transition: 'transform 200ms ease-out, width 200ms ease-out'
    }
}
