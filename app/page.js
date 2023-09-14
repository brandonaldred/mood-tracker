"use client"
import { useState } from "react"
import axios from 'axios'

export default function Index() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function login(e) {
        e.preventDefault()
        try {
            axios.post('/api/login', {
                username: username,
                password: password,
            })
        } catch (err) { console.log(err) }
        
    }

    return (
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="" value={username} onChange={(e) => {setUsername(e.target.value)}} />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            <button onClick={ (e) => {login(e)} } type="submit">Login</button>
        </form>
    )
}