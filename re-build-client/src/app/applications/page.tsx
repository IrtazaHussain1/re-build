import styles from "@/app/page.module.css";
import { Applications } from "@/components/applications";

export default function Page() {
  return (
    <main className={styles.main}>
      <Applications />
    </main>
  );
}
