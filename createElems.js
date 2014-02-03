var wrap = $('#pinCont');
function createRandElem(){
    var str = null,
        nr = Math.floor((Math.random()*6)+1);
    str = '<div class="xrat0' + nr.toString() + '"><p>' + arguments[0] + '</p></div>'
    return str;
}
$(function() {
    for(var i=0; i<50; i++){
    wrap.append(createRandElem(i));
    }
});