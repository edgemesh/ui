**RaisedButton**

A fancy button component with ripple.

**props**

`label` *string* -- The label of the button.

`disabledStyle` *object* -- The style object of a button when its disabled.

`disabled` *bool* (false) -- Determines wheter the button is disabled.

`fullWidth` *bool* -- If set to true, then button will be `width: 100%`

`rippleColor` *string* -- The color of the ripple.

`hoverColor` *string* -- The color of the button when a cursor hovers over it.

**events**

`onClick` -- Triggered when button is clicked.

`onFocus` -- Triggered when button gains focus.

`onBlur` -- Triggered when button focus is relinquished.

***example:***

    <RaisedButton
        fullWidth = {false}
        disabled = {false}
        label="Hello World Please Click Me"
        onClick={this._handleClick.bind(this)}
    />