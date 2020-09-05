import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyDAQ0BkDN2mQbQRXDpiNLUCm37FhVkE7SE",
    authDomain: "pro-organiser-applicatio-89db5.firebaseapp.com",
    databaseURL: "https://pro-organiser-applicatio-89db5.firebaseio.com",
    projectId: "pro-organiser-applicatio-89db5",
    storageBucket: "pro-organiser-applicatio-89db5.appspot.com",
    messagingSenderId: "544985654122",
    appId: "1:544985654122:web:c51fed67b9cd093a983b13",
    measurementId: "G-F2XKKMCSPN"
};
// Initialize Firebase
export const firebaseApp = firebase.initializeApp(firebaseConfig);

 export default firebaseApp.firestore();