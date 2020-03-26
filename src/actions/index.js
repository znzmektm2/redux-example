import * as types from './ActionTypes';
// import { INCREMENT } from './ActionTypes'

export function increment() {
    return {
        type: types.INCREMENT
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
} 

export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color //color: color 와 같은 의미
    };
}