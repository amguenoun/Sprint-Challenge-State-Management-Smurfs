import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs, deleteSmurf, startEdit } from '../store/actions';
import Smurf from './Smurf';
import EditForm from './EditForm';

const SmurfList = (props) => {
    const fetch = props.fetchSmurfs;

    useEffect(() => {
        fetch();
    }, [fetch])


    const handleDelete = (id) => {
        props.deleteSmurf(id);
    }

    const handleEdit = (id) => {
        props.startEdit(id);
    }
    return (
        <div>
            {props.isEditing ? <EditForm /> : null}
            {props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} handleEdit={handleEdit} handleDelete={handleDelete} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
        isEditing: state.isEditing,
    }
}

export default connect(mapStateToProps, { fetchSmurfs, deleteSmurf, startEdit })(SmurfList);