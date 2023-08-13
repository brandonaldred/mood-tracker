"use client"
import { useState } from 'react'
import zero from '../assets/images/0.svg';
import one from '../assets/images/1.svg';
import two from '../assets/images/2.svg';
import three from '../assets/images/3.svg';
import four from '../assets/images/4.svg';

export default function Moods (props) {
    const moods = ['zero', 'one', 'two', 'three', 'four']
    const moodImages = [zero, one, two, three, four]
    const [selected, setSelected ] = useState(false)
    let className
    selected ? className = 'mood-selected' : '';
    console.log('rendered');
    return(
        <div onClick={() => { setSelected(!selected) } } className={ className }>
            <label for="mood"><img src={moodImages[props.mood].src} alt={`Mood: ${moods[props.mood]}`} /></label>
            <input type="radio" name="mood" id={props.mood} value={props.mood} onChange={ (e) => { console.log(e.target) }} />
        </div>
    )
}