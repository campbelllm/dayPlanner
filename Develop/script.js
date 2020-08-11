$(document).ready(function(){
    let $currentDay = $('#currentDay')
    let newDate = moment();
    // const $todoText = $('.todoText')
    // const $hour = $('.hour').find()
    const $container = $('#container')
    // creating and formatting date
    $currentDay.text(newDate.format('dddd, MMMM Do YYYY'))
    const $timeBlock = $('.time-block');
    //array for time of day
    const timeOfDay = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'] 
    $.each(timeOfDay,function(key,value){
        //creating html elements
        const $hourRow = $('<div>').addClass('row')
        $timeBlock.append($hourRow)
        const $hourDiv = $('<div>').text(value).addClass('hour') 
        const $todoText = $('<textArea>').addClass('.textarea').attr('value', value)
        const $btnIcon = $('<i>').addClass('fa fa-save')
        const $submitButton = $('<button>').addClass('saveBtn').append($btnIcon)
        //appending created elements to parent container
        $hourRow.append($hourDiv, $todoText, $submitButton)  
        // comparing times in array to current time and applying styling accordingly
        const endTime = moment(value, "hA");
        if(newDate.isBefore(endTime)){
            $todoText.css('background-color', 'green')
        }else if(newDate.format('hA') === $hourDiv.text()){
                    $todoText.css('background-color', 'red')
        }else{
            $todoText.css('background-color', 'gray').attr('readonly', true)
        }  
        //local storage
        //setting the text for each time block
        function storeTodoInfo() {
            localStorage.setItem(value, $todoText.val());
        }
        //running the function when the save button is clicked
        $submitButton.on('click', function(){
            storeTodoInfo()
         })
         // retreiving to-do items from local storage and rendering them to their correct time-blocks
         function getTodoText(){
            const item = localStorage.getItem(value)
            $todoText.text(item)
        } 
        getTodoText()
    })
})