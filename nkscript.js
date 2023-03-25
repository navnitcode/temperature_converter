function convertToKelvin() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
    
    if (celsiusInput.value) {
      const celsius = parseFloat(celsiusInput.value);
      const kelvin = celsius + 273.15;
      kelvinInput.value = kelvin.toFixed(2);
    } else if (fahrenheitInput.value) {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const kelvin = (fahrenheit + 459.67) * 5 / 9;
      kelvinInput.value = kelvin.toFixed(2);
    } else {
      alert("Please enter a temperature in Celsius or Fahrenheit");
    }
  }
  
  function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const kelvinInput = document.getElementById("kelvin");
    const celsiusInput = document.getElementById("celsius");
    
    if (fahrenheitInput.value) {
      const fahrenheit = parseFloat(fahrenheitInput.value);
      const celsius = (fahrenheit - 32) * 5 / 9;
      celsiusInput.value = celsius.toFixed(2);
    } else if (kelvinInput.value) {
      const kelvin = parseFloat(kelvinInput.value);
      const celsius = kelvin - 273.15;
      celsius
    }
}
  
  
  
  