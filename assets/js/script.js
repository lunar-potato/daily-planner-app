// Importing custom parse format plugin for Day.js 
dayjs.extend(window.dayjs_plugin_customParseFormat);

$(document).ready(function () {
  // Array for timeblocks setting it hourly in "h A" format
  let timeblocks = [
    "9 AM",
    "10 AM",
    "11 AM",
    "12 PM",
    "1 PM",
    "2 PM",
    "3 PM",
    "4 PM",
    "5 PM",
  ];

  // Getting container element with class container
  let container = $(".container");


  // Looping through timeblocks array to create timeblock elements plus setting layout
  for (let i = 0; i < timeblocks.length; i++) {
    let timeblock = $("<div>").addClass("row time-block");
    timeblock.html(
      '<div class="col-md-1 hour">' +
        timeblocks[i] +
        "</div>" +
        '<textarea class="col-md-10 description"></textarea>' +
        '<button class="col-md-1 saveBtn"><i class="far fa-save"></i></button>'
    );
    // Appending timeblock to container
    container.append(timeblock);
  }

  // Current time and day
  let currentDayEl = $("#currentDay");
  let currentTimeEl = $("#currentTime");

  // Getting current time and date using day.js and formatting
  let currentDate = dayjs().format("dddd, MMMM D, YYYY");
  let currentTimeDisplay = dayjs().format("h:mm A");

  // Setting to text content of current day and time
  currentDayEl.text(currentDate);
  currentTimeEl.text(currentTimeDisplay);

  // Getting current time using "h A" format
  let currentTime = dayjs().format("h A");

  // Color coding of timeblock
  $(".time-block").each(function () {
    let time = $(this).find(".hour").text();
    
    console.log("Time:", time);
    console.log("Current:", currentTime);

    // Comparing the time with current time to apply appropriate class
    if (dayjs(time, "h A").isBefore(dayjs(currentTime, "h A"))) {
      $(this).addClass("past");
      $(this).removeClass("future present");
      console.log("past");
    } else if (time === currentTime) {
      $(this).addClass("present");
      $(this).removeClass("future past");
      console.log("present");
    } else {
      $(this).addClass("future");
      $(this).removeClass("past present");
      console.log("future");
    }
  });

  // Setting event handlers
  $(".saveBtn").click(function () {
    let description = $(this).siblings(".description").val();
    let index = $(this).closest(".time-block").index();
    localStorage.setItem("event-" + index, description);

    // To show notification message for 5 seconds
    $(".notification").addClass("show");

    setTimeout(function () {
      $(".notification").removeClass("show");
    }, 5000);
  });

  // Loading event description from local storage
  $(".description").each(function (index) {
    let savedPlan = localStorage.getItem("event-" + index);
    if (savedPlan) {
      $(this).val(savedPlan);
    }
  });
});
