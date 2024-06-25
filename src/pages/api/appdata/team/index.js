import { connectToDatabase } from 'lib/mongodb';
const collectionName = 'team';
const databaseName = 'application_data';

export default async function handler(req, res) {
    // avoide response limita


    try {
        switch (req.method) {
            case 'GET':
                //avoid response limit
                //res.setHeader('Content-Type', 'application/json');
                //res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
                //res.setHeader('Access-Control-Allow-Origin', '*');
                const collection = await getData();
                res.status(200).json(collection);
                break
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
    const appData = await client.db('application_data');
    console.log('Connected to appData')
    //console.log('GetData appData', appData);
    const data = await appData.collection('team').find().toArray();
    console.log('Got Data', data.length)
    if(data.length === 0) {
        console.log(data)
    }
    //console.log('GetData data', data);
    return data;
};

// export const config = {
//     api: {
//       responseLimit: false,
//     },
//   }