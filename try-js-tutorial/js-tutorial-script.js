//vanilla JS
//https://www.youtube.com/watch?v=LFa9fnQGb3g

//reveal message by clicking the "Click Me" button
function revealMessage(){
    document.getElementById("hidden").style.display = 'block';
};

console.log("running");

//decrement the countdown button
function countdown(){
    var currentVal = document.getElementById("countdownButton").innerHTML;
    var newVal = 0;
    if(currentVal > 0){
        newVal = currentVal - 1;
    }
    document.getElementById("countdownButton").innerHTML = newVal;
}

//dynamically change the countdown text in the message
function countdownText(){
    //number displayed in countdown button
    var countdownVal = document.getElementById("countdownButton").innerHTML
    console.log(countdownVal);
    document.getElementById("countdownText").innerHTML = countdownVal;
}
