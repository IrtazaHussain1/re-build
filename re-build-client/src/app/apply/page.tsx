import styles from "@/app/page.module.css";
import { ApplyJob } from "@/components/apply-job";

export default function Page() {
  return (
    <main className={styles.main}>
      <ApplyJob />
    </main>
  );
}
