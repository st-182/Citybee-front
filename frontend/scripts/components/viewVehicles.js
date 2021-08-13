// Variables
//DOM
const tableVehicleElement = document.querySelector("#table-vehicle");
//logic
const allVehiclesFromDB = [];
// Functions
const showAllVehicles = async () => {
  await fetch("http://localhost:5000/vehicles")
    .then((res) => res.json())
    .then((data) => {
      allVehiclesFromDB.push(...data);
      let output = "";
      console.log(data);
      data.forEach((item) => {
        output += `
          <tr>
            <td>${item.model_name}</td>
            <td>${item.hour_price}</td>
            <td>${item.number_plate}</td>
            <td>${item.country_location}</td>
          </tr>
          `;
      });
      tableVehicleElement.innerHTML += output;
    });
  document
    .querySelectorAll(`button`)
    .forEach((btn) => btn.addEventListener(`click`, filterByCountry));
};

const filterByCountry = (e) => {
  console.log(e.target.textContent);
  let output = `
          <thead>
            <tr>
              <th scope="col">Model name</th>
              <th scope="col">Price/hour (with PVM)</th>
              <th scope="col">Number plate</th>
              <th scope="col">Country</th>
            </tr>
          </thead>
  `;

  allVehiclesFromDB
    .filter((vehicle) =>
      e.target.textContent !== "Show All"
        ? vehicle.country_location === e.target.textContent
        : vehicle === vehicle
    )
    .forEach((vehicle) => {
      output += `
          <tr>
            <td>${vehicle.model_name}</td>
            <td>${vehicle.hour_price}</td>
            <td>${vehicle.number_plate}</td>
            <td>${vehicle.country_location}</td>
          </tr>
          `;
    });
  tableVehicleElement.innerHTML = output;
};

// Events
tableVehicleElement
  ? document.addEventListener("DOMContentLoaded", showAllVehicles)
  : null;

//Exports
export default showAllVehicles;
