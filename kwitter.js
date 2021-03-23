function addUser()
{
user_name = document.getElementById("user_name").value;

localStorage.setItem("user_name" , user_name);

window.location = "kwitter_room.html";
}

var firebaseConfig = {
    apiKey: "AIzaSyD_WRm5bJg8DPmPK-K_vt0eE4-L8Xl2Ekk",
    authDomain: "kwitter-project-1ad27.firebaseapp.com",
    projectId: "kwitter-project-1ad27",
    storageBucket: "kwitter-project-1ad27.appspot.com",
    messagingSenderId: "1035288272571",
    appId: "1:1035288272571:web:6b9dc54796849e4ddc539e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

