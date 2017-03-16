/*!
 * main.js v0.0.0 - The site's main javascript document.
 * Copyright (c) 2017 Alex Brown - https://alexbrown.xyz
 * License: MIT
 */


$(document).ready(function()
{
	'use strict';

	//headroom setup
	// grab an element
	var theHeader = document.querySelector("header");
	// construct an instance of Headroom, passing the element
	var headroom  = new Headroom(theHeader, {
			"offset": theHeader.clientHeight,
			"tolerance": 5,
			"classes": {
			"initial": "animated",
			"pinned": "slideInDown",
			"unpinned": "slideOutUp"
		}
	});
	// initialise
	headroom.init();

})

