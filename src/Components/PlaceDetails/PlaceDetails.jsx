import React from 'react'
import{ Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/LocationOn';
import { Rating } from '@material-ui/lab/Rating';

import useStyles from './styles';


const PlaceDetails = ({move, refProp, selected}) => {
    // console.log(move + 'sabi');

    if(selected) refProp?.current?.scrollIntoView({ behaviour:'smooth', Block:'start'})

    const classes= useStyles();

    return (
        <Card elevation={6}>
            <CardMedia 
                style={{ height: 350}}
                image={ move.photo? move.photo.images.large.url : 'https://www.dreamstime.com/colorful-ocean-beach-sunrise-deep-blue-sky-sun-rays-colorful-ocean-beach-sunrise-deep-blue-sky-sun-rays-golden-image128367577'}
                title={move.name}
            />
            <CardContent>
                <Typography gutterBottom variant='h5'>{move.name}</Typography>
            </CardContent>
        </Card>
  )
}

export default PlaceDetails