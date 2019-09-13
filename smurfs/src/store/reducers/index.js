import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAIL,
} from '../actions'

const initialState = {
    smurfs: [],
    isFetching: false,
    error: '',
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error: '',
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload
            };
        case FETCH_SMURFS_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
            }
        default:
            return state;
    }
}