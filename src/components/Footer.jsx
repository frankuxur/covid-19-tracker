import { useState } from 'react'
import '../css/footer.css'

const Footer = () => {
    const [show, setShow] = useState(false)

    const handleOver = () => {
        setShow(true)
    }
    const handleLeave = () => {
        setShow(false)
    }
  return (
    <footer className="footer">
        <section className="newsletter">
            <div className='newsletter__header'>
                <h3>Join our newsletter</h3>
                <p>We'll send you a nice letter once per week. No spam.</p>
            </div>

            <div className="newsletter__form">
                <input type="text" placeholder='Enter your email' />
                <button>subscribe <i className="ri-arrow-right-line"></i></button>
            </div>
        </section>

        <section className="links">
            <div className="links__header">
                <h4>covid-19 <i className='ri-virus-line'></i> <br /> worldwide</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, unde?</p>
            </div>

            <div className="links__group">
                <ul>
                    <li><h4>Tracking</h4></li>
                    <li>Tracking Home</li>
                    <li>Global Map</li>
                    <li>Country Map</li>
                    <li>Data Visualizations</li>
                    <li>Data in Motion</li>
                    <li>Tracking FAQ</li>
                </ul>

                <ul>
                    <li><h4>Testing</h4></li>
                    <li>Testing Home</li>
                    <li>Testing Tracker</li>
                    <li>Data Visualizations</li>
                    <li>FAQ</li>
                    <li>Differences in Positivity Rates</li>
                    <li>About Our Testing Data</li>
                </ul>

                <ul>
                    <li><h4>Vaccines</h4></li>
                    <li>Vaccines</li>
                    <li>Data Visualizations</li>
                    <li>Vaccines FAQ</li>
                    <li>Primer on COVID-19 Vaccine</li>
                    <li>COVID-19 Vaccine Matters</li>
                </ul>

                <ul>
                    <li><h4>Pandemic Data Initiative</h4></li>
                    <li>Pandemic Data Initiative</li>
                    <li>FAQ</li>
                    <li>Expert Forum</li>
                    <li>Data Outlook</li>
                    <li>Expert Insight</li>
                </ul>
            </div>
        </section>

        {/* <div className="spearator"></div> */}

        <section className="socials">
            <div className="socials__privacy">
                <h4>©️2023 covid-19 <i className="ri-virus-line"></i> worldwide. All rights reserved.</h4>
            </div>

            <ul className="socials__links">
                <li><i className="ri-twitter-line"></i></li>
                <li><i className="ri-linkedin-box-fill"></i></li>
                <li><i className="ri-facebook-circle-fill"></i></li>
                <li><i className="ri-github-fill"></i></li>
                <li><i className="ri-instagram-line"></i></li>
                <li><i className="ri-dribbble-line"></i></li>
            </ul>
        </section>
    </footer>
  )
}

export default Footer
