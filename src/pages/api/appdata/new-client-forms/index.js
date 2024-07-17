import { connectToDatabase } from 'lib/mongodb';
const collectionName = 'new_client_forms';
const databaseName = 'dbm_legal_external';

export default async function handler(req, res) {
    try {
        switch (req.method) {
            case 'GET':
                //const collection = await getData();
                res.status(200).json([]);
                break;
            case 'POST':
                // console.log('putting', req.body);
                const putResult = await addData(req.body);
                return res.status(200).json(putResult);
            default:
                return res.status(500).json({ error: 'Invalid request method' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export const getData = async function () {
    console.log('GetData', collectionName, databaseName);
    const { client } = await connectToDatabase();
    const appData = await client.db(databaseName);
    console.log('Connected to ', databaseName, '; collection', collectionName);
    //console.log('GetData appData', appData);
    const data = await appData.collection(collectionName).find().toArray();
    console.log('Got Data', collectionName, data.length);
    if (data.length === 0) {
        console.log(data);
    }
    return data;
};

export const addData = async function (data) {
    try {
        const { client } = await connectToDatabase();
        const database = await client.db(databaseName);
        const thisCollection = await database.collection(collectionName);
        const result = await thisCollection.insertOne(data);
        console.log('addData result', result);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};
