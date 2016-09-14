**Tabs**

A dynamic tab component, the parent component for all Tab subcomponents.

**props**

`defaultTab` *number* (0) -- Index of the tab in children array

`tabStyles` *object* -- Pass style to all child Tab elements

`tabDisabledStyles` *object* -- Pass disabled style to all child Tab elements

`tabSelectedStyles` *object* -- Pass style to the selected Tab element

`tabContainerStyles` *object*  -- Pass style to the container of the Tab elements

`depth` *number* (1) -- Sets the depth of the outer `Paper` element of the Tabs component

`contentContainerStyles` *object* -- Pass style to the content container of the `Tabs` elements

`accent` *string* (cyan500) -- InkBar and active Tab text color

`contentContainerClassName` *string* -- Just here for webkit scrollbar support 

`fixedWidthTabs` *bool* (true) -- True Children Tab elements are fixed equal width -- False Children Tab elements are auto width aligned flex-start

**events**

`onSelect` -- Optional onSelect event override for all Tab components -- onSelect will return value and tab index of selected tab on trigger

**Tab**

The tab child subcomponent.

**props**

`label` *string* -- The Tab label.

`value` *string* -- The Tab's value.

`selected` *bool* -- Determines if the Tab is currently selected.

`disabled` *bool* (false) -- Determines whether the Tab is disabled.

**events**

`onSelect` Triggered when tab is selected, returns value  and label.

**example**
    let content = (<div> Hello World !</div>);
  
    <Tabs 
        ref="tabs"
        depth={0}
        accent={theme.accent}
        onSelect={this.handleSelect.bind(this)}
     >
        
        <Tab label="One" value="one">
            {content}
        </Tab>                                

        <Tab label="Two" disabled={true}>
            {content}
        </Tab>

    </Tabs>