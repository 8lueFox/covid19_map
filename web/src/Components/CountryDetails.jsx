import React from 'react'
import { AddSpaceBeetwenCasesNumber } from './CovidMap'

export const CountryDetails = ({details}) => {
    return (
        <div className='cloud'>
            {details === undefined || details.message !== undefined ? (
                <p className='notFoundCountry'>Choose country to see details</p>
            ):(
                <div>
                    <p><b>{details.country} / {details.continent}</b></p>
                    <img src={details.countryInfo.flag} alt={details.country + "_flag"} style={{width: '40%'}} />
                    <p><span className='light-text'>Today cases:</span> <span className='red-text'>{AddSpaceBeetwenCasesNumber(details.todayCases)}</span></p>
                </div>
            )}
        </div>
    )
}
