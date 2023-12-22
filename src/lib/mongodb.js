import { MongoClient } from 'mongodb';
const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

if (!MONGODB_DB) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_DB"');
}

let cached  = global.mongo;

if (!cached) {
    console.log('Creating cached connection.')
    cached = global.mongo = { conn: null, promise: null };
}

export async function connectToDatabase() {
    try {
    if (cached.conn) {
        console.log('Connected.  Using cached database connection');
        return cached.conn;
    }

    if (!cached.promise) {
        console.log('Not cached promise');
        const opts = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
            console.log('Created cached.promise.');
            return {
                client,
                db: client.db(MONGODB_DB),
            };
        });
    }
    cached.conn = await cached.promise;
    return cached.conn;
    } catch (error) {
        console.log('Could not access session or connect to database.');
        console.log(error);
    } finally {
        // console.log('Connected');
    }
}




// const uri = process.env.MONGODB_URI;
// const options = {};

// let client = null;
// let clientPromise = null;

// if (process.env.NODE_ENV === 'development') {
//   // In development mode, use a global variable so that the value
//   // is preserved across module reloads caused by HMR (Hot Module Replacement).
//   let globalWithMongo = {};

//   if (!globalWithMongo._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     globalWithMongo._mongoClientPromise = client.connect();
//   }
//   clientPromise = globalWithMongo._mongoClientPromise;
// } else {
//   // In production mode, it's best to not use a global variable.
//   client = new MongoClient(uri, options);
//   clientPromise = client.connect();
// }

// // Export a module-scoped MongoClient promise. By doing this in a
// // separate module, the client can be shared across functions.
// export default clientPromise;
