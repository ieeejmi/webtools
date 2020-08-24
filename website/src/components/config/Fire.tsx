
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBeAzH3S7lMx5XzDHbebLMunIsUBvZS2xg",
  authDomain: "ieeejmi-e90d0.firebaseapp.com",
  databaseURL: "https://ieeejmi-e90d0.firebaseio.com",
  projectId: "ieeejmi-e90d0",
  storageBucket: "ieeejmi-e90d0.appspot.com",
  messagingSenderId: "105518787567",
  appId: "1:105518787567:web:5b8e88a9857194af81241a",
  measurementId: "G-7JS19N6LH0"
};


// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;