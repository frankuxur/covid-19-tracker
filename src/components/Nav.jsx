import { useState } from 'react'
import '../css/nav.css'

const Nav = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle((prev) => !prev)


        // navigate
        // const navOpen = document.querySelector('.nav__open')
        // const navClose = document.querySelector('.nav__close')
        // const test = document.querySelector('.test')
        
        
        // navOpen.classList.toggle('toggle')
        // navClose.classList.toggle('toggle')
        // test.classList.toggle('toggle')
        
    }

  return (
    <nav className="nav">
        <button onClick={handleToggle} className={`nav__open ${!toggle ? 'toggle' : ''}`}>menu</button>

        <button onClick={handleToggle} className={`nav__close ${toggle ? 'toggle' : ''}`}>
            {/* <i className="ri-arrow-right-line"></i> */}
            {/* close */}
            <i className="ri-close-line"></i>
        </button>
        <ul className={`nav__list ${toggle ? 'toggle' : ''}`}>
            <li className="nav__link">
                <a href="#">home</a>
            </li>
            <li className="nav__link">
                <a href="#worldwide">worldwide</a>
            </li>
            <li className="nav__link">
                <a href="#country">country</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav