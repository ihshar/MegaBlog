import React, {useEffect, useState} from 'react'
import PostCard from '../components/PostCard'
import Container from '../components/container/Container'
import appwriteService from '../appwrite/config'



function AllPosts() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
      appwriteService.getPosts([]).then((posts)=>{
        if(posts){                
          console.log(posts);                  //see this again
          setPosts(posts.documents)
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