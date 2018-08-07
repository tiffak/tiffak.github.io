$(document).ready(function(){
  $('body').scrollspy({target: ".navbar", offset: 50});   

  $("#navbarCollapse a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });
});

$(document).ready(function(){
  $('body').scrollspy({target: "#down", offset: 50});   

  $("#down").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){
        window.location.hash = hash;
      });
    } 
  });
});