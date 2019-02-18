import React, { Component } from 'react';
import '../App.css';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { input , compute , clear } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        input: text => dispatch(input(text)),
        compute: () => dispatch(compute()),
        clear: () =>dispatch(clear())
    }
}

class ConnectedButtons extends Component {
    render() {
        const updateDisplay = (text) => {
            this.props.input(text);
        }
        return (
            <div className="Display">
                {/*first row */}
                <Grid container spacing={24} style={{ paddingTop: '10px' }}>
                    <Grid xs={2} />
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('1')}>1</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('2')}>2</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('3')}>3</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('*')}>*</Button>
                    </Grid>
                    <Grid xs={2} />
                </Grid>
                {/*second row */}
                <Grid container spacing={24} style={{ paddingTop: '10px' }}>
                    <Grid xs={2} />
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('4')}>4</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('5')}>5</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('6')}>6</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('/')}>/</Button>
                    </Grid>
                    <Grid xs={2} />
                </Grid>
                {/*third row */}
                <Grid container spacing={24} style={{ paddingTop: '10px' }}>
                    <Grid xs={2} />
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('7')}>7</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('8')}>8</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('9')}>9</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('-')}>-</Button>
                    </Grid>
                    <Grid xs={2} />
                </Grid>
                {/*fourth row */}
                <Grid container spacing={24} style={{ paddingTop: '10px' }}>
                    <Grid xs={2} />
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('0')}>0</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={()=>{this.props.clear()}}>AC</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('+')}>+</Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="fab" color="primary" onClick={() => {this.props.compute()}}>=</Button>
                    </Grid>
                    <Grid xs={2} />
                </Grid>
            </div>
        );
    }
}

const Buttons = connect(null, mapDispatchToProps)(ConnectedButtons);

export default Buttons;
