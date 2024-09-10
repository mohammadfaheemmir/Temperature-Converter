function convertTemperature() {
    const celsiusValue = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsiusValue)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }
    const fahrenheit = (celsiusValue * 9 / 5) + 32;
    const roundedFahrenheit = fahrenheit.toFixed(2);
    document.getElementById("result").textContent = `${celsiusValue}°C is equal to ${roundedFahrenheit}°F`;
}