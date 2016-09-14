**Dialog**

A custom dialog window, with multiple animation effects. The base component for Dialog is `BaseDialog`

**base props**

`openOnMount` *bool* (false) -- This will cause the dialog to open when the component is mounted, a good prop to use if you want the dialog to appear on page load.

`renderInBody` *bool* (false) -- This will cause the actual Dialog's html to be rendered in the `<body/>` tag. This is useful for certain nesting issues that can arise with dialog when it's not in the `<body/>`

`dismissOnClickAway` *bool* (true) -- If this prop is active and a user clicks outside of an active dialog window, it will trigger a dismissal of the dialog window.

`lockScrolling` *bool* (true)-- When the dialog is active and shown, this property will prevent the rest of the page from scrolling.

`transition` *oneOf* `['sticky-top', 'sticky-bottom', 'slide-in', 'scale-in', 'scale-out', 'sign-flip', 'flipX', 'flipY', 'slide-and-rotate' ]` ('drop-down') -- Multiple animated transitions for the dialog.

**props**

`title` *string* -- The dialog title that goes in the header bar.

`body` *any* -- The body of the dialog, you can pass anything in here.

`actions` *array* --  An array of objects, that get turned in to buttons. If no actions are provided the dialog will have a single "Dismiss" button `[{ label: 'thelabel', onClick: this.thing.bind(this}, style: { borderTop: 20 }, disabled= false]`

`accentColor` *string* -- The color of button/title accents.

`backgroundColor` *string* -- The background color of the dialog.

`titleStyle` *object* -- Style object for the title.

`bodyStyle` *object* -- Style object for the body of the dialog.

`closeStyle` *object* -- Style object for the close button.

`closeColor` *string* -- Color of close button.

**methods**

`show()` -- Shows dialog.

`dismiss()` -- Dismisses dialog.

**base events**

`onClickAway` -- Triggered when a user clicks anywhere outside of an active dialog window.

`onDismiss` -- Triggered when dialog window is dismissed.

`onShow` -- Triggered on window dialog show.

***example***
    let actions = [{ label: 'thelabel', onClick: this.thing.bind(this}, style: { borderTop: 20 }, disabled= false];    

    <Dialog                 
        renderInBody
        actions={actions}
        ref='dialog'
        transition='sign-flip'
        title={title}
        body={body}
        bodyStyle={base.body}
        titleStyle={theme.header}
        closeColor={theme.closeColor}
        accentColor={theme.dialog.accentColor}
        backgroundColor={theme.dialog.backgroundColor}
    />