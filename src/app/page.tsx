import TodoApp from "../../pages/todo.page";
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home() {
  return (
    <main className={styles.main}>
     <TodoApp />
    </main>
  );
}
