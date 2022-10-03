//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyChQ8hREP3jUphTY9HO7Xf1zamB921OQD0",
    authDomain: "letschatwebapp-92d65.firebaseapp.com",
    projectId: "letschatwebapp-92d65",
    storageBucket: "letschatwebapp-92d65.appspot.com",
    messagingSenderId: "228187314004",
    appId: "1:228187314004:web:94b7b2be14e8b948af9ac1"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function send() {
    msg=document.getAnimations("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

     document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
