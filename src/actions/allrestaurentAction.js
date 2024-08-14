import axios from "axios"
import { FAIL, SUCCESS } from "../constants/restaurentConstants";

export const allRestaurentAction = () => async (dispatch) =>{
    try {
        const {data} = await axios.get(`http://localhost:4000/restaurants`);
        console.log(data);
        // payload any can be used for dispatch
        dispatch({
            payload:data,type:SUCCESS
        })
    } catch (error) {
        dispatch({
            payload:error,type:FAIL
        })
    }
 
}