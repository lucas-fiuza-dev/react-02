import logo from "../../assets/Logo.svg"
import plus from "../../assets/plus.svg"
import styles from "./header..module.css"
export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} />
      <form className={styles.newTaskForm}>
        <input placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <img src={plus}/>
        </button>
      </form>
    </header>
  )
}
