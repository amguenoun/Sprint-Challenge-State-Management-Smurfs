import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../store/actions';

const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({ name: '', age: '', height: '' });
    const [smurfPackage, setSmurfPackage] = useState({});
    const post = props.postSmurf;

    useEffect(() => {
        post(smurfPackage);
    }, [post, smurfPackage])

    const handleChange = e => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSmurfPackage({ ...smurf, id: Date.now() });
    }
    console.log(smurf);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' value={smurf.name} name='name' onChange={handleChange} placeholder='Name' />
                <input type='text' value={smurf.age} name='age' onChange={handleChange} placeholder='Age' />
                <input type='text' value={smurf.height} name='height' onChange={handleChange} placeholder='Height' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default connect(null, { postSmurf })(SmurfForm);