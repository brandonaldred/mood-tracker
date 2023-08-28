"use client"
import { useState } from 'react'
import zero from '../assets/images/0.svg';
import one from '../assets/images/1.svg';
import two from '../assets/images/2.svg';
import three from '../assets/images/3.svg';
import four from '../assets/images/4.svg';

export default function MoodForm () {

    const date = new Date();
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

    const [selected, setSelected] = useState(3)
    const [notes, setNotes] = useState('')

    const moods = ['zero', 'one', 'two', 'three', 'four']
    const moodImages = [zero, one, two, three, four]

    //Need state to keep track of selected mood - can be integer.
    function sendForm(e) {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
        "date": date,
        "notes": notes,
        "moodRating": moods.findIndex((e) => e == selected)
        });

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("http://localhost:3000/api/moods", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    return (
        <>
            <h3>{`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`}</h3>
            <form>
                <textarea maxLength="450" placeholder="Notes:" value={notes} onChange={(e) =>{ setNotes(e.target.value) }}/>
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
                <button type="submit" onClick={ (e) => { sendForm(e) } }>Record Mood</button>
            </form>
        </>
    )
}