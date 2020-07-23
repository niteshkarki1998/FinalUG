var firebaseConfig = {
    apiKey: "AIzaSyANUw-Ej0iayDT6B9QtGoiOJloiK6xU01Y",
    authDomain: "studentlink-cb109.firebaseapp.com",
    databaseURL: "https://studentlink-cb109.firebaseio.com",
    projectId: "studentlink-cb109",
    storageBucket: "studentlink-cb109.appspot.com",
    messagingSenderId: "526223618282",
    appId: "1:526223618282:web:3e30b8694b01d94fae2793"
  };

  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();


  const submitBtn = document.querySelector('#submit');

  let userName = document.querySelector('#userFullName');
  let userEmail = document.querySelector('#userEmail');
  let userFaculty = document.querySelector('#userFaculty');
  let userCollege = document.querySelector('#userCollege');

const db = firestore.collection("TStudent");

submitBtn.addEventListener('click', function(){
    let userNameInput = userName.value;
    let userEmailInput = userEmail.value;
    let userFacultyInput = userFaculty.value;
    let userCollegeInput = userCollege.value;

    db.doc()
    .set({
        name: userNameInput,
        email: userEmailInput,
        subject: userFacultyInput,
        qualification: userCollegeInput
    })
    .then(function(){
    console.log("Data Saved");
    })
    .catch(function(error){
        console.log(error);
    });
});

