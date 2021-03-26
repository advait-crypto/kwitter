var firebaseConfig = {
    apiKey: "AIzaSyD_WRm5bJg8DPmPK-K_vt0eE4-L8Xl2Ekk",
    authDomain: "kwitter-project-1ad27.firebaseapp.com",
    databaseURL: "https://kwitter-project-1ad27-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1ad27",
    storageBucket: "kwitter-project-1ad27.appspot.com",
    messagingSenderId: "1035288272571",
    appId: "1:1035288272571:web:6b9dc54796849e4ddc539e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom()
{
room_name = document.getElementById("room_name").nodeValue;

firebase.databases().ref("/").child(room_name).update({
      purpose:  "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;  
       console.log("Room name-" +Room_names)
       row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_room.html";
}