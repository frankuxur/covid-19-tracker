import '../css/main.css'
import Nav from './Nav'
import Wave from './Wave'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <main className="main">
        <Wave />
        <section className="main__info">
            <h1 className='main__title'>covid-19 tracker</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempora, deleniti est culpa temporibus aliquam totam enim facilis laudantium molestiae in porro recusandae?</p>
            {/* <button className='main__btn'>country stats</button> */}
        </section>

        
        <section className="main__history">
            <h2><i className="ri-time-line"></i> covid-19 history</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis magnam deleniti repellendus.</p>
            
            <ul>
                <li>
                    <Link to={'/history'} state={{label: 'cases'}}>
                        <p>cases</p>
                        <i className="ri-arrow-right-line"></i>
                    </Link>
                </li>
                <li>
                    <Link to={'/history'} state={{label: 'deaths'}}>
                        <p>deaths</p>
                        <i className="ri-arrow-right-line"></i>
                    </Link>
                </li>
                {/* <li>
                    <Link to={'/history'} state={{label: 'recovered'}}>
                    <p>recovered</p>
                    <i className="ri-arrow-right-line"></i>
                    </Link>
                </li> */}
            </ul>
        </section>
        
        <Nav />
    </main>
  )
}

export default Main