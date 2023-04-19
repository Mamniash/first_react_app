import React from "react";
import cl from "./MyInput.module.css"

const MyInput = ({ children, ...props }) => {
   return (
      <input className={cl.myIn} {...props} type="text" />
   );
}

export default MyInput;