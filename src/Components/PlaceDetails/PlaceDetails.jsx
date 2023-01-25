import React from 'react'
import{ Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/LocationOn';
import { Rating } from '@material-ui/lab/Rating';

import useStyles from './styles';



const PlaceDetails = ({place}) => {
    console.log(place + 'sabi');

    const classes= useStyles();

    return (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: 350}}
                image={ place.photo? place.photo.images.large.url : 'https://www.dreamstime.com/colorful-ocean-beach-sunrise-deep-blue-sky-sun-rays-colorful-ocean-beach-sunrise-deep-blue-sky-sun-rays-golden-image128367577'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{place.name}</Typography>
            </CardContent>
        </Card>
  )
}

export default PlaceDetails