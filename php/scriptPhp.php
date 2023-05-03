<?php
// Inicio del código PHP

// El código JavaScript/jQuery debe colocarse dentro de etiquetas de script, no dentro del código PHP.
?>

<script>
$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;
      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });

  $(document).ready(function() {
    $('#modo-oscuro').click(function(e) {
      e.preventDefault();
      $('body').toggleClass('dark-mode');
      $('.bg-1').toggleClass('dark-mode');
      // Agrega más elementos aquí que deseas que cambien al modo oscuro
    });
  });

  $(document).ready(function() {
    // Toggle para cambiar entre el modo claro y oscuro
    $('.toggle-switch input[type="checkbox"]').change(function() {
      if ($(this).is(":checked")) {
        $("body").addClass("dark-mode");
      } else {
        $("body").removeClass("dark-mode");
      }
    });
  });

  $('.carousel').carousel({
    interval: 5000
  });
});
</script>

<?php
// Fin del código PHP
?>