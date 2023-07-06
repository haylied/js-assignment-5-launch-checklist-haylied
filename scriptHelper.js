// Write your helper functions here!
 require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  
    // let missionTarget =  document.getElementById("missionTarget").innerHTML = ` <h2>Mission Destination</h2>
    // <ol>
    //     <li>Name: ${name}</li>
    //     <li>Diameter: ${diameter} </li>
    //     <li>Star: ${star}</li>
    //     <li>Distance from Earth:${distance} </li>
    //     <li>Number of Moons: ${moons} </li>
    // </ol>
    // <img src="${imageUrl}">`

    // return missionTarget;
}

function validateInput(testInput) {

        if (testInput === '') {
            return "Empty";
        } else if (testInput === Number) {
            return "Is a Number";
        } else if (isNaN(testInput) === true) {
            return "Not a Number";
        // } else if (testInput === Number) {
        //     return "Is a Number";
        }
// (isNaN(testInput) === true)
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    console.log('1')
    console.log(pilot);
    let form = document.getElementById("launchForm");

    form.addEventListener("submit", function (event) {
        console.log('2')

        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            console.log(pilot.value);
            console.log(pilot);
            console.log('empty');
            alert('Make sure to enter valid information for each field!');
            event.preventDefault();
        // } else if(validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
        //     console.log('num');
        //     alert('Check on name values. No number are valid!');
        //     event.preventDefault();
        // } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
        //     console.log(validateInput(fuelLevel) === "Not a Number")
        //     console.log(fuelLevel.value)
        //     console.log(cargoLevel.value)
        //     alert('Check on number values. No characters are valid!');
        //     event.preventDefault();
        }
        // const faultItemsVisible =  document.getElementById("faultyItems").style.visibility = "visible";
        // const shuttleNotReadyForLaunch = document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
        // const h2ColorRed = document.querySelector("h2").style.color = "red";
        // const notEnoughFuel = "There is not enough fuel for this journey";
        // const tooMuchMass = document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off";
        // const shuttleReadyForLaunch = document.querySelector("h2").innerHTML = "Shuttle is ready for launch";
        // const h2ColorGreen = document.querySelector("h2").style.color = "green";

        // list.innerHTML = `
        // <div  id="faultyItems" data-testid="faultyItems">
        //     <ol>
        //         <li id="pilotStatus" data-testid="pilotStatus">${pilot} Ready</li>
        //         <li id="copilotStatus" data-testid="copilotStatus">${copilot} Ready</li>
        //         <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
        //         <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
        //     </ol>
        // </div>
        // `

        // if (fuelLevel < 10000) {
        //     faultItemsVisible;
        //     shuttleNotReadyForLaunch;
        //     h2ColorRed;
        //     notEnoughFuel;

        // } else if (cargoLevel > 10000) {
        //     faultItemsVisible;
        //     shuttleNotReadyForLaunch;
        //     h2ColorRed;
        //     tooMuchMass;

        // } else {
        //     faultItemsVisible;
        //     shuttleReadyForLaunch;
        //     h2ColorGreen;
        // }

       

    })


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json() });
       
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomNumber = Math.floor(Math.random()*6);
    return planets[randomNumber];

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;