  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
  import { getAuth } from "firebase/auth";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAD1-QYoEKYvwccNiUTUuwizNeLWKdO1ig",
    authDomain: "netflix-clone-cf57d.firebaseapp.com",
    projectId: "netflix-clone-cf57d",
    storageBucket: "netflix-clone-cf57d.appspot.com",
    messagingSenderId: "491982845029",
    appId: "1:491982845029:web:7776f2000e5267565b828c",
    measurementId: "G-6MQ5PMYMEF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
