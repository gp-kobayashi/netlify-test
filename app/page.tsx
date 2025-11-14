import Image from "next/image";
import styles from "./Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <h2>テスト用サイトです。</h2>
        <div className={styles.pages}>
          <div>
            <Link className={styles.link} href="/imgTest">
              画像表示テストページへ
            </Link>
          </div>
          <div>
            <Link className={styles.link} href="/audioTest">
              音声再生テストページへ
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
