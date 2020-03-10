 let api =("https://api.openweathermap.org/data/2.5/weather?q=malaga&units=metric&lang=es&appid=23dc802004e0833e265eb475df2d44c2")
 fetch(api)
  .then(response => response.json())
  .then(json => {
    console.log(json)
    document.getElementsByClassName("heading")[0].innerHTML = json.weather[0].description.toUpperCase();
    document.getElementsByClassName("location")[0].innerHTML = json.name;
    document.getElementsByClassName("temp-value")[0].innerHTML = Math.round(json.main.temp);
    document.getElementsByClassName("humidity")[0].innerHTML = json.main.humidity;
    document.getElementsByClassName("wind-speed")[0].innerHTML = json.wind.speed;
})
  .catch(error => {
    console.log('error loading');
  });