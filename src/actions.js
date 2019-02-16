export const INPUT = 'INPUT';
export const COMPUTE = 'COMPUTE';
export const CLEAR = 'CLEAR';

export function input(text){
    return {type:INPUT,text};
}

export function  compute(){
    return {type:COMPUTE};
}

export function clear() {
    return {type:CLEAR};
}