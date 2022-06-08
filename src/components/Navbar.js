import React from 'react'


function Navbar(props) {
    
    return(
        <div className='nav-container'>
            <nav className='navbar'>
                <div>
                <h2> Movies</h2>
                </div>
                <div>
                   <h2> News </h2>
                </div>
                <div>
                    <h2>Fun Facts</h2>
                </div>            
            </nav>
        </div>
    )
}

export default Navbar