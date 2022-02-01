import React from 'react'

function Links(props) {
    return (
        <div class="card" style={{ width: '100%' }}>
            <div class="card-body">
                <a href={props.link} target="_blank" class="btn btn-success stretched-link">Try code yourself</a>
            </div>
        </div>
    )
}
export default Links
