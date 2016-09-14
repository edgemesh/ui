**Icon**

An example of how to implement an svg inline icon component, comes with a few stock icons, but should be used to 
implement your own implementation specific version.

**props**

`icon` *string* -- Name of Icon (as defined in the renderGraphics method).

`size` *number* (15) -- Size of icon.

`style` *object* -- Style object for Icon.

`color` *string* ('colors.grey800') -- Determines the Icon color.

`accentColor` *string* ('colors.cyan500') -- Determines the accent color (a secondary color if need be).

`className` *string*  -- Pass classNames through.

***example***

    <Icon 
        icon={'verified-user'}
        size={100}
        color={theme.iconColor}
        style={{marginBottom: 25}}
    />