// Variables
const formElement = document.querySelector(`#model-form`);

// Functions
const sendModelToMongoDB = (e) => {
  e.preventDefault();

  if (e.target[0].value.length <= 50) {
  } else {
    const responseOrError = document.querySelector(`#response-or-error`);
    responseOrError.textContent = `The Make and Model Name combined can be up to 50 characters long!`;
    responseOrError.classList.add(`text-danger`);
    setTimeout(() => {
      responseOrError.textContent = ``;
      responseOrError.classList.remove(`text-danger`);
    }, 5000);
    return;
  }

  if (typeof +e.target[1].value !== `number`) {
    const responseOrError = document.querySelector(`#response-or-error`);
    responseOrError.textContent = `The price have to be a number!`;
    responseOrError.classList.add(`text-danger`);
    setTimeout(() => {
      responseOrError.textContent = ``;
      responseOrError.classList.remove(`text-danger`);
    }, 5000);
    return;
  }
  const newModel = {
    name: e.target[0].value,
    hour_price: e.target[1].value,
  };
  fetch(`http://localhost:5000/models`, {
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

formElement ? formElement.addEventListener(`submit`, sendModelToMongoDB) : null;

//Exports
export default sendModelToMongoDB;
