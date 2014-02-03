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
	var cnt = 0;
		$.each(arguments[0], function(index){
			cnt += this.ratio;
		});
		return cnt;
}
function doesItFit() {
    if (ratioKidParent(arguments[0]) + aryW(arguments[1]) <= 1) {
        return true;
    }
    else {
        return false;
    }
}
function organise() {
	var id = $(arguments[0]),
		pins = $(arguments[0] + ' ' + arguments[1]),
		ary = [],
		tempary = [],
		counter = 0;
	recRatio(pins);
//	console.log(pins);
	pins.each(function(index){
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
					if (aryW(tempary) === 1){
						ary.splice(ary.length, 0, tempary);
						tempary = [];
					}
				}
			}
		}
	});
}
