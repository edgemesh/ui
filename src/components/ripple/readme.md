**TouchRipple**

Usually used as a sub component, this drives the ripple-click/touch behavior.

**props**

`rippleColor` *number* (-1) -- Color of the ripple.

`overflowHidden` *bool* (false) -- Determines if ripple outer container is overflow hidden.

**handler overrides**

`handleMouseDown` *bool* (false) -- Do something on mouse down.

`handleMouseUp` *number* (200) -- Do something on mouse up.


**methods**

`startCenterRipple()` -- Manually start the ripple growing from center.

`endCenterRipple()` -- Manually stop the ripple from growing from center.

***example***
    
    let content = (<div> YAY IM A RIPPLE </div>);
    
    <TouchRipple ref="ripple" rippleColor={rippleColor}>
        {content}
    </TouchRipple>