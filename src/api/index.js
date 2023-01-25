import axios from "axios";

const URL= 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        console.log(sw.lat);
        const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'f2c29dc339mshf909552c46b9370p1302a9jsn85c65d8be630',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });        
        return data;       
    } catch (error) {
    }
}