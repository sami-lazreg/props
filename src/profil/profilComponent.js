import React from 'react'
import PropTypes from "prop-types";
const Profile=(props)=>{
    
    
    return(
        <div >
            
            <div style={{textAlign:"center"}}>{props.children}</div>
            <h1 style={{color:"white"}}>{props.fullName}</h1>
           
            <p style={{color:"white"}}>{props.bio}</p>
            <h1 style={{color:"white"}}>{props.profession}</h1>
            <button onClick={()=>props.ar(props.fullName)}>click</button>
        </div>
    );
    
}
Profile.defaultProps = {
    fullName:"anonymous"
}
Profile.propTypes = {
    fullName: PropTypes.string.isRequired
}

    
export default Profile