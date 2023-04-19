import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const PostList = ({ remove, posts, title }) => {
   return (
      <div>
         <h1 style={{
            textAlign: "center",
            fontSize: "26px",
            fontWeight: "700"
         }}>
            {title}
         </h1>
         <TransitionGroup>
            {posts.map((post, index) =>
               <CSSTransition
                  key={post.id}
                  timeout={500}
                  classNames="post"
               >
                  <PostItem remove={remove} number={index + 1} post={post} />
               </CSSTransition>
            )}
         </TransitionGroup>

      </div>
   );
}

export default PostList;