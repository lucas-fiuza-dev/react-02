import { FormEvent, useState } from "react"

import logo from "../../assets/Logo.svg"
import plus from "../../assets/plus.svg"
import styles from "./header..module.css"
interface Props {
  onAddTask: (taskTitle: string) => void
}
export function Header({ onAddTask }: Props) {
  const [title, setTitle] = useState("")
  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onAddTask(title)
    setTitle("")
  }
  function onChangeTitle(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  return (
    <header className={styles.header}>
      <img src={logo} />
      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input
          placeholder="Adicione uma nova tarefa"
          onChange={onChangeTitle}
          value={title}
        />
        <button>
          Criar
          <img src={plus} />
        </button>
      </form>
    </header>
  )
}
