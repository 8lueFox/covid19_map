import React, {useState, useEffect} from 'react'
import { CovidMapContainer } from './CovidMapContainer'

const GEO_API_KEY = '25b62bdd72014ff8904711b6839f997b'

export const CovidMap = () => {
    const[latlng, setLatLng] = useState()
    const[country, setCountry] = useState()
    const[countryDetails, setCountryDetails] = useState()
    const[globalDetails, setGlobalDetails] = useState()
    const[historicalDetails, setHistoricalDetails] = useState()
    const[continentsDetails, setContinentsDetails] = useState()

    useEffect(() => {
        const fetchData = async () => {
            if(globalDetails === undefined)
            await fetch(`https://disease.sh/v3/covid-19/all`)
                .then(resp => resp.json())
                .then(data => setGlobalDetails(data))
            if(historicalDetails === undefined)
                await fetch(`https://disease.sh/v3/covid-19/historical/all?lastdays=1000`)
                    .then(resp => resp.json())
                    .then(data => setHistoricalDetails(data))
            if(continentsDetails === undefined)
                await fetch(`https://disease.sh/v3/covid-19/continents`)
                    .then(response => response.json())
                    .then(data => setContinentsDetails(data))
        }
        fetchData()
    })

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://disease.sh/v3/covid-19/countries/${country}?strict=true`)
                .then(resp => resp.json())
                .then(data => setCountryDetails(data))
        }   
        fetchData()
    }, [country])

    useEffect(() => {
        const fetchData = async () => {
            if(latlng !== undefined){
                await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latlng.lat}+${latlng.lng}&key=${GEO_API_KEY}&language=en`)
                    .then(resp => resp.json())
                    .then(data => setCountry(data.results[0].components.country))
            }
        }
        fetchData()
    }, [latlng])

    const getCoords = (value) => {
        setLatLng(value)
    }

    return (
        <CovidMapContainer globalDetails={globalDetails} continentsDetails={continentsDetails} getCoordsFun={getCoords} countryDetails={countryDetails}/>
    )
}

export const AddSpaceBeetwenCasesNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}