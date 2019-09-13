import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs, deleteSmurf } from '../store/actions';
import Smurf from './Smurf';

const SmurfList = (props) => {
    const fetch = props.fetchSmurfs;

    useEffect(() => {
        fetch();
    }, [fetch])


    const handleDelete = (id) => {
        props.deleteSmurf(id);
    }


    return (
        <div>
            {props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} handleDelete={handleDelete} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf })(SmurfList);