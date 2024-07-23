import React,{useState} from 'react';
import TestMap from './TestMap';

function TestHome() {
    const [display, storeDisplay] = useState(false);

    const handleDisplayFromParent = (parentDisplay) => {
        storeDisplay(parentDisplay)
    }
    return (
        <>
        <TestMap sendDisplayToGrandParent={handleDisplayFromParent}></TestMap>
        {display ? <h1>True 2</h1> : <h1> False 2</h1>}
        </>
    )
}

export default TestHome;