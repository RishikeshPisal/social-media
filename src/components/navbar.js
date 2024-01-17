
import '../styles/navStyles.css'
import { NavLink } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'
function Navbar() {
  const [user, ] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth)
  }

  const handleHover = () => {
    const imgElement = document.getElementById('sign-out')
    imgElement.style.display = 'block'

    setTimeout(()=>{
      imgElement.style.display = 'none'
    },2000)
    
  }

  return ( 
  <>
    <div className='navbar'>
      <NavLink className="navbtn" to='/'>Home</NavLink>
      { !user &&
        <NavLink className="navbtn" to='/signIn'>Sign In</NavLink>
      }
      { user && 
        <NavLink className="navbtn" to='/createPosts'>Create Post</NavLink>
      }

    </div>  
    {user && 
      <div className='userInfo'>
        <span>{user.displayName}</span>
        <img onMouseOver={handleHover} referrerPolicy="no-referrer" src={user.photoURL} alt=""/>
        <button id="sign-out" onClick={handleSignOut}>SignOut</button>
      </div>
      
    }


  </>
  )
  }

export {Navbar}