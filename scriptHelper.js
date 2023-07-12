// Write your helper functions here!
require("isomorphic-fetch");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  document.getElementById(
    "missionTarget"
  ).innerHTML = ` <h2>Mission Destination</h2>
  <ol>
      <li>Name: ${name}</li>
      <li>Diameter: ${diameter} </li>
      <li>Star: ${star}</li>
      <li>Distance from Earth:${distance} </li>
      <li>Number of Moons: ${moons} </li>
  </ol>
  <img src="${imageUrl}">`;
}

function validateInput(testInput) {
  if (testInput === "") {
    return "Empty";
  } else if (isNaN(testInput) === false) {
    return "Is a Number";
  } else if (isNaN(testInput) === true) {
    return "Not a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  let form = document.getElementById("launchForm");
  form.addEventListener("submit", function (event) {

    if (
      validateInput(pilot.value) === "Empty" ||
      validateInput(copilot.value) === "Empty" ||
      validateInput(fuelLevel.value) === "Empty" ||
      validateInput(cargoLevel.value) === "Empty"
    ) {
      alert("Make sure to enter valid information for each field!");
      event.preventDefault();
    } else if (
      validateInput(pilot.value) === "Is a Number" ||
      validateInput(copilot.value) === "Is a Number"
    ) {
      alert("Check on name values. No number are valid!");
      event.preventDefault();
    } else if (
      validateInput(fuelLevel.value) === "Not a Number" ||
      validateInput(cargoLevel.value) === "Not a Number"
    ) {
      alert("Check on number values. No characters are valid!");
      event.preventDefault();
    } else {
        event.preventDefault();
    }


        const showItems = () => {
            return (list.style.visibility = "visible"),(document.getElementById(
                "pilotStatus"
              ).innerHTML = `Pilot ${pilot.value} is ready for launch`),(document.getElementById(
                "copilotStatus"
              ).innerHTML = `Co-pilot ${copilot.value} is ready for launch`)
            ;
        }

        const notReady = () => {
            return (document.getElementById(
                "launchStatus"
              ).innerHTML = "Shuttle not ready for launch"), (document.getElementById(
                "launchStatus"
              ).style.color = "rgb(199, 37, 78)");
        }

        const ready = () => {
            return (document.getElementById(
                "launchStatus"
              ).innerHTML = "Shuttle is ready for launch"), (document.getElementById(
                "launchStatus"
              ).style.color = "rgb(65, 159, 106)");
        }
        

        const tooMuchMass = () => { (document.getElementById("cargoStatus").innerHTML =
            "Cargo mass too heavy for launch")};

        const notEnoughFuel = () => {(document.getElementById("fuelStatus").innerHTML = 
            `Fuel level too low for launch`)};

        const enoughFuel = () => { (document.getElementById("fuelStatus").innerHTML =
              "Fuel level high enough for launch")};

        const lowEnoughMass = () => { (document.getElementById("cargoStatus").innerHTML = 
         `Cargo mass low enough for launch`)};

    
        if (fuelLevel.value < 10000) {
            showItems();
            notReady();
            notEnoughFuel();
        }
      

        if (cargoLevel.value > 10000) {
            showItems();
            tooMuchMass();
            notReady();  
        }
    

        if (fuelLevel.value > 10000 && cargoLevel.value < 10000) {
            showItems();
            ready();
            enoughFuel();
            lowEnoughMass();
        }

  });
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let randomNumber = Math.floor(Math.random() * planets.length);
  return planets[randomNumber];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;

