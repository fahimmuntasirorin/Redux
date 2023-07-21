import { DDECREMENT, DINCREMENT } from "./actionType";

const initialState = {
    count:5,
    orin:1
};


export const dynamicReducer = (state = initialState,action) =>{
    switch (action.type) {
        case DINCREMENT: 
        return {
            ...state,
            count:state.count + action.payload
        }
        

        case DDECREMENT:
            return{
                ...state,
                count:state.count - action.payload
            }
        default:
            return state
    }
}