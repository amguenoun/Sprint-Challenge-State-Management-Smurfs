import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAIL = 'FETCH_SMURFS_FAIL';

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });
    axios.get('http://localhost:3333/smurfs')
        .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: `${err.response.status}: ${err.response.statusText}` }))
}

export const POST_SMURF_START = 'POST_SMURF_START';
export const POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS';
export const POST_SMURF_FAIL = 'POST_SMURF_FAIL';

export const postSmurf = (smurfData) => dispatch => {
    dispatch({ type: POST_SMURF_START });
    axios.post('http://localhost:3333/smurfs', smurfData)
        .then(res => dispatch({ type: POST_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_SMURF_FAIL, payload: `${err.response.status}: ${err.response.statusText}` }))
}

export const DELETE_SMURF = 'DELETE_SMURF';

export const deleteSmurf = (smurfId) => dispatch => {
    dispatch({ type: DELETE_SMURF });
    axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
        .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: `${err.response.status}: ${err.response.statusText}` }))
}

export const START_EDIT = 'START_EDIT';

export const startEdit = (smurfId) => {
    return {
        type: START_EDIT,
        payload: smurfId
    }
}

export const PUT_SMURF = 'PUT_SMURF';

export const putSmurf = (smurfId, smurfData) => dispatch => {
    dispatch({ type: PUT_SMURF });
    axios.put(`http://localhost:3333/smurfs/${smurfId}`, smurfData)
        .then(res => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: FETCH_SMURFS_FAIL, payload: `${err.response.status}: ${err.response.statusText}` }))
}