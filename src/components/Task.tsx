import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface ContentProps{
    content: string;
}
export function Task({content}: ContentProps){
    return(
        <div className={styles.task}>
            <div className={styles.taskCheck}>
                <button/>
                <p>{content}</p>
            </div>
            <div className={styles.trash}>
                <Trash size={17}/>
            </div>
            
        </div>
    )
}