function ratioKidParent(){
	return arguments[0].offsetWidth/arguments[0].parentNode.offsetWidth;
}
function recRatio(){
	var ary = arguments[0];
	for (var i = 0; i < ary.length; i++){
		ary[i].ratio = ratioKidParent(ary[i]);
	}
}
function aryW()	{
	var arr = arguments[0],
		cls = arguments[1],
		cnt = 0;
		arr.each(function(index){
			cnt += this.ratio*cls;
		});
		return cnt;
}
function doesItFit() {
	var dis = arguments[0],
		arr = arguments[1];
		if (ratioKidParent(dis) + aryW(arr, window.pinColumns) <= window.pinColumns) {
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
$('#button').click(function(){organise('#pinCont', 3);});
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