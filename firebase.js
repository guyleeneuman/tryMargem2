import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { 
getFirestore,
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyB8S57Iqfi0p_1JgPlz2NT3upakyo-JYUc",
  authDomain: "margemhot.firebaseapp.com",
  projectId: "margemhot",
  storageBucket: "margemhot.firebasestorage.app",
  messagingSenderId: "798968080375",
  appId: "1:798968080375:web:7e325f48fc16854bdb70f2"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);


export {
    db,
    collection,
    addDoc
};