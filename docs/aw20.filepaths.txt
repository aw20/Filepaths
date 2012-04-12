Filepaths Plugin 
aw2.0
http://www.aw20.co.uk/


--- DESCRIPTION ---
A jQuery plugin to shorten filepaths.


--- INSTALLATION ---
The jQuery library should already be imported on the page (developed with 1.6.4).

The following files must also be imported on the page:
aw20.filepaths.min.js    the plugin workings (minified)


--- USAGE ---
$(".filepath").filepaths();

Will shorten file paths and put the complete filepath in the title of the element. So if you hover over 
the element you can see the full path.

On resize of your browser if using percentages on your element the file path will grow and shrink, to either 
show or hide more of the filepath.


--- OPTIONS ---

begin							Number of characters to always show at the beginning of the filepath (default: 13)
end 							Minimum Number of characters to always show at the end of the filepath (default: 5)


--- TESTING ---

Tested in:

Firefox 10            		WORKING
Safari 5.10           		WORKING
Chrome 17						  		WORKING
Internet Explorer 7/8/9   WORKING