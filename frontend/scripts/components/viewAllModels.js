// Variables
const tableModelElement = document.querySelector("#table-model");
const tableModelCountElement = document.querySelector("#table-model-count");
// Functions
const showAllModels = () => {
  fetch("http://localhost:5000/models")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
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

  fetch("http://localhost:5000/modelscount")
    .then((res) => res.json())
    .then((data) => {
      let output = "";
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
  ? document.addEventListener("DOMContentLoaded", showAllModels)
  : null;

// .addEventListener("DOMContentLoaded", showAllModels)

//Exports
export default showAllModels;
