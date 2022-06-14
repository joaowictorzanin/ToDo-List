import { Task } from './Task'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { NoTask } from './NoTask'


import styles from './TaskList.module.css'

export function TaskList(){
    const [Tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function handleCreateTask(event: FormEvent){
        event.preventDefault()
        setTasks([...Tasks, newTask])
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>){
        setNewTask(event.target.value)
        console.log(newTask)
    }
    
    return(
        <div className={styles.TaskList}>
            
            <div>
                <form className={styles.newTask} onSubmit={handleCreateTask}>
                    <input 
                        className={styles.enterTask} 
                        type="text" 
                        placeholder='Adicione uma nova tarefa' 
                        onChange={handleNewTask}
                        value={newTask}
                    />
                    <button className={styles.button} type="submit">
                        <span>Criar</span>
                        <PlusCircle size={16}/>
                    </button>
                </form>    
            </div>
            
            <header>
                <div className={styles.taskCreated}>
                    Tarefas Criadas
                    <span>0</span>
                </div>
                <div className={styles.taskFinished}>
                    Concluidas
                    <span>0 de 10</span> 
                </div>
            </header>
            <main className={styles.main}>
                {
                    Tasks.length == 0 
                    ? 
                    <NoTask/> 
                    : 
                    Tasks.map(task => {
                        return (<Task 
                            key={task}
                            content={task}
                            />)
                    })
                }
            </main>
            
        </div>
    )
}