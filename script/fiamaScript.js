/*Function that will validate the form on the reservation page*/
function validateForm()
{
	var fname=document.forms["reservation"]["firstname"].value;
	var lname=document.forms["reservation"]["lastname"].value;
	var email=document.forms["reservation"]["email"].value;
	var phone=document.forms["reservation"]["phone"].value;
	var quantity=document.forms["reservation"]["people"].value;
	var date=document.forms["reservation"]["date"].value;
	if(fname==null || fname==""){
		alert("Please enter your first name");
		return false;
	}
	if(lname==null || lname==""){
		alert("Please enter your last name");
		return false;
	}
	
	if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(reservation.email.value)))
	{
		alert("You have entered an invalid email address!")
		return false;
	}
	
	if(phone < 10 || phone==null || phone==""){
		alert("Please enter a valid phone number. Tip: remember to include the area code.");
		return false;
	}
	
	if(quantity ==null || quantity=="" || isNaN(quantity)){
		alert("Please enter a valid number of people.");
		return false;
	}
	if(date ==null || date==""){
		alert("Please enter a date.");
		return false;
	}
	alert("Thank you for choosing JFF TOURS! You will receive a booking confirmation in your email.")
	return true;
	
}
/*Function that will calculate the total and display it on the reservation page*/
function calculation(){
	var tours=document.getElementById("tours").value;
	var quantity=document.forms["reservation"]["people"].value;
	var total;
	if(tours == "option1"){
		total = quantity * 80 + " euros";
		document.getElementById("myTotal").value = total;
	}
	else if(tours == "option2"){
		total = quantity * 70 + " euros";
		document.getElementById("myTotal").value = total;
	}
	else if(tours == "option3"){
		total = quantity * 50 + " euros";
		document.getElementById("myTotal").value = total;
	}
	else{
		total = quantity * 70 + " euros";
		document.getElementById("myTotal").value = total;
	}
}

/*Function that will check the date and allow the user to enter a date from now*/
function checkDate(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	 if(dd<10){
			dd='0'+dd
		} 
		if(mm<10){
			mm='0'+mm
		} 

	today = yyyy+'-'+mm+'-'+dd;
	document.getElementById("date").setAttribute("min", today);
}




