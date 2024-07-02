import axios from 'axios';
import * as dotenv from 'dotenv'
dotenv.config()


const getPoolData = async (req,res) => {

const ApiKey = process.env.API_KEY
//Recieve api's parameter
const ApiParameter = req.body.parameter

try {
    //Fetch
    const fetchApiPoolData = await axios.get('url', {parameter})
    return res.json()
} catch(e) {
    console.error(e);
}
}

export default getPoolData;

//Entities that i recieve:
//  1. Longitude and Langitude.