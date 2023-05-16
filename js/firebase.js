// Importa los módulos necesarios del SDK de Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { doc, addDoc, collection, query, where, getDocs, serverTimestamp, getFirestore } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";

// Tu configuración de Firebase


 const firebaseConfig = {
    apiKey: "AIzaSyDi_3Ig1OUm4WEhPQq2qistw5T5esMYKhU",
    authDomain: "neurocyn-86b47.firebaseapp.com",
    projectId: "neurocyn-86b47",
    storageBucket: "neurocyn-86b47.appspot.com",
    messagingSenderId: "440167249018",
    appId: "1:440167249018:web:104571e60e344d470d77c3"
  };

// Inicializa tu aplicación de Firebase
const app = initializeApp(firebaseConfig);
// Obtiene una instancia de Firestore
const db = getFirestore(app);

//Exporta las inicializaciones de la base de datos y las funciones
export { doc, app, db, addDoc, collection, query, where, getDocs, serverTimestamp, getFirestore };