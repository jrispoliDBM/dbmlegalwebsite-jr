import { connectToDatabase } from 'lib/mongodb';
const collectionName = 'team';
const databaseName = 'application_data';

export default async function handler(req, res) {
    try {
        switch (req.method) {
            case 'GET':
                const collection = await getData();
                res.status(200).json(collection);
            default:
                return res.status(500).json({ error: 'Invalid request method' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
    //return res.status(500).json({ error: 'Invalid request method' });
}

// export default withApiAuthRequired(async function handler(req, res) {
//     const session = await getSession(req, res);
//     try {
//         switch (req.method) {
//             case 'GET':
//                 const collection = await getData();
//                 res.status(200).json(collection);
//             default:
//                 return res.status(500).json({ error: 'Invalid request method' });
//         }
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
//     //return res.status(500).json({ error: 'Invalid request method' });
// });

export const getData = async function () {
    console.log('GetData', collectionName, databaseName);
    const { client } = await connectToDatabase();
    const appData = await client.db(databaseName);
    const data = await appData.collection(collectionName).find().toArray();
    return data;
};
