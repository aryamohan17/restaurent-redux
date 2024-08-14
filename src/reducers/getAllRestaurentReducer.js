import {SUCCESS,FAIL} from "../constants/restaurentConstants"
export const allRestaurentReducer = (state={allRestaurent:[]},action)=>{
    console.log(action.type);
    
    switch (action.type) {
        case SUCCESS:
            return{
                allRestaurent:action.payload
            }
        case FAIL :
            return{
                allRestaurent:action.payload
            }
    
        default:
            return state
    }
}