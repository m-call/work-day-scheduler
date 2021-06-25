// Creating an array for the standard business hours in military time format
var times = ["9am", "10am", "11am", "12pm", "13pm", "14pm", "15pm", "16pm", "17pm"];

// Creating a variable to store the current moment
var currentDay = moment();

// Targets the HTML element with the id of currentDay and sets the text of that to the currentDay variable with a specific format
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// Creating a variable to store the current time in military time format using moment
var currentTime = moment().format("HH");

// A loop to create each time block on the scheduler using the times array
for (i = 0; i < times.length; i++) {

    // Creates a div for the entire time block
    var row = $('<div>');
    row.addClass("row time-block");

    // Creates a div for the hour of the day
    var timeBlock = $('<div>');
    timeBlock.addClass("col-1 hour");
    
    // Checks the array index to convert the times from military time to regular time
    if (parseInt(times[i]) > 12) {
        timeBlock.text(parseInt(times[i]) - 12 + "pm");
    } else if (parseInt(times[i]) < 12 + "am") {
        timeBlock.text(parseInt(times[i]));
    } else {
        timeBlock.text(times[i]);
    }

    row.append(timeBlock);

    // Creates a text area to plan important events for that specific time block
    // Creates a variable to hold the value of the text in local storage for that particular time
    // The col-10 class makes it so the text area takes up 10 columns worth of space
    // Sets the text inside the specific text area to the plannerText local storage value for that particular time
    var planner = $('<textarea>');
    var plannerText = localStorage.getItem(times[i]);
    planner.addClass("col-10 description");
    planner.val(plannerText);
    row.append(planner);

    // Creates a button to save your planner for that specific time block to local storage and adds the font awesome save button icon to the button
    var save = $('<button>');
    save.addClass("col-1 saveBtn");
    $(save).append('<i class="fas fa-save"/>')
    row.append(save);

    // Appends the row div to the div with the container class
    $('.container').append(row);

    // Changing the color of the time block based on the current time of the day
    if (currentTime > parseInt(times[i])) {
        row.addClass("past");
    } else if (currentTime < parseInt(times[i])) {
        row.addClass("future");
    } else {
        row.addClass("present");
    }

}

// Saves the input of text area as well as the time of that input to local storage when the user clicks the save button on a specific time block
$(".saveBtn").on("click", function () {

    var index = $(this).siblings(".hour").text();
    var input = $(this).siblings(".description").val();

    localStorage.setItem(index, input);

});
