import styles from './Destination.module.css'

import {useState} from 'react'

import data from '../../data.json'

import moonImg from '../../img/destination/image-moon.png'
import europaImg from '../../img/destination/image-europa.png'
import marsImg from '../../img/destination/image-mars.png'
import titanImg from '../../img/destination/image-titan.png'


function Destination() {

    
    const [currentData, setCurrentData] = useState(0)
    const destinationImg = [moonImg, marsImg, europaImg, titanImg]

      

    return(
        <div className={styles.DestinationContainer}>
           <div className={styles.ContentContainer}>
            <h1><span>01</span> PICK YOUR DESINATION</h1>
            <div className={styles.destinationsection}>
                <div className={styles.imgContent}>
                    <img src={destinationImg[currentData]}/>
                </div>
                <div className={styles.destinationContent}>
                    <div className={styles.ButtonContainer}>
                        <button onClick={() => setCurrentData(0)} className={currentData === 0? styles.Select : ""} >MOON</button>
                        <button onClick={() => setCurrentData(1)} className={currentData === 1? styles.Select : ""} >MARS</button>
                        <button onClick={() => setCurrentData(2)} className={currentData === 2? styles.Select : ""}>EUROPA</button>
                        <button onClick={() => setCurrentData(3)} className={currentData === 3? styles.Select : ""}>TITAN</button>
                    </div>
                    <div className={styles.descriptionSection}>
                        <h1>{(data.destinations[currentData].name).toUpperCase()}</h1>
                        <p>{data.destinations[currentData].description}</p>
                    </div>
                    <div className={styles.travelSection}>
                        <div>
                            <h3>AVG. DISTANCE</h3>
                            <p>{(data.destinations[currentData].distance).toUpperCase()}</p>
                        </div>
                        <div>
                            <h3>AVG. TRAVEL TIME</h3>
                            <p>{data.destinations[currentData].travel.toUpperCase()}</p>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    )

}

export default Destination