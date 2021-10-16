const firebaseConfig = {
      apiKey: "AIzaSyASzd1IW5hbhRflCK6cCAZKKzavnV6yZy0",
      authDomain: "kwitter-2b42a.firebaseapp.com",
      databaseURL: "https://kwitter-2b42a-default-rtdb.firebaseio.com",
      projectId: "kwitter-2b42a",
      storageBucket: "kwitter-2b42a.appspot.com",
      messagingSenderId: "382273183279",
      appId: "1:382273183279:web:6e32717684c807cf6a70da",
      measurementId: "G-QZ9X76QRF3"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     room_name = localStorage.getItem("room_name");

     function send()
     {
           msg = document.getElementById("msg").value;
           firebase.database().ref(room_name).push({
      name:user_name, 
      message:msg,
      like:0
         });
      document.getElementById("msg").value = " ";
     }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_date ['name'];
message = message_data ['message'];
like = message_data ['like'];
name_with_tag = "<h4 class = 'message_h4'>" + message + "</h4>";
like_button = "<button class = 'btn btn-warning' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class = 'glyphicon gliphicon-thumbs-up'>like: "+ like +"</button></span></hr>";

row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("cliked_on_the_like_button" + message_id);
      button_id = message_id;
      lieks = document.getElementById("button_id").value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });

}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");      
}