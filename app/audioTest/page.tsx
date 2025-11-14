"use client";
import styles from "./audioTest.module.css";
import { useEffect, useRef } from "react";

const audiotest = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }
  }, []);

  return (
    <div className={styles.container}>
      <h2>音声プレイヤー表示、再生テストページ</h2>
      <p>クイズの正解音のような音が出ます。</p>
      <p>初期音量が50%になるように設定しています。</p>
      <audio ref={audioRef} src="/sound.mp3" controls />
    </div>
  );
};
export default audiotest;
