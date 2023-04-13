import styles from './Crew.module.css'
import { useState, useEffect } from 'react'

import douglasImg from '../../img/crew/image-douglas-hurley.png'
import markImg from '../../img/crew/image-mark-shuttleworth.png'
import victorImg from '../../img/crew/image-victor-glover.png'
import anoushehImg from '../../img/crew/image-anousheh-ansari.png'

function Crew() {

    const [data, setData] = useState(null)
    const [currentData, setCurrentData] = useState(0)
    const CrewImg = [douglasImg, markImg, victorImg, anoushehImg]


    // BUSCAR INFORMAÇÕES NA API
    useEffect(() => {

        const loadData = async() => {
    
        const res = await fetch("http://localhost:5000/crew")
        .then(resp => resp.json())
        .then(data => data)
        .catch(err => console.log(err))
    
        setData(res)
    
        }
    
        loadData()
      }, [])


      // MUDAR A DESCRIÇÃO E IMAGEM SOZINHO
    useEffect(() => {


        const interval = setInterval(() => {
            setCurrentData(currentData => (currentData + 1) % 4)
        }, 4000)

        return () => clearInterval(interval)
    }, [])




    return(
        <div className={styles.CrewContainer}>
            <div className={styles.contentContainer}>
                <div className={styles.CrewDescription}>
                    <h1><span>02</span> MEET YOUR CREW</h1>
                    <div className={styles.CrewBio}>
                        <h3>{data && data[currentData].role}</h3>
                        <h1>{data && data[currentData].name}</h1>
                        <p>{data && data[currentData].bio}</p>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button onClick={() => setCurrentData(0)} className={currentData == 0? styles.ButtonSelect : ""}></button>
                        <button onClick={() => setCurrentData(1)} className={currentData == 1? styles.ButtonSelect : ""}></button>
                        <button onClick={() => setCurrentData(2)} className={currentData == 2? styles.ButtonSelect : ""}></button>
                        <button onClick={() => setCurrentData(3)} className={currentData == 3? styles.ButtonSelect : ""}></button>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <img src={CrewImg[currentData]} />
                </div>
            </div>
        </div>
        )

}

export default Crew