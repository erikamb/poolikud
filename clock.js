window.onload = function(){

var clock = document.getElementById('clock');
writeDate();//selleks et poleks näha 00:00:00
//käivitan intervalli
window.setInterval(function(){
  writeDate();

}, 500);

};

function writeDate(){
  var today = new Date();

  var hours = addZeroBefore(today.getHours());
  var minutes = addZeroBefore(today.getMinutes());
  var seconds = addZeroBefore(today.getSeconds());
  var days = today.getDate();
  var months = today.getMonth()+1;
  var years = today.getFullYear();

clock.innerHTML ='<p class = "hours">'+ hours + '</p>:<p class = "minutes">' + minutes + '</p>:<p class = "seconds">'+ seconds + '</p><br><p class = "days">'+ days + '</p>:<p class = "months">' + months + '</p>:<p class = "years">'+ years + '</p>';


}

function addZeroBefore(number){

if(number < 10){
  number = "0" + number;
}

  return number;
}

function change() {
	var x = Math.floor(Math.random() * 256); // range is 0-255
	var y = Math.floor(Math.random() * 256);
	var z = Math.floor(Math.random() * 256);
	var thergb = "rgb(" + x + "," + y + "," + z + ")";
	console.log(thergb,document.body.style.background);
	document.body.style.background=thergb;
}
