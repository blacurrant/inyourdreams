import React, { useState, useEffect } from 'react';
import { AppBar, CssBaseline, Grid, Toolbar, Typography } from '@material-ui/core';

import { getPlacesData } from './api/index';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import Map from './Components/Map/Map';

const App = () => {
  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({lat:35.689487, lng:139.691706});
  const [bounds, setBounds] = useState({});

  const [childClicked, setChildClicked] = useState({});
  const [loading, setLoading] = useState(false);

  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');


  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude}}) => {
  //     setCoordinates({lat: latitude, lng: longitude});
  //   })
  // },[]);



  useEffect(() => {
    setLoading(true);
    getPlacesData(type, bounds.sw, bounds.ne)
      .then((data) => {
          setPlaces(data);
          setLoading(false);
      })
  }, [type, coordinates, bounds]);

  // console.log(coordinates);
  console.log(places + 'cutie');

  return (  
    <>
        <CssBaseline/>
        <Header setCoordinates={setCoordinates} />
        <Grid container spacing={3} style= {{width: '100%'}}>
          <Grid item xs={12} md={4}>
            <List places={places}
                  childClicked={childClicked}
                  loading={loading}
                  type={type}
                  setType={setType}
                  rating={rating}
                  setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates= {setCoordinates}
              setBounds= {setBounds}
              coordinates= {coordinates}
              places= {places}
              childClicked={childClicked}
            />
          </Grid>
        </Grid>

    </>
  );
}

export default App