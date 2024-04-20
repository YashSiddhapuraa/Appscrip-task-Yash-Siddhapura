import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Link href="/collection" className={styles.goToBtn}>
        Go to Shop Page
      </Link>
    </main>
  );
}
