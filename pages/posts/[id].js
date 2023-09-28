import React from 'react'

function Home({post}) {
  return (
    <div>
      <p style={{fontSize:'2em'}}>{post?.id} {post?.title}</p>
      <p style={{fontSize:'2em'}}>{post?.body} </p>
    </div>
  )
}

export default Home

export async function getServerSideProps(context){
    let id= context.params.id
    let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    let post = await res.json()
    return {
     props:{
       post
     }
    }
 }
