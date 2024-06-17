import { useEffect, useState } from 'react'
import '../css/country.css'
import useFetch from '../helper/useFetch'
import Map from '../../public/map.png'

const Country = () => {
  const { data, loading, error } = useFetch('https://disease.sh/v3/covid-19/countries')
  const [text, setText] = useState('')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)

  useEffect(() => {
    
    if (data) {
      const filteredData = data.filter(item => item.country.toLowerCase().includes(text.toLowerCase()))
      setCountries(filteredData)
    }
    if (!text) {
      setCountries([])
      return
    }
  }, [text])

  return (
    <section className="country" id='country'>
        <h2 className='country__title'><i className="ri-flag-line"></i> country metrics</h2>
        
        <div className="country__content">
          <div className="country__search">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi doloribus itaque quibusdam recusandae!</p>

              <div className="country__input">
                <i className="ri-map-pin-line"></i>
                <input 
                  type="text" 
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                />
              </div>

              
              <ul className="country__list">
                {countries && countries.map(country => (
                  <li key={country.country}>
                    <button onClick={() => setCountry(country)}>{country.country}</button>
                  </li>
                ))}
              </ul>
          </div>

            {!country ? (
              <div className="country__stats blank">
                <img src={Map} alt="map" />
              </div>
            ) : (
              <div className="country__stats">
                <header className="country__stats-header">
                  <div className="country-flag">
                    <img src={country.countryInfo.flag} alt="flag" />
                  </div>
                  <p className="country-code">{country.countryInfo.iso2}</p>
                  <p className="country-name">{country.country}</p>
                  <p className='continent-name'>{country.continent}</p>
                </header>

                <ul className="country__stats-list">
                  <li>
                    <p>{country.cases}</p>
                    <h5>cases</h5>
                  </li>
                  <li>
                    <p>{country.todayCases}</p>
                    <h5>cases today</h5>
                  </li>
                  <li>
                    <p>{country.deaths}</p>
                    <h5>deaths</h5>
                  </li>
                  <li>
                    <p>{country.todayDeaths}</p>
                    <h5>deaths today</h5>
                  </li>
                  <li>
                    <p>{country.recovered}</p>
                    <h5>recovered</h5>
                  </li>
                  <li>
                    <p>{country.todayRecovered}</p>
                    <h5>recovered today</h5>
                  </li>
                  <li>
                    <p>{country.active}</p>
                    <h5>active</h5>
                  </li>
                  <li>
                    <p>{country.critical}</p>
                    <h5>critical</h5>
                  </li>
                  <li>
                    <p>{country.casesPerOneMillion}</p>
                    <h5>cases per one million</h5>
                  </li>
                  <li>
                    <p>{country.deathsPerOneMillion}</p>
                    <h5>deaths per one million</h5>
                  </li>
                  <li>
                    <p>{country.tests}</p>
                    <h5>tests</h5>
                  </li>
                  <li>
                    <p>{country.testsPerOneMillion}</p>
                    <h5>tests per one million</h5>
                  </li>
                  <li>
                    <p>{country.population}</p>
                    <h5>population</h5>
                  </li>
                  <li>
                    <p>{country.oneCasePerPeople}</p>
                    <h5>one case per people</h5>
                  </li>
                  <li>
                    <p>{country.oneDeathPerPeople}</p>
                    <h5>one death per people</h5>
                  </li>
                  <li>
                    <p>{country.oneTestPerPeople}</p>
                    <h5>one test per people</h5>
                  </li>
                  <li>
                    <p>{country.activePerOneMillion}</p>
                    <h5>active per one million</h5>
                  </li>
                  <li>
                    <p>{country.recoveredPerOneMillion}</p>
                    <h5>recovered per one million</h5>
                  </li>
                  <li>
                    <p>{country.criticalPerOneMillion}</p>
                    <h5>critical per one million</h5>
                  </li>
                </ul>
              </div>              
            )}
          
        </div>
    </section>
  )
}

export default Country