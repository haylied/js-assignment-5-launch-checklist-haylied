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
    console.log("Form-");

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

    const faultyItemsVisible = (list.style.visibility = "visible");
    // const faultyItemsVisible = (document.getElementById("faultyItems").style.visibility = "visible");
    //Color
    const launchStatusColorRed = (document.getElementById(
      "launchStatus"
    ).style.color = "red");
    // const launchStatusColorGreen = (document.getElementById(
    //   "launchStatus"
    // ).style.color = "green");
    // // Fuel
    // const enoughFuel = (document.getElementById("fuelStatus").innerHTML =
    //   "Fuel level high enough for launch");
    const notEnoughFuel = (document.getElementById(
      "fuelStatus"
    ).innerHTML = `Fuel level too low for launch`);
    // // Mass
    // const LowEnoughMass = (document.getElementById(
    //   "cargoStatus"
    // ).innerHTML = `Cargo mass low enough for launch`);
    // const tooMuchMass = (document.getElementById("cargoStatus").innerHTML =
    //   "Cargo mass too heavy for launch");
    // // Pilot/Co-pilot Status
    const pilotStatus = (document.getElementById(
      "pilotStatus"
    ).innerHTML = `${pilot.value} is ready for launch`);
    const copilotStatus = (document.getElementById(
      "copilotStatus"
    ).innerHTML = `${copilot.value} is ready for launch`);
    // // Shuttle Launch
    const shuttleReadyForLaunch = (document.getElementById(
      "launchStatus"
    ).innerHTML = "Shuttle is ready for launch");
    const shuttleNotReadyForLaunch = (document.getElementById(
      "launchStatus"
    ).innerHTML = "Shuttle not ready for launch");

    faultyItemsVisible;
    pilotStatus;
    copilotStatus;

        if (fuelLevel.value < 10000) {
            launchStatusColorRed;
            shuttleNotReadyForLaunch;
            notEnoughFuel;
        }
        // } else {
        //     launchStatusColorGreen;
        //     shuttleReadyForLaunch;
        // }

        if (cargoLevel.value > 10000) {
            launchStatusColorRed;
            shuttleNotReadyForLaunch;
            return (document.getElementById("cargoStatus").innerHTML =
              "Cargo mass too heavy for launch");
        }
        // // } else {
        // //     launchStatusColorGreen;
        // //     shuttleReadyForLaunch;
        // // }

        if (fuelLevel.value > 10000 && cargoLevel.value < 10000) {
          return (document.getElementById(
      "launchStatus"
    ).style.color = "green"), (document.getElementById(
        "launchStatus"
      ).innerHTML = "Shuttle is ready for launch"), (document.getElementById("fuelStatus").innerHTML =
        "Fuel level high enough for launch");
        //     shuttleReadyForLaunch;
        }






    // faultyItemsVisible;

    // this.list.innerHTML = `
    // <div id="launchStatusCheck">
    //         <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
    //     <div  id="faultyItems" data-testid="faultyItems">
    //         <ol>
    //             <li id="pilotStatus" data-testid="pilotStatus">${pilot.value} is ready for launch</li>
    //             <li id="copilotStatus" data-testid="copilotStatus">${copilot.value} is ready for launch</li>
    //             <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
    //             <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
    //         </ol>
    //     </div>
    //     </div>
    //     `;

    // if (fuelLevel.value < 10000 && cargoLevel.value < 10000) {
    //   console.log("fuel value too low");
    //   return (
    //     pilotStatus,
    //     copilotStatus,
    //     notEnoughFuel,
    //     LowEnoughMass,
    //     shuttleNotReadyForLaunch,
    //     launchStatusColorRed,
    //     faultyItemsVisible
    //   );
    // } else if (cargoLevel.value > 10000 && fuelLevel.value > 10000) {
    //   console.log("cargo value too much");
    //   return (
    //     pilotStatus,
    //     copilotStatus,
    //     enoughFuel,
    //     shuttleNotReadyForLaunch,
    //     launchStatusColorRed,
    //     tooMuchMass,
    //     faultyItemsVisible
    //   );
    // } else if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
    //   return (
    //     pilotStatus,
    //     copilotStatus,
    //     shuttleNotReadyForLaunch,
    //     launchStatusColorRed,
    //     tooMuchMass,
    //     notEnoughFuel,
    //     faultyItemsVisible
    //   );
    // } else {
    //   return (
    //     pilotStatus,
    //     copilotStatus,
    //     shuttleReadyForLaunch,
    //     launchStatusColorGreen,
    //     enoughFuel,
    //     LowEnoughMass,
    //     faultyItemsVisible
    //   );
    // }
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

// // console.log(validateInput(fuelLevel) === "Not a Number")
// console.log(validateInput(pilot.value) === "Empty"); // pass
// console.log((validateInput(pilot.value)) === "Is a Number"); //pass

// // console.log(typeof validateInput(fuelLevel.value))
// // console.log(fuelLevel.value)
// // console.log(cargoLevel.value)

// console.log(fuelLevel.value)
// console.log(validateInput(fuelLevel.value), 'fuel')

// console.log(cargoLevel.value)
// console.log(validateInput(cargoLevel.value), 'cargo')
