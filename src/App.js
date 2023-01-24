import React, { useState, useEffect } from 'react';
import { AppBar, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';

import { getPlacesData } from './api';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map'

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
      setCoordinates({lat: latitude, lng: longitude});
    })
  }, []);

  useEffect(() => {
    getPlacesData(bounds.ne, bounds.sw)
      .then((data) => {
        console.log(data);
        setPlaces(data);
      })
  }, [coordinates, bounds]);


  return (
    <>
        <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style= {{width: '100%'}}>
              <Grid item xs={12} md={4}>
                <List places={places}/>
              </Grid>
              <Grid item xs={12} md={8}>
                <Map
                  setCoordinates= {coordinates}
                  setBounds= {bounds}
                  coordinates= {coordinates}
                />
              </Grid>
            </Grid>

    </>
  );
}

export default App