// Function(in an object list) that changes kelvin to celsius.
const tempData = {
    kelvin: 0,
    conversion: function() {
      tempData.celsius = tempData.kelvin - 273
      return tempData.celsius
    }
  }
  
  // Function that changes celsius to fahrenheit.
  function tempConversion() {
    let fahrenheit = tempData.conversion() * (9 / 5) + 32
    fahrenheit = Math.floor(fahrenheit);
    return fahrenheit
  }
  
  // The temperature is 20 degrees in Celsius.
  console.log('The temperature is ' + (tempData.conversion()) + ' degrees in Celsius.');
  
  // The temperature is 68 degrees Fahrenheit.
  console.log('The temperature is ' + (tempConversion()) + ' degrees Fahrenheit.'); 