// Array for timeblocks setting it hourly
// Creating element for timeblock and appending to container

// Current time and day
// Setting date time format with Day.js
// Updating currentDayEl to display formatted date
let currentDayEl = $("#currentDay");
let currentTimeEl = $("#currentTime");
let currentDate = dayjs().format("dddd, MMMM D, YYYY");
let currentTime = dayjs().format("h:mm A");
currentDayEl.text(currentDate);
currentTimeEl.text(currentTime);


// Color coding of timeblock
// Getting current time and format
// Looping through timeblocks
// Looping through timeblock to get past, present, future class

// Setting event handlers
// Adding click event listeners to button
// Getting description from textbox area
// Saving description to local storage
// When refreshed, checking if saved event is in local storage
// Load and display description in local storage to textbox area

// Loading app 
