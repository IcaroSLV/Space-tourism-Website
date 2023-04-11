import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import Destination from './Destination'

function Home() {

    return(
        <div className={styles.HomeContainer}>
            <div className={styles.ContentContainer}>
                <div className={styles.description}>
                    <h3>SO, YOU WANT TO TRAVEL TO </h3>
                    <h1>SPACE</h1>
                    <p>
                        Let's face it; you want to go space, 
                        you migth as well genuinely go to 
                        outer space and not hover kind of 
                        on the edge of it. well sit back, 
                        and relax because we'll give you a 
                        truly out of this world experience!
                    </p>
                </div>
                <div className={styles.button}>
                    <Link to="/Destination"><button>EXPLORE</button></Link>
                </div>
            </div>
        </div>
    )

}

export default Home