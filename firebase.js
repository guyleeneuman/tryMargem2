import { initializeApp } 
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getDatabase,
ref,
push
}
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB8S57Iqfi0p_1JgPlz2NT3upakyo-JYUc",
  authDomain: "margemhot.firebaseapp.com",
databaseURL:
"https://margemhot-default-rtdb.europe-west1.firebasedatabase.app",
 projectId: "margemhot",
  storageBucket: "margemhot.firebasestorage.app",
  messagingSenderId: "798968080375",
  appId: "1:798968080375:web:7e325f48fc16854bdb70f2"
};

const app = initializeApp(firebaseConfig);


const database = getDatabase(app);


export {
    database,
    ref,
    push
};