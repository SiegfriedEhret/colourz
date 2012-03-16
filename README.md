# intro
colourz.
A jQuery plugin for image conversion. I'm tired of looking in drawing software or in google to get RGB value from hex value etc.
Demo : http://dev.federalbureauofinhumanity.org/colourz/v0.1/demo/

# how ?
Include jquery.
Include colourz.js.  
Add some js code :
<pre>
$(function () {
  $('#hex-to-rgb').colourz({
    from:'#hex',
    to:'#rgb',
    mode:'hex-to-rgb',
    opacity:.2,
    elementToPimp:'body',
    cssProperty:'background-color'
  });
});
</pre>

# options
- from: the selector for the input element (to read)
- to: the selector for the output element (to write)
- mode: 'hex-to-rgb' or 'rgb-to-hex', to select the conversion mode
- opacity: opacity (if needed, like 0.2) (not used in rgb-to-hex mode)
- elementToPimp: the element to apply the converted colour (debug with 'body')
- cssProperty: the css property to apply the converted colour (like 'background-color')

# license
This plugin is licensed under the terms of the WTF Public License (see [here](http://en.wikipedia.org/wiki/WTFPL) and [here](http://sam.zoy.org/wtfpl/)) :
<pre>
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO. 
</pre>