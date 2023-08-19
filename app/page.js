import axios from 'axios';
import avatar from '../assets/images/avatar.svg';
import logo from '../assets/images/mood-tracker-logo.svg';
import icon from '../assets/images/mood-tracker-icon.svg';
import MoodForm from '../components/MoodForm';
import MoodHistory from '../components/MoodHistory';



export default function Home() {
  
  return (
    <>
    <header>
      <div className="container">
        <img className="full-width" src={logo.src} alt="Mood Tracker" />
        <img className="mobile" src={icon.src} alt="Mood Tracker" />
        <img src={avatar.src} alt="Brandon's Mood Tracker" />
      </div>
    </header>
    <main>
      <div className="container record-mood">
        <h2>Add Mood</h2>
        <MoodForm />  
      </div>
      <div className="container">
        <h2>History</h2>
        <MoodHistory />
      </div>
    </main>
    </>
  )
}
