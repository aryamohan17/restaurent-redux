import axios from "axios"

export const allRestaurentAction = () => async (dispatch) =>{
    const {data} = await axios.get(`http://localhost:4000/restaurants`);
    console.log(data);
    dispatch({

    })
}