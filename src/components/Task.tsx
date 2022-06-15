import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface ContentProps{
    content: string;
    disabled: boolean
    onDeleteTask?: (task: string) => void;
    onFinishedTask?: (finishedTask: string) => void;
    onDeleteFinishedTask?: (deleteFinishedTask: string) => void;
}
export function Task({content, onDeleteTask, onFinishedTask, onDeleteFinishedTask, disabled}: ContentProps){

    function handleDeleteTask(){
        if (disabled == true){
            onDeleteFinishedTask?.(content)
        } else {
            onDeleteTask?.(content)
        }  
    }

    function handleFinishTask(){
        onFinishedTask?.(content) 
    }

    return(
        <div className={styles.task}>
            <div className={disabled == false ? styles.taskCheck : styles.taskCheckDisabled}>
                <button onClick={handleFinishTask} disabled={disabled}/>
                <p>{content}</p>
            </div>
            <div className={styles.trash}>
                <Trash size={17} onClick={handleDeleteTask}/>
            </div>
            
        </div>
    )
}