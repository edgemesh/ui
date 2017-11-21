**Autocomplete**

A textfield with a propable autocomplete dropdown.

**props**

`options` *array* -- Possible autocomplete options, should be formated as an array of objects like so: `[{label:'label', value:'value'}]`

`maxVisible` *number* (0) -- Amount of visible results, 0 will display all results.

`defaultLabel` *string* -- Sets the default selected option via label.

`defaultValue` *string* -- Sets the default selected option via value.

`placeHolder` *string* -- Textfield placeholder.

`floatingLabel` *string* -- Textfield floating label.

`optionValidate` *bool* (true) -- If bool is true, then the component wont let you select an option that does not exist.

`openSelectorOnFocus` *bool* (true) -- Opens the dropdown selector when Autocomplete textfield is focused.

`selectorPosition` `oneOf(['top','bottom'])` ('bottom') -- Whether selector expands above the textfield or below it.

`accentColor`  -- Controls the color of the accents.

`accentFontColor`  -- Controls the color of the fonts when accented.

`textFieldStyles` -- Style object for the Textfield component.

`selectorStyles` -- Style object for the dropdown selector component.

`maxSelectorHeight` -- The maximum pixel height the dropdown selector can possibly be.

`errorColor` -- Color of error text

`hoverColor` -- Option highlight color

**events**

`onSelect` -- Triggered when an option is selected

**methods**

`getSelectedValue()` -- Get the value of the selected item.

`getSelection()` -- Get the selected options object.

`getEntryValue()` -- Get the value currently entered in to the textfield.

`setEntryValue()` -- Set the entry value in to the textfield.

`setErrorText(string)` -- Set the error text.

`clear()` -- Clear textfield

***example:***

    <Autocomplete
        options={[{ label: "one", value: "one" }, { label: "two", value: "two" } ]}
        maxVisible={5}
        placeholder='I am a placeholder'
        onSelect={this._handleSelect.bind(this)}
    />
