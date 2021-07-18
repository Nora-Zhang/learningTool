  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCwrUsWj1TIovFni6dt1vzLylw6UjoIfk4",
    authDomain: "first-learning-tool.firebaseapp.com",
    projectId: "first-learning-tool",
    storageBucket: "first-learning-tool.appspot.com",
    databaseURL: "https://first-learning-tool-default-rtdb.firebaseio.com",
    messagingSenderId: "599129377890",
    appId: "1:599129377890:web:d324084086695eaed0d53b",
    measurementId: "G-QK2SVJZ7MN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.database().ref();  // Specifies the database root
  firebase.database().ref("child/path") // Specifies a specific location in the database tree

  let myFlashcards = [ {
    "question": "Name this species of bird.",
    "image" : "images/barn-owl-2550068__340.webp",
    "answer": "Barn Owl"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/dove-2516641__340.webp",
    "answer": "Dove"
    },
    {
    "question": "Name this species of bird.",
    "image" : "images/hummingbird-2139279__340.webp",
    "answer": "Hummingbird"
    }
  ];

  // Make the database point to the location root -> deck -> flashcards
  // If the location doesn't exist is will be created
  firebase.database().ref('deck/flashcards'); 

  // myFlashcards will be stored under flashcards in the database
  // Anything that was in this location will be overwritten
  // Thus, a write operation also does an update
  firebase.database().set(myFlashcards);

