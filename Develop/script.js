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

    //  LOOP THROUGHT TO CREATE EACH DIV, REMEMBER TO ADD ATRR OF VALUE AND CLASSES
    // ONCE DIVS ARE MADE COMPARE TIME OF EACH DIV, AND GIVE IT A BACKGROUND COLOR ACCORDINGLY
    // SEND VALUE OF TEXT ARE TO LOCAL STORAGE, HAVE THIS BE A PART OF THE LOOP SO IT GRABS THE CORRECT DATA
   
    $.each(timeOfDay,function(key,value){
        
        const $hourRow = $('<div>').addClass('row')
        $timeBlock.append($hourRow)
        const $hourDiv = $('<div>').text(value).addClass('hour') 
        const $todoText = $('<textArea>').attr('cols', '110').attr('rows', '2')
        const $btnIcon = $('<i>').addClass('fa fa-save')
        const $submitButton = $('<button>').addClass('saveBtn').append($btnIcon)
        $hourRow.append($hourDiv, $todoText, $submitButton)  
        const endTime = moment(value, "hA");
        if(newDate.isBefore(endTime)){
            $todoText.css('background-color', 'green')
        }else if(newDate.format('hA') === $hourDiv.text()){
                    $todoText.css('background-color', 'red')
        }else{
            $todoText.css('background-color', 'gray').attr('readonly', true)
        }  
    })


  










})