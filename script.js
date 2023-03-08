const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = config.NASA_API_KEY; 

//TODO try to implement DEMO_KEY if config is not link with local storage
// localStorage.setItem('mydlénassa', 'supersecret');

var date = new Date();
parseDate(date);

const fetchNASAData = async () => {
    try {
        const response = await fetch(`${url}${api_key}&date=${parseDate(date)}`);
        const data = await response.json();
        console.log(response);
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


function parseDate(date) {
    let day = ('0' + date.getDate()).slice(-2);
    let month = ('0' + (date.getMonth() + 1)).slice(-2);
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;
    console.log(currentDate);
    return currentDate;
}

function changingDay() {
        document.getElementById('back').addEventListener('click', () => {
        date.setDate(date.getDate() - 1);
        console.log("Previous day");
        parseDate(date);
        fetchNASAData();
    });
        document.getElementById('next').addEventListener('click', () => {
        date.setDate(date.getDate() + 1);
        console.log("Next day");
        parseDate(date);
        fetchNASAData();
    });
}

changingDay();



