//Variables
//-taking existing elements
const header = document.querySelector(`header`);
const nav = () => {
  header.innerHTML = `

    <nav class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="./home.html" class="nav-link ${
          document.title === "Home" ? "active" : ""
        }" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="./addModel.html" class="nav-link ${
          document.title === "Add Model" ? "active" : ""
        }">Add Model</a></li>
        <li class="nav-item"><a href="./addVehicle.html" class="nav-link ${
          document.title === "Add Vehicle" ? "active" : ""
        }">Add Vehicle</a></li>
        <li class="nav-item"><a href="./viewModels.html" class="nav-link ${
          document.title === "View Models" ? "active" : ""
        }">View Models</a></li>
        <li class="nav-item"><a href="./viewVehicles.html" class="nav-link ${
          document.title === "View Vehicles" ? "active" : ""
        }">View Vehicles</a></li>
        <li class="nav-item"><a href="./about.html" class="nav-link ${
          document.title === "About" ? "active" : ""
        }">About</a></li>
      </ul>
    </nav>
  
`;
};

export default nav;
