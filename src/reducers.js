import {INPUT, COMPUTE,CLEAR} from './actions'

const initialState={answer:0,displayText:""};

function displayNumber(state=initialState,action){
    switch(action.type){
        case INPUT:
        return {
            displayText: state.displayText+action.text,
            answer:0,
            operation:state.operation
        }
        case COMPUTE:
        return {
            displayText: eval(state.displayText),
            answer:eval(state.displayText),
        }
        case CLEAR:
        return {
            displayText: ''
        }
        default:
        return state;
    }
}

export default displayNumber;