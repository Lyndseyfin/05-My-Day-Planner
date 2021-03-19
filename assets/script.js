var myDay = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
//format('HH') gives us the military time version of the current hour of the day
let currentHour = moment().format('HH');
function getHeaderDate() {
    var currentHeaderDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentHeaderDate);
}

getHeaderDate();


function changeColor (){

    $('.description').each(function(){
        const textArea = $(this);
        const id = parseInt(textArea.parent().attr('id'));
    
        const hourOfRow = id + 9;
        //check if it's present, past, or future depending on the currentTime
        console.log(currentHour)
        console.log('id ' + hourOfRow)
        //we have to check with a double equal signs as 09 from currentHour and 9 from the timeblock do not match strictly (===)
        //currentHour is a string and hourOfRow is a integer
        //strict comparisons check for the type of the data as well as the value
        if(currentHour == hourOfRow){
            textArea.addClass('present');
        }
        else if(currentHour < hourOfRow){
            textArea.addClass('future');
        }
        else{
            textArea.addClass('past');
        }
    })

}

//e is event

function saveItem(e){
    //for *this* specific button we're clicking on
    const button = $(this);
    const id = button.parent().attr('id');
    //gets the second item in the array of siblings, the textArea
    const textArea = $(button.siblings()[1]);

    console.log(textArea.val())
    //sets the item in local storage as the id of the row as its name (or key) and the value of the textArea's value
    localStorage.setItem(id, textArea.val());


}

function getItems(){
    //i is the index which points to the item in the array from the first item to the last
    //arrays start from 0 index
    for (let i = 0; i < myDay.length; i++) {
        //this is string concatenation to add "#" and the id from myDay together as we need the hashtag to look specifically for an id
        const timeblock = $("#"+myDay[i]);
        //gets the second child which is the textarea
        const textArea = $(timeblock.children()[1]);
        //text stored into local storage associated to the id of the timeblock
        //we're getting the item that equals the id of the time block
        const text = localStorage.getItem(myDay[i])

        //this sets the value within the contents of the textArea as the text we stored into local storage
        //this is placing the text into the box
        textArea.val(text);
    }

}

$('.saveBtn').on('click', saveItem);
getItems();
changeColor();