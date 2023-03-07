const fetchNASAData = async () => {
    try {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY');
        const data = await response.json();
        console.log(data);
        displayData(data);
    } catch (error) {
        console.log(error);
    }
}

const displayData = data => {
    document.getElementById('title').textContent = data.title;
    document.getElementById('date').textContent = data.date;
    document.getElementById('picture').src = data.hdurl;
    document.getElementById('explanation').textContent = data.explanation;
}

fetchNASAData();


