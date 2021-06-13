import React from 'react'
import {MapContainer, TileLayer, useMapEvent} from 'react-leaflet'

const startingPosition = [51.6180165487737, 18.457031250000004]

export const OwnMapContainer = ({onClickFun, latlngError}) => {

    function SetViewOnClick(){
        const map = useMapEvent('click', (e) => {
            map.setView(e.latlng, map.getZoom(), {
                animate: true
            })
            onClickFun(e.latlng)
        })

        if(latlngError){
            map.setView(startingPosition, map.getZoom(), {
                animate: true
            })
        }
        return null
    }

    return (
            <MapContainer center={startingPosition} zoom={5}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <SetViewOnClick />
            </MapContainer>
    )
}
