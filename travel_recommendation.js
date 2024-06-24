const search = document.getElementById('search-button');
const clear = document.getElementById('clear-button');


function searchReccomendation() {
    const input = document.getElementById('search').value.toLowerCase();
    const resultDiv = document.getElementById('reccomendation');
    resultDiv.innerHTML = ''; 
    var reccomendation;

    fetch("travel_recommendation_api.json")
      .then(response => response.json())

      .then(data => {
            switch(input) {
                case "beach", "beaches":
                    reccomendation = data["beaches"]
                break;
                case "country", "countries":
                    reccomendation = data["countries"]
                break;
                case "temple", "temples":
                    reccomendation = data["beaches"]
                break;
                default:
                    resultDiv.innerHTML = 'Keyword not found.';  
            }
            const img = reccomendation['imgUrl'];
            const name = reccomendation['name'];
            const description = reccomendation['description'];

            
            resultDiv.innerHTML += `<img src="${img}" alt="hjh">`;
            resultDiv.innerHTML += `<h2>${name}</h2>`;
            resultDiv.innerHTML += `<p>${description}</p>`;
            resultDiv.innerHTML += `<button type="button">Visit</button> `;
        }) 
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
    }  

function clearSearch() {
    const resultDiv = document.getElementById('reccomendation');
    resultDiv.innerHTML = '';
    }  

search.addEventListener('click', searchReccomendation);
clear.addEventListener('click', clearSearch);