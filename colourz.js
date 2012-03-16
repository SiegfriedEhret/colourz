/**
            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO. 
*/

(function($, undefined){
  var version = '0.1',
    defaults = {
      from:'#hex',
      to:'#rgb',
      mode:'hex-to-rgb',
      opacity:undefined,
      elementToPimp:undefined,
      cssProperty:undefined
    },
    modes = {
      hexToRgb:'hex-to-rgb',
      rgbToHex:'rgb-to-hex'
    },
    colorize = function(settings) {
      if (settings.elementToPimp) {
        $(settings.elementToPimp).css(settings.cssProperty, settings.color);
        
        if (settings.opacity && settings.opacity != 1) 
          $(settings.elementToPimp).css('opacity', settings.opacity);
      }
    },
    fillValue = function(settings) {
      if (settings.element) {
        ($(settings.element).is('input') && $(settings.element).val(settings.val)
          || $(settings.element).text(settings.val));
      }
    },
    hexToRgb = function(settings) {
      var from = $(settings.from).val();
      if (from.indexOf('#') == 0) from = from.substr(1);
      if (from.length == '3') {
        var leFrom = '';
        $.each(from, function(i, item) { leFrom += item + '' + item; });
        from = leFrom;
      }
      var rgba = 'rgba(';
      for (var i = 0; i < 5; i += 2) {
        rgba += parseInt(from.slice(i, i+2), 16) + (i + 2 < 5 ? ',' : '');
      }
      rgba += settings.opacity ? ',' + settings.opacity + ')' : ')';
      colorize({
        elementToPimp:settings.elementToPimp,
        cssProperty:settings.cssProperty,
        color:rgba
      });
      fillValue({
        element:settings.to,
        val:rgba
      });
    },
    rgbToHex = function(settings) {
      var to = $(settings.to).val();
      to = to.slice(5, to.length - 1); /* remove rgba( and ) */
      var hex = '#';
      var opacity = 1;
      $.each(to.split(','), function (i, item) {
        if (i < 3) {
          var num = Number(item).toString(16);
          hex += num.length == 1 ? '0' + num : num;
        } else if (i == 3) {
          opacity = item;
        }
      });
      colorize({
        elementToPimp:settings.elementToPimp,
        cssProperty:settings.cssProperty,
        color:hex/**, Don't know what to do with this opacity ^^
        opacity:opacity*/
      });
    };
    
  $.fn.colourz = function(options) {
    var leThis = this,
      settings = $.extend({}, defaults, options);
    if (settings.mode == modes.hexToRgb) $(this).click(function() { hexToRgb(settings); });
    else if (settings.mode == modes.rgbToHex) $(this).click(function() { rgbToHex(settings); });
    return this;
  };
})(jQuery);