"use client";
import Image from "next/image";
import Link from "next/link";
import linkedin_image from "../../../public/linkedin.png";
import twitter_image from "../../../public/twitter.png";
import github_image from "../../../public/github.png";
import whatsapp_image from "../../../public/whatsapp.png";
import profile_pic from "../../../public/logo.png";
import styles from '@/style/about.module.css'; // Import the CSS Module

export default function About() {
  const linkedinUrl = "https://www.linkedin.com/in/saher-rameez-1237622b6/";
  const githubUrl = "https://github.com/sahergul";
  const twitterUrl = "";
  const whatsappUrl = "";

  return (
    <div className={styles.container}>
      <div className={styles.maxWidth}>
        <div className={styles.aboutText}>
          <h1 className={styles.heading}>About Me</h1>
          <p>
            Hello! I’m Saher Gul, a passionate Frontend developer based in Karachi. With a keen eye for detail and a love for
            creative problem-solving, I strive to deliver innovative solutions that enhance user experiences and drive results.
            <br />
            I began my journey in 2023, discovering my passion for front-end development. Over the years, I’ve honed my skills in HTML, CSS, JavaScript, Tailwind & Next.js, allowing me to transform ideas into engaging digital experiences.
            <br />
            <span className={styles.subheading}>What I Do</span>
            <br />
            Currently, I focus on building responsive e-commerce websites. My approach combines Figma UI & UX design, ensuring that every project I undertake meets both client expectations and user needs.
            <br />
            <span className={styles.subheading}>Let’s Connect</span>
            <br />
            I believe in the power of collaboration and continuous learning. If you’re looking for a dedicated professional to bring your vision to life or simply want to connect, feel free to reach out!
            <br />
            My portfolio can be found on{" "}
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-stone-900 mx-2 font-semibold hover:no-underline"
            >
              GitHub Profile
            </Link>
            . I am grateful for the opportunities that have come my way, and I am determined to keep learning and growing in my career.
          </p>
          <div className={styles.socialLinks}>
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconContainer}>
                <Image src={linkedin_image} alt="LinkedIn Logo" width={40} height={40} />
              </div>
            </Link>
            <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconContainer}>
                <Image src={github_image} alt="GitHub Logo" width={40} height={40} />
              </div>
            </Link>
            <Link href={twitterUrl} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconContainer}>
                <Image src={twitter_image} alt="Twitter Logo" width={40} height={40} />
              </div>
            </Link>
            <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <div className={styles.iconContainer}>
                <Image src={whatsapp_image} alt="WhatsApp Logo" width={40} height={40} />
              </div>
            </Link>
          </div>
        </div>
        <div className={styles.profileImageContainer}>
          <Image src={profile_pic} alt="Profile Picture" className={styles.profileImage} width={200} height={200} />
        </div>
      </div>
    </div>
  );
}
