import { useEffect, useState } from "react";

import styles from "@/styles/Home.module.css";

import Service from "@/components/Service";

export default function Home() {
  const words = ["technology", "science", "engineering", "design", "business"];
  const colors = ["green", "blue", "red", "pink", "orange", "cyan"];

  const [word, setWord] = useState(words[0]);
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    const current_color = color;
    const new_colors = colors.filter((c) => c !== current_color);

    const interval = setInterval(() => {
      const index = words.indexOf(word);
      if (index === words.length - 1) {
        setWord(words[0]);
      } else {
        setWord(words[index + 1]);
      }
      setColor(new_colors[Math.floor(Math.random() * new_colors.length)]);
    }, 1500);
    return () => clearInterval(interval);
  });

  return (
    <>
      <div className={styles.title}>
        <div className={styles.title__text}>
          Math is the foundation of{" "}
          <span
            className={`${styles.title__text_dyn} ${
              styles[`title__text_dyn_` + color]
            }`}
          >
            {word}
          </span>
          .
        </div>
        <div className={styles.title__subtitle}>
          The Hockinson Math Team applies mathematics to solve real-world
          problems.
        </div>
      </div>

      <div className={styles.services}>
        <h2 className={styles.services__title}>Our works</h2>

        <div className={styles.services__list}>
          <Service id="archive" />
          <Service id="latex_template" />
        </div>
      </div>
    </>
  );
}
