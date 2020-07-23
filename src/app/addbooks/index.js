var firebaseConfig = {
    apiKey: "AIzaSyANUw-Ej0iayDT6B9QtGoiOJloiK6xU01Y",
    authDomain: "studentlink-cb109.firebaseapp.com",
    databaseURL: "https://studentlink-cb109.firebaseio.com",
    projectId: "studentlink-cb109",
    storageBucket: "studentlink-cb109.appspot.com",
    messagingSenderId: "526223618282",
    appId: "1:526223618282:web:dc5fb0fbd2bdea08ae2793"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Start App
const db = firebase.firestore();

const updatesSection = document.querySelector(".updates-content");

// Updates Function
function renderUpdates(doc) {
  let card = document.createElement("div");
  let cardBody = document.createElement("div");
  let cardTitle = document.createElement("h4");
  let cardContent = document.createElement("p");

  card.setAttribute("class", "card bg-primary");
  cardBody.setAttribute("class", "card-body");
  cardTitle.setAttribute("class", "card-title");
  cardContent.setAttribute("class", "card-text");

  cardTitle.textContent = doc.data().Title;
  cardContent.textContent = doc.data().Content;

  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardContent);

  updatesSection.appendChild(card);
}


db.collection("Books")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      renderUpdates(doc);
    });
  });

let postSubmit = document.querySelector("#submit");
let alertDiv = document.querySelector(".alert");

function errorAlert(text, color) {
  let alert = document.createElement("div");

  alert.setAttribute("class", `alert alert-${color}`);

  alert.textContent = `${text}`;

  alertDiv.appendChild(alert);
}

postSubmit.addEventListener("click", function() {
  let postTitle = document.querySelector("#post_title_input").value;
  let postContent = document.querySelector("#post_content_input").value;

  db.collection("Books")
    .doc()
    .set({
      Title: postTitle,
      Content: postContent,
      Time: Date()
    })
    .then(function() {
      errorAlert("Post Saved", "success");
    })
    .catch(function(error) {
      errorAlert(`$error`, "danger");
    });
});
