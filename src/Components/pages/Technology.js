import styles from './Technology.module.css'
import { useState, useEffect } from 'react'

import launchVehicleLarge from '../../img/technology/image-launch-vehicle-landscape.jpg'
import launchVehicleShort from '../../img/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsuleLarge from '../../img/technology/image-space-capsule-landscape.jpg'
import spaceCapsuleShort from '../../img/technology/image-space-capsule-portrait.jpg'
import spaceportLarge from '../../img/technology/image-spaceport-landscape.jpg'
import spaceportShort from '../../img/technology/image-spaceport-portrait.jpg'

function Technology() {

    const [data, setData] = useState(null)
    const [currentData, setCurrentData] = useState(0)
    const TechnologyImg = [launchVehicleShort, spaceportShort, spaceCapsuleShort]

    
    // BUSCAR INFORMAÇÕES NA API
    useEffect(() => {

        const loadData = async() => {
    
        const res = await fetch("http://localhost:5000/technology")
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))
    
        setData(res)
    
        }
    
        loadData()
      }, [])


    return(
        <div className={styles.TechnologyContent}>
            <div className={styles.ContentContainer}>
                <h1><span>03</span> SPACE LAUNCH 101</h1>
                <div className={styles.technologyContainer}>
                    <div className={styles.technologyButton}>
                        <button onClick={() => setCurrentData(0)} className={currentData == 0? styles.ButtonSelect : ""}>1</button>
                        <button onClick={() => setCurrentData(1)} className={currentData == 1? styles.ButtonSelect : ""}>2</button>
                        <button onClick={() => setCurrentData(2)} className={currentData == 2? styles.ButtonSelect : ""}>3</button>
                    </div>
                    <div className={styles.TechnologyDescription}>
                        <h3>In Terminology...</h3>
                        <h1>{data && data[currentData].name}</h1>
                        <p>{data && data[currentData].description}</p>
                    </div>
                    <div className={styles.TechnologyImg}>
                        <img src={TechnologyImg[currentData]}></img>
                    </div>
                </div>
            </div>
        </div>
        )

}

export default Technology