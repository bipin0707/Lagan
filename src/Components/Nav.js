import React from 'react'
import logo from '../images/max-logo.png'
import textlogo from '../images/min-logo.png'

const Nav =({minimal, setShowModal, showModal, setIsSignUp}) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authtoken=false
    return (
        <nav>
            <div className="logo-container">
                <img className="logo" src={minimal? logo : textlogo}/>
            </div>

            {!authtoken && !minimal && <button 
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
                    >Log in</button> }
        </nav>
    )
}
export default Nav