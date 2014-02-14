$('#organise').click(function(){organise('#pinCont', '[class^="xrat"]');});
$('#reset').click(function(){$('.main.wrapper').replaceWith(original);});
$('#masonry').click(function(){var container=document.querySelector('#pinCont');var msnry=new Masonry(container,{itemSelector:'.xrat'});});