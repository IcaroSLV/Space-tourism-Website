import styles from './Technology.module.css'
import { useState, useEffect } from 'react'

import data from '../../data.json'

import launchVehicleShort from '../../img/technology/image-launch-vehicle-portrait.jpg'
import spaceCapsuleShort from '../../img/technology/image-space-capsule-portrait.jpg'
import spaceportShort from '../../img/technology/image-spaceport-portrait.jpg'

function Technology() {

    const [currentData, setCurrentData] = useState(0)
    const TechnologyImg = [launchVehicleShort, spaceportShort, spaceCapsuleShort]

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
                        <h1>{data.technology[currentData].name}</h1>
                        <p>{data.technology[currentData].description}</p>
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