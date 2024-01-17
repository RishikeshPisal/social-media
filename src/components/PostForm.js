import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { auth, db } from '../config/firebase';
//eslint-disable-next-line
import { addDoc, collection, serverTimestamp, Timestamp } from 'firebase/firestore'
import '../styles/PostForm.css'

const postSchema = yup.object().shape({
  Title: yup.string().required(),
  description: yup.string()
})


function PostForm() {
   
  const { register, handleSubmit, formState: {errors} } = useForm({resolver: yupResolver(postSchema)});

  //get a reference to the target collection
  const postRef = collection(db, 'posts')

  const navigate = useNavigate()

  const createPost = async (data) => {
    await addDoc(postRef, {
      ...data,
      user: {
        name : auth.currentUser.displayName,
        photoURL : auth.currentUser.photoURL,
        id : auth.currentUser.uid,
      },
      likers: [],
      // time : new Date().toLocaleDateString()
      time : new Date()
    })
    
    navigate('/')
  }
  
  return (

    <form onSubmit={handleSubmit(createPost)}>
      <input placeholder='Title' {...register('Title')} />
      {errors &&  errors.Title?.message}
      <br />
      <textarea placeholder='description' {...register('description')} />
      <br />
      <button type='submit' className='submitForm'> Post </button>
    </form>
    )
}

export {PostForm}