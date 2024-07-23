import React,{useState} from 'react';
import axios from 'axios';

function TestPoolData({sendDataToParent,sendDisplayToParent}) {

    const APP_TOKEN = process.env.REACT_APP_APP_TOKEN;

    const poolData = async () => {
        sendDisplayToParent(false);
        const response = await axios.get(
          `https://data.austintexas.gov/resource/xaxa-886r.json`,
          { headers: { "X-APP-TOKEN": APP_TOKEN } }
        );
        sendDisplayToParent(true);
        sendDataToParent(response.data);
      };
  
    return (
      <div>
        <div>
          <button 
          onClick={poolData} 
          >Test API Endpoint</button>
        </div>
      </div>
    );
  
}

export default TestPoolData;