import React, { Component } from 'react';
import '../App.css';
import { Grid } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import {connect} from "react-redux";

const mapStateToProps = (state)=>{
    return {displayText:state.displayText}
}


class ConnectedDisplay extends Component {
    render() {
        return (
            <div className="Display">
                <Grid container spacing={0}>
                    <Grid xs={4} />
                    <Grid item xs={4}>
                        <Paper id="display" square={true}>
                            {this.props.displayText}
                        </Paper>
                    </Grid>
                    <Grid xs={4} />
                </Grid>
            </div>
        );
    }
}

const Display= connect(mapStateToProps)(ConnectedDisplay)

export default Display;