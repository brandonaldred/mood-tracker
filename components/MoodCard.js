"use client"
import { useState } from 'react'
import zero from '../assets/images/0.svg';
import one from '../assets/images/1.svg';
import two from '../assets/images/2.svg';
import three from '../assets/images/3.svg';
import four from '../assets/images/4.svg';
import plus from '../assets/images/plus-icon.svg';
import minus from '../assets/images/minus-icon.svg';

export default function MoodCard (props) {
  const [ open, setOpen ] = useState(false);
  const moods = ['zero', 'one', 'two', 'three', 'four']
  const moodImages = [zero, one, two, three, four]
    return (
        <div>
          <div className="mood-card">
            <h3>{props.date}</h3>
            <img className="mood-img" src={moodImages[props.mood].src} alt={`Mood: ${moods[props.mood]}`}  />
            <p className={`mood-notes ${ open ? 'notes-open' : 'notes-closed' }`}>
              {props.notes}
            </p>
            <img src={open ? minus.src : plus.src}
              alt={`Open ${props.date} Mood`}
              onClick={() => { setOpen(!open); } }
              />
          </div>
        </div>
    )
}