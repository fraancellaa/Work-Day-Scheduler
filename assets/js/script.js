// current day loaded each time
var currentDay = moment(new Date()).format("MM/DD/YYYY");
$("#currentDay").text(currentDay);

function timeBlockColor() {
    //current hour
    var hour = moment().hours();

    // color change
    $(".time-block").each(function() {
        // individual id
        var currentHour = parseInt($(this).attr("id"));


        if (currentHour > hour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};

// function
timeBlockColor();

var saveBtn = $(".saveBtn");
// save info when save button is clicked
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var todo = $(this).siblings(".todo").val();

    localStorage.setItem(time, todo);
});


// text stays even if page reloads
function saveTodo() {
// individual time blocks
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var currentTodo = localStorage.getItem(currentHour);

        if(currentTodo !== null) {
            $(this).siblings(".todo").val(currentTodo);
        }
  }) 
};

// calling function
saveTodo();