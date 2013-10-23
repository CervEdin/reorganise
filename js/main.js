var organizr = {};
organizr.blocks = '';
function ratioKidParent() {
    var kid = arguments[0],
    	childW = kid.offsetWidth,
        parW = kid.parentNode.offsetWidth;
	return childW/parW;
}
function recRatio(){
	var ary = arguments[0];
	for (var i = 0; i < ary.length; i++){
		ary[i].ratio = ratioKidParent(ary[i]);
	}
}
function aryW()	{
	var arr = arguments[0],
		cnt = 0;
		$.each(arr, function(index){
			cnt += this.ratio;
		});
		return cnt;
}
function doesItFit() {
	var dis = arguments[0],
		arr = arguments[1];
		if (ratioKidParent(dis) + aryW(arr) <= 1) {
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