**Switches**

A simple stylish progress bar component, mostly controlled by props.

**base props**

`size` *number* (28) -- Size of switch.

`label` *string* -- Label text.

`labelPosition` *oneOf(['left', 'right'])* (right) -- Horizontal label position.

`labelStyle` *object* -- Label style object.

`defaultValue` *bool* (false) -- Determines if Switch is default checked/on.

`disableFocusRipple` *bool* (false) -- Disables the ripple when a Switch gets focused.

`disableTouchRipple` *bool* (false) -- Disables the ripple when touched/clicked.

`required` *bool* (false) -- For validation.

`disabled` *bool* (false) -- Disables swtich.

**base methods**

`setValue(value)` -- Manually sets value.

`getValue()` -- Get switches current value.

`hasChanged()` -- Returns bool that determines if switch has been changed from it's default.

`toggle()` -- Toggle the switch.

-----

**CheckBox**

A simple checkbox component with ripple.

**props**

`outlineColor` *string* (grey800) -- Determines the checkbox outline color.

`checkColor` *string* (cyan500) -- Determines the checkbox check color.

`disabledColor` *string* (grey400) -- Determines the checkbox disabled color.

`size` *number* -- Determines the checkbox size.

***example***
    
    <Checkbox
        ref='remember'
        label="Remember your username"
        defaultValue={this.state.loggedIn ? true : false} 
        outlineColor={colors.grey500}
        checkColor={colors.teal500}
        disabledcolor={colors.grey200}
    />
    
-----

**RadioGroup**

The parent component that holds all the Radio components.

**props**

`value` *string* -- Current value, based on value of child of Radio buttons.

`defaultValue` *string* -- Sets a default value, based on value of child of Radio buttons.

`labelPosition` *oneOf(['left', 'right']) -- Determines the position of the label.

**events**

`onChange` -- Any time a different radio is selected this event will trigger.

**methods**

`clearValue()` -- Clears all Radio selections.

**Radio***

The child component the actual radio button.

**props**

`label` *string* -- Label of the radio button.

`value` *string* -- Value of the radio button.

`outlineColor` *string* (grey800) -- Determines color of the outline.

`switchColor` *string* (cyan500) -- Determines the color of the selected button.

`disabledColor` *string* (grey400) -- Determine the disabled color.

`size` *number* -- Determines the size of the radio button.

**example**


    <RadioGroup ref='radioGroup' defaultValue={'two'} onChange={this.handleChange.bind(this)}>
        <Radio 
            disabled={true}
            label='One'
            value='one'/>
        <Radio 
            label='Two'
            value='two'/>
    </RadioGroup>
    
-----

**Toggle**

A colorful simple toggle.

**props**

`toggleOnColor` *string* (cyan50) -- Color when toggle is ON.
