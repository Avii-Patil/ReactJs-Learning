import React from 'react'

const cards = (props) => {
    // console.log(props.data.brandLogo);
    return (
        <div className="card">
            <div className="card-header">
                <div className="logo">
                    <img src={props.data.brandLogo} alt="brand logo" />
                </div>
                <button className="save-btn">
                    Save
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>
            </div>

            <p className="company">{props.data.companyName} <span>{props.data.datePosted}</span></p>
            <h2 className="job-title">{props.data.post}</h2>

            <div className="tags">
                <span className="tag">{props.data.tag1}</span>
                <span className="tag">{props.data.tag2}</span>
            </div>

            <div className="card-footer">
                <div>
                    <p className="salary">{props.data.pay}</p>
                    <p className="location">{props.data.location}</p>
                </div>
                <button className="apply-btn">Apply now</button>
            </div>
        </div>
    )
}

export default cards