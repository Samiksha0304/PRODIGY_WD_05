
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd465c15f02msh6bf92c4e752ceb5p10e42cjsn981cea4a637e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityname.innerHTML = city
	let link = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
	fetch(link, options)
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then((response) => {
			if (response) {
				temp.innerHTML = response.temp,
					cloud_pct.innerHTML = response.cloud_pct,
					feels_like.innerHTML = response.feels_like,
					humidity.innerHTML = response.humidity,
					humid.innerHTML = response.humidity,
					min_temp.innerHTML = response.min_temp,
					max_temp.innerHTML = response.max_temp,
					wind_speed.innerHTML = response.wind_speed,
					speed.innerHTML = response.wind_speed,
					wind_degrees.innerHTML = response.wind_degrees,
					sunrise.innerHTML = response.sunrise,
					sunset.innerHTML = response.sunset,
					console.log(response);
			} else {
				console.log('No data for this city');
			}
		})
		.catch(err => console.error(err));
}


const submit = document.querySelector('#submit');
const city = document.querySelector('#city');

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Mumbai");
