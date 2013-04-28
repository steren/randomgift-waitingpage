$(document).ready(function() {
	// buttons
	$( "button.button, input:submit, a.button").button();
	
	// form validation
	$( "#eventForm" ).validate(
	{
		messages: {
			email: { email: "Not valid." }
		}
	});
	
    // dashboard
    
    // edit email
    $(".js-edit-email").click( function(e) {
        var hash = $(e.target).data("member-hash");
        var $emailspan = $(e.target).prev("span.email");
        var oldemail = $emailspan.text();

        var newEmail = prompt("new email", oldemail);
        
        $.post("/member/"+hash+"/email", {newEmail: newEmail}, function(data) {
        	$emailspan.text(newEmail);
        });
    });
    
    // resend email
    $(".js-resend-email").click( function(e) {
        var hash = $(e.target).data("member-hash");
        $.post("/member/"+hash+"/send", function(data) {
        	alert("Email renvoyé.\nEemail sent");
        });
    });
});