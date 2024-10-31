"use client";
import Image from "next/image";
import html_image from "@/app/skills/img/html.png";
import css_image from "@/app/skills/img/css.png";
import javaScript from "@/app/skills/img/javascript.png";
import typescript_image from "@/app/skills/img/typescript.png";
import office from "@/app/skills/img/office.jpeg";
import canva from "@/app/skills/img/canva.png";
import next from "/public/next.svg";
import styles from '../../style/skills.module.css';

export default function Skills() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>What Can I Do</h2>
      </div>
      <div className={styles.grid}>
        {[
          { src: html_image, label: "HTML", percent: 98 },
          { src: css_image, label: "CSS", percent: 92 },
          { src: javaScript, label: "JavaScript", percent: 72 },
          { src: typescript_image, label: "TypeScript", percent: 83 },
          { src: office, label: "Ms Office", percent: 99 },
          { src: next, label: "Next.js", percent: 62 },
          { src: canva, label: "Canva", percent: 79 },
        ].map((skill, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.percentage}>{skill.percent}%</div>
            <Image
              src={skill.src}
              alt={`${skill.label} Logo`}
              className={styles.icon}
              decoding="async"
              loading="lazy"
            />
            <h3 className={styles.skillName}>{skill.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
