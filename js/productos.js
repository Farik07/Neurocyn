$(document).ready(function() {
  // Abrir el popup al hacer clic en una imagen
  $('.gallery .grid-item img').on('click', function(event) {
    event.stopPropagation(); // Detener la propagación del evento
    var imageSrc = $(this).attr('src');
    $('.popup .popup-image').attr('src', imageSrc);
    $('.popup').fadeIn();
  });


  // Cerrar el popup al hacer clic fuera del contenido del popup
  $('html').on('click', function(event) {
    var target = $(event.target);
    if (!target.closest('.popup').length) {
      $('.popup').fadeOut();
    }
  });
});

/*
$(document).ready(function() {
  $('.gallery .grid-item img').each(function() {
    var imageSrc = $(this).attr('src');
    if (imageSrc === '') {
      $(this).replaceWith('<ion-icon name="ban-outline"></ion-icon>');
    }
  });
});
*/

