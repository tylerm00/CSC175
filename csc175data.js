let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
const milesPerKilometer = 0.621;

console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distanceToMarsKm));
console.log(typeof(distanceToMoonKm));
console.log(typeof(milesPerKilometer));

function calcTrip(rocketName, distanceKm, destinationName, shuttleMph) {
    let convertedMiles = distanceKm * milesPerKilometer;
    let hoursTravel = convertedMiles / shuttleMph;
    let daysTravel = hoursTravel / 24;
    console.log(`${rocketName} will take ${daysTravel.toFixed(2)} days to reach ${destinationName}`);
}
calcTrip(shuttleName, distanceToMarsKm, "Mars", shuttleSpeedMph);
calcTrip(shuttleName, distanceToMoonKm, "Moon", shuttleSpeedMph);