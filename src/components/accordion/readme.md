**Accordion**

An all purpose expandable accordion.

**props**

`expandDirection` oneOf(`['up', 'down']`) ('down') -- Determines which direction the accordion expands.

`expandIsOverlay` *bool* (false) -- Determines if the expanded accordion is set to position `absolute` 

`expandContent` *any* -- This is the actual content that gets expanded/collapsed.

`expandContentStyle` *object* -- This is the style object of the expanded content.

`expandContentContainerStyle` *object* -- This is the style object of the expanded content container.

`expandedOnMount` *bool* (false) -- When set to true, content will be expanded on mount.

`transitionSpeed` *number* (300) -- How fast the expand transition happens.

`disabledStyle` *object* -- Style applied when accordion is disabled.

`disabled` *bool* (false) -- Disables the accordion.

**events**

`onExpandOpen()` -- Triggered when accordion expands.

`onExpandClose()` -- Triggered when accordion closes.

**methods**

`expandContent(bool)` -- Expands the hidden content.

`toggleExpandContent()` -- Toggle the hidden content.


***example:***


	let expandContent = (<div> Hello World </div>);

	return (
		<Accordion expandContent={expandContent} onClick={this._handleClick.bind(this)}>
	 		<div>
				I am an accordion, go me!
			</div>
		</Accordion>
	);