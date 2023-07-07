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
        } else if (isNaN(testInput) === false) {
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
    console.log(document.querySelector('input[name=pilotName]'));


    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function (event) {

        console.log('Form-')


        if (validateInput(pilot.value) === "Empty" || validateInput(copilot.value) === "Empty" || 
        validateInput(fuelLevel.value) === "Empty" || validateInput(cargoLevel.value) === "Empty") {

            alert('Make sure to enter valid information for each field!');
            event.preventDefault();

        } else if((validateInput(pilot.value)) === "Is a Number" || (validateInput(copilot.value)) === "Is a Number") {

            alert('Check on name values. No number are valid!');
            event.preventDefault();

        } else if (validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoLevel.value) === "Not a Number") {

            // console.log(validateInput(fuelLevel) === "Not a Number")
            // console.log(validateInput(pilot.value) === "Empty"); // pass
            // console.log((validateInput(pilot.value)) === "Is a Number"); //pass

            // // console.log(typeof validateInput(fuelLevel.value))
            // // console.log(fuelLevel.value)
            // // console.log(cargoLevel.value)

            // console.log(fuelLevel.value)
            // console.log(validateInput(fuelLevel.value), 'fuel')

            // console.log(cargoLevel.value)
            // console.log(validateInput(cargoLevel.value), 'cargo')
         



            alert('Check on number values. No characters are valid!');
            event.preventDefault();

        } 


        // const faultyItemsVisible =  list.style.visibility = 'visible';
        const faultyItemsVisible =  document.getElementById("faultyItems").style.visibility = 'visible';
        const shuttleNotReadyForLaunch = document.querySelector("h2").innerHTML = "Shuttle not ready for launch";
        const h2ColorRed = document.querySelector("h2").style.color = "red";
        // const notEnoughFuel =  document.getElementById("fuelStatus").innerHTML ="There is not enough fuel for this journey";
        const tooMuchMass = document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
        const shuttleReadyForLaunch = document.querySelector("h2").innerHTML = "Shuttle is ready for launch";
        const h2ColorGreen = document.querySelector("h2").style.color = "green";
        const enoughFuel = document.getElementById("fuelStatus").innerHTML ="Fuel level high enough for launch";


        list.innerHTML = `
        <div  id="faultyItems" data-testid="faultyItems">
            <ol>
                <li id="pilotStatus" data-testid="pilotStatus">${pilot.value} is ready for launch</li>
                <li id="copilotStatus" data-testid="copilotStatus">${copilot.value} is ready for launch</li>
                <li id="fuelStatus" data-testid="fuelStatus">Fuel level too low for launch</li>
                <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
            </ol>
        </div>
        `

       
        if (fuelLevel.value < 10000) {

            shuttleNotReadyForLaunch;
            h2ColorRed;
            faultyItemsVisible;

            console.log('fuel value too low')

        } else if (cargoLevel.value > 10000) {
            
            shuttleNotReadyForLaunch;
            h2ColorRed;
            tooMuchMass;
            faultyItemsVisible;

            console.log('cargo value too much')

        } else if (fuelLevel.value < 10000 && cargoLevel.value > 10000) {
            
            shuttleNotReadyForLaunch;
            h2ColorRed;
            tooMuchMass;
            faultyItemsVisible;
            
        } else {
            
            shuttleReadyForLaunch;
            h2ColorGreen;
            enoughFuel;
            faultyItemsVisible;
        }

       

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