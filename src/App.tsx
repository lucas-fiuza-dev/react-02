import { useState } from "react"
import { Header } from "./components/Header"
import { Tasks } from "./components/tasks"
export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}
function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: "teste",
      title: "teste",
      isCompleted: true,
    },
    {
      id: "tes",
      title: "teste 2",
      isCompleted: false,
    },
  ])
  function addTasks(taskTitle: string) {
    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ])
  }
  function deleteTaskById(taskId: string) {
    const newTasks = tasks.filter((task) => task.id !==taskId)
    setTasks(newTasks)
  }
  return (
    <>
      <Header onAddTask={addTasks} />
      <Tasks tasks={tasks} onDelete={deleteTaskById}/>
    </>
  )
}
export default App
