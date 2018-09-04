// WEEK 11 - EXERCISE //

// make the image element appear and disappear when you click the corresponding button //
$("#hide").click(function() {
	$("img").hide();
});

$("#show").click(function() {
	$("img").show();
});

// create a third button which does the work of BOTH the previous buttons //
$("#toggle").click(function() {
	$("img").toggle();
});


// Create a fourth button which toggles this new “fade” class on and off for the image element when clicked//
$("#fade").click(function() {
	$("img").toggleClass("transition fade");
});

// make the image change to a different image on hover//

$("img").hover(function() {
	$(this).attr("src", "img/nega.png");
},
	function() {
		$(this).attr("src", "img/darkwing.png")
	}
);

// when this button is clicked, add a new list-item with some text content to this unordered list//

$("#add").click(function() {
	$("ul").append("<li>Woo-oo!</li>")
})

// when this button is clicked, cause an element to render with a red background, which covers your entire window and all of the elements on your page. Make sure that if you try to scroll, you can still see nothing but the red background//
$("#dangerous").click(function() {
	$("div").append("<p>I am the terror that flaps in the night!</p>"),
	$("#doomsday").css({
		"width": "100%",
		"height": "100vh",
		"opacity": "1",
	})
})

//  make the text content of this h1 change to reflect whether or not the “fade” class is active on the image (i.e. make the text change between “fade on” and “fade off” or something similar)//

// added counter to measure "off click" for accurate label
var counterFade = 0;

$("#fade").click(function() {
	counterFade++;

	if (counterFade % 2 == 0) {
		$("#fade-text").append("<h1>Fade off!!</h1>")
	} else {
			$("#fade-text").append("<h1>Fade on...</h1>");
		}
	}
	);

// added challenge: cause each list-item to change color, font-size, and font-family on hover (HINT: you might need to do a double-take on this one, if ALL of your list-items are changing when you hover on any ONE of them, you’ll need to think carefully about how to make sure only this one which you’re hovering over will change). Don’t forget to make them change BACK when you exit the hover //

// when I hover over the list item, I want it to change font color, size and font-family and then revert back when hover off //

$("li").hover(function() {
	$(this).css({
		"font-family": "Gloria Hallelujah",
		"font-size": "25px",
		"color": "#c91d0d",
	})
	$(this).text("NegaDuck is Better!")
	},
	function() {
		$(this).css({
			"font-family": "Anton",
			"font-size": "20px",
			"color": "#9c6bd3",
		})
		$(this).text("Darkwing Duck is the best!");
	}
);

	



