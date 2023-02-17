//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyACQ72lstRf1QuE7n3mcm-aZXyHHIJisBw",
      authDomain: "c93-kwitter-chat-platform.firebaseapp.com",
      databaseURL: "https://c93-kwitter-chat-platform-default-rtdb.firebaseio.com",
      projectId: "c93-kwitter-chat-platform",
      storageBucket: "c93-kwitter-chat-platform.appspot.com",
      messagingSenderId: "804915723122",
      appId: "1:804915723122:web:9cf741fa1806c20235fbeb"
    };

    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data("name");
         message = message_data("message");
         like = message_data("like");
         name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>"
         like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up> Like: "+like+"</span></button><hr>"

         row = name_with_tag + message_with_tag + like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            likes: 0
      });

      document.getElementById("msg").value = "";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter_room.html";
}
