**RaisedButton**

A selector component

**props**

`options` *array* An array of objects with the shape of ```{label: 'label', value: 'value', content: (<div> custom display content</div>)}```,

`placeholder` *string* Text that is displayed before an option is selected.

`defaultLabel` *string* Select a default option via the label key

`defaultValue` *string* Select a default option via the value key

`disabled` *bool* Component disable toggle,

`floatingLabel` *bool* Component floating label toggle

// Styling

`accentColor` *string* Color of the accent, use for highlighting mostly

`hoverBackground` *string* Background color for when hover state is active

`floatingLabelColor` *string* Color of the floating label

`backgroundColor` *string* Background Color of the selected

`placeholderColor` *string* Color of the placeholder text

`textColor` *string* Color of the selected text

`alignSelector` *oneOf(['left', 'right','center'])* Determines the alignment of the dropdown selector

`fullWidth` *bool* Component full width toggle

`maxSelectorHeight` *number* Determines the maximum height of the dropdown container

`minWidth` *number* Determines the minimum width of the component

`maxWidth` *number* Determines the maximum width of the component

// Disabled state styling

`disabledTextColor` *string* Determines the color of selected text when component is disabled.

`disabledPlaceholderColor` *string* Determines the color of the placeholder when component is disabled.

`disabledBackground` *string* Determines the color of the background when component is disabled.

// Custom Style

`style` *object* Style object pass through.

`placeholderStyle` *object* Style pass through for placeholder container.

`dropdownContainerStyle` *object* Style pass through for the dropdown container.

`optionContainerStyle` *object* Style pass through for the options container.

`disabledStyle` *object* Style pass through when component is disabled.

**events**

`onSelect` -- Triggered when a selection is made.

***example:***

    let renderedContent = (
        <div>
            <Icon icon="credit-card" size={20}/>
            Mastercard
        </div>
    );

    [	
        {label: 'Mastercard', value: 'mastercard', content: renderedContent},
        {label: 'Visa', value: 'visa'},
        {label: 'American Express', value: 'express'},
        {label: 'Discover', value: 'discover'},
        {label: 'Paypal', value: 'paypal'},
        {label: 'Bitcoin', value: 'bitcoin'},
    ]

    <Select
        options={options}
        alignSelector="right"
        defaultValue="visa"
        placeholder='Payment Type'/>
