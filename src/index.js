import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers'; //index 파일을 불러오는 것이기 때문에 뒤에 index를 쓰지 않아도 됨
//import * as actions from './actions';

import { Provider } from 'react-redux';

const store = createStore(reducers);

// console.log(store.getState());
// const unsubscribe = store.subscribe(() => console.log(store.getState())); //스토어가 변화가 있을때 subscribe 함수를 실행. subscribe 를 실행하면 리스너가 실행됨
// //subscribe 함수가 반환하는 값이 unsubscribe라는 함수이다. 따라서 변수로 받아서 실행시키면 스토어 변화감지를 멈춤

// store.dispatch(actions.increment()); //action 생성자 함수가 실행이 되면 액션을 만들어 반환해 주고, 그 action을 보낼 때 dispatch 함수를 씀
// store.dispatch(actions.increment()); 
// store.dispatch(actions.decrement()); 
// store.dispatch(actions.setColor([200,200,200])); 
// unsubscribe();
// store.dispatch(actions.setColor([100,100,100])); 

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

