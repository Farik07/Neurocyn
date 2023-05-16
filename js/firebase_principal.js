//importa funciones desde firebase.js para poder ser utilizadas
import { app, db, addDoc, collection, query, where, getDocs, serverTimestamp, getFirestore } from './firebase.js';


// Función para obtener los datos de Firebase

const imgQuery = query(collection(db, "Imagenes"));
const txtQuery = query(collection(db, "Textos"));
const vidQuery = query(collection(db, "Videos"));

const [imgSnapshot, txtSnapshot, vidSnapshot] = await Promise.all([
  getDocs(imgQuery),
  getDocs(txtQuery),
  getDocs(vidQuery)
]);

// Procesar los datos de la colección "Imagenes"
const imgData = {};
imgSnapshot.forEach((doc) => {
  imgData[doc.id] = doc.data();
});

//Declarar las variables para obtener los elementos del HTML
const imgCarousel1 = document.querySelector('#imgCarousel1');
const imgCarousel2 = document.querySelector('#imgCarousel2');
const imgCarousel3 = document.querySelector('#imgCarousel3');
const imgEquipo1 = document.querySelector('#imgEquipo1');
const imgEquipo2 = document.querySelector('#imgEquipo2');
const imgEquipo1Movil = document.querySelector('#imgEquipo1Movil');
const imgEquipo2Movil = document.querySelector('#imgEquipo2Movil');

//Asigamos los valores obtenidos en la consulta a los elementos del HTML
imgCarousel1.src = imgData['Carousel'].imgCarousel1;
imgCarousel2.src = imgData['Carousel'].imgCarousel2;
imgCarousel3.src = imgData['Carousel'].imgCarousel3;
imgEquipo1.src = imgData['Equipo'].equipo1;
imgEquipo2.src = imgData['Equipo'].equipo2;
imgEquipo1Movil.src = imgData['Equipo'].equipo1;
imgEquipo2Movil.src = imgData['Equipo'].equipo2;


// Procesar los datos de la colección "Textos"
const txtData = {};
txtSnapshot.forEach((doc) => {
  txtData[doc.id] = doc.data();
});

//Declarar las variables para obetener los elementos del HTML
const titleCarousel1 = document.querySelector('#titleCarousel1');
const titleCarousel2 = document.querySelector('#titleCarousel2');
const titleCarousel3 = document.querySelector('#titleCarousel3');
const txtPrincipal = document.querySelector('#txtPrincipal');
const txtCarousel1 = document.querySelector('#txtCarousel1');
const txtCarousel2 = document.querySelector('#txtCarousel2');
const txtCarousel3 = document.querySelector('#txtCarousel3');
const nombreEquipo1 = document.querySelector('#nombreEquipo1');
const nombreEquipo2 = document.querySelector('#nombreEquipo2');
const nombreEquipoMovil1 = document.querySelector('#nombreEquipoMovil1');
const nombreEquipoMovil2 = document.querySelector('#nombreEquipoMovil2');
const aboutEquipo1 = document.querySelector('#aboutEquipo1');
const aboutEquipo2 = document.querySelector('#aboutEquipo2');
const aboutEquipoMovil1 = document.querySelector('#aboutEquipoMovil1');
const aboutEquipoMovil2 = document.querySelector('#aboutEquipoMovil2');


titleCarousel1.textContent = txtData['Carousel'].titleCarousel1;
titleCarousel2.textContent = txtData['Carousel'].titleCarousel2;
titleCarousel3.textContent = txtData['Carousel'].titleCarousel3;
txtPrincipal.textContent = txtData['Principal'].txtPrincipal;
txtCarousel1.textContent = txtData['Carousel'].txtCarousel1;
txtCarousel2.textContent = txtData['Carousel'].txtCarousel2;
txtCarousel3.textContent = txtData['Carousel'].txtCarousel3;
nombreEquipo1.textContent = txtData['Equipo'].nombreEquipo1;
nombreEquipo2.textContent = txtData['Equipo'].nombreEquipo2;
nombreEquipoMovil1.textContent = txtData['Equipo'].nombreEquipo1;
nombreEquipoMovil2.textContent = txtData['Equipo'].nombreEquipo2;
aboutEquipo1.innerHTML = txtData['Equipo'].aboutEquipo1;
aboutEquipo2.innerHTML = txtData['Equipo'].aboutEquipo2;
aboutEquipoMovil1.innerHTML = txtData['Equipo'].aboutEquipo1;
aboutEquipoMovil2.innerHTML = txtData['Equipo'].aboutEquipo2;
aboutVideo1.textContent = txtData['VideosPagina'].aboutVideo1;
aboutVideo2.textContent = txtData['VideosPagina'].aboutVideo2;
aboutVideoMovil1.textContent = txtData['VideosPagina'].aboutVideo1;
aboutVideoMovil2.textContent = txtData['VideosPagina'].aboutVideo2;



// Procesar los datos de la colección "Videos"
const vidData = {};
vidSnapshot.forEach((doc) => { 
  vidData[doc.id] = doc.data();
});

//Declarar las variables para obtener los elementos del HTML
const video1 = document.querySelector('#myVideo1');
const video2 = document.querySelector('#myVideo2');
const videoMovil1 = document.querySelector('#video1-movil');
const videoMovil2 = document.querySelector('#video2-movil');

video1.src = vidData['VideosPagina'].video1;
video2.src = vidData['VideosPagina'].video2;
videoMovil1.src = vidData['VideosPagina'].video1;
videoMovil2.src = vidData['VideosPagina'].video2;

// imprime los documentos de la coleccion
/*
console.log(imgData);
console.log(txtData);
console.log(vidData);
*/

const enviarBtn = document.querySelector('#contact-form button[type="submit"]');
const errorContainer = document.querySelector('#error-container');

enviarBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  
  
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const comments = document.querySelector('#comments').value;
  
  try {
    const docRef = await addDoc(collection(db, 'Comentarios'), {
      name: name,
      email: email,
      comments: comments,
      fechaHora: serverTimestamp()
    });
    /*console.log('Comentario enviado con ID:', docRef.id);*/
   errorContainer.textContent = 'Comentario enviado';
    
  } catch (error) {
    console.error('Error al enviar comentario:', error);
    errorContainer.textContent = 'Ocurrió un error al enviar el comentario. Por favor, inténtalo de nuevo más tarde. ' + error;
    
    
  }
});
