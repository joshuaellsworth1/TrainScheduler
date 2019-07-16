//Setting up my custom firebase
$(document).ready(function () {

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

    // var userTrainName = "";
    // var userDestination = "";
    // var userStartTime = 0;
    // var userFrequency = "";

    //creating a click function for adding train names
    $("#searchButton").on("click", function (event) {
        event.preventDefault();

        //Grabbing the HTML values and creating variables for them.
        userTrainName = $("#user-trainName-input").val().trim();
        userDestination = $("#user-destination-input").val().trim();
        userStartTime = $("#user-startTime-input").val().trim();
        userFrequency = $("#user-frequency-input").val().trim();

        //connecting the user's data inputs with firebase data
        var userData = {
            name: userTrainName,
            destination: userDestination,
            startTime: userStartTime,
            frequency: userFrequency
        };

        //This command links the user's input data and pushes it to firebase. At least I hope I'm right.
        database.ref().push(userData);

        console.log(userData.name);
        console.log(userData.destination);
        console.log(userData.startTime);
        console.log(userData.frequency);

        //clears the text in html, but is not working for me. Still keeps the values of the user input.
        $("#user-trainName-input").val("");
        $("#user-destination-input").val("");
        $("#user-startTime-input").val("");
        $("#user-frequency-input").val("");

    });

    //adds trains to the firebase database
    database.ref().on("child_added", function (snapshot) {
        var userTrainName = snapshot.val().name;
        var userDestination = snapshot.val().destination;
        var userStartTime = snapshot.val().startTime;
        var userFrequency = snapshot.val().frequency;

        var sv = snapshot.val();

        //appending whatever the user puts into each box
        var newRow = $("<tr>").append(
            $("<td>").text(userTrainName),
            $("<td>").text(userDestination),
            $("<td>").text(userStartTime),
            $("<td>").text(userFrequency)
        );
        //Adding it to a new row each time
        $("#tbody").append(newRow);

        //Not sure what sv does, but it was in the activity and I talked to some students who suggested using sv.
        $("#trainName-display").text(sv.userTrainName);
        $("#destination-display").text(sv.destination);
        $("#startTime-display").text(sv.startTime);
        $("#frequency-display").text(sv.frequency);

        console.log(userTrainName);
        console.log(userDestination);
        console.log(userStartTime);
        console.log(userFrequency);
    });

    //Created all of the variables using the train example. Not sure how to put those in functions to make it work.
    var frequencySec = 3;
    var firstTime = "2:30";
    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    var currentTime = moment();
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    var remainder = diffTime % frequencySec;
    var minutesAway = frequencySec - remainder;
    var nextTrain = moment().add(minutesAway, "minutes");

    //appending the new information that the time is suppose to spit out based on user input.
    var newRow = $("<tr></tr>")
    newRow.append("<td>" + snapshot.val().name + "</td>")
    newRow.append("<td>" + snapshot.val().destination + "</td>")
    newRow.append("<td>" + snapshot.val().startTime + "</td>")
    newRow.append("<td>" + snapshot.val().frequency + "</td>")
    $(".table").prepend(newRow);

})