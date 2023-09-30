import styles from "./task.module.css"
export function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p> arroz e muito bom humm que dlc</p>
      <button>apagar</button>
    </div>
  )
}
