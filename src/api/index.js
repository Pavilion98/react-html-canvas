import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';


  export const getLocationData = async (sw, ne) => {
      try {
          const { data: { data } } = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'f48c09bb74msh7c2c4593db2b300p14d142jsne8da05f9e9ea'
            }
          });

          return data;
      }

      catch(error) {
        console.log(error);
      }
  }