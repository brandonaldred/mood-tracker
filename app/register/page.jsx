"use client"
import { useState } from "react";
import axios from 'axios';
import logo from '../../assets/moodtracker-purple.svg';
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Register() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();

    function login(e) {
        e.preventDefault()
        try {
            axios.post('/api/register', {
                first_name: firstName,
                last_name: lastName,
                email_address: email,
                username: username,
                password: password,
            })
            router.push(`/${username}`)
        } catch (err) { console.log(err) }
        
    }

    return (
        <div className={styles['account-form']}>
            <Link href="/"><img className={styles['account-logo']} src={logo.src} alt="Mood Tracker" /></Link>
            <p>A smarter way to understand your emotional well-being.</p>
            <div className={styles.register}>
                <h3>Register</h3>
            </div>
            <form>
                <label htmlFor="first-name">Please Enter First Name</label>
                <input data-name="test" type="text" id="first-name" placeholder="First Name" onChange={(e) => {setFirstName(e.target.value)}} />
                <label htmlFor="last-name">Please Enter Last Name</label>
                <input type="text" id="last-name" placeholder="Last Name" onChange={(e) => {setLastName(e.target.value)}} />
                <label htmlFor="username">Please Create A Username</label>
                <input type="text" id="username" placeholder="User Name" onChange={(e) => {setUsername(e.target.value)}} />
                <label htmlFor="email">Please Enter Email Address</label>
                <input type="email" id="email" placeholder="Email Address" onChange={(e) => {setEmail(e.target.value)}} />
                <label htmlFor="password">Please Create A Password</label>
                <input type="password" id="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={ (e) => {login(e)} } type="submit">Create Account</button>
            </form>
            <p>By creating an account, you are agreeing to our Terms of Service and Privacy Policy.</p>
            <Link href="/login"><span>Already have an account?</span> Sign in</Link>
        </div>
    )
}