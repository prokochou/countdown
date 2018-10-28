

//calculate dates
var total_days = 295;
var today=new Date();

var last_day=new Date(2019, 5, 31);
var one_day=1000*60*60*24;
var remaining=Math.ceil(((last_day.getTime()-today.getTime())/(one_day))-30);
if (remaining >= 401){
	var percentage = '0';
}else{
	var percentage = ((remaining/total_days)*100); 
}
var past= (100 - percentage).toFixed(1);



function get_content(){
	// var text = '{"report":[{"subject":"Math","score":86},{"subject":"English","score":88}]}';
	var text = '[{"week_no":"1","title":"Canterbury", "link":"https://photos.app.goo.gl/rGrQPxVEiArfaHGU9","img":"assets/img/week1.jpg","alt":"week1"},{"week_no":"2-1","title":"Birmingham", "link":"https://photos.app.goo.gl/83aPZ9EZEQzSAmGN7","img":"assets/img/week2.jpg","alt":"week2.1"},{"week_no":"2-2","title":"Oxford", "link":"https://photos.app.goo.gl/gw4a7CKjYzkSTeTRA","img":"assets/img/week2-2.jpg","alt":"Week2-2"},{"week_no":"3","title":"Canterbury Cathedral and Dover", "link":"https://photos.app.goo.gl/JtjWWoa3gysKs76y8","img":"assets/img/week3.jpg","alt":"Week3"},{"week_no":"4","title":"Last Week of Pre-sessional course", "link":"https://photos.app.goo.gl/EVQFj5KGtwEpbnFGA","img":"assets/img/week4.jpg","alt":"Week4"},{"week_no":"5-1","title":"Day 2 in Norway: Trondheim ", "link":"https://photos.app.goo.gl/JSDuATSVaRLypDQQ8","img":"assets/img/week5-1.jpg","alt":"Week5-1"},{"week_no":"5-2","title":"Day 3 in Norway: Åndalsnes", "link":"https://photos.app.goo.gl/YtUXcSZ5pVQB9BH39","img":"assets/img/week5-2.jpg","alt":"Week5-2"},{"week_no":"6-1","title":"Day 4 in Norway: Hiking in Romsdalsvegen", "link":"https://photos.app.goo.gl/SWyX3hVzn1ysmWrY6","img":"assets/img/week6-1.jpg","alt":"Week6-1"},{"week_no":"6-2","title":"Day 5&6 in Norway: from Åndalsnes to  Geiranger", "link":"https://photos.app.goo.gl/fsReYdVyueXXtWyr8","img":"assets/img/week6-2.jpg","alt":"Week6-2"},{"week_no":"6-3","title":"Day 7 in Norway: from Geiranger to Valdres Høyfjellshotell", "link":"https://photos.app.goo.gl/HF2s9gZoxmKq1Rg48","img":"assets/img/week6-3.jpg","alt":"Week6-3"},{"week_no":"6-4","title":"Day 8 in Norway: from Valdres Høyfjellshotell to Laerdal Holiday and Leisure Park", "link":"https://photos.app.goo.gl/MCUzZjr4uQyBcaih8","img":"assets/img/week6-4.jpg","alt":"Week6-4"},{"week_no":"6-5","title":"Norway Day 9: Flam 松恩峽灣與小火車", "link":"https://photos.app.goo.gl/uukGkEyopDNPKAvv6","img":"assets/img/week6-5.jpg","alt":"Week6-5"},{"week_no":"6-6","title":"Norway Day 10: from Flam to Asane", "link":"https://photos.app.goo.gl/cUsC1yvz7C7xuivY6","img":"assets/img/week6-6.jpg","alt":"Week6-6"},{"week_no":"6-7","title":"Norway Day 11: Bergen", "link":"https://photos.app.goo.gl/AoyJ7CiKBxnLr4Yg8","img":"assets/img/week6-7.jpg","alt":"Week6-7"},{"week_no":"7","title":"The first week of MBA programme", "link":"https://photos.app.goo.gl/ZoLLNNNn8YCcm1bT6","img":"assets/img/week7.jpg","alt":"Week7"},{"week_no":"8","title":"London & Whistable", "link":"https://photos.app.goo.gl/5fTofmo81JY3Eo656","img":"assets/img/week8.jpg","alt":"Week8"},{"week_no":"9","title":"MBA Programme 2", "link":"https://photos.app.goo.gl/LfUVbvP3vW44ZPxt5","img":"assets/img/week9.jpg","alt":"Week9"},{"week_no":"10","title":"Margate, Medway, and  Folkstone", "link":"https://photos.app.goo.gl/SAtZcpZaE1fThULF9","img":"assets/img/week10.jpg","alt":"Week10"},{"week_no":"11","title":"MBA Programme 3", "link":"https://photos.app.goo.gl/6ERxnNK9fagCvUtG7","img":"assets/img/week11.jpg","alt":"Week11"}]';

	var obj = JSON.parse(text);
	var content='';

	for (i=obj.length-1;i>=0;i--) {
		var details='<div class="col-lg-4 col-sm-12"><div class="thumbnail" id="content">' + "Week" + obj[i].week_no + ": " + obj[i].title + '<a href="' + obj[i].link + '" target="_blank">' + '<img src="' + obj[i].img + '" ' + 'alt="' + obj[i].alt + '">' + '</div></div></div>';
		content = content.concat(details);
	}

	return content;
}

window.onload = function what(){
	document.getElementById("remain-id").innerHTML= "&nbsp;"+ remaining;
	document.getElementById("percentage").innerHTML= past + "%";

	document.getElementById("content").innerHTML=get_content();

};