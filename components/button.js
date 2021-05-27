import styles from './button.module.scss'
import Link from 'next/link'

export default function Button({ label, path }) {

    return (

        <Link href={path}>
        <a href="/" className={styles.btn}>
                  
            {label}
         
        </a>
        </Link>
    )
}