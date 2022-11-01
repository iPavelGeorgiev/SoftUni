import React from "react";

function PostAuthor(props) {
   return (
      <span>
         <small>Author:</small>
         {props.name}
      </span>
   );
}

export default PostAuthor;