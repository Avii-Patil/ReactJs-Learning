import React from 'react'
import Cards from './Cards'

const RightCards = (props) => {
    console.log(props);
    // console.log(typeof(props.userData));
    
    
    return (
        
        <div className="grid grid-cols-3 gap-3.5">
            {props.user.map( (elem,idx) => {
                return <Cards user = {elem} key={idx} num={idx}/>
            })}
        </div>
    )
}

export default RightCards