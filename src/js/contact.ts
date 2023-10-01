//many thanks to Gustavo Gonnet: https://www.hackster.io/gusgonnet/email-notifications-using-amazon-web-services-cd2bf3
//and Matt West: http://blog.teamtreehouse.com/create-ajax-contact-form
import $ from 'jquery';

export class ContactForm {

	init() {
		'use-strict';
		//Get the form
		const $form = $('#ajax-contact');
	
		// Get the messages div.
		const $formMessages: JQuery<HTMLElement> = $('#form-messages');
	
		// Set up an event listener for the contact form.
		$form.on("submit", function(event) {
			// Stop the browser from submitting the form.
			event.preventDefault();
	
			const subject: string = "Contact from alexbrown.xyz";
			const topicarn: string = "arn:aws:sns:eu-west-2:912415976327:contact-form";
			let fullname: string | number | string[] = $('#fullname').val();
			let email: string | number | string[] = $('#email').val();
			let messageContent: string | number | string[] = $('#message').val();
			const message: string = "Full Name: " + fullname + "\nEmail: " + email + "\nMessage: " + messageContent;
	
			//Validate Form? Not much to validate really.
			//Sanitise input? Perhaps, although no data base involved.
			
			// Create an object suitable for the API Gateway
			const params: { Subject: string, TopicArn: string, Message: string } = {
				"Subject" : subject,
				"TopicArn" : topicarn,
				"Message" : message
			};
	
			let decoded: string = decodeURIComponent( $.param( params ) );
			let combinedURL: string = $form.attr('action') + "?" + decoded;
			//console.log(combinedURL);
	
			// Submit the form using AJAX.
			$.ajax({
				type: 'POST',
				url: combinedURL
			})
			.done(function(response) {
				// Make sure that the formMessages div has the 'success' class.
				$formMessages.removeClass('error');
				$formMessages.addClass('success');
	
				//console.log(response);
	
				// Set the message text.
				$formMessages.text("Thank you for gettin in touch. Your message should now have been delivered and I will be in touch shortly.");
	
				// Clear the form.
				$('#fullname').val('');
				$('#email').val('');
				$('#message').val('');
			})
			.fail(function(data) {
				// Make sure that the formMessages div has the 'error' class.
				$formMessages.removeClass('success');
				$formMessages.addClass('error');
	
				// Set the message text.
				if (data.responseText !== '') {
					$formMessages.text(data.responseText);
				} else {
					$formMessages.text('Oops! An error occured and your message could not be sent.');
				}
			});
		//END of .submit hijacking
		});
	//END of function
	}
}