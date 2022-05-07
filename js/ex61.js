console.log("This is clock.js")

function updateclock(){
    // Get the current date
    let currenTime = new Date()

    // Extract hour, minute and seconds from the date
    let currentHour = currenTime.getHours();
    let currentMin = currenTime.getMinutes();
    let currentSecond = currenTime.getSeconds();

    // Pad 0 if minute or second is less than 10 (Single digit)
    currentMin = (currentMin < 10 ? "0": "") + currentMin;
    currentSecond = (currentSecond < 10 ? "0": "") + currentSecond;
    currentHour = (currentHour < 10 ? "0": "") + currentHour;

    // Convert railway clock to AM/PM clock
    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ?  12 : currentHour;

    // Choose AM/PM as per the time of the day 
    let timeofday = (currentHour < 12 ) ? "AM" : "PM";

    // Prepare the time string form hours, minutes and Seconds
    let currentTimeStr = currentHour + ":" + currentMin + ":" + currentSecond + "" + timeofday;
    
    // Insert the time string inside the DOM
    document.getElementById("Time").innerHTML = currentTimeStr
}