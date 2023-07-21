import { DECREMENT, INCREMENT } from "./actionType";

const initialState = {
    count:10,
    orin:1
};


export const counterReducer = (state = initialState,action) =>{
    switch (action.type) {
        case INCREMENT: 
        return {
            ...state,
            count:state.count + 1
        }
        

        case DECREMENT:
            return{
                ...state,
                count:state.count - 1
            }
        default:
            return state
    }
}