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
  $input = $('#inputCity'), //val of input used to url
  //output when ajax call success
  $output = $('#output'),
  //submit button
  $submitButton = $('#submit');

  // on ENTER keypress call AJAX function.
  $input.keypress(function(event) {
    if (event.which === 13) {
      getWeatherData();
    } else {
      event.stopPropagation();
    }
  });
  // on click call AJAX function
  $submitButton.click(function() {
    getWeatherData();
  });

  function convertToCelsius(f) {
    return (f - 32) / 1.8000;
  }
  function getWeatherData() {
    $.ajax({
      type: 'GET',
      //grab city info using API key
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + $input.val() +'&units=imperial&appid=' + $apiKey,
      //on success print weather and temperature
      success: function(data) {
        var celsius = convertToCelsius(data.main.temp),
            $message,
            $twitter = $('#twitter');
        console.log('success!');
        console.log(data);
        // var kelvinTemp = data.main.temp;
        // var kelvinToFarenheit = (kelvinTemp - 273.15)*1.8000 + 32;
        $message = 'Weather: ' + data.weather[0].description + '.';
        $message += ' Temp: ' + data.main.temp.toFixed(0) + ' degrees Farenheit. ';
        $message += celsius.toFixed(0) + ' degrees Celsius';
        $output.html($message);

        $twitter.click(function() {
          window.open('https://twitter.com/intent/tweet?text=' + $message + ' here in ' + $input.val() + '!');
        });
      },
      //on error log error message
      error: function() {
        console.log('error loading data');
      }
    });
  }
});
