// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAKBRkplOYXGRiWw5D9No2CiclZvHLpDHE",
    authDomain: "chat-app-50c53.firebaseapp.com",
    databaseURL: "https://chat-app-50c53-default-rtdb.firebaseio.com",
    projectId: "chat-app-50c53",
    storageBucket: "chat-app-50c53.appspot.com",
    messagingSenderId: "207704949121",
    appId: "1:207704949121:web:660b2db802f8c33ed4a880"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

let database = firebase.database();

let name = document.querySelector("#username");
let input = document.querySelector("#message");

input.addEventListener('keypress', function(event) {
   if(event.key == "Enter") {
    database.ref("messages").push({
      name: name.value, 
      message: input.value
    })
  input.value="";
  }
})


database.ref("messages").on('child_added', function(message) {

  let messages = document.querySelector("#messages");
  let name = message.val().name;
  let value = message.val().message;
  let div = document.createElement("div");
  let span = document.createElement("span");
  span.innerHTML = "@" + name;
  let p = document.createElement("p");
  p.innerHTML = value; 

  div.appendChild(span);
  div.appendChild(p);

  messages.appendChild(div);
  messages.scrollTop = messages.scrollHeight; 

})