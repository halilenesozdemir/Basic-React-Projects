import { useEffect, useState } from 'react';

export default function Test() {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);

  useEffect(() => {
    console.log('Component ilk yüklendiğinde çalışır');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
    let interval = setInterval(() => console.log('interval çalıştı'), 1000);
    return () => {
      clearInterval(interval);
      console.log('Component Destroyed');
    };
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [postId]);

  return (
    <>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <div>
        <button onClick={() => setPostId(postId => postId + 1)}>Sonraki Konu</button>
      </div>
      <hr />
      <h2>TEST</h2>
    </>
  );
}
