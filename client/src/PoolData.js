import React from "react";
import axios from 'axios'

function PoolData({sendDataToMapComponent,sendDisplayToMapComnponent}) {
  const APP_TOKEN = process.env.REACT_APP_APP_TOKEN;

  const poolData = async () => {
    sendDisplayToMapComnponent(false);
      const response = await axios.get(
        `https://data.austintexas.gov/resource/xaxa-886r.json`,
        { headers: { "X-APP-TOKEN": APP_TOKEN } }
      );
      sendDisplayToMapComnponent(true);
      sendDataToMapComponent(response.data);
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

export default PoolData;
