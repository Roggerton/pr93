var firebaseConfig = {
  apiKey: "AIzaSyDJERAOvFEdoc2KTXmEw_rGdVSHpWBo-rk",
  authDomain: "kwitter-fc6a8.firebaseapp.com",
  databaseURL: "https://kwitter-fc6a8-default-rtdb.firebaseio.com",
  projectId: "kwitter-fc6a8",
  storageBucket: "kwitter-fc6a8.appspot.com",
  messagingSenderId: "307575016942",
  appId: "1:307575016942:web:8ff8d4adffa38c83cbd2ff"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addRoom(){
  user_name=document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
      purpose:"adding room"
  });
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code

  //End code
  });});}
getData();
