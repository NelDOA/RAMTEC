import { types } from "../types/types";

const initialState = {
    orders: [],
    active: null,
};

const ordersReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
    
        default:
            return state;
    }

}
export default ordersReducer;