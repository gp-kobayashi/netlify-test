import styles from "./about.module.css";

const about = () => {
  return (
    <div className={styles.container}>
      <h2>このサイトについて</h2>
      <p>next.jsを使用したテストサイトです。</p>
      <p>画像表示や音声再生の動作確認用に作成しました。</p>
    </div>
  );
};
export default about;
