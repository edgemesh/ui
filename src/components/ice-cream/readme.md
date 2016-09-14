**ice-cream**

A small dismissable notification bar -- only one notification can be displayed at a time, a new notification automatically dismisses the old one. 

**props**

`hPosition` *oneOf(['left', 'right'])* ('left') -- Horizontal position of the IceCream.

`vPosition` *oneOf(['top', 'bottom'])* ('bototm') -- Vertical position of the IceCream.

`fontColor` *string* ('colors.grey300') -- Determines the font color.

`backgroundColor` *string* ('colors.grey900') -- Determines the background color.

**events**

`onShow` -- Triggered when the IceCream is shown.

`onDismiss` -- Triggered when the IceCream is dismissed.

**methods**

`pushMessage(message,accent)` -- Push a notification, must include a message and an accent color, if no accent color is provided, default to cyan500.

`dismiss()` -- Dismiss the notification.

***example***

    <IceCream 
        ref='icecream'
        fontColor={colors.cyan500}
        backgroundColors={colors.grey900}
        vPosition='bottom'
        hPosition='right'
        onDismiss={this.onDismissIceCream.bind(this)}
    />