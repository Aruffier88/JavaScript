/*  
	JavaScript Lab
*/

// create a new function named display that passes a parameter named event
function name(parameter) 

// statement block
{
 // enter a jQuery selector to select the currentTarget value of the event parameter

 $(current.Target).on("click", "parameter", function()
   {
    .slideToggle();
   });
 // This function will be called when a user clicks either of the h3 elements, the selector references the h3 element the user clicks
 $("open").on("click", ".accordion-header", function() 
 {
    $(this).toggleClass("active").next().slideToggle();
 // The .next() method traverses the DOM tree to the element that follows the h3 element
 $(".accordion").on("click", ".accordion-header", function() 
{
   $(this).toggleClass("active").next().slideToggle();
 
 // Use the jQuery fadeIn() function

   $(event.currentTarget).fadeIn().function("slow");
}

// Event listener for the h3 elements that call the display() function
$("element").click(name of function to call);

