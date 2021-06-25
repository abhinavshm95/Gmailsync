import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()  
    console.log(year)
    return (
        <>
            <div className='footer' >
                <h4>Copyright © {year}</h4>
            </div>
        </>
    )
}

export default Footer
