import React, { Component } from 'react';
import '../App.css';
import { Grid, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { input } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return {
        input: text => dispatch(input(text))
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
                    <Grid xs={4} />
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('1')}>1</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('2')}>2</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('3')}>3</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary">X</Button>
                    </Grid>
                    <Grid xs={4} />
                </Grid>
                {/*second row */}
                <Grid container spacing={24} style={{ paddingTop: '10px' }}>
                    <Grid xs={4} />
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('4')}>4</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('5')}>5</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('6')}>6</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary">/</Button>
                    </Grid>
                    <Grid xs={4} />
                </Grid>
                {/*third row */}
                <Grid container spacing={24} style={{ paddingTop: '10px' }}>
                    <Grid xs={4} />
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('7')}>7</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('8')}>8</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('9')}>9</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary">-</Button>
                    </Grid>
                    <Grid xs={4} />
                </Grid>
                {/*fourth row */}
                <Grid container spacing={24} style={{ paddingTop: '10px' }}>
                    <Grid xs={4} />
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary" onClick={() => updateDisplay('0')}>0</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary">AC</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary">+</Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button variant="fab" color="primary">=</Button>
                    </Grid>
                    <Grid xs={4} />
                </Grid>
            </div>
        );
    }
}

const Buttons = connect(null, mapDispatchToProps)(ConnectedButtons);

export default Buttons;
