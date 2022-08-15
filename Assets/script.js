// global variables that will allow us to use jQuery, ie jquery go select this element
var rows = $(".row");
var hours = $(".hour");
var hourTask = $(".hour-task");
var saveBtn = $(".saveBtn");
var present = $(".present");
var timeBlock = $("time-block");

// var currentDay = $("#currentDay")

// use moment to set the time
$(document).ready(function () {
    var today = moment();
    $("#currentDay").text(today.format("dddd MMMM Do YYYY, h:mm a"));
  
    var hours = today.hours();
    console.log(hours);
  });




// function to set the row colors based on the time



// WHEN I view the timeblocks for that day, THEN each timeblock is color coded to indicate whether it is in the past, present, or future




// WHEN I can enter an event, WHEN I click the save button for that timeblock, THEN the text for that event is saved in local storage,WHEN I refresh the page, THEN the saved events persist


