
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyACQ72lstRf1QuE7n3mcm-aZXyHHIJisBw",
    authDomain: "c93-kwitter-chat-platform.firebaseapp.com",
    databaseURL: "https://c93-kwitter-chat-platform-default-rtdb.firebaseio.com",
    projectId: "c93-kwitter-chat-platform",
    storageBucket: "c93-kwitter-chat-platform.appspot.com",
    messagingSenderId: "804915723122",
    appId: "1:804915723122:web:9cf741fa1806c20235fbeb"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}