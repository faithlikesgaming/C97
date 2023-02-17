
//ADD YOUR FIREBASE LINKS HERE
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

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_room.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html";
}
