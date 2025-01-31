// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {
  let listedPlanets;
  let faultyItems = this.document.getElementById("faultyItems");
  let pilotName = this.document.querySelector("input[name=pilotName]");
  let copilotName = this.document.querySelector("input[name=copilotName]");
  let fuelLevel = this.document.querySelector("input[name=fuelLevel]");
  let cargoMass = this.document.querySelector("input[name=cargoMass]");

  formSubmission(
    this.document,
    faultyItems,
    pilotName,
    copilotName,
    fuelLevel,
    cargoMass
  );

  // Set listedPlanetsResponse equal to the value returned by calling myFetch()

  let listedPlanetsResponse = myFetch();

  //   formSubmission(
  //     this.document,
  //     faultyItems,
  //     pilotName,
  //     copilotName,
  //     fuelLevel,
  //     cargoMass
  //   );

  listedPlanetsResponse
    .then(function (result) {
      listedPlanets = result;
      console.log(listedPlanets);
    })
    .then(function () {
      console.log(listedPlanets);

      // Below this comment call the appropriate helper functions to pick a planet fom the
      // list of planets and add that information to your destination.

      //   formSubmission(
      //     this.document,
      //     faultyItems,
      //     pilotName,
      //     copilotName,
      //     fuelLevel,
      //     cargoMass
      //   );

      let random = pickPlanet(listedPlanets);

      //   console.log(pickPlanet(listedPlanets));

      addDestinationInfo(
        this.document,
        random.name,
        random.diameter,
        random.star,
        random.distance,
        random.moons,
        random.image
      );
    });
});
