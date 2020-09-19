//https://www.metaweather.com/api/#locationsearch
//https://www.metaweather.com/api/location/search/?query=san

// https://www.metaweather.com/api/location/44418/
let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
document.addEventListener('DOMContentLoaded', () => {
    // let sanid=getTheCityWoId('san');

    getTheDefaultCitiesWeather();


})
let getTheDefaultCitiesWeather = () => {
    let cities = ['London', 'San Diego','Santander','Las vegas']

    cities.forEach(element => {
        console.log(element);
        getTheCityWeather(element, getTheCurrentDayWeather);
    });
}
document.getElementById('search').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('four-cities').remove()
    searchClicked();
})

let weather;
//get the weather by city woeid
let getWeather = (woeid, fn) => {
    // where on earth ID
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyUrl + `www.metaweather.com/api/location/${woeid}`)
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(jsonData => {
            fn(jsonData);
        })
        .catch(error => alert('Something went wrong :' + error));
}
//get the city woeid by the city name and then get it's weather
let getTheCityWeather = (city, fn) => {
    var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    fetch(proxyUrl + `https://www.metaweather.com/api/location/search/?query=${city}`)
        .then(result => {
            return result.json();
        })
        .then(jsonData => {
            getWeather(jsonData[0].woeid, fn);
        })
        .catch(error => alert('Something went wrong :' + error));
}
//when the user click the search button -- get the city woeid first and then get its weather
let searchClicked = () => {
    let city = document.getElementById('city').value;
    getTheCityWeather(city, getTheWeekWeather);
}

//get five days weather
let getTheWeekWeather = (weather) => {
    for (let i = 0; i < weather.consolidated_weather.length; i++) {
        //use this if you want to change the HTMl elelents if you already created it
        //divs ids must have ids like day0,day2,day3,day4...day5
        //,day names headers className like day-name
        //,weather state day-weather
        //,min temperature day-min-temp
        //,max temperature day-max-temp


        //  document.querySelector(`#day${i} day-name`).innerText=getTheDayName(weather.consolidated_weather[i].applicable_date);
        //  document.querySelector(`#day${i} day-weather`).weather.consolidated_weather[i].weather_state_name;
        //  document.querySelector(`#day${i} day-max-temp`).weather.consolidated_weather[i].max_temp;
        //  document.querySelector(`#day${i} day-min-temp`).weather.consolidated_weather[i].min_temp;


        //this is a demo to show you its displayed you can toggle it as comment
        dayDiv = document.createElement('div');
        dayName = document.createElement('h1');
        dayName.innerText = getTheDayName(weather.consolidated_weather[i].applicable_date);
        dayState = document.createElement('p');
        dayState.innerText = weather.consolidated_weather[i].weather_state_name;
        dayDiv.appendChild(dayName);
        dayDiv.appendChild(dayState);
        document.getElementById('week-C').appendChild(dayDiv);
    }
}
//get the daily weather for the passed day
let getTheDailyWeather = (weather, day) => {
    return dayu;
}
//get The Day Name
let getTheDayName = (dt) => {
    d = new Date(dt);
    return days[d.getDay()];
}
let getTheCurrentDayWeather = (weather, cities) => {
    let citiesDiv = document.getElementById('four-cities');
    let weatherDiv = document.createElement('div');
    let h1Name = document.createElement('h1');
    h1Name.innerText = weather.parent.title;
    dayState = document.createElement('h3');
    dayState.innerText = weather.consolidated_weather[0].weather_state_name;
    weatherDiv.appendChild(h1Name);
    weatherDiv.appendChild(dayState);
    citiesDiv.appendChild(weatherDiv);



}
