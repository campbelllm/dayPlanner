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


// //checking time of day to change color of inputs
// console.log(parseInt(newDate.format('HH')), parseInt($hour.attr('data-value')))
// console.log($hour)

    // if(parseInt(newDate.format('HH')) < parseInt($hour.atrr('value').find())){
    // $todoText.css('background-color', 'green')
    // }else if(parseInt(newDate.format('HH')) === parseInt($hour.attr('value'))){
    // $todoText.css('background-color', 'red')
    // }else{
    // $todoText.css('background-color', 'gray').attr('readonly', true)
    // }  
    
    // console.log($hour)

    // $hour.prevObject.each(function(index, singleHour) {
    //     // console.log("SINGLE HOUR___", singleHour.dataset.value);
    //     // console.log("CURRENT HOUR___", newDate.format('H'));

    //     console.log(newDate.format('H') < singleHour.dataset.value)
        // if(newDate.format('H') < singleHour.dataset.value){
        //     $todoText.css('background-color', 'green')
        //     }else if(newDate.format('H') === singleHour.dataset.value){
        //     $todoText.css('background-color', 'red')
        //     }else{
        //     $todoText.css('background-color', 'gray').attr('readonly', true)
        //     }  
            

    // })

    //  LOOP THROUGHT TO CREATE EACH DIV, REMEMBER TO ADD ATRR OF VALUE AND CLASSES
    // ONCE DIVS ARE MADE COMPARE TIME OF EACH DIV, AND GIVE IT A BACKGROUND COLOR ACCORDINGLY
    // SEND VALUE OF TEXT ARE TO LOCAL STORAGE, HAVE THIS BE A PART OF THE LOOP SO IT GRABS THE CORRECT DATA
    console.log(newDate.format('hA'))

    $.each(timeOfDay,function(key,value){
        
        const $hourRow = $('<div>').addClass('row')
        $timeBlock.append($hourRow)
        const $hourDiv = $('<div>').text(value).addClass('hour') 
        const $todoText = $('<textArea>').attr('cols', '110').attr('rows', '2')
        const $btnIcon = $('<i>').addClass('fa fa-save')
        const $submitButton = $('<button>').addClass('saveBtn').append($btnIcon)
        $hourRow.append($hourDiv, $todoText, $submitButton)  

        console.log($hourDiv.text())

        if(newDate.format('hA') < $hourDiv.find().text()){
            $todoText.css('background-color', 'green')
        }else if(newDate.format('hA') === $hourDiv.text()){
                    $todoText.css('background-color', 'red')}
        //     }else{
        //     $todoText.css('background-color', 'gray').attr('readonly', true)
        //     }  
    })


  










})