import React, {useState} from 'react'
import PoolData from './PoolData'
import Map from './Map'

function Home() {

    const [display, setDisplay] = useState(null);
    const handleDisplayFromMap = (mapComponentDisplayValue) => {
        setDisplay(mapComponentDisplayValue)
    }
    return(
        <>
        {display ? <Map sendDisplayToHomeComponent={handleDisplayFromMap}></Map>: <> <h1>Map not open</h1></>}
    
        </>
    )
}

export default Home