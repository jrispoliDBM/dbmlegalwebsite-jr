export const mongoClient = async function () {
    console.log('Connecting to client')
    try {
        const { MongoClient } = require('mongodb');
        const { MONGODB_URI, MONGODB_DB } = process.env;
        if (!MONGODB_URI) {
            throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
        }
        if (!MONGODB_DB) {
            throw new Error('Invalid/Missing environment variable: "MONGODB_DB"');
        }
        let cached = global.mongo;

        if (!cached) {
            console.log('Caching global.mongo');
            cached = global.mongo = { conn: null, promise: null };           
        }
        if (!cached.promise) {
            const opts = {
                useNewUrlParser: true,
                useUnifiedTopology: true
            };

            cached.promise = MongoClient.connect(MONGODB_URI, opts).then((client) => {
                return {
                    client,
                    db: client.db(MONGODB_DB)
                };
            });
        }
        // cached.conn = await cached.promise;
        const { client } = await cached.promise;
        return client

    } catch (error) {
        console.log(error);
        return null
    }
};
