
/* Initializes Outer_continer size to 100% height & width of window */
$(document).ready(function() {
	$('.outer_container').css('height', $(window).height());
	$('.outer_container').css('width', $(window).width());
});

/* Resizes Outer_container dynamically based on window size*/
$(window).resize(function() {
	pageWidth = $(window).width();
	pageHeight = $(window).height();
	$('.outer_container').css('height', pageHeight);
	$('.outer_container').css('width', pageWidth);
});

$('.add_button').click(function() {
	if (localStorage.getItem("addevent_counter") == 0) {
		var popup = document.getElementById("popup_container");
		popup.classList.toggle("show");
		setTimeout(function(){alert("Location Found!");}, 2000);
		setTimeout(function(){ window.location.href='addpage.html'; }, 3000); 
	} else if (localStorage.getItem("addevent_counter") == 1) {
		var popup = document.getElementById("popup_container");
		popup.classList.toggle("show");
		setTimeout(function(){alert("Location Found!");}, 2000);
		setTimeout(function(){ window.location.href='addpage_two.html'; }, 3000); 
	} else if (localStorage.getItem("addevent_counter") == 2) {
		var popup = document.getElementById("popup_container");
		popup.classList.toggle("show");
		setTimeout(function(){alert("Location Found!");}, 2000);
		setTimeout(function(){ window.location.href='addpage_three.html'; }, 3000); 
	} else {
		alert("You've added max number of events");
	}
})

function cancelPage() {
	var m = confirm("Are you sure you want to cancel?");
	if (m == true) {
		window.location.href='usersroute.html';
	}
}

$('.signin_submit').click(function() {
	var username = document.getElementById("username");
	localStorage.setItem("username", username.value); 
	var storedUsername = localStorage.getItem("username");
	document.getElementById("welcome") = storedUsername.value;
})

$('.add_submit_four').click(function() {
	var eventName = document.getElementById("add_event_name");
	var eventDesc = document.getElementById("add_event_desc");
	localStorage.setItem("eventFour_name", eventName.value);
	localStorage.setItem("eventFour_desc", eventDesc.value);
	var storedEventFourName = localStorage.getItem("eventFour_name");
	localStorage.setItem("location_four_boolean", true);
	window.location.href='usersroute.html';
	document.getElementById("name_four") = storedEventFourName.value;

})

$('.add_submit_five').click(function() {
	var eventName = document.getElementById("add_event_name");
	var eventDesc = document.getElementById("add_event_desc");
	localStorage.setItem("eventFive_name", eventName.value);
	localStorage.setItem("eventFive_desc", eventDesc.value);
	var storedEventFiveName = localStorage.getItem("eventFive_name");
	localStorage.setItem("location_five_boolean", true);
	window.location.href='usersroute.html';
	document.getElementById("name_five") = storedEventFiveName.value;

})

$('.add_submit_six').click(function() {
	var eventName = document.getElementById("add_event_name");
	var eventDesc = document.getElementById("add_event_desc");
	localStorage.setItem("eventSix_name", eventName.value);
	localStorage.setItem("eventSix_desc", eventDesc.value);
	var storedEventSixName = localStorage.getItem("eventSix_name");
	localStorage.setItem("location_six_boolean", true);
	window.location.href='usersroute.html';
	document.getElementById("name_six") = storedEventSixName.value;

})

$('#first_location').click(function() {
	var location_token_one = document.getElementById("first_location");
})

function deleteEvent_one() {
	var x = confirm("Are you sure you'd like to delete this event?");
	if (x == true) {
		localStorage.setItem("location_one_boolean", false);
		window.location.href='usersroute.html';
	} else {
		
	}
}

function deleteEvent_two() {
	var x = confirm("Are you sure you'd like to delete this event?");
	if (x == true) {
		localStorage.setItem("location_two_boolean", false);
		window.location.href='usersroute.html';
	} else {
		
	}
}

function deleteEvent_three() {
	var x = confirm("Are you sure you'd like to delete this event?");
	if (x == true) {
		localStorage.setItem("location_three_boolean", false);
		window.location.href='usersroute.html';
	} else {
		
	}
}

function deleteEvent_four() {
	var x = confirm("Are you sure you'd like to delete this event?");
	if (x == true) {
		localStorage.setItem("location_four_boolean", false);
		window.location.href='usersroute.html';
	} else {
		
	}
}

function deleteEvent_five() {
	var x = confirm("Are you sure you'd like to delete this event?");
	if (x == true) {
		localStorage.setItem("location_five_boolean", false);
		window.location.href='usersroute.html';
	} else {
		
	}
}

function deleteEvent_six() {
	var x = confirm("Are you sure you'd like to delete this event?");
	if (x == true) {
		localStorage.setItem("location_six_boolean", false);
		window.location.href='usersroute.html';
	} else {
		
	}
}

$('#add_contact_submit').click(function() {
	var x = confirm("Are you sure you want to add this user?");
	if (x == true) {
		alert("The Request Has Been Sent!");
		window.location.href='contactspage.html';
	}
})

$('#add_contact_cancel').click(function() {
	var x = confirm("Are you sure you want to cancel adding this contact?");
	if (x == true) {
		window.location.href='contactspage.html';
	}
	
})

$('.toggle_button').click(function() {
	$(this).toggleClass("highlight");
})

function sendRequests() {
	var m = confirm("Are you sure you want to send these requests?");
	if (m == true) {
		alert("Request(s) to the event have been sent!");
		window.location.href='usersroute.html';
	}
}

$('#send_request_cancel').click(function() {
	var m = confirm("Would you like to cancel your invite(s)?");
	if (m == true) {
		alert("Invites Have Been Cancel!");
		window.location.href='usersroute.html';
	}
})
