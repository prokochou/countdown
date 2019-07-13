

//calculate dates
var total_days = 295;
var today=new Date();

var last_day=new Date(2019, 5, 31);
var one_day=1000*60*60*24;
var remaining=Math.ceil(((last_day.getTime()-today.getTime())/(one_day))-30);
if (remaining < 0){
	var percentage = '0';
	remaining = 0;
}else{
	var percentage = ((remaining/total_days)*100); 
}
var past= (100 - percentage).toFixed(1);



function get_content(){
	var text = '[{"week_no":"1","title":"Canterbury", "link":"https://photos.app.goo.gl/rGrQPxVEiArfaHGU9","img":"assets/img/week1.jpg","alt":"week1"},{"week_no":"2-1","title":"Birmingham", "link":"https://photos.app.goo.gl/83aPZ9EZEQzSAmGN7","img":"assets/img/week2.jpg","alt":"week2.1"},{"week_no":"2-2","title":"Oxford", "link":"https://photos.app.goo.gl/gw4a7CKjYzkSTeTRA","img":"assets/img/week2-2.jpg","alt":"Week2-2"},{"week_no":"3","title":"Canterbury Cathedral and Dover", "link":"https://photos.app.goo.gl/JtjWWoa3gysKs76y8","img":"assets/img/week3.jpg","alt":"Week3"},{"week_no":"4","title":"Last Week of Pre-sessional course", "link":"https://photos.app.goo.gl/EVQFj5KGtwEpbnFGA","img":"assets/img/week4.jpg","alt":"Week4"},{"week_no":"5-1","title":"Day 2 in Norway: Trondheim ", "link":"https://photos.app.goo.gl/JSDuATSVaRLypDQQ8","img":"assets/img/week5-1.jpg","alt":"Week5-1"},{"week_no":"5-2","title":"Day 3 in Norway: Åndalsnes", "link":"https://photos.app.goo.gl/YtUXcSZ5pVQB9BH39","img":"assets/img/week5-2.jpg","alt":"Week5-2"},{"week_no":"6-1","title":"Day 4 in Norway: Romsdalsvegen", "link":"https://photos.app.goo.gl/SWyX3hVzn1ysmWrY6","img":"assets/img/week6-1.jpg","alt":"Week6-1"},{"week_no":"6-2","title":"Norway: Åndalsnes and Geiranger", "link":"https://photos.app.goo.gl/fsReYdVyueXXtWyr8","img":"assets/img/week6-2.jpg","alt":"Week6-2"},{"week_no":"6-3","title":"Day 7 in Norway: Geiranger to Valdres Høyfjellshotell", "link":"https://photos.app.goo.gl/HF2s9gZoxmKq1Rg48","img":"assets/img/week6-3.jpg","alt":"Week6-3"},{"week_no":"6-4","title":"Day 8 in Norway: Valdres Høyfjellshotell, Laerdal Holiday& Leisure Park", "link":"https://photos.app.goo.gl/MCUzZjr4uQyBcaih8","img":"assets/img/week6-4.jpg","alt":"Week6-4"},{"week_no":"6-5","title":"Norway Day 9: Flam 松恩峽灣與小火車", "link":"https://photos.app.goo.gl/uukGkEyopDNPKAvv6","img":"assets/img/week6-5.jpg","alt":"Week6-5"},{"week_no":"6-6","title":"Norway Day 10: from Flam to Asane", "link":"https://photos.app.goo.gl/cUsC1yvz7C7xuivY6","img":"assets/img/week6-6.jpg","alt":"Week6-6"},{"week_no":"6-7","title":"Norway Day 11: Bergen", "link":"https://photos.app.goo.gl/AoyJ7CiKBxnLr4Yg8","img":"assets/img/week6-7.jpg","alt":"Week6-7"},{"week_no":"7","title":"The first week of MBA programme", "link":"https://photos.app.goo.gl/ZoLLNNNn8YCcm1bT6","img":"assets/img/week7.jpg","alt":"Week7"},{"week_no":"8","title":"London & Whistable", "link":"https://photos.app.goo.gl/5fTofmo81JY3Eo656","img":"assets/img/week8.jpg","alt":"Week8"},{"week_no":"9","title":"MBA Programme 2", "link":"https://photos.app.goo.gl/LfUVbvP3vW44ZPxt5","img":"assets/img/week9.jpg","alt":"Week9"},{"week_no":"10","title":"Margate, Medway, and  Folkstone", "link":"https://photos.app.goo.gl/SAtZcpZaE1fThULF9","img":"assets/img/week10.jpg","alt":"Week10"},{"week_no":"11","title":"MBA Programme 3", "link":"https://photos.app.goo.gl/6ERxnNK9fagCvUtG7","img":"assets/img/week11.jpg","alt":"Week11"},{"week_no":"12","title":"London, Ashford, Sandwich, Deal", "link":"https://photos.app.goo.gl/TE26v6ikCRnnGgNs5","img":"assets/img/week12.jpg","alt":"Week12"},{"week_no":"14","title":"Cambridge & Taiwan", "link":"https://photos.app.goo.gl/1sNCc8FUNVDXF3ii8","img":"assets/img/week14.jpg","alt":"Week14"},{"week_no":"15","title":"Move house and Brighton", "link":"https://photos.app.goo.gl/JTCvrUaa12Hj3Qw68","img":"assets/img/week15.jpg","alt":"Week15"},{"week_no":"16","title":"Programme 5", "link":"https://photos.app.goo.gl/QEddcMFufWFhVgsT7","img":"assets/img/week16.jpg","alt":"Week16"},{"week_no":"17","title":"Ramesgate", "link":"https://photos.app.goo.gl/gjbciQerndbg5SsK8","img":"assets/img/week17.jpg","alt":"Week17"},{"week_no":"18 & 19","title":"The end of term", "link":"https://photos.app.goo.gl/qHG2ACwMKZWfmf648","img":"assets/img/week18_19.jpg","alt":"Week18_19"},{"week_no":"20","title":"London", "link":"https://photos.app.goo.gl/mxSexjnBKh4efZEN7","img":"assets/img/week20.jpg","alt":"Week20"},{"week_no":"21-1","title":"Barcelona, Spain", "link":"https://photos.app.goo.gl/fArsZ1UU2zLPDef99","img":"assets/img/week21-1.jpg","alt":"Week21-1"},{"week_no":"21-2","title":"Madrid & Toledo, Spain", "link":"https://photos.app.goo.gl/Xvh2TK3L9fyoHR5f8","img":"assets/img/week21-2.jpg","alt":"Week21-2"},{"week_no":"22-1","title":"Còdoba, Spain", "link":"https://photos.app.goo.gl/XooWKtsvzjJrufTe7","img":"assets/img/week22-1.jpg","alt":"Week21-2"},{"week_no":"22-2","title":"Granada, Spain", "link":"https://photos.app.goo.gl/7XJWnkwvxJdaM1GQ6","img":"assets/img/week22-2.jpg","alt":"Week22-2"},{"week_no":"22-3","title":"Gibraltar, Spain", "link":"https://photos.app.goo.gl/xG8TvL14sndyug2aA","img":"assets/img/week22-3.jpg","alt":"Week22-3"},{"week_no":"22-4","title":"Savilia, Spain", "link":"https://photos.app.goo.gl/eFgvx6G7WWrCbcVM7","img":"assets/img/week22-4.jpg","alt":"Week22-4"},{"week_no":"22-5","title":"Tenerife, Spain", "link":"https://photos.app.goo.gl/PC9rE2RDsn4sEpEM7","img":"assets/img/week22-5.jpg","alt":"Week22-5"},{"week_no":"23","title":"Canterbury, UK", "link":"https://photos.app.goo.gl/aZU86n98av2JgSGr9","img":"assets/img/week23.jpg","alt":"Week23"},{"week_no":"24","title":"Programme 6 & Folkstone, UK", "link":"https://photos.app.goo.gl/5zqu8aPRkyhvGJ3C9","img":"assets/img/week24.jpg","alt":"Week24"},{"week_no":"25","title":"Programme 7 & Dover, UK", "link":"https://photos.app.goo.gl/rihGrJRojZUDF5cj8","img":"assets/img/week25.jpg","alt":"Week25"}]';

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