import { Task } from './Task'
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import { NoTask } from './NoTask'


import styles from './TaskList.module.css'

export function TaskList(){
    const [Tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')
    const [finishedTasks, setFinishedTasks] = useState([])
    const tasksLength = Tasks.length + finishedTasks.length

    function handleCreateTask(event: FormEvent){
        event.preventDefault()
        setTasks([...Tasks, newTask])
        setNewTask('')
    }

    function handleNewTask(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    function handleInvalidTask(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('Este campo é obrigatório!')
    }

    function handleFinishedTask(taskFinished: string){
        const tasksWithoutFinishedOne = Tasks.filter(task => {
            return (task !== taskFinished)
        })
        setFinishedTasks([...finishedTasks, taskFinished])
        setTasks(tasksWithoutFinishedOne)
    }
    
    function deleteTask(taskToDelete: string){
        const tasksWithoutDeleteOne = Tasks.filter(task => {
            return (task !== taskToDelete)
        })

        setTasks(tasksWithoutDeleteOne)
    }

    function deleteTaskFinished(taskFinishedToDelete: string){
        const tasksFinishedWithoutDeleteOne = finishedTasks.filter(task => {
            return (task !== taskFinishedToDelete)
        })

        setFinishedTasks(tasksFinishedWithoutDeleteOne)
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
                        onInvalid={handleInvalidTask}
                        required
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
                    <span>{tasksLength}</span>
                </div>
                <div className={styles.taskFinished}>
                    Concluidas
                    <span>{finishedTasks.length} de {tasksLength}</span> 
                </div>
            </header>
            <main className={styles.main}>
                {
                    tasksLength == 0
                    ? 
                    <NoTask/> 
                    : 
                    Tasks.map(task => {
                        return (<Task 
                            key={task}
                            content={task}
                            disabled={false}
                            onFinishedTask={handleFinishedTask}
                            onDeleteTask={deleteTask}
                            />)
                    })
                }

                {
                    finishedTasks.map(task => {
                        return (<Task 
                            key={task}
                            content={task}
                            disabled={true}
                            onDeleteFinishedTask={deleteTaskFinished}
                            />)
                    }) 
                }
            </main>
            
        </div>
    )
}