**ProgressBar**

A simple stylish progress bar component, mostly controlled by props.

**props**

`percent` *number* (-1) -- From 0-100 determines amount of progress filled.

`onTop` *bool* (false) -- Set the outer progressbar container to height 100%.

`autoIncrement` *bool* (false) -- Start automatically incrementing the progress bar until the client tells it to stop.

`intervalTime` *number* (200) -- How fast the progress bar fills.

`color` *string* (cyan500) -- Determines color of progressbar.

**methods**

`increment()` -- Manually increment the progress bar a small random value.

***example***
    
    let percent = 50;
    
    <ProgressBar ref="progress" percent={percent}/>