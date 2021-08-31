
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCPoURGus3HCpNZRR2rC0nztbcZ1K6n-Ao",
      authDomain: "kwitter-project-f372e.firebaseapp.com",
      databaseURL: "https://kwitter-project-f372e-default-rtdb.firebaseio.com",
      projectId: "kwitter-project-f372e",
      storageBucket: "kwitter-project-f372e.appspot.com",
      messagingSenderId: "770534651945",
      appId: "1:770534651945:web:f9de942c5be8139f808438",
      measurementId: "G-R7ELFBLY86"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  user_name = localStorage.getItem("username");
  document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

  function add_room() {
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname", room_name);
  
      window.localStorage="kwitter_room.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    
      //End code
      });});}
getData();
