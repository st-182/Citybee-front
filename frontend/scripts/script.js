import nav from "./components/header.js";
import sendToMongoDB from "./components/postModels.js";

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
