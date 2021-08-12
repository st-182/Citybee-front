// Variables
const formElement = document.querySelector("#model-form");
// Functions
const sendModelToMongoDB = (e) => {
  e.preventDefault();
  const newModel = {
    name: e.target[0].value,
    hour_price: e.target[1].value,
  };
  console.log(newModel);
  fetch("http://localhost:5000/models", {
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

formElement ? formElement.addEventListener("submit", sendModelToMongoDB) : null;

//Exports
export default sendModelToMongoDB;
