import React from 'react'

import './notify.css'

const Notify = ({ message }) => {
    console.log(message);
    if (message.includes(null)) return (<></>)

    return (
        <div className="notify" style={{"backgroundColor": `${message.length >= 2 ? message[1] : "green"}`}}>
            {
                message[0]
            }
        </div>
    )
}

export default Notify
