const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav_menu');
const closeIcon = document.getElementById('nav_close');
const navLink = document.querySelectorAll('.nav__link');

navLink.forEach(link =>
    link.addEventListener("click", () => {
        navMenu.classList.add('hidden')
    }) 
)

closeIcon.addEventListener("click", () => {
    navMenu.classList.add('hidden')
})

hamburger.addEventListener("click", () => {
      navMenu.classList.remove('hidden')
});


$(document).ready(function(){
    $("#Create_an_account_show").click(function(){
      $("#Create_an_account").slideToggle(1000);
   });
   });
   $(document).ready(function(){
    $("#different_address_show").click(function(){
      $("#different_address").slideToggle(1000);
   });
   });   

   $(document).ready(function(){
    $("#direct_bank_show").click(function(){
        $("#direct_bank").slideToggle(1000);
    });
   });

   $(document).ready(function(){
    $("#cheque_payment_show").click(function(){
        $("#cheque_payment").slideToggle(1000);
    });
   });

   $(document).ready(function(){
    $("#paypal_show").click(function(){
        $("#paypal").slideToggle(1000);
    });
   });