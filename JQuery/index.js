// $(document).ready(function({

// })); 
// *** if the scripts are placed in the head tag ****

//***** */ manipulating styles with jquery******

$("h1").addClass("big-title margin-50");

// **** manipulating text with jquery *****

// $("button").text("don't click me");

$("button").html("<em>click me Hard</em>");

//  **** manipulating attributes with jquery ****

$("img").attr("src", "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.CPUfzrIe61x_8OVlKRs-sAHaFj%26pid%3DApi&f=1");

$("a").attr("href", "https://yahoo.com");

// adding event listeners with JQuery


$("h1").click(function() {
    $("h1").css("color", "white");
})


$("button").click(function() {
    $("h1").css("color", "purple");
})

$("input").keydown(function(event) {
    $("h1").html(event.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})


// adding elements with jquery
// before, after, prepend, append

$("h1").before("<button>How</button>");

// $("h1").remove();


// Websites animations

$("button").on("click", function() {
    // $("h1").toggle();
    // $("h1").fadeToggle();
    // $("h1").slideUp();
    // $("h1").animate({ opacity: 0.5 }); //only css code with numeric values
    $("h1").fadeToggle().slideUp().slideDown();



})