//importa funciones desde firebase.js para poder ser utilizadas
import { app, db, addDoc, collection, query, where, getDocs, serverTimestamp, getFirestore } from './firebase.js';


// Función para obtener los datos de Firebase
const prodQuery = query(collection(db, "Productos"));
const prodSnapshot = await getDocs(prodQuery);
// Procesar los datos de la colección "Productos"
const prodData = {};
prodSnapshot.forEach((doc) => {
  prodData[doc.id] = doc.data();
  
});

const producto1 = document.querySelector('#producto1');
const producto2 = document.querySelector('#producto2');
const producto3 = document.querySelector('#producto3');
const producto4 = document.querySelector('#producto4');
const producto5 = document.querySelector('#producto5');
const producto6 = document.querySelector('#producto6');
const producto7 = document.querySelector('#producto7');
const producto8 = document.querySelector('#producto8');
const producto9 = document.querySelector('#producto9');

producto1.src = prodData['Productos'].Producto1;
producto2.src = prodData['Productos'].Producto2;
producto3.src = prodData['Productos'].Producto3;
producto4.src = prodData['Productos'].Producto4;
producto5.src = prodData['Productos'].Producto5;
producto6.src = prodData['Productos'].Producto6;
producto7.src = prodData['Productos'].Producto7;
producto8.src = prodData['Productos'].Producto8;
producto9.src = prodData['Productos'].Producto9;
