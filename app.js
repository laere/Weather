// weather API key: 34061ce86bfda355e56b98b6d018e56c

//Problem: Application needs functionality added so user can acquire weather information based on city, state.
//Solution: Add functionality to get the user the weather information based on the city, state they enter.

//1. User enters city,state into an input field
//make a request to openweather api to get data
//parse returned data
//2. when user 'clicks' search button the user receives weather info based on city, state entered.



$(function() {
  //API key
  var $apiKey = '34061ce86bfda355e56b98b6d018e56c',
  $inputCity = $('#inputCity'), //val of input used to url
  //output when ajax call success
  $output = $('#output'),
  //submit button
  $submitButton = $('#submit');

  $submitButton.click(function() {
    console.log('test');
    $.ajax({
      type: 'GET',
      //grab city info using API key
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $inputCity.val() +'&units=imperial&appid=' + $apiKey,
      //on success print weather and temperature
      success: function(data) {
        console.log('success!');
        //var temperature = data.main.temp;
        // var kelvinTemp = data.main.temp;
        // var kelvinToFarenheit = (kelvinTemp - 273.15)*1.8000 + 32;
        console.log(data);
          $output.html('Weather: ' + data.weather[0].description + ', Temp: ' + data.main.temp + ' degrees');
      },
      //on error log error message
      error: function() {
        console.log('error loading data');
      }
    });
  });
});
