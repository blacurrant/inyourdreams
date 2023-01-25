import React, {useState} from 'react'
import { Typography, CircularProgress, Grid, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import useStlyes from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({places}) => {
  const classes= useStlyes();
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');


  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants and Hotels around you..</Typography>
      <FormControl className={classes.formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => (e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={(e) => (e.target.value)}>
          <MenuItem value="0">All</MenuItem>
          <MenuItem value="3">Above 3</MenuItem>
          <MenuItem value="4">Above 4</MenuItem>
          <MenuItem value="5">A Must</MenuItem>
        </Select>
      </FormControl>
      <Grid container spacing={3} className={ classes.list}>
        {places?.map((place, i) => (
          <Grid item key={i} xs={12}>
            <PlaceDetails place={place} />
          </Grid>
        ))}
      </Grid>

    </div>
  )
}

export default List