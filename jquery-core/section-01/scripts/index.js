var $ = require('jquery');
//=============================================================================================
//  JQUERY: CHAPTER 1: About JQuery
//=============================================================================================
$(function() {
    $('a').click(function() {
        alert('Load Samuel Owino Github Profile ?');
        $('a').addClass('afterClick');
        $(this).hide('slow');
        event.preventDefault();
    });
});

$('a').addClass('beforeClick');