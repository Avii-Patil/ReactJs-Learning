import React from 'react'
import LeftText from './LeftText'
import RightCards from './RightCards'

const Bottom = (props) => {
    console.log(props);
    
    return (
        <div className="grid grid-cols-[220px_1fr] gap-8 items-center mt-6">
            <LeftText />
            <RightCards user={props.user}/>
        </div>
    )
}

export default Bottom