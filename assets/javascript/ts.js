var config = {
    apiKey: "AIzaSyBALyowqSN7q5EghT9TeEdFuX8G0BJ9o24",
    authDomain: "fir-example-6a77f.firebaseapp.com",
    databaseURL: "https://fir-example-6a77f.firebaseio.com",
    projectId: "fir-example-6a77f",
    storageBucket: "fir-example-6a77f.appspot.com",
    messagingSenderId: "856576469206",
    appId: "1:856576469206:web:234fc7a5160297f9"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#col-md-12").on("click", function (event) {
    event.preventDefault();
})

var userName = $("#user-trainName-input").val().trim();
var userDestination = $("#user-destination-input").val().trim();
var userStartTime = $("#user-startTime-input").val().trim();
var userFrequency = $("#user-frequency-input").val().trim();

var userData = {
    name: userName,
    destination: userDestination,
    startTime: userStartTime,
    frequency: userFrequency
};

database.ref().push(userData);

console.log(userData.name);
console.log(userData.destination);
console.log(userData.startTime);
console.log(userData.frequency);

