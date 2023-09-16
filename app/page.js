import Link from "next/link";
import logo from "../assets/moodtracker-purple.svg";
import emojis from "../assets/images/emotion.png";
import notepad from "../assets/images/pencil.png";
import graph from "../assets/images/analyzing.png";
import icon from "../assets/images/mood-tracker-icon.svg";
import styles from "./page.module.css"

export default function Index() {


    return (
        <>
            <div className={`${styles.hero} ${styles.section}`}>
                <img src={logo.src} alt="Mood Tracker" />
                <h1>Your Personal Mood Journal for a Better Tomorrow</h1>
                <p>A smarter way to understand your emotional well-being. Make data-driven decisions for a happier life.</p>
                <Link className={styles.register} href="/register">Sign Up For Free</Link>
                <Link className={styles.login} href="/login">Already have an account? <span>Sign in</span></Link>
            </div>
            <div className={styles.how}>
                <h3>How it Works</h3>
                <ul>
                    <li>
                        <img src={emojis.src} alt="Emojis" />
                        <p>Select an emoji that represents your mood.</p>
                    </li>
                    <li>
                        <img src={notepad.src} alt="Notepad" />
                        <p>Include a brief note about your day.</p>
                    </li>
                    <li>
                        <img src={graph.src} alt="Graph" />
                        <p>Gain insights on emotional trends.</p>
                    </li> 
                </ul>
            </div>
            <div className={`${styles.signup} ${styles.section}`}>
                <h2>Why Wait? Start Your Journey to Emotional Well-being Today!</h2>
                <Link className={styles.register} href="/register">Register For Free</Link>
            </div>
            <div className={`${styles.footer}`}>
                <p><img src={icon.src} alt="MoodTracker" /> &copy;</p>
                <ul>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/privacy">Privacy</Link></li>
                    <li><Link href="/terms">Terms & Conditions</Link></li>
                </ul>
            </div>
        </>
    )
}