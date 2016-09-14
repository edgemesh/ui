**textfield*

A multi purpose textfield component.

**base props**

`disabled` *bool* -- Disables Textfield

`defaultValue` *string* -- Sets the default value.

`placeholder` *string* -- Sets placeholder text.

`keyUpDelay` *number* -- Delay after key up for validateOptions (automatically validate after key hasnt been pressed based on this interval.)

`style` *object* -- Pass style through.

`validateOptions` *object* -- If on will validate based on the validate prop.

`type` *string* ("text") -- Text field type.

`validate` *oneOf([
    'phone',
    'credit-card',
    'ip-address',
    'mac-address',
    'email',
    'currency',
    'date',
    'decimal',
    'number',
    'url',
    'regex',
    'length',
    'isIn'
])*

**base events**

`onKeyUp` 

`onKeyDown` 

`onInput` 

`onEnter` 

`onTab` 

`onEscape` 

`onBlur` 

`onFocus` 


**props**

`accentColor` *string* (cyan600) -- Color of accent.

`errorColor` *string* (amber600) -- Color of error text.

`successColor` *string* (lightGreen600) -- Success status color.

`backgroundColor` *string* (white) -- Color of background.

`textColor` *string* (grey800) -- Color of text.

`placeholderColor` *string* (grey400) -- Color of placeholder.

`disabledBackgroundColor` *string* (grey400) -- Color of background when disabled.

`disabledTextColor` *string* -- Color of text when disabled.

`disabledPlaceholderColor` *string* (grey400) -- Color of placeholder when disabled.

`pushErrorText` *bool* (true) -- Determines if errorText will push the content below it (position relative)

`underline` *bool* (true) -- Accent line goes on bottom.

`overline` *bool* (false) -- Accent line goes on top.

`compact` *bool* (false) -- Determines if Textfield is compact.

`floatingLabel` *bool* (true) -- Determines if place holder is floating label.

`autocomplete` *bool* (true)  -- Determines if browser autocomplete is on.

`zIndex` *number* (999) -- Manually set zIndex.

**example**

    <TextField 
        ref='email'
        placeholder='E-Mail'
        defaultValue={"Hello world"}
        style={base.textField}
        validate='email'
    />