import React from 'react'
import './Titlebar.css'

function Titlebar({title}) {
    return (
        <>
            <div className="hero-banner-box">
                <h1 className="hero-banner-title">{title}</h1>
            </div>

        </>
    )
}

export default Titlebar