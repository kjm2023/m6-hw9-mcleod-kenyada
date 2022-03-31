// Declare variables to hold the button and input field

var btn = document.getElementById('search-button');
// var locationName = document.getElementById('location-name').value;

// alert(locationName);

// Declare Variables for website, cityName and apiKey.


// var apiSite = 'https://api.openweathermap.org/data/2.5/weather';
// var cityName;
// var apiKey = '2d92c075595a07f1014f1eaf228d8fb2';

btn.addEventListener ("click", () => {

    var locationName = document.getElementById('location-name').value;
    var apiKey = '2d92c075595a07f1014f1eaf228d8fb2';


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locationName}&units=imperial&appid=${apiKey}`)
        .then(function(responseFromApi) {
           return responseFromApi.json();
        })
        .then(function(resultingJson) {
            var nameValue = resultingJson['name'];
            var countryCode = resultingJson['sys']['country'];
            var descr = resultingJson['weather'][0]['description'];
            var iconImage = resultingJson['weather'][0]['icon'];
            var currentTemp = resultingJson['main']['temp'];
            var feelsTemp = resultingJson['main']['feels_like'];

            // Assign variable to div

            var content = document.getElementById("content");

            // Fill 'content' div with new code. 

            content.innerHTML = `
            <h2>${nameValue}, ${countryCode}</h2>
            <img src="http://openweathermap.org/img/w/${iconImage}.png" alt="weather icon" />
            <h3>${descr}</h3>
            <h3>Current: ${currentTemp} &deg; F</h3>
            <h3>Feels Like: ${feelsTemp} &deg; F</h3>
            `;

        })

    
});



