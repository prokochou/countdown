

//calculate dates
var total_days = 401;
var today=new Date();
var last_day=new Date(2019, 9, 14);
var one_day=1000*60*60*24;
var remaining=Math.ceil((last_day.getTime()-today.getTime())/(one_day));
if (remaining >= 401){
	var percentage = '100%';
}else{
	var percentage = ((remaining/total_days)*100).toFixed(1) + '%'; 
}
var past = 1 - percentage;


window.onload = function what(){
	document.getElementById("remain-id").innerHTML= "&nbsp;&nbsp;"+ remaining;
	document.getElementById("percentage").innerHTML= percentage;
};