import '../styles/post.css'
import { faThumbsUp as like} from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as unlike } from '@fortawesome/free-regular-svg-icons'
// import { faThumbsUp as unlike } from '@fon'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { doc, setDoc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useAuthState,  } from 'react-firebase-hooks/auth'
import { auth, db } from '../config/firebase'

function Post(props) {
  const [icon, setIcon] = useState(unlike)
  const [user,] = useAuthState(auth)
  const [likers, ] = useState(props.post.likers)
  const postRef = doc(db, 'posts', props.post.id)

  if(likers.includes(user?.uid) && icon===unlike){
    setIcon(like)
  }
  useEffect(()=>{
    setIcon(unlike)

  },[user])
  const handleClick = () => {
    if (user!==null){
      if(icon===unlike){
        likers.push(user.uid)
        setDoc(postRef, {
          likers : [...likers]
        }, {merge:true})
  
      }
      else{
        likers.splice(likers.indexOf(user.uid))
        setDoc(postRef, {
          likers: [...likers]
        }, {merge:true})
      }
  
      setIcon(icon===unlike ? like : unlike)
      
    }

      
  }

  return (
    <div className='post'>
      {/* {console.log(props.post.time)} */}
      <span>{props.post.time}</span>
      
      <h1 className='title'>
        {props.post.Title}
      </h1>
      <p className='description' >
        {props.post.description}
      </p>  
      <div className='user-signature'>
        <FontAwesomeIcon id='like' onClick={handleClick} icon={icon}/>{likers.length}
        <img src={props.post.user.photoURL} referrerPolicy="no-referrer" alt=''/>
        <p>{props.post.user.name}</p>
      </div>
    </div>
  )

}

export {Post}