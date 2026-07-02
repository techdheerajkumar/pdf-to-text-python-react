import {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Login from '../../services/userService'
import './LoginUser.css'
const LoginUser = () => {
     const navigate =  useNavigate();
    const [userDetails, setUserDetails] = useState({
        email:"",
        password:""
    })
    const [isValid, setIsValid] = useState(true)
    const [message, setMessage] = useState('')
    const submitHandler = async (e) => {
        e.preventDefault();

        try{
            const data = await Login.loginUser(userDetails);
            localStorage.setItem(
                "token", data.access_token
            )
            setMessage(data.message)
            setIsValid(true)
            navigate('/dashboard')
        }
        catch(err){            
            setIsValid(false)
            setMessage(err.message)
        }        
    }

    const changeHandler = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        setUserDetails((prevValue)=>({
            ...prevValue,
            [name]: value.toLowerCase()
        }))
    }



    const styles = {
        container: {
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f5f7fb',
            padding: '24px',
        },
        card: {
            width: '100%',
            maxWidth: '360px',
            padding: '32px',
            borderRadius: '12px',
            backgroundColor: '#ffffff',
            boxShadow: '0 12px 28px rgba(15, 23, 42, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
        },
        title: {
            margin: 0,
            fontSize: '24px',
            fontWeight: 700,
            color: '#101828',
            textAlign: 'center',
        },
        description: {
            margin: 0,
            fontSize: '14px',
            color: '#475467',
            textAlign: 'center',
        },
        field: {
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
        },
        label: {
            fontSize: '14px',
            color: '#344054',
        },
        input: {
            width: '100%',
            padding: '12px 14px',
            borderRadius: '10px',
            border: '1px solid #d0d5dd',
            fontSize: '14px',
            color: '#101828',
            outline: 'none',
        },
        button: {
            width: '100%',
            padding: '12px 16px',
            borderRadius: '10px',
            border: 'none',
            backgroundColor: '#2563eb',
            color: '#ffffff',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
        },
        footer: {
            marginTop: '8px',
            fontSize: '13px',
            color: '#667085',
            textAlign: 'center',
        },
        link: {
            color: '#2563eb',
            textDecoration: 'none',
        }
    }

    return (
        <>
        <div style={styles.container}>
            <form style={styles.card} onSubmit={submitHandler}>
                <div>
                    <h1 style={styles.title}>Login</h1>
                    <p style={styles.description}>Enter your email and password to access your account.</p>
                </div>
                <div style={styles.field}>
                    <label htmlFor="email" style={styles.label}>Email</label>
                    <input id="email" className={!isValid ? 'error': ''} onChange={changeHandler} type="email" name="email" placeholder="you@example.com" style={styles.input} />
                </div>
                <div style={styles.field}>
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input id="password" className={!isValid ? 'error': ''} onChange={changeHandler} type="password" name="password" placeholder="********" style={styles.input} />
                </div>
                <button type="submit" style={styles.button}>Sign in</button>
                {message ? <p className='error-msg'>{message}</p>:''}
                <p style={styles.footer}>
                    Don't have an account? <Link to="/register" style={styles.link} element="">Sign up</Link>
                </p>
            </form>
        </div>
        
        </>
    )
}

export default LoginUser