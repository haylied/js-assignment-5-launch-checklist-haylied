// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");


window.addEventListener("load", function () {
  let listedPlanets;
  let faultyItems = this.document.getElementById("faultyItems");
  let pilotName = this.document.querySelector('input[name=pilotName]');
  let copilotName = this.document.querySelector('input[name=copilotName]');
  let fuelLevel = this.document.querySelector('input[name=fuelLevel]');
  let cargoMass = this.document.querySelector('input[name=cargoMass]');

  // formSubmission(this.document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
  console.log('page loaded');
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  let listedPlanetsResponse = myFetch();
  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);
      // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
      formSubmission(this.document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);
      let randomPlanet = pickPlanet(listedPlanets);
      addDestinationInfo(randomPlanet);
    });
});
