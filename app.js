document.addEventListener('DOMContentLoaded', function() {
    const API_URL = 'https://api.thecatapi.com/v1/images/search';
    const API_KEY = 'live_WT9WRgdoqfRBHn8Ftw5779M76ezebPGvzpJIigLBWqmC7Kg7Dq9hVyl9YVUe0pr5';
    const getCatBtn = document.getElementById('get-cat-btn');
    const catsList = document.getElementById('cats-list');

    function fetchCatImage() {
        fetch(API_URL, {
            headers: {
                'x-api-key': API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            const catData = data[0];
            displayCatImage(catData.url);
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
        });
    }
    
    function displayCatImage(url) {
        catsList.innerHTML = '';
        const listItem = document.createElement('li');
        listItem.innerHTML = `<img src="${url}" alt="Random Cat Image">`;
        catsList.appendChild(listItem);
    }

    getCatBtn.addEventListener('click', fetchCatImage);
});
