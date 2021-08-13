// Variables
const tableModelElement = document.querySelector(`#table-model`);
const tableModelCountElement = document.querySelector(`#table-model-count`);
// Functions
const showAllModels = () => {
  fetch(`http://localhost:5000/models`)
    .then((res) => {
      if (res.status !== 200) {
        const responseOrError = document.querySelector(`#response-or-error`);
        responseOrError.textContent = `Something went wrong with models, error:${res.status})`;
        responseOrError.classList.add(`text-danger`);
        setTimeout(() => {
          responseOrError.textContent = ``;
          responseOrError.classList.remove(`text-danger`);
        }, 5000);
      }
      return res.json();
    })
    .then((data) => {
      let output = ``;
      console.log(data);
      data.forEach((item) => {
        output += `
          <tr>
            <td style="max-width:100px;overflow:hidden;">${item._id}</td>
            <td>${item.name}</td>
            <td>${item.hour_price}</td>
          </tr>
          `;
      });
      tableModelElement.innerHTML += output;
    });

  fetch(`http://localhost:5000/modelscount`)
    .then((res) => {
      if (res.status !== 200) {
        const responseOrError = document.querySelector(`#response-or-error`);
        responseOrError.textContent = `Something went wrong with modelsCount, error:${res.status})`;
        responseOrError.classList.add(`text-danger`);
        setTimeout(() => {
          responseOrError.textContent = ``;
          responseOrError.classList.remove(`text-danger`);
        }, 5000);
      }
      return res.json();
    })
    .then((data) => {
      let output = ``;
      console.log(data);
      data.forEach((item) => {
        output += `
          <tr>
            <td style="max-width:100px;overflow:hidden;">${item._id}</td>
            <td>${item.name}</td>
            <td>${item.hour_price}</td>
            <td>${item.count}</td>
          </tr>
          `;
      });
      tableModelCountElement.innerHTML += output;
    });
};
// Events

tableModelElement
  ? document.addEventListener(`DOMContentLoaded`, showAllModels)
  : null;

//Exports
export default showAllModels;
