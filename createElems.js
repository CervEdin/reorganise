var wrap = $('.main.wrapper');
function createRandElem(){
    var str = null,
        nr = Math.floor((Math.random()*6)+1);
    str = '<div class="xrat0' + nr.toString() + '"></div>'
    return str;
}
$(function() {
    for(var i=0; i<100; i++){
    wrap.append(createRandElem());
    }
});