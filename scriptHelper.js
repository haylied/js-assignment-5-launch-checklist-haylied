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
  // Here is the HTML formatting for our mission target div.
  /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
  let form = document.getElementById("launchForm");

  form.addEventListener("submit", function (event) {
    let pilotName = document.querySelector("input[name=pilotName]");
    let copilotName = document.querySelector("input[name=copilotName]");
    let fuelLevel = document.querySelector("input[name=fuelLevel]");
    let cargoMass = document.querySelector("input[name=cargoMass]");

    if (
      typeof pilotName.value != "string" ||
      typeof copilotName.value != "string"
    ) {
      alert("Make sure to enter valid information for each field!");
    } else if (isNaN(fuelLevel.value) || isNaN(cargoMass.value)) {
      alert("Make sure to enter valid information for each field!");
    }
  });
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  function updatingShuttleRequirements() {
    document.getElementById("pilotStatus").innerHTML =
      "${pilot.value} is not ready";
    document.getElementById("copilotStatus").innerHTML =
      "${copilot.value} is not ready";
    document.getElementById("faultyItems").style.visibility = "visible";
    document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatusCheck").style.backgroundColor = "red";
  }

  if (fuelLevel.value < 10000) {
    document.getElementById("fuelStatus").innerHTML =
      "There is not enough fuel for this journey";
    updatingShuttleRequirements();
  } else if (cargoLevel.value > 10000) {
    document.getElementById("cargoStatus").innerHTML =
      "There is too much mass for the shuttle to take off";
    updatingShuttleRequirements();
  } else {
    document.getElementById("pilotStatus").innerHTML = "${pilot.value} Ready";
    document.getElementById("copilotStatus").innerHTML =
      "${copilot.value} Ready";
    document.querySelector("h2").innerHTML = "Shuttle is ready for launch";
    document.getElementById("launchStatusCheck").style.backgroundColor =
      "green";
  }

  validateInput();
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch().then(function (response) {});

  return planetsReturned;
}

function pickPlanet(planets) {}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
