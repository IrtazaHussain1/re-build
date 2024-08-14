import styles from "./page.module.css";
import { Homepage } from "@/components/homepage";

export default function Page() {
  return (
    <main className={styles.main}>
      <Homepage />
    </main>
  );
}
