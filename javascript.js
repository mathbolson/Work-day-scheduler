// Arrays that hold all the different hours
// I am using military time so i don't have to do the extra steps of subtracting twelve.
var hourStrings = ["nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen"]
var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
var textareas = ["textarea-nine", "textarea-ten", "textarea-eleven", "textarea-twelve", "textarea-thirteen", "textarea-fourteen", "textarea-fifteen", "textarea-sixteen", "textarea-seventeen"];

// Getting today's date and displaying at the top
var todayDate = new Date();

$("#currentDay").text(todayDate);

//when saveBtn is clicked we grab the value that is inside of the corresponding text area

$(".saveBtn").on("click", function(event){
//the text area is determined based on the event and the button id
    console.log($('#textarea-' + event.currentTarget.id).val());
    var inputText = $('#textarea-' + event.currentTarget.id).val();
    // saving button id as key and textarea input as value
   localStorage.setItem(event.currentTarget.id, inputText)

})
//loop through all the textareas and populate them with the appropriate text\
for (var i =0; i<hourStrings.length; i++) {
    $("#" + textareas[i]).text(localStorage.getItem(hourStrings[i]));
}

var currentHour = todayDate.getHours();
console.log(currentHour);
// loop through all the work hours and set class based on time of day
for(var i = 0; i < hours.length; i++) {
    if (currentHour > hours[i]){
        $("#"+ textareas[i]).addClass("past");
    }
    if (currentHour == hours[i]){
        $("#" + textareas[i]).addClass("present");
    }
    if (currentHour < hours[i]){
        $("#" + textareas[i]).addClass("future");
    }
}
