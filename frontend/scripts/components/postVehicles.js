// Variables
const formElement = document.querySelector(`#vehicle-form`);
// Functions
const createOptions = () => {
  const selectElement = document.querySelector(`#vehicle-model-id`);

  fetch(`http://localhost:5000/models`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let output = ``;
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
  //validation 1
  if (e.target[0].value === `choose model`) {
    const responseOrError = document.querySelector(`#response-or-error`);
    responseOrError.textContent = `You have to choose Model! (if there is no models - upload one first)`;
    responseOrError.classList.add(`text-danger`);
    setTimeout(() => {
      responseOrError.textContent = ``;
      responseOrError.classList.remove(`text-danger`);
    }, 5000);
    return;
  }

  if (e.target[1].value.length >= 10) {
    const responseOrError = document.querySelector(`#response-or-error`);
    responseOrError.textContent = `You have to enter correct Number Plate!`;
    responseOrError.classList.add(`text-danger`);
    setTimeout(() => {
      responseOrError.textContent = ``;
      responseOrError.classList.remove(`text-danger`);
    }, 5000);
    return;
  }

  //validation 3
  if (e.target[2].value === `choose country`) {
    const responseOrError = document.querySelector(`#response-or-error`);
    responseOrError.textContent = `You have to choose Country!`;
    responseOrError.classList.add(`text-danger`);
    setTimeout(() => {
      responseOrError.textContent = ``;
      responseOrError.classList.remove(`text-danger`);
    }, 5000);
    return;
  } else if (
    e.target[2].value === `LT` ||
    e.target[2].value === `LV` ||
    e.target[2].value === `EE`
  ) {
  } else {
    console.log(e.target[2].value);
    const responseOrError = document.querySelector(`#response-or-error`);
    responseOrError.textContent = `You have to choose Correct Country!`;
    responseOrError.classList.add(`text-danger`);
    setTimeout(() => {
      responseOrError.textContent = ``;
      responseOrError.classList.remove(`text-danger`);
    }, 5000);
    return;
  }

  const newModel = {
    model_id: e.target[0].value,
    number_plate: e.target[1].value.toUpperCase(),
    country_location: e.target[2].value,
  };

  fetch(`http://localhost:5000/vehicles`, {
    method: `POST`,
    headers: {
      "Content-Type": `application/json`,
    },
    body: JSON.stringify(newModel),
  }).then((res) => {
    if (res.status === 200) {
      const responseOrError = document.querySelector(`#response-or-error`);
      responseOrError.textContent = `Success, server received data and added to DataBase`;
      responseOrError.classList.add(`text-success`);
      setTimeout(() => {
        responseOrError.textContent = ``;
        responseOrError.classList.remove(`text-success`);
      }, 2000);
    } else {
      const responseOrError = document.querySelector(`#response-or-error`);
      responseOrError.textContent = `Server Error Code (status) ${res.status}. Please try again later or contact the system administrator.`;
      responseOrError.classList.add(`text-danger`);
      setTimeout(() => {
        responseOrError.textContent = ``;
        responseOrError.classList.remove(`text-success`);
      }, 5000);
    }
  });
};
// Events

formElement
  ? document.addEventListener(`DOMContentLoaded`, createOptions)
  : null;
formElement
  ? formElement.addEventListener(`submit`, sendVehicleToMongoDB)
  : null;

//Exports
export default sendVehicleToMongoDB;
