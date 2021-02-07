export const SET_CAR_DETAILS = 'modules/parking-lot/SET_CAR_DETAILS';
export const CLEAR_CAR_DETAILS = 'modules/parking-lot/CLEAR_CAR_DETAILS';

export const setCarDetails = data => ({
    type: SET_CAR_DETAILS,
    data,
});

export const clearCarDetails = () => ({
    type: CLEAR_CAR_DETAILS,
});

export const carDetailsReducer = (state = [], action = { type: 'NULL_ACTION'}) => {
    switch (action.type){
        case SET_CAR_DETAILS:
            return [ 
                ...state,
                action.data
            ]
        case CLEAR_CAR_DETAILS:
            return [];
        default:
            return state;               
    }
};