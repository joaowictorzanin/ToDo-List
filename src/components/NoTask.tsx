import styles from './NoTask.module.css'
import clipboard from '../assets/clipboard.svg'

export function NoTask(){
    return(
        <div className={styles.main}>
            <img src={clipboard} alt="" />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}