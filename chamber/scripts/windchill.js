const speed = 5;
const temp = 10;
const tempDegree = 10;
const tempName = "Partly Cloudy";

let tn = document.getElementById("tempName");
tn.textContent = `${tempName}`;

let td = document.getElementById("tempDegree");
td.textContent = `${tempDegree}°F`

let windSpeed = document.getElementById("windSpeed");
windSpeed.innerHTML = `Wind Speed : ${speed} mph`;

let wc = document.getElementById("windChill");
wc.innerHTML = `Wind Chill : ${buildWindChill(speed, temp)}`;

function buildWindChill(speed, temp) {
    // Compute windchill
    let windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16)
    + 0.4275 * temp * Math.pow(speed,0.16);
    // Round the answer down to integer
    windChill = Math.floor(windChill);

    // if chill is greater than temp, return the temp
    windChill = (windChill > temp) ? temp : windChill;

    wc.innerHTML = windChill;
    console.log(windChill);
    return windChill;
}