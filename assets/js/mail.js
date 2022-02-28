var firebaseConfig = {
    apiKey: "AIzaSyC_3djvEIJSCE4gealvSkSop1zF5cxZBdk",
    authDomain: "cnf-contact-form.firebaseapp.com",
    databaseURL: "https://cnf-contact-form-default-rtdb.firebaseio.com",
    projectId: "cnf-contact-form",
    storageBucket: "cnf-contact-form.appspot.com",
    messagingSenderId: "171399731590",
    appId: "1:171399731590:web:38448c18a7235f3c233407",
    measurementId: "G-7JJTMGETHH"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference message
var messageRef = firebase.database().ref('messages');


//Listen for form submit
document.getElementById('contactForm').addEventListener('submit',
  submitForm);


//submit form
function submitForm(e) {
  e.preventDefault();

  //Get Values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save Message
  saveMessage(name, phone, email, message);

  new Noty({
                theme: 'bootstrap-v4',
                type: 'success',
                layout: 'center',
                text: 'Message Sent!',
                timeout: 3000
            }).show();


  // Reset Form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message
function saveMessage(name, phone, email, message){
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    phone: phone,
    email: email,
    message: message
  });
}