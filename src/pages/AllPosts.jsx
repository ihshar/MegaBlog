import React, {useEffect, useState} from 'react'
import PostCard from '../components/PostCard'
import Container from '../components/container/Container'
import appwriteService from '../appwrite/config'
import { useDispatch } from 'react-redux'
import { getPostsSuccess } from '../store/postSlice'


function AllPosts() {
  const [posts,setPosts] = useState([])
  const dispatch = useDispatch();

    useEffect(()=>{
      appwriteService.getPosts([]).then((posts)=>{
        if(posts){                
          // console.log(posts);                  //see this again
          console.log('Dispatching getPostsSuccess');
          setPosts(posts.documents)
          dispatch(getPostsSuccess(posts.documents))
          console.log('Dispatched getPostsSuccess');
        }
      })
    },[])

  return (
    <div className='w-full py-8 '>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post)=>(
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts