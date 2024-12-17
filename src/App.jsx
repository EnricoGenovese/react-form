import { useState } from 'react'

import Header from './components/Header'
import Post from './components/Post'
import posts from './data/posts'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      {posts.map((post, id) =>
        <Post key={id}
          title={post.title}
          content={post.content} />)}
    </>
  )
}

export default App
