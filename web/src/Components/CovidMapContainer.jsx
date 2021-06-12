import React from 'react'
import { AddSpaceBeetwenCasesNumber } from './CovidMap'
import { OwnMapContainer } from './OwnMapContainer'
import { CountryDetails } from './CountryDetails'
import 'leaflet/dist/leaflet.css'

export const CovidMapContainer = ({globalDetails, continentsDetails, getCoordsFun, countryDetails}) => {
    return (
        <div>
            <div className='leftSide'>
                <div className='cloud' id='totalDeaths'>
                    <span className='title'>Global cases</span>
                    <span className='result'>
                    { globalDetails !== undefined ? (AddSpaceBeetwenCasesNumber(globalDetails.cases)) : ('Loading...') }
                    </span>
                </div>
                <div className='cloud' id='continentsDetails'>
                    <span className='title'>Cases by continent</span>
                    <span className='list'>
                        {continentsDetails === undefined ? ('Loading...') : (
                            continentsDetails.map((detail, i) => {
                                return (
                                    <div key={i} className='continentInfo'>
                                        <span className='continent'>{detail.continent}</span>
                                        <span className='continentCases'>{AddSpaceBeetwenCasesNumber(detail.cases)}</span>
                                    </div>
                                )
                            })
                        )}
                    </span>
                </div>
                <div className='cloud' id='lastUpdate'>
                    <span className='title'>Last update</span>
                    <span className='result'>
                        {globalDetails !== undefined ? (new Date(globalDetails.updated).toUTCString()) : ('Loading...') }
                    </span>
                </div>
            </div>
            <div className='ma2p'>
                <OwnMapContainer onClickFun={getCoordsFun} />
            </div>
            <div className='rightSide'>
                <CountryDetails details={countryDetails} />
            </div>
        </div>
    )
}
