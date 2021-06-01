
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyBR-a_-feoiynAv8IIXg5lFfET7nZrKqLI",
      authDomain: "kwitter-91d2d.firebaseapp.com",
      databaseURL: "https://kwitter-91d2d-default-rtdb.firebaseio.com",
      projectId: "kwitter-91d2d",
      storageBucket: "kwitter-91d2d.appspot.com",
      messagingSenderId: "166757318499",
      appId: "1:166757318499:web:bc7a0b239f4619715b1d56",
      measurementId: "G-61XGJ1E8TN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"

});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+"onclick-'redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "Kwitter_page.html";



}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";


}




