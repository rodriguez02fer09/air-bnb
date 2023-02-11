import React from "react";
import "./sloganAvatar.css"


const SloganAvatar = ({name,lastName}) => {
const firstLaterName= name?.charAt(0)
const firstLaterLastName = lastName?.charAt(0)

    return( 
    <div className="navBar_logoName">
    <p>{firstLaterName}{firstLaterLastName }</p>
  </div>)
}
export default SloganAvatar;