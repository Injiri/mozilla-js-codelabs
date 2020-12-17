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


let spanSubChildParent = $('span.subchild').parent();
spanSubChildParent.append('<div"><p>spanSubChildParent</p></div>');

// Selecting an element's direct parent:

// returns [ div.child ]
$("span.subchild").parent();

// Selecting all the parents of an element that match a given selector:

// returns [ div.parent ]
$("span.subchild").parents("div.parent");

// returns [ div.child, div.parent, div.grandparent ]
$("span.subchild").parents();

// Selecting all the parents of an element up to, but *not including* the selector:

// returns [ div.child, div.parent ]
$("span.subchild").parentsUntil("div.grandparent");

// Selecting the closest parent, note that only one parent will be selected
// and that the initial element itself is included in the search:

// returns [ div.child ]
$("span.subchild").closest("div");

// returns [ div.child ] as the selector is also included in the search:
$("div.child").closest("div");

// Selecting an element's direct children:

// returns [ div.parent, div.surrogateParent1, div.surrogateParent2 ]
$("div.grandparent").children("div");

// Finding all elements within a selection that match the selector:

// returns [ div.child, div.parent, div.surrogateParent1, div.surrogateParent2 ]
$("div.grandparent").find("div");

//=======================================================================
//  CSS STYLING & DIMENSIONS
//=======================================================================

$('h3').addClass('page__title');

function addProductListing(productName, count, color) {
    $('.counter').append('<div><h2 class="product__name">' + productName + '</h2> <h2 class="product__color">' + color + '</h2></div > <p><span> Orders: </span><h1 id="orders_count"> ' + count + ' </h1><button id="add_order_btn"> + </button><button id="deduct_order_btn"> - </button></p>');
    $('h2').addClass('product__header');
}

//=======================================================================
//              jQuery Event Basics
//=======================================================================

$(function() {
    $('#amazon_button').on('click', function() {
        console.log('loading amazon site ...');
        window.open('https://www.amazon.com/', 'Amazon');
    });

    $('#more_options').on('click', function() {
        $('#more_options').append('<div id="alibaba_option"> <p>Try Alibaba Instead</p> <img class="brand_image" src="images/amazon.png"/> <button id ="amazon_button" > Go to Amazon < /button> </div > ');
        $('#more_options').append('<div id="jumia_option"> <p>Try Jumia Instead</p> <img class = "brand_image" src="images/amazon.png" /> <button id = "amazon_button" > Go to Amazon < /button> </div > ');
    })
});

$('body').on('mouseenter', 'img', function() {
    $('.brand_image').attr('src', 'images/alibaba.png');
});

$('body').on('mouseleave', 'img', function() {
    $('.brand_image').attr('src', 'images/amazon.png');
});

$('body').on('mouseenter', 'button', function() {
    $('.brand_image').attr('src', 'images/jumia.png');
});

$('body').on('mouseleave', '#amazon_button', function() {
    $('.brand_image').attr('src', 'images/amazon.png');
});