import React, { useState } from 'react'
import './NavBar.css'

function NavBar() {
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if(window.scrollY > 200){
            setShow(true)
        }else{
            setShow(false)
        }
    }
    window.addEventListener('scroll',controlNavbar)
    
    return (
        <div className={ show ? 'navbar navbarblack' : 'navbar'}>
            <div className='options'>
                <div>
                    <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
                </div>

                <ul>
                    <li>Home</li>
                    <li>TV Shows</li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Language</li>
                </ul>

            </div>

            <div className='right-side'>
                <ul>
                    <li><span id="search" class="material-symbols-outlined">search</span></li>
                    <li>children</li>
                    <li><span id="notification" class="material-symbols-outlined">notifications</span></li>
                </ul>
                <div>
                    <img className='avatar' src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default NavBar