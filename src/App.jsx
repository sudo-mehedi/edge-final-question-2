import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [post, setPost] = useState([]);
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json()).then(res => setPost(res));

    console.log(post);


  }, []);

  return (
    <>
      <div>
        <ul>
          {!!!post ? "Loading" : post.map((perPost, idx) => {

            return <li key={idx}>{perPost.title}</li>

          })}
        </ul>
      </div>
    </>
  )
}

export default App
