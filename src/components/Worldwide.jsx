import { useState } from 'react'
import '../css/worldwide.css'
import useFetch from '../helper/useFetch'
import Row from './Row'
import Loading from '../../public/loading.gif'

const Worldwide = () => {
    const { data, loading, error } = useFetch('https://disease.sh/v3/covid-19/all')
    const [toggle, setToggle] = useState(true)
    const dataArr = []
    let overallData = []
    let todaysData = []
    if (data) {
        var {
            updated,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            todayRecovered,
            active,
            critical,
            casesPerOneMillion,
            deathsPerOneMillion,
            tests,
            testsPerOneMillion,
            population,
            oneCasePerPeople,
            oneDeathPerPeople,
            oneTestPerPeople,
            activePerOneMillion,
            recoveredPerOneMillion,
            criticalPerOneMillion,
            affectedCountries
          } = data

          for (let key in data) {
            dataArr.push({ [key]: data[key] })
          }

          overallData = dataArr.filter(item => {
            const key = Object.keys(item)[0]
            return (key !== 'updated' && 
                    key !== 'oneCasePerPeople' && 
                    key !== 'oneDeathPerPeople' && 
                    key !== 'oneTestPerPeople' && 
                    key !== 'todayCases' &&
                    key !== 'todayDeaths' &&
                    key !== 'todayRecovered') 
          })

          todaysData = dataArr.filter(item => {
            const key = Object.keys(item)[0]
            return (key === 'todayCases' || key === 'todayDeaths' || key === 'todayRecovered') 
          })

    }


  return (
    <section className="worldwide" id='worldwide'>
        <h2 className='worldwide__title'><i className="ri-earth-line"></i> worldwide metrics</h2>
        {/* <h2 className='worldwide__title'> <img src={Globe} alt="globe" />  worldwide metrics</h2> */}

        <div className="worldwide__toggle" onClick={() => setToggle(!toggle)}>
            {/* <div> */}
                <div className={`worldwide__toggle-button ${toggle ? '' : 'right'}`}></div>
                <p>overall</p>
                <p>today</p>
            {/* </div> */}
        </div>

        {error && <p className='message'>something went wrong...<i className="ri-emotion-normal-line"></i></p>}

        {loading && <p className='message'>laoding...<i className="ri-hourglass-line"></i></p>}

        {!error && data && 
            toggle ? (
                <ul className="worldwide__table worldwide__overall">
                    <Row
                        title='cases'
                        value={cases}
                    />
                    <Row
                        title='deaths'
                        value={deaths}
                    />
                    <Row
                        title='recovered'
                        value={recovered}
                    />
                    <Row
                        title='active'
                        value={active}
                    />
                    <Row
                        title='critical'
                        value={critical}
                    />
                    <Row
                        title='cases per one million'
                        value={casesPerOneMillion}
                    />
                    <Row
                        title='deaths per one million'
                        value={deathsPerOneMillion}
                    />
                    <Row
                        title='tests'
                        value={tests}
                    />
                    <Row
                        title='tests per one million'
                        value={testsPerOneMillion}
                    />
                    <Row
                        title='population'
                        value={population}
                    />
                    <Row
                        title='active per one million'
                        value={activePerOneMillion}
                    />
                    <Row
                        title='recovered per one million'
                        value={recoveredPerOneMillion}
                    />
                    <Row
                        title='critical per one million'
                        value={criticalPerOneMillion}
                    />
                    <Row
                        title='affected countries'
                        value={affectedCountries}
                    />
                </ul>                   
            ) : (
                 !error && !loading && <ul className="worldwide__table worldwide__today">                        
                        <li>
                            <p>cases today</p>
                            <p>{todayCases}</p>
                        </li>
                        <li>
                            <p>deaths today</p>
                            <p>{todayDeaths}</p>
                        </li>
                        <li>
                            <p>recovered today</p>
                            <p>{todayRecovered}</p>
                        </li>
                    </ul>
                )
        }


    </section>
  )
}

export default Worldwide