// Variables
const formElement = document.querySelector("#vehicle-form");
// Functions
const createOptions = () => {
  const selectElement = document.querySelector("#vehicle-model-id");

  fetch("http://localhost:5000/models")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = "";
      data.forEach((item) => {
        output += `
        <option value="${item._id}">${item.name}</option>
        `;
      });
      selectElement.innerHTML += output;
    });
};
const sendVehicleToMongoDB = (e) => {
  e.preventDefault();
  const newModel = {
    model_id: e.target[0].value,
    number_plate: e.target[1].value,
    country_location: e.target[2].value,
  };
  console.log(newModel);

  fetch("http://localhost:5000/vehicles", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newModel),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
// Events

formElement
  ? document.addEventListener(`DOMContentLoaded`, createOptions)
  : null;
formElement
  ? formElement.addEventListener("submit", sendVehicleToMongoDB)
  : null;

//Exports
export default sendVehicleToMongoDB;
