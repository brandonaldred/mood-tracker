import avatar from '../assets/images/avatar.svg';
import logo from '../assets/images/mood-tracker-logo.svg';
import icon from '../assets/images/mood-tracker-icon.svg';
import MoodCard from '../components/MoodCard';
import MoodForm from '../components/MoodForm';


export default function Home() {
  
  const moods = moodData.map(((item) => {
     return (<MoodCard date={item.date} mood={item.rating} notes={item.notes} />)
    })) 
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
        <div id="mood-history">
          {moods}
        </div>
      </div>
    </main>
    </>
  )
}
