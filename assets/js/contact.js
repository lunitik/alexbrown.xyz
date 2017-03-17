$(function() {
	'use-strict';
	//Get the form
	var form = $('ajax-contact');

	// Get the messages div.
    var formMessages = $('#form-messages');

    // Set up an event listener for the contact form.
	$(form).submit(function(event) {
	    // Stop the browser from submitting the form.
	    event.preventDefault();

	    const subject = "Contact from alexbrown.xyz";
	    const topicarn = "arn:aws:sns:eu-west-2:912415976327:contact-form";
	    let fullname = $('#fullname');
	    let email = $('#email');
	    let messageContent = $('#message');
	    const message = "Full Name: " + fullname + "/nEmail: " + email + "/nMessage: " + messageContent;

	    //Validate Form? Not much to validate really.
	    //Sanitise input? Perhaps, although no data base involved.
	    
	    // Create an object suitable for the API Gateway
		var params = {
			"Subject" : subject,
			"TopicArn" : topicarn,
			"Message" : message
		};

		let decoded = decodeURIComponent( $.param( params ) );

		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: decoded
		})
		.done(function(response) {
		    // Make sure that the formMessages div has the 'success' class.
		    $(formMessages).removeClass('error');
		    $(formMessages).addClass('success');

		    // Set the message text.
		    $(formMessages).text(response);

		    // Clear the form.
		    $('#name').val('');
		    $('#email').val('');
		    $('#message').val('');
		})
		.fail(function(data) {
		    // Make sure that the formMessages div has the 'error' class.
		    $(formMessages).removeClass('success');
		    $(formMessages).addClass('error');

		    // Set the message text.
		    if (data.responseText !== '') {
		        $(formMessages).text(data.responseText);
		    } else {
		        $(formMessages).text('Oops! An error occured and your message could not be sent.');
		    }
		});
	//END of .submit hijacking
	});
//END of function
})