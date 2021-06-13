import React from 'react'
import { AddSpaceBeetwenCasesNumber } from './CovidMap'

export const CountryDetails = ({details}) => {
    return (
        <div className='cloud' id='countryDetails'>
            {details === undefined || details.message !== undefined ? (
                <p className='notFoundCountry'>Choose country to see details</p>
            ):(
                <div>
                    <p><b>{details.country} / {details.continent}</b></p>
                    <img id='mapImg' src={details.countryInfo.flag} alt={details.country + "_flag"} />
                    <p><span className='light-text br'>Today cases:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.todayCases)}</span></p>
                    <p><span className='light-text br'>Today deaths:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.todayDeaths)}</span></p>
                    <p><span className='light-text br'>Today recovered:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.todayRecovered)}</span></p>
                    <hr />
                    <p><span className='light-text br'>Cases:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.cases)}</span></p>
                    <p><span className='light-text br'>Deaths:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.deaths)}</span></p>
                    <p><span className='light-text br'>Recovered:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.recovered)}</span></p>
                    <p><span className='light-text br'>Tests:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.tests)}</span></p>
                    <p><span className='light-text br'>Population:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.population)}</span></p>
                </div>
            )}
        </div>
    )
}
