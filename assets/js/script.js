// Creating an array for the standard business hours in military time format
var times = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

// Creating a variable to store the current moment
var currentDay = moment();

// Targets the HTML element with the id of currentDay and sets the text of that to the currentDay variable with a specific format
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// Creating a variable to store the current time in military time format using moment()
var currentTime = moment().format("HH");

// A loop to create each time block on the scheduler using the times array
for (i = 0; i < times.length; i++) {

    // Creates a div for the entire 
    var row = $('<div>');
    timeBlock.addClass("row time-block");

    // Creates a div for the hour of the day
    var timeblock = $('<div>');
    timeBlock.addClass("col-1 hour");

    // Creates a text area to plan important events for that specific time block
    // The col-10 class makes it so the text area takes up 10 columns worth of space
    var planner = $('<textarea>');
    planner.addClass("col-10");

    // Creates a button to save your planner for that specific time block to local storage
    var save = $('<button>');
    save.addClass("col-1 saveBtn");

}