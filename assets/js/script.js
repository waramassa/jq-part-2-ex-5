$(document).ready(function(){
    $('.color').mouseover(function(){
        var colorButton = $(this).attr('id');
        $('#text').css('color' ,colorButton);
    })

    $('.color').mouseout(function(){
        $('#text').css('color', '#000000');
    })
});

    