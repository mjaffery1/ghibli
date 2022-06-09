import React from 'react'


function Navbar(props) {
    
    return(
        <div className='nav-container'>
            <nav className='navbar'>
                <div>
                <h2> Home</h2>
                </div>
                <div>
                   <a href='https://www.ghiblifest.com/'> Watch Studio Ghibli in Theaters! </a>
                </div>
                <div>
                    <h2>Fun Facts</h2>
                </div>            
            </nav>
        </div>
    )
}

export default Navbar