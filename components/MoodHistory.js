"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoodCard from '../components/MoodCard';

export default function MoodHistory(props) {
    const [ moods, setMoods ] = useState([]);
    const months = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        async function getMoodHistory() {
            try {
                setLoading(true)
                const data = await axios.get('/api/moods')
                const list = data.data
                const arr = list.moods
                arr.sort((a,b) => { new Date(a.date).getTime() < new Date(b.date).getTime() ? 1 : -1 })
                setMoods(arr)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                console.log(error)
            }
        }
        getMoodHistory()
    },[])

    const cards = moods.map(m => {
        const month = new Date(m.date).getMonth()
        const day = new Date(m.date).getDate()
        const year = new Date(m.date).getFullYear()
        return <MoodCard key={m.id} date={`${months[month]} ${day}, ${year}`} mood={m.moodRating} notes={m.notes} />
    })
    return (
        <div id="mood-history">
            {loading && <p>Loading...</p>}
            {cards}
        </div>
    )
}