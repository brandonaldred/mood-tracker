"use client"
import { useState } from "react"
import axios from 'axios'
import logo from '../../assets/moodtracker-purple.svg'
import styles from './page.module.css'
import Link from 'next/link'
import { signIn } from "next-auth/react"
import { useRouter } from 'next/navigation'

export default function Register() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const router = useRouter();

    const login = async (e) => {
        console.log('clicked')
        e.preventDefault()
        try {
            const res = await signIn('credentials', {
                username, password, redirect: false
            })

            if (res.error) {
                console.log(res.error)
            }
            router.replace(`/${username}`)
        } catch (err) { console.log(err) }
        
    }

    return (
        <div className={styles['account-form']}>
            <Link href="/"><img className={styles['account-logo']} src={logo.src} alt="Mood Tracker" /></Link>
            <p>A smarter way to understand your emotional well-being.</p>
            <h3>Login</h3>
            <form onSubmit={ (e) => { login(e) } }>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="User Name" onChange={(e) => {setUsername(e.target.value)}} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={ (e) => {login(e)} } type="submit">Login</button>
            </form>
            <p>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</p>
            <Link href="/register"><span>Don't have an account?</span> Register for free</Link>
        </div>
    )
}