var myDay = ("0", "1", "2", "3", "4", "5", "6", "7", "8");

function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

getHeaderDate();


// saves data to localStorage
function saveReminders() {
    localStorage.setItem("myDay", JSON.stringify(myDay));
}


// sets any existing localStorage data to the view if it exists
function init() {
    var storedDay = JSON.parse(localStorage.getItem("myDay"));

    if (storedDay) {
        myDay = storedDay;
    }

    saveReminders();
  
}

// loads any existing localstorage data after components created
init();

// saves data to be used in localStorage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var saveIndex = $(this).data(".description");
    myDay[saveIndex] = $(this).data(".description");
    console.log(saveIndex);
    saveReminders();
    
})