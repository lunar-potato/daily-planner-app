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
    "6 PM",
    "7 PM",
    "8 PM",
    "9 PM",
    "10 PM",
    "11 PM",
  ];
  let container = $(".container");

  for (let i = 0; i < timeblocks.length; i++) {
    let timeblock = $("<div>").addClass("row time-block");
    timeblock.html(
      '<div class="col-md-1 hour">' +
        timeblocks[i] +
        "</div>" +
        '<textarea class="col-md-10 description"></textarea>' +
        '<button class="col-md-1 saveBtn"><i class="far fa-save"></i></button>'
    );
    container.append(timeblock);
  }

  // Current time and day
  let currentDayEl = $("#currentDay");
  let currentTimeEl = $("#currentTime");
  let currentDate = dayjs().format("dddd, MMMM D, YYYY");
  let currentTimeDisplay = dayjs().format("h:mm A");
  currentDayEl.text(currentDate);
  currentTimeEl.text(currentTimeDisplay);

  let currentTime = dayjs().format("h A");

  // Color coding of timeblock
  $(".time-block").each(function () {
    let time = $(this).find(".hour").text();
    
    console.log("Time:", time);
    console.log("Current:", currentTime);

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
