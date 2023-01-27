import React, {useState, useEffect ,createRef} from 'react'
import { Typography, CircularProgress, Grid, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import useStlyes from './styles';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

const List = ({ places, childClicked, loading, type, setType, rating, setRating }) => {
  const classes = useStlyes();

  const [elRefs, setElRefs] = useState({});
  // console.log(places);

  useEffect(() => {
    const refs= Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
  
    setElRefs(refs);
  }, [places])
  


  return (
    <div className={classes.container}>
      <Typography variant='h4'>Restaurants and Hotels</Typography>
      { loading? (
          <div className={classes.loading}>
              <CircularProgress size='5rem' />
          </div>
      ) : (
        <>
        <FormControl className={classes.formControl}>
          <InputLabel>Type</InputLabel>
          <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel>Rating</InputLabel>
          <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value="0">All</MenuItem>
            <MenuItem value="3">Above 3</MenuItem>
            <MenuItem value="4">Above 4</MenuItem>
            <MenuItem value="5">A Must</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={3} className={ classes.list}>
          {places?.map((move, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails
                move={move}
                selected= {childClicked === i}
                refProp= {elRefs[i]}
              />
            </Grid>
          ))}
        </Grid>
        </>
      )}

    </div>
  )
}

export default List