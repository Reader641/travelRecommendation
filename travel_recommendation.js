const search = document.getElementById('search-button');
const clear = document.getElementById('clear-button');


function searchReccomendation() {
    const input = document.getElementById('search').value.toLowerCase();
    var resultDiv = document.getElementById('reccomendation');
    resultDiv.innerHTML = ''; 

    var img;
    var name;
    var description;
    
    var options;
    var Time;

    fetch("travel_recommendation_api.json")
      .then(response => response.json())

      .then(data => {
            switch(input) {
                case "beach":
                case "beaches":
                    data.beaches.forEach(beach => {
                        img = beach.imageUrl;
                        name = beach.name;
                        description = beach.description;
                        
                        resultDiv.innerHTML += `<div class="reccomendation-item" id="reccomendation-">
                                                    <img src="${img}" alt="hjh">
                                                    <h2>${name}</h2>
                                                    <p>${description}</p>   
                                                    <button type="button">Visit</button>
                                                </div>`;
                    });
                break;
                case "country":
                case "countries":
                    data.countries.forEach(country => {
                        country.cities.forEach(city => {
                            img = city.imageUrl;
                            name = city.name;
                            description = city.description;
                            
                            resultDiv.innerHTML += `<div class="reccomendation-item" id="reccomendation-">
                                                        <img src="${img}" alt="hjh">
                                                        <h2>${name}</h2>
                                                        <p>${description}</p>   
                                                        <button type="button">Visit</button>
                                                    </div>`;
                        });
                    });
                break;
                case "temple":
                case "temples":
                    data.temples.forEach(temple => {
                        img = temple.imageUrl;
                        name = temple.name;
                        description = temple.description;
                        
                        resultDiv.innerHTML += `<div class="reccomendation-item" id="reccomendation-">
                                                    <img src="${img}" alt="hjh">
                                                    <h2>${name}</h2>
                                                    <p>${description}</p>   
                                                    <button type="button">Visit</button>
                                                </div>`;
                    });
                break;
                default:
                    resultDiv.innerHTML = 'Keyword not found.';  
            }
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