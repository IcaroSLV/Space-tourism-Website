import styles from './Footer.module.css'

import {BsInstagram, BsLinkedin, BsGithub} from 'react-icons/bs'

function Footer() {
    return(
    <div className={styles.Footer}>
        <div className={styles.title}> &copy; Paulo Ícaro</div>
    </div>
    )
}

export default Footer