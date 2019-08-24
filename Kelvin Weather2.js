var tempData = {
    kelvin: 293
  }
  tempData.celsius = tempData.kelvin - 273;
  
  // Function that changes celsius to fahrenheit.
  function tempConversion(celsius) {
    return ~~(celsius * (1.8) + 32);
  }
  
  // The temperature is 20 degrees in Celsius.
  console.log('The temperature is ' + tempData.celsius + ' degrees in Celsius.');
  // The temperature is 68 degrees Fahrenheit.
  console.log('The temperature is ' + (tempConversion(tempData.celsius)) + ' degrees Fahrenheit.'); 