/*
 * Filepaths Plugin
 * http://www.aw20.net/
 *
 * Copyright 2012, aw2.0 Ltd.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 * 
 */

(function( $ ){

  $.fn.filepaths = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'element' : this,
      'begin'   : 13,               // Amount of characters of string to always show at start
      'end'     : 5                 // Amount of characters to show at end of string
    }, options);

    // Overwrite the defaults with the provided options (if any)
    s = $.extend({}, settings, options);

    // Shorten filepaths on intial load
    return this.each(function() {

      $(this).attr('title', this.innerHTML);
      shorten(this);        

      // Call resizer function on window resize
      $(window).resize(function() { 
        $(s.element).each(function() {
          shorten(this);        
        });
      }); // watch for window resize

    });
  };


    function shorten(filepath) {
      var th = $(filepath);

      // Add class to parent element and set variable of this element for future use
      th.parent().addClass('filepath');

      // filepath pulled from title attribute
      filepath = th.attr('title');

      var fp = $('.filepath');
      
      // Remove element from DOM
      th.empty();

      // Width of containing element
      var fpwidth = fp.width();
     
      // Count Characters
      var charcount = filepath.length;

      // width of a character
      var lw = 7;

      /*
        Maths - 
          space = Width of parent / width of character = Amount of characters can fit in space
          need 5 spaces for " ... "
          always 13 at the start // for template : // but can be setting in settings if need be
          end = space - 5 - begin
      */

      space = fpwidth / lw;
      space = space.toFixed();

      end = space - 5 - s.begin;
      end = end.toFixed();
      
      if (end < s.end) { end = s.end; }
      // Split string based on some maths done before
      fpart   = filepath.substr(0,s.begin);
      mpart   = " ... ";
      epart   = filepath.slice(-end); // IE does not like negative numbers, using slice instead
      

      // Join the three elements together, giving the shortened URL with ... in middle
      var nfilepath = "";
      var nfilepath = fpart + mpart + epart;

      cc = nfilepath.length;
      
      if (cc >= charcount) {
        nfilepath = filepath;
      }

      // Put new string in replace of exsiting one
      th.html(nfilepath);

    } // Shorten

})( jQuery );