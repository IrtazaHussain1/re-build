import styles from "@/app/page.module.css";
import { Signin } from "@/components/signin";

export default function Page() {
  return (
    <main className={styles.main}>
      <Signin />
    </main>
  );
}
