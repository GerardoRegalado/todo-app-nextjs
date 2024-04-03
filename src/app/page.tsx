import TodoApp from "../../pages/todo.page";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
     <TodoApp />
    </main>
  );
}
