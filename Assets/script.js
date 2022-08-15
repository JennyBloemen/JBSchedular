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

// functin to set timeblocks for that day so that each timeblock is color coded to indicate whether it is in the past, present, or future.
var parent = $(this).parents(".row");
var timeId = parseInt(parent.attr("id"));
var currentHour = parseInt(moment().format("H"));
  
// sets variable for the current hour to allow the color coding
let index = 0;
   
// Function to set past/present/future time.
timeBlock.each(function () {
    
    var parent = $(this).parents(".row");
    var timeId = parseInt(parent.attr("id"));
    var currentHour = parseInt(moment().format("H"));
    console.log(timeId);
  
    if (timeId < currentHour) {
    $(this).addClass("past");
  
    } else if (timeId === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
        $(this).val(localStorage.getItem(parent.attr("id")));
    }
    $(this).val(localStorage.getItem(parent.attr("id")));
})
  
// Set .on("click") function to store the task information to local storage
$(".saveBtn").on("click", function() {
    var userText = $(this).siblings(".time-block").val();
    var hourTask = $(this).parents(".row").attr("id");
    
    localStorage.setItem(hourTask, userText);
    console.log("+++ Get Item from Local Storage: ", localStorage.getItem(hourTask))
})  