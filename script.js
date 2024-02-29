window.addEventListener('load', calculateTime)
function calculateTime(){
    let date = new Date();
    let dayNumber = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let ampm = hour >= 12 ? 'PM' : 'AM';
    let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    hour = hour % 12;
    hour = hour ? 12 : '12';
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;

    document.querySelector('#day').innerText = dayNames[dayNumber];
    document.querySelector('#hour').innerText = hour;
    document.querySelector('#min').innerText = minute;
    document.querySelector('#ampm').innerText = ampm;

    setTimeout(calculateTime, 200);
}
