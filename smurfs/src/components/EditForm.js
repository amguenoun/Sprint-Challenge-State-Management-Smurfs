import React, { useState } from 'react';
import { connect } from 'react-redux';

import { putSmurf } from '../store/actions';

const EditForm = (props) => {
    const [smurf, setSmurf] = useState(props.smurf[0]);

    const handleChange = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.putSmurf(props.editId, smurf);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={smurf.name} name='name' onChange={handleChange} placeholder='Name' />
                <input type='text' value={smurf.age} name='age' onChange={handleChange} placeholder='Age' />
                <input type='text' value={smurf.height} name='height' onChange={handleChange} placeholder='Height' />
                <button type='submit'>Complete Edit</button>
            </form>
        </div>
    )
}

const mapPropsToState = state => {
    return {
        editId: state.editId,
        smurf: state.smurfs.filter(item => item.id === state.editId),
    }
}

export default connect(mapPropsToState, { putSmurf })(EditForm);