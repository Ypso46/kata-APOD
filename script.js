const url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = config.NASA_API_KEY;
const fetchNASAData = async () => {
    try {
        let date = "";
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

/*
const date = Date();
/*
function getDate(date) {
    const dateBefore = toISOString(date - 1);
    document.getElementById('back').addEventListener('click', () => {
        return dateBefore;
    });
    if (dateAfter === date) {
        console.log("Error");
    } else {
        const dateAfter = toISOString(date + 1);
        document.getElementById('next').addEventListener('click', () => {
            return dateAfter;
        });
    } 
}
*/



