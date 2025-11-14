"use client";
import styles from "./imgTest.module.css";
import Image from "next/image";
import { useState } from "react";

const ImgTest = () => {
  const images = ["/avatar1.png", "/avatar2.png"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <h2>画像表示テストページ</h2>
      <p>ボタンで画像を切り替えられます。</p>
      <div className={styles.image}>
        <Image
          src={images[currentIndex]}
          alt={`女性のアイコン ${currentIndex + 1}`}
          width={200}
          height={200}
          priority
        />
      </div>
      <div className={styles.button_container}>
        <button className={styles.button} onClick={handlePrev}>
          前へ
        </button>
        <button className={styles.button} onClick={handleNext}>
          次へ
        </button>
      </div>
    </div>
  );
};

export default ImgTest;
