const { MongoClient } = require("mongodb");

const client = new MongoClient('mongodb://localhost:27017');

const main = async ()=>{
    try {
        const connection = await client.connect();
        console.log("after connection")
        const result = await connection.db('mad9124').collection('cars').find().toArray();
        console.log('results ' ,result);
        
    } catch (error) {
        console.warn(error)
    } finally{
        client.close()
    }
}

main()