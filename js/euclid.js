// Evaluates the ratio of an element relative to its parent
function ratioKidParent() {
//    console.log(arguments[0]);
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
		pins = jQuery.makeArray(jQuery(arguments[0] + ' ' + arguments[1])),
        store = [],
		ary = [],
		tempary = [],
		counter = 0;
	recRatio(pins);
	console.log(pins);
    while (pins.length>0){
        var obj = pins.shift();
        if (doesItFit(obj, tempary)){
            tempary.push(obj);
        } else {
            store.unshift(obj);
        }
        if (Math.round(aryW(tempary)*10)/10 === 1){
            ary = ary.concat(tempary);
            tempary = [];
			var storeL = store.length;
            for (var i=0; i<storeL; i++){
                var elem = store.shift();
                pins.unshift(elem);
            }
        }
		if (pins.length === 0 && store.length > 0) {
			var storeL = store.length;
            for (var i=0; i<storeL; i++){
                var elem = store.shift();
                pins.unshift(elem);
				counter++;
            }
		}
		if (counter>1){
			//add a try fitting it another way statement or something
		}
		else if (counter>5){
			break;
		}
    }
    console.log('pins');
    console.log(pins);
	console.log('store');
	console.log(store);
	console.log('ary');
	console.log(ary);
    ary.forEach(function(element){
            $('#pinTarget').append(element);
        });
};