import React from 'react'
import Link from 'next/link'

function Items({posts}) {
  return (
    
    <div>
       {posts &&
        posts?.map((post,i) => (
          <Link key={i} href={`/posts/${post.id}`}>
          <div key={i}>
            <p style={{fontSize:'2em'}}>{post.id} {post.title}</p>
          </div>
          </Link>
        ))}
    </div>
    
  )
}

export default Items
