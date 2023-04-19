import React, { useState } from "react";
import './styles/App.css'
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MyModal from "./Components/UI/MyModal/MyModal";
import MyButton from "./Components/UI/button/MyButton";
import axios from "axios";

function App() {
   const [posts, setPosts] = useState([
      { id: 1, title: 'First post', body: 'Some in first post' },
      { id: 2, title: 'Second post', body: 'Some in second post' },
      { id: 3, title: 'Third post', body: 'Some in third post' }
   ]);
   const [modal, setModal] = useState(false);

   async function fetchPosts() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
   }

   const createPost = (newPost) => {
      setPosts([...posts, newPost]);
      setModal(false);
   }

   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   return (
      <div className="app">
         <MyButton onClick={fetchPosts}>Load posts</MyButton>
         <MyButton onClick={() => setModal(true)}>Create new post</MyButton>
         <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost} />
         </MyModal>

         {posts.length
            ? <PostList remove={removePost} posts={posts} title="Posts about JS" />
            : <h2 style={{
               padding: "60px",
               fontSize: "35px",
               textAlign: "center",
               fontWeight: "700"
            }}>Posts not founded</h2>
         }
      </div>
   );
}

export default App;
