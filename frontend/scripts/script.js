//! Importing Components from components folder
// -creates header and is called from this file
import nav from "./components/header.js";
// -when Add Model page detected, executes POST request upon from submission (also validations)
import sendModelToMongoDB from "./components/postModels.js";
// -when Add Vehicle page detected, executes POST request upon from submission (also validations)
import sendVehicleToMongoDB from "./components/postVehicles.js";
// -fetches (GET) all models from /models and /modelscount routes
import showAllModels from "./components/viewAllModels.js";
// -fetches (GET) all models from /vehicles route
import showAllVehicles from "./components/viewVehicles.js";

nav();
