import { createStore } from "redux";

const loggedRuducer =(state=false,action)=>{
    switch(action.type){
       case 'SIGN_IN':
           return !state;

    }
}
export default loggedRuducer;