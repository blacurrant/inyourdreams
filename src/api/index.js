import axios from "axios";



export const getPlacesData = async (type, sw, ne) => {
    try {
        // console.log(sw.lat + 'you');
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
                'X-RapidAPI-Key': '5c8401da0amsh195693823f5b543p16bec4jsnbeb94f0bcd43',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        });        
        return data;       
    } catch (error) {
    }
}