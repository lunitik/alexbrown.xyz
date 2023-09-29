/*!
 * main.ts v0.0.1 - The site's main typescript document.
 * Copyright (c) 2023 Alex Brown - https://alexbrown.xyz
 * License: MIT
 */

import Headroom from 'headroom.js';
import $ from 'jquery';
import { Scrollers } from './scroller';
import { ContactForm } from './contact';

$(function()
{
	'use strict';

	//headroom setup
	// grab an element
	const theHeader: HTMLElement | null = document.querySelector("header");

    if (theHeader != null) {
        // construct an instance of Headroom, passing the element
        const headroom: Headroom  = new Headroom(theHeader, {
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
    }

    let scrollers: Scrollers = new Scrollers();
    scrollers.init();
    let contactForm: ContactForm = new ContactForm();
    contactForm.init();
});


