const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = config.NASA_API_KEY; 

//TODO try to implement DEMO_KEY if config is not link with local storage
// localStorage.setItem('mydlénassa', 'supersecret');

const fetchNASAData = async () => {
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
date.toDateString();
console.log(date);

function changingDay() {
    document.getElementById('back').addEventListener('click', () => {
        date.setDate(date.getDate() - 1);
        console.log("Previous day");
        console.log(date);
    });
    document.getElementById('next').addEventListener('click', () => {
        date.setDate(date.getDate() + 1);
        console.log("Next day");
        console.log(date);
    });
}


changingDay();



