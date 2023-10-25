import { useEffect, useState } from "react";
import Head from "next/head";

import styles from "@/styles/Home.module.css";

import Service from "@/components/Service";

export default function Home() {
  const words = ["technology", "science", "engineering", "design", "business"];
  const colors = ["green", "blue", "red", "pink", "orange", "cyan"];
  const max_slideshow = 4;

  const [word, setWord] = useState(words[0]);
  const [color, setColor] = useState(colors[0]);

  const [slide, setSlide] = useState(0);
  const [slideUses, setSlideUses] = useState(0);

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

      if (slideUses >= 2) {
        setSlideUses(0);
        if (slide === max_slideshow) {
          setSlide(0);
        } else {
          setSlide(slide + 1);
        }
      } else {
        setSlideUses(slideUses + 1);
      }
      console.log(slideUses);

      setColor(new_colors[Math.floor(Math.random() * new_colors.length)]);
    }, 1500);
    return () => clearInterval(interval);
  });

  return (
    <>
      <Head>
        {/* preload all slideshow images */}
        {[...Array(max_slideshow + 1).keys()].map((i) => (
          <link
            key={i}
            rel="preload"
            href={`/assets/team/${i}.jpeg`}
            as="image"
            type="image/jpeg"
          />
        ))}
      </Head>
      <div className={`${styles.title} ${styles[`title_img_${slide}`]}`}>
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
