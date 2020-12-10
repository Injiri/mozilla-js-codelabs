var $ = require('jquery');
//=============================================================================================
//  JQUERY: CHAPTER 1: About JQuery
//=============================================================================================
$(function() {
    $('a').click(function() {
        alert('Load Samuel Owino Github Profile ?');
        $('a').addClass('afterClick');
        $(this).hide('slow');
        // event.preventDefault();
    });
});

$('a').addClass('beforeClick');

//=============================================================================================
//  JQuery Attributes
//=============================================================================================

/**
 * The .attr() method acts as both a getter and a setter. 
 * As a setter, .attr() can accept either a key and a value, 
 * or an object containing one or more key/value pairs.
 */


$(function() {
    //attr as a getter
    let link = $('a').attr('href');
    console.log("Link to " + link);

    //attr as a setter
    $('a').attr('href', 'https://learn.jquery.com/using-jquery-core/attributes/');

});

/**
 * Inc Dec Orders Example
 */

$(function() {
    let ordersCount = 0;
    console.log('ínit orders count ' + ordersCount);
    $('#add_order_btn').click(function() {
        ordersCount++;
        console.log('New Orders count ' + ordersCount);
        $('#orders_count').text(ordersCount);
    });

    $('#deduct_order_btn').click(function() {
        ordersCount--;
        console.log('New Orders count ' + ordersCount);
        $('#orders_count').text(ordersCount);
    });

    /**
     * Check for child elements by class reference
     */
    if ($('.counter'.length)) {
        console.log('div counter has elements ');
    } else {
        console.log('counter is empty');
    }

    /**
     * Store selections in a variable
     */

    let counterDiv = $('.counter');
    let childrenCount = counterDiv.length;
    console.log('Div children ' + childrenCount);

});