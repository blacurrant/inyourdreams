import React from 'react'
import{ Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/LocationOn';
import Rating from '@material-ui/lab/Rating';

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
                <Box className={classes.spacing} my={2}>
                    <Rating name='read-only' value={Number(move.num_reviews)} readOnly />
                    <Typography component="legend">out of {move.num_reviews} review{move.num_reviews > 1 && 's'}</Typography>
                </Box>
                {move.address && (
                    <Typography gutterBottom variant="body2" color="textSecondary" className={classes.subtitle}>
                        <LocationOnIcon />{move.address}
                    </Typography>
                )}
                {move.phone && (
                    <Typography variant="body2" color="textSecondary" className={classes.spacing}>
                        <PhoneIcon /> {move.phone}
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button size="large" color="primary" onClick={() => window.open(move.web_url, '_blank')}>
                    Visit
                </Button>
            </CardActions>
        </Card>
  )
}

export default PlaceDetails