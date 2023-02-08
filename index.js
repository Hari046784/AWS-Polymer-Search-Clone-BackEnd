//Importing the dotenv module
require("dotenv").config();

//Importing the express module
const express = require("express");

//Importing the cors
const cors = require('cors');
const mongo = require("./Shared/mongo");

//Initializing the express
const app = express();

// Importing the routes
const repoRoutes = require("./Routes/repo.routes");
const tagsRoutes = require("./Routes/tags.routes");

(async () => {

    try{
        await mongo.connect()

        // Calling the express.json() method for parsing and call cors
        app.use(cors());
        app.use(express.json());

        //Adding the custom middleware
        app.use("/api/repo", repoRoutes);
        app.use("/api/tags", tagsRoutes);

        //Testing
        app.get("/", (req, res, next) => {
            res.send("Welcome to AWS Polymer Search✨")
        });

        //Initializing the port number
        const PORT = process.env.PORT || 8080;

        // Listening to the port
        app.listen(PORT, () => {
            console.log(`Application is running on PORT ${PORT}`);
        });
    } catch (error) {
        console.log("Error in connecting to Db",error);
    }
})();

    











