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

   $('.carousel').carousel({
    interval: 5000
  });
});



  //Funcion para activar o desactivar el darkmode
$(document).ready(function() {
  // Verifica si hay un valor almacenado en el almacenamiento local
  var storedValue = localStorage.getItem('darkModeEnabled');
  
  // Aplica el modo oscuro según el valor almacenado, si existe
  if (storedValue === 'true') {
    toggleDarkMode(true);
    $('.toggle-switch input[type="checkbox"]').prop('checked', true);
  }
  
  // Toggle para cambiar entre el modo claro y oscuro
  $('.toggle-switch input[type="checkbox"]').change(function() {
    var isChecked = $(this).is(":checked");
    toggleDarkMode(isChecked);
    // Guarda el estado del modo oscuro en el almacenamiento local
    localStorage.setItem('darkModeEnabled', isChecked.toString());
  });
  
  $('#modo-oscuro').click(function(e) {
    e.preventDefault();
    var isDarkModeEnabled = $('body').hasClass('dark-mode');
    toggleDarkMode(!isDarkModeEnabled);
    // Guarda el estado del modo oscuro en el almacenamiento local
    localStorage.setItem('darkModeEnabled', (!isDarkModeEnabled).toString());
  });
  
  function toggleDarkMode(enabled) {
    $("body").toggleClass("dark-mode", enabled);
    $('.bg-1').toggleClass('dark-mode', enabled);
    // Agrega más elementos aquí que deseas que cambien al modo oscuro
  }
});





 



document.addEventListener('DOMContentLoaded', function() {
  var video = document.getElementById('myVideo');
  var volumeButton = document.getElementById('volumeButton');
  var volumeSliderContainer = document.querySelector('.volume-slider-container');
  var soundIcon = document.getElementById('soundIcon');
  var muteIcon = document.getElementById('muteIcon');

  // Verificar el estado inicial del video
  if (video.muted) {
    volumeButton.classList.add('muted');
    soundIcon.style.display = 'none';
    muteIcon.style.display = 'inline';
  }

  volumeButton.addEventListener('click', function() {
    if (video.muted) {
      video.muted = false;
      volumeButton.classList.remove('muted');
      soundIcon.style.display = 'inline';
      muteIcon.style.display = 'none';
    } else {
      video.muted = true;
      volumeButton.classList.add('muted');
      soundIcon.style.display = 'none';
      muteIcon.style.display = 'inline';
    }
  });

  volumeButton.addEventListener('mouseover', function() {
    volumeSliderContainer.style.display = 'block';
  });

  volumeButton.addEventListener('mouseleave', function() {
    volumeSliderContainer.style.display = 'none';
  });

  volumeSliderContainer.addEventListener('mouseover', function() {
    volumeSliderContainer.style.display = 'block';
  });

  volumeSliderContainer.addEventListener('mouseleave', function() {
    volumeSliderContainer.style.display = 'none';
  });

  volumeSliderContainer.addEventListener('input', function() {
    video.volume = volumeSlider.value;
  });
});



function resizeVideos() {
  var videoContainer = document.getElementById('video-container');
  var videos = videoContainer.getElementsByTagName('resizable-video');
  var aspectRatio = 16 / 9; // Proporción de aspecto 16:9
  var containerWidth = videoContainer.offsetWidth;

  for (var i = 0; i < videos.length; i++) {
    var video = videos[i];
    var containerHeight = containerWidth / aspectRatio;
    var marginBottom = 15; // Ajusta el margen inferior según tus necesidades

    video.style.width = containerWidth + 'px';
    video.style.height = containerHeight + 'px';
    video.style.marginBottom = marginBottom + 'px';
  }
}

$(document).ready(function(){
  // Seleccionar el elemento del carousel
  var carousel = $('#myCarousel');

  // Habilitar el deslizamiento táctil utilizando la biblioteca touchSwipe
  carousel.swipe({
    swipeLeft: function() {
      $(this).carousel('next');
    },
    swipeRight: function() {
      $(this).carousel('prev');
    },
    // Configuración adicional si es necesario
  });
});



$(document).ready(function() {
  // Cerrar la barra de navegación al hacer clic en un elemento de navegación o en el logo
  $('.navbar-collapse ul, .logo-container').on('click touchstart', function() {
    $('.navbar-collapse').collapse('hide');
    $('.dropdown-menu').removeClass('show'); // Cierra el menú desplegable
    $('.dropdown-toggle').attr('aria-expanded', 'false'); // Cambia el estado del menú desplegable
    $('.navbar').removeClass('navbar-expanded'); // Quita la clase "navbar-expanded" de la barra de navegación
  });

  // Evitar que se cierre la barra de navegación al hacer clic en el menú desplegable y sus elementos
  $('.dropdown-toggle').on('click touchstart', function(event) {
    event.stopPropagation();
    var $dropdownToggle = $(this);
    var isExpanded = $dropdownToggle.attr('aria-expanded') === 'true';
    $dropdownToggle.attr('aria-expanded', !isExpanded);
    if ($(window).width() < 768) {
      // Cerrar otros menús desplegables abiertos en la versión móvil
      $('.dropdown-toggle').not($dropdownToggle).attr('aria-expanded', 'false');
      $('.dropdown-menu').not($dropdownToggle.next('.dropdown-menu')).removeClass('show');
    }
  });

  // Cerrar la barra de navegación al hacer clic en cualquier parte del body, excepto en el menú desplegable y sus elementos
  $('body').on('click touchstart', function(event) {
    var target = $(event.target);
    if (!target.closest('.navbar-collapse').length && !target.closest('.dropdown-toggle').length && !target.closest('.dropdown-menu').length) {
      $('.navbar-collapse').collapse('hide');
      $('.dropdown-menu').removeClass('show'); // Cierra el menú desplegable
      $('.dropdown-toggle').attr('aria-expanded', 'false'); // Cambia el estado del menú desplegable
      $('.navbar').removeClass('navbar-expanded'); // Quita la clase "navbar-expanded" de la barra de navegación
    }
  });

  // Añadir clase "navbar-expanded" a la barra de navegación cuando se abre el menú desplegable
  $('.dropdown-toggle').on('click touchstart', function() {
    var dropdownMenu = $(this).next('.dropdown-menu');
    if (!dropdownMenu.hasClass('show')) {
      dropdownMenu.addClass('show');
      $(this).attr('aria-expanded', 'true');
      $('.navbar').addClass('navbar-expanded'); // Agrega la clase "navbar-expanded" a la barra de navegación
    } else {
      dropdownMenu.removeClass('show');
      $(this).attr('aria-expanded', 'false');
      $('.navbar').removeClass('navbar-expanded'); // Quita la clase "navbar-expanded" de la barra de navegación
    }
  });

  // Cerrar el menú desplegable al hacer clic en un elemento dentro de él
  $('.dropdown-menu').on('click touchstart', function(event) {
    event.stopPropagation();
    $('.dropdown-menu').removeClass('show');
    $('.dropdown-toggle').attr('aria-expanded', 'false');
    $('.navbar').removeClass('navbar-expanded'); // Quita la clase "navbar-expanded" de la barra de navegación
  });
});





document.addEventListener('DOMContentLoaded', function() {
  var dropdownMenu = document.getElementById('dropdownMenu');
  var dropdownToggle = document.getElementById('dropdownToggle');
  var dropdownItems = dropdownMenu.getElementsByClassName('dropdown-item');

  dropdownMenu.addEventListener('mouseenter', function() {
    dropdownToggle.click();
  });

  for (var i = 0; i < dropdownItems.length; i++) {
    dropdownItems[i].addEventListener('click', function() {
      dropdownToggle.click();
    });
  }
});











$(document).ready(function() {
  // Inicializar el carrusel en dispositivos móviles
  if ($(window).width() < 768) {
    $('#carouselExample').carousel({
      interval: false
    });
  }

  // Actualizar el carrusel cuando se cambia el tamaño de la ventana
  $(window).on('resize', function() {
    if ($(window).width() < 768) {
      $('#carouselExample').carousel({
        interval: false
      });
    } else {
      $('#carouselExample').carousel('dispose');
    }
  });

  // Desactivar animación automática del carrusel
  $('#carouselExample').carousel({
    interval: false
  });
});



$(document).ready(function(){
  // Seleccionar el elemento del carousel
  var carousel = $('#carouselExample');

  // Habilitar el deslizamiento táctil utilizando la biblioteca touchSwipe
  carousel.swipe({
    swipeLeft: function() {
      $(this).carousel('next');
    },
    swipeRight: function() {
      $(this).carousel('prev');
    },
    // Configuración adicional si es necesario
  });
});


$(document).ready(function() {
  $('#carouselExample').on('slid.bs.carousel', function() {
    $('.collapse').collapse('hide');
  });
});





