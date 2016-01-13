// weather API key: 34061ce86bfda355e56b98b6d018e56c

//Problem: Application needs functionality added so user can acquire weather information based on city, state.
//Solution: Add functionality to get the user the weather information based on the city, state they enter.

//1. User enters city,state into an input field
//make a request to openweather api to get data
//parse returned data
//2. when user 'clicks' search button the user receives weather info based on city, state entered.



$(function() {
  var $apiKey = parseInt('34061ce86bfda355e56b98b6d018e56c'),
  $inputCity = $('#inputCity'),
  $output = $('#output'),
  $submitButton = $('#submit');

  $submitButton.click(function() {
    console.log('test');
    $.ajax({
      type: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2de143494c0b295cca9337e1e96b00e0',
      success: function(data) {
        //var extractData = JSON.parse(data);
        console.log(data);
          $output.append('<span> Weather: ' + data.weather[0].description + '</span>');
      }
    });
  });
});
