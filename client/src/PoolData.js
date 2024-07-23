import React from "react";
import axios from 'axios'

function PoolData() {
  const APP_TOKEN = process.env.REACT_APP_APP_TOKEN;
  const config = {
    headers: {
      "X-App_Token": APP_TOKEN,
    },
  };
  const handleClick = async () => {
    const response = await axios.get(
      `https://data.austintexas.gov/resource/xaxa-886r.json`,
      { headers: { "X-APP-TOKEN": APP_TOKEN } }
    );
    console.log("response:", response.data);
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>Test API Endpoint</button>
      </div>
    </div>
  );

}

export default PoolData;
