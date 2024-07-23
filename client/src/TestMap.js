import React,{useState} from 'react';
import TestPoolData from './TestPoolData';

function TestMap({sendDisplayToGrandParent}) {

    const [poolData,storePoolData] = useState(null);
    const [display, storeDisplay] = useState(null)

    //Grabbing props from TestPoolData
    const handleDataFromChild = (childData) => {
        storePoolData(childData)
        //Set prop to be send to Grand parent to true
        sendDisplayToGrandParent(true)
    }
    const handleDisplayFromChild = (childDisplay) => {
        storeDisplay(childDisplay)
    }

    return (
        <>
        <TestPoolData sendDataToParent={handleDataFromChild} sendDisplayToParent={handleDisplayFromChild} sendDisplayToGrandParent={handleDataFromChild}></TestPoolData>
        {display ? <h1>true</h1> : <h1>false</h1>}
        </>
    )
}

export default TestMap;