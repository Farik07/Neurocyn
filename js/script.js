$(document).ready(function(){
  // Initialize Tooltip
  $('[data-toggle="tooltip"]').tooltip(); 
  
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#home']").on('click', function(event) {

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
      if (pos < winTop + 2000) {
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
    $('.navbar').removeClass('navbar-expanded'); // Quita la clase "navbar-expanded" de la barra de navegación
    
  });

  

  // Cerrar la barra de navegación al hacer clic en cualquier parte del body, excepto en el menú desplegable y sus elementos




$('html').on('click touchstart', function(event) {
  var target = $(event.target);
  if (!target.closest('.navbar-collapse').length) {
    $('.navbar-collapse').collapse('hide');
    $('.navbar').removeClass('navbar-expanded');
    
  }
});

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



$(document).ready(function() {
  var videoMovil = $('#videoMovil');

  videoMovil.swipe({
    swipeLeft: function(){
      $(this).carousel('next');
    },
    swipeRight: function(){
      $(this).carousel('prev');
    },
  });

  $('#videoMovil').carousel({
    interval: false
  });

  // Obtener todos los elementos de video
  var videos = $('video');

  // Agregar event listener para el evento "play"
  videos.on('play', function() {
    // Pausar los demás videos
    videos.not(this).each(function() {
      this.pause();
    });
  });

  // Agregar event listener para el evento "slide.bs.carousel"
  $('#videoMovil').on('slide.bs.carousel', function() {
    // Pausar todos los videos cuando se deslice el carrusel
    videos.each(function() {
      this.pause();
    });
  });
});



$(document).ready(function() {
  // Obtener todos los elementos de video
  var videos = $('video');

  // Agregar event listener para el evento "play"
  videos.on('play', function() {
    // Pausar los demás videos
    videos.not(this).each(function() {
      this.pause();
    });
  });

  // Verificar el cambio de tamaño de pantalla
  var mediaQueryList = window.matchMedia('(max-width: 768px)'); // Cambia el valor según sea necesario

  function handleScreenChange(e) {
    if (e.matches) {
      // Pausar todos los videos si el tamaño de la pantalla cambia
      videos.each(function() {
        if (!this.paused) {
          this.pause();
        }
      });
    } else {
      // Reanudar los videos cuando el tamaño de la pantalla regrese
      videos.each(function() {
        if (this.paused) {
          this.play();
        }
      });
    }
  }

  // Agregar event listener para el evento "change" en el media query
  mediaQueryList.addListener(handleScreenChange);

  // Ejecutar la función inicialmente para verificar el estado actual del media query
  handleScreenChange(mediaQueryList);
});


$(document).ready(function() {
  // Obtener los elementos de video fuente y de destino
  var videoFuente = $('#myVideo1')[0];
  var videoDestino = $('#video1-movil')[0];

  // Evento "play" en el video fuente
  videoFuente.addEventListener('play', function() {
    videoDestino.currentTime = videoFuente.currentTime;
  });

  // Evento "pause" en el video fuente
  videoFuente.addEventListener('pause', function() {
    videoDestino.currentTime = videoFuente.currentTime;
  });

  // Evento "play" en el video de destino
  videoDestino.addEventListener('play', function() {
    videoFuente.currentTime = videoDestino.currentTime;
  });

  // Evento "pause" en el video de destino
  videoDestino.addEventListener('pause', function() {
    videoFuente.currentTime = videoDestino.currentTime;
  });
});


$(document).ready(function() {
  // Obtener los elementos de video fuente y de destino
  var videoFuente = $('#myVideo2')[0];
  var videoDestino = $('#video2-movil')[0];

  // Evento "play" en el video fuente
  videoFuente.addEventListener('play', function() {
    videoDestino.currentTime = videoFuente.currentTime;
  });

  // Evento "pause" en el video fuente
  videoFuente.addEventListener('pause', function() {
    videoDestino.currentTime = videoFuente.currentTime;
  });

  // Evento "play" en el video de destino
  videoDestino.addEventListener('play', function() {
    videoFuente.currentTime = videoDestino.currentTime;
  });

  // Evento "pause" en el video de destino
  videoDestino.addEventListener('pause', function() {
    videoFuente.currentTime = videoDestino.currentTime;
  });
});



//deshabilita el clic derecho, menu para guardar ima
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
  });



