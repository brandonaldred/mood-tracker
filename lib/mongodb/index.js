import { MongoClient } from 'mongodb'

const URI = process.env.MONGODB_URI
const options = {}

if (!URI) throw new Error('MONGODB_URI is not defined')

let client = new MongoClient(URI, options)
let clientPromise

if (process.env.NODE_ENV !== 'production') {
    if(!global._mongoClientPromise) {
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
} else {
    clientPromise = client.connect()
}

export default clientPromise