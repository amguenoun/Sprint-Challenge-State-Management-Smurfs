import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../store/actions';
import Smurf from './Smurf';

const SmurfList = (props) => {
    const fetch = props.fetchSmurfs;

    useEffect(() => {
        fetch();
    }, [fetch])

    return (
        <div>
            {props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} />)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);