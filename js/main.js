<<<<<<< HEAD
function ratioKidParent(){
	return arguments[0].offsetWidth/arguments[0].parentNode.offsetWidth;
=======
var organizr = {};
organizr.blocks = '';
function ratioKidParent() {
    var kid = arguments[0],
    	childW = kid.offsetWidth,
        parW = kid.parentNode.offsetWidth;
	return childW/parW;
>>>>>>> gh-pages
}
function recRatio(){
	var ary = arguments[0];
	for (var i = 0; i < ary.length; i++){
		ary[i].ratio = ratioKidParent(ary[i]);
	}
}
function aryW()	{
	var arr = arguments[0],
<<<<<<< HEAD
		cls = arguments[1],
		cnt = 0;
		arr.each(function(index){
			cnt += this.ratio*cls;
=======
		cnt = 0;
		$.each(arr, function(index){
			cnt += this.ratio;
>>>>>>> gh-pages
		});
		return cnt;
}
function doesItFit() {
	var dis = arguments[0],
		arr = arguments[1];
<<<<<<< HEAD
		if (ratioKidParent(dis) + aryW(arr, window.pinColumns) <= window.pinColumns) {
=======
		if (ratioKidParent(dis) + aryW(arr) <= 1) {
>>>>>>> gh-pages
			return true;
		}
		else {
		return false;
		}
}
function organise() {
	var id = $(arguments[0]),
		pins = $(arguments[0] + ' div[class^=xrat]'),
		ary = [],
		tempary = [],
		counter = 0;
<<<<<<< HEAD
	window.pinColumns = arguments[1];
	recRatio(pins);
	console.log(window.pinColumns);
	console.log(pins);
	pins.each(function(){
		if (doesItFit(this, tempary) === true){
		}
		else {
		}
	});
}

=======
	recRatio($.makeArray(pins));
	console.log(window.pinColumns);
	console.log($.makeArray(pins));
	pins.each(function(index){
		if (doesItFit(pins[index], tempary) === true){
			console.log(1337);
			tempary.splice(tempary.length, 0, pins[index]);
			if (aryW(tempary) === 1){
				console.log(tempary);
				ary.splice(ary.length, 0, tempary);
				tempary = [];
			}
		}
		else {
			console.log(7331);
			for (var i=index; i < pins.length; i++){
				var dis = pins[i];
				if (doesItFit(dis, tempary) === true){
					console.log(999);
					tempary.splice(tempary.length, 0, pins[i]);
					console.log(tempary);
					if (aryW(tempary) === 1){
						ary.splice(ary.length, 0, tempary);
						tempary = [];
					}
					else {
						dis.ratio = 0.33;
					}
				}
			}
		}
	});
}
$('#button').click(function(){organise('#pinCont');});
>>>>>>> gh-pages
//$(document).ready(organise('#pinCont', 3));

// var rest = columns - counter;
// 		counter += ratioW($(this))*columns;
//  		console.log('rest'+rest.toString());
// 		while (counter > 3) {
// 			for (var i = index; i < pins.length ; i++){
// 				var  size = ratioW(pins.eq(i))*columns;
// 				if (size === rest){
// 					pins.eq(i).insertBefore(pins.eq(index));
// 					console.log(i);
// 					break;
// 				}
// 			}
// 			counter = 0;
// 		}

// 	pins.each(function(index){
// 		var rat = this.ratio,
// 			wid = rat * columns,
// 			rest = columns - counter - wid;
// 		if (counter + wid <= columns){
// 			if (rest < 1 && rest != 0){
// 				var wif = this.offsetWidth,
// 					counter + wid + wtf + 1 = rest;
// 				$(this).width(wif * (rat - wtf));
// 				wid
// 			}
// 			tempary.splice(ary.length, 0, $(this));
// 			counter += wid;
// 		}
// 	});