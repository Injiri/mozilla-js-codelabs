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

    let htm = $('.counter').html();

    console.log(htm);

    $(function() {
        addProductListing('Nike Air', 34, 'Red');
        addProductListing('Nike Red Octobers', 4, 'Red');
        addProductListing('Nike Watch Branded', 304, 'Black');
        addProductListing('Nike Belt', 400, 'Yellow');
    });

});

function addProductListing(productName, count, color) {
    $('.counter').append('<div><h2 class="product__name">' + productName + '</h2> <h2 class="product__color">' + color + '</h2></div > <p><span> Orders: </span><h1 id="orders_count"> ' + count + ' </h1><button id="add_order_btn"> + </button><button id="deduct_order_btn"> - </button></p>');
}