**tooltip**

Tooltip helper components -- comes in regular Tooltip and Stickytooltip (stickytooltip follows the mouse.) Just wrap the tooltip around any div you want it to display over.

**base props**

`vPosition` (center) *oneOf(['top','bottom', 'center'])* -- Horizontal positioning of the Tooltip - StickyTooltips do not support 'center'

`hPosition` (bottom) *oneOf(['left','right', 'center'])* -- Vertical positioning of the Tooltip - StickyTooltips do not support 'center'

`placeholder` *any* -- The tooltip content

`tooltipStyles` *object* -- Use this to pass styles to the actual Tooltip

`disabled` *bool*  -- Disables the tooltip but still renders the children


**example**

    <StickyTooltip 
        vPosition='top'
        tooltipStyles={{padding: 20}}
        placeholder="hello world"> 
        
        <div> I am some text with a tooltip, go me!!</div>
        
    </StickyTooltip>