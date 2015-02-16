"use strict";

//Function for change tab color
//
function showAddTab(){ 
	document.getElementById('add-button').className = 'tab-btn selected-btn';
	document.getElementById('review-button').className = 'tab-btn';

	var inputs = document.getElementsByTagName("INPUT");

	for (var i = 0; i<inputs.length; i++) {
		inputs[i].removeAttribute('disabled');
	}

	var inputs = document.getElementsByTagName("SELECT");

	for (var i = 0; i<inputs.length; i++) {
		inputs[i].removeAttribute('disabled');
	}
	
	document.getElementById('add-tab-title').className = '';
	document.getElementById('review-tab-title').className = 'no-display';

	document.getElementById('add-header').className = '';
	document.getElementById('review-header').className = 'no-display';
}



function showReviewTab(){
	document.getElementById('review-button').className = 'tab-btn selected-btn';
	document.getElementById('add-button').className = 'tab-btn';


	var inputs = document.getElementsByTagName("INPUT");

	for (var i = 0; i<inputs.length; i++) {
		inputs[i].setAttribute('disabled', 'true');
	}
	
	var inputs = document.getElementsByTagName("SELECT");

	for (var i = 0; i<inputs.length; i++) {
		inputs[i].setAttribute('disabled', 'true');
	}
	

	document.getElementById('review-tab-title').className = '';
	document.getElementById('add-tab-title').className = 'no-display';

	document.getElementById('review-header').className = '';
	document.getElementById('add-header').className = 'no-display';

}



// VALIDATE FORM
// 


function checkForm(){
	if( !document.form.name.value ){
	     alert( "Please enter your campaign name!" );
	     return;
	}

	if( document.form.type.value === "0" ){
	     alert( "Please choose your campaign type!" );
	     return;
	}

	// check date format

	var dateRegexp = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/;
	var dateval = document.form.startDate.value;

	if (!dateRegexp.test(dateval)){
		return alert("Please enter a date.");

	}else{ //Detailed check for valid date ranges
		var datetime = dateval.split(' ');
		var date = datetime[0]; // 1992/04/20
		var time = datetime[1]; // 12:53

		var datesplit = date.split("/");

		var yearfield = datesplit[0];
		var monthfield = datesplit[1];
		var dayfield = datesplit[2];

		var timesplit = time.split(':');

		var hourfield = timesplit[0];
		var minutefield = timesplit[1];

		var dayobj = new Date(yearfield, monthfield-1, dayfield, hourfield, minutefield);

		if ((dayobj.getMonth()+1!=monthfield)||(dayobj.getDate()!=dayfield)||(dayobj.getFullYear()!=yearfield)||(dayobj.getHours()!=hourfield)||(dayobj.getMinutes()!=minutefield)){
			return alert("Invalid Day, Month, Year, Hour or Minute range detected. Please correct and submit again.");
		}
	}
	
	// if we got here everything passed
	alert('Campaign added successfully!');
}


