import React from 'react'
import {MapContainer, TileLayer, useMapEvent} from 'react-leaflet'

const startingPosition = [51.505, -0.09]

export const OwnMapContainer = ({onClickFun}) => {

    function SetViewOnClick(){
        const map = useMapEvent('click', (e) => {
            map.setView(e.latlng, map.getZoom(), {
                animate: true
            })
            onClickFun(e.latlng)
        })
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
