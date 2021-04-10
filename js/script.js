// console.log("jQuery", $);


$(document).ready( function(){

    // DROPDOWN MENU

    // ref

var dropDown = $(".dropdown");
var dropdownMenu = dropDown.children(".dropdown-menu");
var dropDownLinks = dropDown.children("a");


// click (mostrare e nascondere il menu associato)
dropDownLinks.click( function(){

   // quando clicco su una a prendo il dropdown associato 
   var activeMenu = $(this).next(".dropdown-menu");
   
   // reset (se un dropdownMenu non è quello cliccato in quel momento richiudilo )
   dropdownMenu.not(activeMenu).hide();

   // show/hide ad ogni click
   activeMenu.toggle();

});


    // end doc ready
});





