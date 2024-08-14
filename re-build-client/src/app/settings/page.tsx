import styles from "@/app/page.module.css";
import { Settings } from "@/components/settings";

export default function Page() {
  return (
    <main className={styles.main}>
      <Settings />
    </main>
  );
}
