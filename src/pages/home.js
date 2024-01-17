import { getDocs, collection, orderBy } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Post } from '../components/Post'
import { db } from '../config/firebase'

function Home() {
  const postRef = collection(db, 'posts')

  const [postList, setPostList] = useState()
  const [err, setErr] = useState()

  const getData = async () => {
    try {

      const result = await getDocs(postRef, orderBy('time'))
      setPostList(result.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
        sorter: Date.parse(doc.data().time)
      })))

      console.log(postList)

    }
    catch (err) {
      setErr("Something went Wrong")
    }
  }
  useEffect(() => {
    getData()
    // eslint-disable-next-line 
  }, [])


  return (
    <div className='feed'>
      {postList?.map((post) =>
        <Post post={post} key={post.id} />
      )}
      {err}
    </div>
  )
}

export { Home }