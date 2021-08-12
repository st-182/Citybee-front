//Variables
//-taking existing elements
const header = document.querySelector(`header`);
const nav = () => {
  header.innerHTML = `

    <nav class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="./home.html" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="./addModel.html" class="nav-link">Add Model</a></li>
        <li class="nav-item"><a href="./addVehicle.html" class="nav-link">Add Vehicle</a></li>
        <li class="nav-item"><a href="./viewModel.html" class="nav-link">View Model</a></li>
        <li class="nav-item"><a href="./viewVehicle.html" class="nav-link">View Vehicle</a></li>
        <li class="nav-item"><a href="./about.html" class="nav-link">About</a></li>
      </ul>
    </nav>
  
`;
  console.log(`too`);
};

export default nav;
