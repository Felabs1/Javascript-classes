

function myFunction(){
	var date = new Date();

	var hours, min, sec, day, weekday, month, year, ampm;
	hours = date.getHours();
	min = date.getMinutes();
	sec = date.getSeconds();
	month = date.getMonth();
	day = date.getDate();
	weekday = date.getDay();
	year = date.getYear();
	ampm = "";

	var months = ["January", "February", "March", "April", "May", "June", "July", "Aug", "sept", "Oct", "Nov", "Dec"];
	var days_of_week = ["Monday", "Tuesday", "Wednesday", "Thursday", "FriDay", "Saturday", "Sunday"];

	if (hours >= 12){
		hours -= 12;
		ampm = "pm";
	}else{
		ampm = "am";
	}

	if(min < 10){
		min = "0" + min;
	}

	if(sec < 10){
		sec = "0" + sec;
	}

	document.getElementById("hours").innerHTML = hours;
	document.getElementById("minutes").innerHTML = min;
	document.getElementById("seconds").innerHTML = sec;
	document.getElementById("ampm").innerHTML = ampm.toUpperCase();
	document.getElementById("weekday").innerHTML = days_of_week[weekday - 1];
	document.getElementById("month").innerHTML = months[month];
	document.getElementById("monthday").innerHTML = day;
	document.getElementById("year").innerHTML = year;
}

setInterval(myFunction, 1000);





