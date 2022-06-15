import { Header } from './components/Header'

import styles from './App.module.css'
import { TaskList } from './components/TaskList'


export function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <TaskList />
    </div>
  )
}
