"use client"
import { useState } from 'react'
import zero from '../assets/images/0.svg';
import one from '../assets/images/1.svg';
import two from '../assets/images/2.svg';
import three from '../assets/images/3.svg';
import four from '../assets/images/4.svg';
import axios from 'axios'

export default function MoodForm () {

    const date = new Date();
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    const [notes, setNotes] = useState("")
    const [selected, setSelected] = useState(3)
    
    const moods = ['zero', 'one', 'two', 'three', 'four']
    const moodImages = [zero, one, two, three, four]

    //Need state to keep track of selected mood - can be integer.
    function handleClick(e) {
        e.preventDefault();

        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const raw = JSON.stringify({
            "date": date,
            "moodRating": selected,
            "notes": notes
          });
          
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
        //axios.post('/api/moods', requestOptions)
        console.log(requestOptions)
    }

    return (
        <>
            <h3>{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</h3>
            <form method="POST">
                <textarea maxLength="450" placeholder="Notes:" onChange={(e) => setNotes(e.target.value)} />
                <div className="mood-select">
                    {moods.map((mood, index) => {
                        return (
                            <div key={index} className={ selected === mood ? 'mood-selected' : '' }>
                                <label htmlFor="mood">
                                    <img src={moodImages[index].src} alt={`Mood: ${mood}`} />
                                </label>
                                <input type="radio" name="mood" id={mood} value={mood} checked={selected === mood} onChange={(e) => {setSelected(e.target.value)}}/>
                            </div>
                        )
                    })}
                </div>
                <button type="submit" onClick={(e) => {handleClick(e)}}>Record Mood</button>
            </form>
        </>
    )
}