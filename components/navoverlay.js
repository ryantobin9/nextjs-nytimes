import ButtonUI from './buttonui'

import styles from './navoverlay.module.scss'

export default function NavOverlay({ closeHandler}){
        return (
            <div className={styles.nav_overlay}>
                
                <ButtonUI icon="close" clickHandler={closeHandler} />
                nav overlay goes here 

            </div>

        )


}