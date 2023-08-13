"use client"
import Moods from '../components/Moods'

export default function MoodForm () {

    const date = new Date();
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    
    let moods = [ ]
    for (let i = 0; i < 5; i++) {
        moods.push(<Moods mood={i} key={i}/>)
    }

    return (
        <>
            <h3>{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</h3>
            <form>
                <textarea placeholder="Notes:"></textarea>
                <div className="mood-select">
                    {moods}
                </div>
                <button type="submit">Record Mood</button>
            </form>
        </>
    )
}