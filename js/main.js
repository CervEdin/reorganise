// Evaluates the ratio of an element relative to its parent
function ratioKidParent() {
    var kid = arguments[0],
    	childW = kid.offsetWidth,
        parW = kid.parentNode.offsetWidth;
	return childW/parW;
}
// Iterates through an array of DOM elements, calling ratioKidParent, registering the value in the ratio property
function recRatio(){
	var ary = arguments[0];
	for (var i = 0; i < ary.length; i++){
		ary[i].ratio = ratioKidParent(ary[i]);
	}
}
// Calculates the sum of the ratio properties, of an array of DOM elements
function aryW()	{
	var cnt = 0;
		$.each(arguments[0], function(index){
			cnt += this.ratio;
		});
		return cnt;
}
// Evaluates if the sum of the ratio of an element and other (possible) elements is greater than 1
function doesItFit() {
    if (ratioKidParent(arguments[0]) + aryW(arguments[1]) <= 1) {
        return true;
    }
    else {
        return false;
    }
}
// main function, iterates over speciefied DOM elements and attempts to organise them to achieve a ratio of one each 'line'
function organise() {
	var id = $(arguments[0]),
		pins = $(arguments[0] + ' ' + arguments[1]),
		ary = [],
		tempary = [],
		counter = 0;
	recRatio(pins);
//	console.log(pins);
	pins.each(function(index){
        console.log(pins[index]);
		if (doesItFit(pins[index], tempary) === true){
			tempary.splice(tempary.length, 0, pins[index]);
			if (aryW(tempary) === 1){
//				console.log(tempary);
				ary.splice(ary.length, 0, tempary);
				tempary = [];
			}
		}
		else {
//			console.log('Element ' + index + ' didnt fit');
			for (var i=index; i < pins.length; i++){
				var dis = pins[i];
//                console.log('running for loop');
				if (doesItFit(dis, tempary) === true){
					tempary.splice(tempary.length, 0, pins[i]);
//					console.log(Math.round(aryW(tempary)*10)/10);
					if (Math.round(aryW(tempary)*10)/10 === 1){
						ary.splice(ary.length, 0, tempary);
						tempary = [];
					}
				}
			}
		}
	});
}
$('#button').click(function(){organise('#pinCont', '[class^="xrat"]');});