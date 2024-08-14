import styles from "@/app/page.module.css";
import { Signup } from "@/components/signup";

export default function Page() {
  return (
    <main className={styles.main}>
      <Signup />
    </main>
  );
}
