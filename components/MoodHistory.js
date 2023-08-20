"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoodCard from '../components/MoodCard';

export default function MoodHistory() {

    const [ moods, setMoods ] = useState([]);
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];

    useEffect(() => {
        async function getMoodHistory() {
            try {
                const data = await axios.get('/api/moods')
                const list = data.data
                const arr = list.moods
                arr.sort((a,b) => { new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1 })
                setMoods(arr)
            } catch (error) { console.log(error) }
        }
        getMoodHistory()
    },[])


    return (
        <div id="mood-history">
            {moods.map(m => {
                const month = new Date(m.date).getMonth()
                const day = new Date(m.date).getDate()
                const year = new Date(m.date).getFullYear()
                return <MoodCard key={m.id} date={`${months[month]} ${day}, ${year}`} mood={m.moodRating} notes={m.notes} />
            })}
        </div>
    )
}