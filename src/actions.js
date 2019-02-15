export const INPUT = 'INPUT';

export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const MULTIPLY = 'MULTIPLY';
export const DIVIDE = 'DIVIDE';

export const COMPUTE = 'COMPUTE';

export function input(text){
    return {type:INPUT,text};
}

export function  add(number){
    return {type:ADD,number}
}

export function  subtract(number){
    return {type:SUBTRACT,number}
}

export function  multiply(number){
    return {type:MULTIPLY,number}
}

export function  divide(number){
    return {type:DIVIDE,number}
}

export function  compute(number){
    return {type:COMPUTE,number}
}
