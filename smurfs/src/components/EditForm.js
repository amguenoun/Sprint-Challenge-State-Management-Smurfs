import React, { useState } from 'react';
import { connect } from 'react-redux';

import { putSmurf } from '../store/actions';

const EditForm = (props) => {
    const [smurf, setSmurf] = useState(props.editSmurf);
    const [change, setChange] = useState(0);

    const handleChange = e => {
        setChange(1);
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.putSmurf(props.editId, smurf);
    }
    if (smurf !== props.editSmurf && change === 0) {
        setSmurf(props.editSmurf);
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
        editSmurf: state.editSmurf,
    }
}

export default connect(mapPropsToState, { putSmurf })(EditForm);