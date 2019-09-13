import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchSmurfs } from '../store/actions';

const SmurfList = (props) => {
    useEffect(() => {
        props.fetchSmurfs();
    }, [])
    return (
        <div>
            SmurfList Here.
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs,
    }
}

export default connect(mapStateToProps, { fetchSmurfs })(SmurfList);