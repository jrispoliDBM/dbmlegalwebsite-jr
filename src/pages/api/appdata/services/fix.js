import { connectToDatabase } from 'lib/mongodb';
import { ObjectId } from 'mongodb';

const collectionName = 'services'
const databaseName = 'dbm_legal_external'


export default async function handler(req, res) {
    try {
        const result = await fix();
        res.status(200).send(result);
    } catch (error) {
        console.log('Error', error);
        res.status(500).send(error.message);
    }
};

export const fix = async function () {
    const startTime = new Date();
    let results = [];
    let data = await getData();
   
    for (const item of data) {
        // delete item.showOnMainPage
        // let result = await putData(item);
        // results.push(result);
        for (const section of item.sections) {
            if (section.checkMarkList) {
                section.items = section.checkMarkList;
                delete section.checkMarkList;
            }
        }
        let result = await putData(item);
        results.push(result);
    }
    return { elapsed: `${(new Date() - startTime) / 1000} seconds`, result: results }; // ,'Extract': extract[2300]};//,'Filtered Data': filteredData[2300]};
};

export const putData = async function (data) {
    try {
        const { client } = await connectToDatabase();
        const appData = await client.db(databaseName);
        const dataCollection = await appData.collection(collectionName);
        const id = data._id;
        delete data._id;
        const result = await dataCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: data
            }
        );
        console.log('putData result', result);
        return result;
    } catch (error) {
        console.log(error);
        return error;
    }
};

export const getData = async function () {
    console.log('GetData', collectionName, databaseName);
    const { client } = await connectToDatabase();
    const appData = await client.db(databaseName);
    const data = await appData.collection(collectionName).find().toArray();
    return data;
};
