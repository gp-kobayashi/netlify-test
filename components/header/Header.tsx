import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1>
          <Link className={styles.logo} href="/">
            testing site
          </Link>
        </h1>

        <nav>
          <div className={styles.navList}>
            <Link className={styles.link} href="/">
              Home
            </Link>
            <Link className={styles.link} href="/about">
              About
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
