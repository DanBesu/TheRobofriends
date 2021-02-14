import React from 'react';

const Scroll = (props) => {
    // Scroll has to render what s inside (children) of it in index.js
    return (
        <div style={{overflowY: 'scroll', height: '1000px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;