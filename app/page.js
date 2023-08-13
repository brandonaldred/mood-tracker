import avatar from '../assets/images/avatar.svg';
import logo from '../assets/images/mood-tracker-logo.svg';
import icon from '../assets/images/mood-tracker-icon.svg';
import MoodCard from '../components/MoodCard';
import MoodForm from '../components/MoodForm';


export default function Home() {
  const moodData = [
    {
      date: "Aug. 2, 2023",
      rating: 3,
      notes: "Spent day in meetings. Frustrated at work with what feels like busy work. Spent the whole the whole evening after work outside with Anna and Cam playing catch"
    },
    {
      date: "Aug. 3, 2023",
      rating: 3,
      notes: "Spent morning talking to kevin. Met Ryan. Went to lunch with Anna and movie after work. Was sad cam wasn’t home."
    },
    {
      date: "Aug. 4, 2023",
      rating: 1,
      notes: "Had interview with potential new boss. Guy seemed good, but it just made me feel down because a lot of what he talked about is stuff we discuss doing, but can’t act on. Then being told I made a mistake for something Jason Cox did when I was just asking questions."
    },
    {
      date: "Aug. 5, 2023",
      rating: 2,
      notes: "Was alright. Maddie stayed at the house and she just gets cam going. From taunting to encouraging bad habits.  We went to pool and swam a bit."
    },
    {
      date: "Aug. 6, 2023",
      rating: 4,
      notes: "stayed home all day for most part. Was super hot. Woke up early, got some running in, a tiny bit of coding, lots of reading and cam did good at swim. Cleaned house up. Love watching Anna and cam play,  I also love playing with cam too."
    },
    {
      date: "Aug. 7, 2023",
      rating: 2,
      notes: "Feeling overwhelmed. So much to do, no idea where to start. The real positive was the number of steps I was able to get in."
    },
    {
      date: "Aug. 8, 2023",
      rating: 3,
      notes: "Played Hot Wheels With Cam and got a new track. Started writing everything down that I want to do/need to do."
    },
    {
      date: "Aug. 9, 2023",
      rating: 2,
      notes: "Super tired and fairly unproductive day. Woke up late. Had good talk with Kevin and played with Cam that made the day better."
    },
  ]
  
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
