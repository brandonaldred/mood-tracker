"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import MoodCard from '../components/MoodCard';

export default function MoodHistory() {

    const [ moods, setMoods ] = useState([]);


    useEffect(() => {
        async function getMoodHistory() {
            try {
                const data = await axios.get('/api/moods')
                const list = data.data
                const arr = list.moods
                setMoods(arr)
            } catch (error) { console.log(error) }
        }
        getMoodHistory()
    },[])

    return (
        <div id="mood-history">
            {moods.map(item => {
                <MoodCard
                        key={item._id}
                        date={item.date}
                        moodRating={item.moodRating}
                        notes={item.notes}
                    />
            })}
        </div>
    )
}