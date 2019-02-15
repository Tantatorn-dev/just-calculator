import {INPUT,ADD,SUBTRACT,MULTIPLY,DIVIDE} from './actions'

const initialState={answer:0,displayText:"",operation:'plus'};

function displayNumber(state=initialState,action){
    switch(action.type){
        case INPUT:
        return {
            displayText: state.displayText+action.text
        }
        case ADD:

        case SUBTRACT:

        case MULTIPLY:

        case DIVIDE:

        break;
        default:
        return state;
    }
}

export default displayNumber;