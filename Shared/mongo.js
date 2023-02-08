const {MongoClient} = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URL);

module.exports ={
    db:null,
    repo: null,
    // tags:null,
    async connect () {
        await client.connect();
        console.log("Connected to DB", process.env.MONGODB_URL);
        this.db = client.db(process.env.MONGODB_NAME);
        console.log("Database selected", process.env.MONGODB_NAME);
        this.repo = this.db.collection("repo");
        // this.tags = this.db.collection("tags");
    }
};
