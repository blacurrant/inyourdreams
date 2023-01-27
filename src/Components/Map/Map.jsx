import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, Paper, useMediaQuery } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';


const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');

    return (
        
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys= {{key: 'AIzaSyBQOdwkfUfiJRY0jLBp8bwYy_icVzwnf6U' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={(e) => {
                    setCoordinates({ lat: e.center.lat, lng: e.center.lng});
                    setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne});
                }}
                onChildClick={(child) => setChildClicked(child)}              
            >
                {places?.map((move, i) => (
                    <div
                        className={classes.markerContainer}
                        lat= {Number(move.latitude)}
                        lng= {Number(move.longitude)}
                        key= {i}
                    >
                        <LocationOnIcon  className={classes.pointer} fontSize='large'/>
                    </div>
                ))}
            </GoogleMapReact>
        </div>
  )
}

export default Map;