import styles from './Header.module.css'
import toDoLogo from '../assets/logo.svg'

export function Header(){
    return (
        <div className={styles.header}>
            <img src={toDoLogo} alt="" />
        </div>
    )
}