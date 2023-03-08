const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = config.NASA_API_KEY; 

//TODO try to implement DEMO_KEY if config is not link with local storage
// localStorage.setItem('mydlénassa', 'supersecret');

const fetchNASAData = async () => {
    console.log(`${url}${api_key}&${date}`);
    try {
        const response = await fetch(`${url}${api_key}`);
        const data = await response.json();
        console.log(data);
        displayTitle(data);
        displayDate(data);
        displayPicture(data);
        displayExplanation(data);
    } catch (error) {
        console.log(error);
    }
}

fetchNASAData();

const displayTitle = data => {document.getElementById('title').textContent = data.title; }
const displayDate = data => {document.getElementById('date').textContent = data.date; }
const displayPicture = data => {document.getElementById('picture').src = data.hdurl; }
const displayExplanation = data => {document.getElementById('explanation').innerHTML = '<span id="expl">Explanation:</span> ' + data.explanation; }


var date = new Date();
function parseDate(date) {
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate);
    return currentDate;
}

parseDate(date);
function changingDay() {
    document.getElementById('back').addEventListener('click', () => {
        date.setDate(date.getDate() - 1);
        console.log("Previous day");
        parseDate(date);
    });
    document.getElementById('next').addEventListener('click', () => {
        date.setDate(date.getDate() + 1);
        console.log("Next day");
        parseDate(date);
    });
}

changingDay();



