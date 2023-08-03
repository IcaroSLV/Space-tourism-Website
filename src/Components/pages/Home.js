import styles from './Home.module.css'
import {Link} from 'react-router-dom'
import Destination from './Destination'

function Home() {

    return(
        <div className={styles.HomeContainer}>
            <div className={styles.ContentContainer}>
                <div className={styles.description}>
                    <h3>ENTÃO VOCÊ QUER VIAJAR PARA O</h3>
                    <h1>ESPAÇO</h1>
                    <p>
                        Vamos encarar! você quer ir para o espaço,
                        você também pode ir genuinamente para
                        espaço sideral e não pairar tipo de
                        à beira dela. bem, sente-se,
                        e relaxe porque vamos dar-lhe um
                        verdadeiramente fora desta experiência mundial!
                    </p>
                </div>
                <div className={styles.button}>
                    <Link to="/Destination"><button>EXPLORAR</button></Link>
                </div>
            </div>
        </div>
    )

}

export default Home