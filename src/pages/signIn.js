import React , { useEffect, useState } from 'react'
import { auth, provider } from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  const [isloggedIn, setIsLoggedIn] = useState(false)
  const [user,] = useAuthState(auth)
  const navigate = useNavigate(); 

  useEffect(() => {
    if (user)
      navigate('/')
  
      // eslint-disable-next-line
  },[user])
  

  const signIn = async () => {
    await signInWithPopup(auth, provider)
    setIsLoggedIn(true)
      navigate('/')
  }

  return (
    <div>
      {isloggedIn && 
      <>
        <h2>Logged In</h2>
        <p>Redirecting</p>
      </>
      }
      {!isloggedIn && 
      <>
        <p>Please Sign-up using google</p>
        <button onClick={signIn}> Login </button>
      </>
      }
    </div>
  )
}

