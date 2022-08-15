// / Declaration of elements/classes
const rows = $(".row");
const hours = $(".hour");
const past = $(".past");
const present = $(".present");
const future = $(".future");
const timeBlock = $(".time-block");
const saveButton = $(".saveBtn");
const hourTask = $("id");
const userText = $(".hour-task");

// use moment to set the time
$(document).ready(function () {
    var today = moment();
    $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));
  
    var hours = today.hours();
    console.log(hours);
  });

  // function to set the row colors based on the time
  // WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future
  var parent = $(this).parents(".row");
  var timeId = parseInt(parent.attr("id"));
  var currentHour = parseInt(moment().format("H"));
  

  
  
  