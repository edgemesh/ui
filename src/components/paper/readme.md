**Paper**

A paper component, that will add real nice drop shadow to almost any div component.

**props**

`style` *object* -- Style object for Paper's outer container.

`innerStyle` *object* -- Style object for Paper's inner container.

`depth` *oneOf([0, 1, 2, 3, 4, 5]* (1) -- Depth (how high should the Paper appear to be off the canvas).

`circle` *bool* (false) -- Makes the Paper a circle container.

`fullHeight` *bool* (true) -- Outer Paper container will be set to height 100%

`fullWidth` *bool* (false) -- Outer Paper container will set to width 100%.

`healLeft` *bool* (false) -- Removes shadow on the left side of the paper.

`healRight` *bool* (false) -- Removes shadow on the right side of the paper.

`healTop` *bool* (false) -- Removes shadow on the top side of the paper.

`healBottom` *bool* (false) -- Removes shadow on the bottom side of the paper.

`zIndex` *number* (999) --- Set the outer Paper containers z-index.

**methods**

`getInnerContainer()` -- Returns a ref to the inner container.

***example***
    
    let content = (<div>Hello World!!!</div>);
    
    <Paper 
        fullWidth
        healTop
        zIndex={99999} 
        style={{borderRadius: 4, overflow: 'hidden'}} 
        innerStyle={{ borderRadius: 4 }}>
        {content}
    </Paper>