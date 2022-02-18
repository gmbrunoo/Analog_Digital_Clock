window.addEventListener('load', start);

const week = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];

const inputDay = document.getElementById('date');
const inputHour = document.getElementById('timer');


function start(){
    

    getHour();  
    getDate();
    clock();
}

function getHour(){
    const date = new Date();

    let hour = String(date.getHours()).padStart(2,0);
    let minute = String(date.getMinutes()).padStart(2,0)
    let second = String(date.getSeconds()).padStart(2,0)

    inputHour.innerText = `${hour}:${minute}:${second}`;
    setTimeout('getHour()', 1000);
}

function getWeekDay(e){
    return week[e];
}

function getDate(){
    const date = new Date();

    let day = String(date.getDate()).padStart(2,0);
    let month = String(date.getMonth()+1).padStart(2,0);
    let year = String(date.getFullYear());
    let weekDay = String(getWeekDay(date.getDay()));

    inputDay.innerText = `${weekDay} ${day}-${month}-${year}`;
}

function clock(){
    const date = new Date();

    let hours = ((date.getHours() + 11) % 12 + 1);
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    let hour = hours * 30;
    let minute = minutes * 6;
    let second = seconds * 6;
    
    document.querySelector('.hour').style.transform = `rotate(${hour}deg)`;
    document.querySelector('.minute').style.transform = `rotate(${minute}deg)`;
    document.querySelector('.second').style.transform = `rotate(${second}deg)`;
    setTimeout('clock()', 500);
}