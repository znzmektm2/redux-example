import React, { Component } from 'react';

import Value from './Value';
import Control from './Control';
import { connect } from 'react-redux';
// import { connect, bindActionCreators } from 'react-redux';
import * as actions from '../actions';

class Counter extends Component {

    constructor(props) { 
        super(props);
        this.setRandomColor = this.setRandomColor.bind(this);
    }

    setRandomColor() {
        const color = [
            Math.floor((Math.random()*55)+200),
            Math.floor((Math.random()*55)+200),
            Math.floor((Math.random()*55)+200)
        ];
        this.props.handleSetColor(color);
    }

    render() {

        // 똑똑한 컴포넌트에는 style이 없지만 지금은 예외로 작성
        const color = this.props.color;
        const style = {
            background: `rgb(${color[0]}, ${color[1]}, ${color[2]})`
        };

        return(
            <div style={style}>
                <Value number={this.props.number} />
                <Control 
                    onPlus={this.props.handleIncrement} 
                    onSubtract={this.props.handleDecrement}
                    onRandomizeColor={this.setRandomColor}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => { // 여기서 state는 컴포넌트의 state와는 다르며, 파라미터 이름이 state인 것이다. redux의 state를 칭함.
    return {
        number: state.counter.number, // state 값을 counter 리듀서의 state number 값으로 연결해줘~
        color: state.ui.color // 이렇게 하면 이 컴포넌트의 number와 color는 프롭스로 연결된다.
    };
}

const mapDispatchToProps = (dispatch) => {
    // return bindActionCreators(actions, dispatch); 이렇게 쓰면 아래 return 내용을 간단하게 쓸 수 있다.
    // 대신 handleIncrement 와 같은 임의의 이름은 ActionTypes에 있는 action creator 이름이 사용됨
    return {
        handleIncrement: () => { dispatch(actions.increment())},
        handleDecrement: () => { dispatch(actions.decrement())},
        handleSetColor: (color) => { dispatch(actions.setColor(color))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//connect()는 컴포넌트를 리덕스에 연결하는 또다른 함수를 반환하고, 그 함수에 파라미터로 Counter를 넣어준것임. 이렇게 하면 리덕스에 연결됨