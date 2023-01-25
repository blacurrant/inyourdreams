import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Typography, Paper, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';


const Map = ({setCoordinates, setBounds, coordinates}) => {
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
            >
            </GoogleMapReact>
        </div>
  )
}

export default Map;