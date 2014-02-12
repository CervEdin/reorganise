var original = null;
var wrap = '#pinCont',
    colors = {
        1:'#2ecca5',
        2:'#c483bc',
        3:'#ffffe5',
        4:'#7e5df1',
        5:'#365bdf'
    };
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function createRandElem(minW, maxW, i){
    var width = 100/(minW)*getRandomInt(1, minW/maxW),
        colorNr = Math.floor((Math.random()*4)+1);
        str = '<div class="xrat middle" style="width:' + width.toString() + '%; background-color:' + colors[colorNr] + ';"><p>nr:' + i + '<br>' + Math.floor(width*10)/10 + '%</p></div>';
    console.log(width);
    return str;
}
function createElems(minW, maxW, cnt){
    for(var i=0; i<cnt; i++){
    $(wrap).append(createRandElem(minW, maxW, i));
    }
}
$('#createElems').click(function(){
    var cnt = document.elements.number.valueAsNumber,
        maxW = document.elements.maxW.valueAsNumber,
        minW = document.elements.minW.valueAsNumber;
    createElems(minW, maxW, cnt);
    original = $('.main-container').html();
});
$('#removeElems').click(function(){
    document.getElementById("pinCont").innerHTML = '';
});