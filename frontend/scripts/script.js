import nav from "./components/header.js";
import sendModelToMongoDB from "./components/postModels.js";
import sendVehicleToMongoDB from "./components/postVehicles.js";
import showAllModels from "./components/viewAllModels.js";

console.log(`working`);
nav();
console.log(document.title);

// switch (document.title) {
//   case "Add Model":
//     // sendToMongoDB();
//     break;
//   default:
//     console.log(`something is wrong`);
//     break;
// }
