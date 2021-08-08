 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyAHFvdfyFUA0m8ooGC8WU0dLGsZotdkvao",
  authDomain: "bitter-47be3.firebaseapp.com",
  databaseURL: "https://bitter-47be3-default-rtdb.firebaseio.com",
  projectId: "bitter-47be3",
  storageBucket: "bitter-47be3.appspot.com",
  messagingSenderId: "743538276381",
  appId: "1:743538276381:web:4539820290502e2c34aef4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome  " + user_name + " !";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room_Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name, name");
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}