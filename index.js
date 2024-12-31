const express = require('express');
const cors = require ('cors');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 4000;
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


app.use(cors());
app.use(express.json());



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.4mmlf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri);
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
}
});

async function run() {
try {
    // Connect the client to the server	(optional starting in v4.7)
    // Send a ping to confirm a successful connection
  

    const celestoraCollection = client.db('pastFinderDB').collection('celestora')
    
    const likedCelestoraCollection = client.db('pastFinderDB').collection('likedCelestora');

}

    // data fetch with search and email

    // app.get('/celestora', async (req, res) => {
    //     const email = req.query.email;
    //     const search = req.query.search || ""; 
    
    //     const query = {};
    
    //     // Filter by email if provided
    //     if (email) {
    //         query.userEmail = email;
    //     }
    
    //     // Add regex-based search filter if search term is provided
    //     if (search) {
    //         query.name = { $regex: search, $options: "i" }; // Fixed here
    //     }
    
    //     const limit = parseInt(req.query.limit) || 0; 
    //     const cursor = celestoraCollection.find(query).sort({ likeCount: -1 }).limit(limit);
    //     const result = await cursor.toArray();
    //     res.send(result);
    // });
    
    // app.get('/celestoras', async (req, res) => {
    //     const search = req.query.search || ""; 
    //     const query = {
    //         name: { $regex: search, $options: "i" },
    //     };
    //     const cursor = celestoraCollection.find(query);
    //     const result = await cursor.toArray();
    //     res.send(result);
    // });


    // Route to fetch all data
app.get('/celestoras', async (req, res) => {
    try {
        const result = await celestoraCollection.find({}).toArray(); 
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Failed to fetch all Celestora data.' });
    }
});

}