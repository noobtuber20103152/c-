import React from 'react'

function Yellow(props) {
    return (
        <div className="container-fluid mx-0 py-2 mb-2 rounded" style={{ backgroundColor: "#ffffcc" }}>
            <p className='py-0 my-0'>{props.text}</p>
        </div>
    )
}

export default Yellow
