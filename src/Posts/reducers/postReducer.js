import {Types} from "../actions/actionTypes";

const initState={
    error:null,
    posts:[],
    fetching:false,
    count:0
}

function postReducer(state=initState,action){
    switch(action.type){
        case Types.FETCH_POST:
            return{
                ...state,
                fetching:true,
            };
        case Types.FETCH_POST_SUCCESS:
            console.log(action);
            const {headers:{["x-total-count"]:count}}=action;
            return{
                ...state,
                fetching:false,
                posts:action.data,
                count: count
            };
        case Types.FETCH_POST_FAILED:
            return{
            ...state,
            fetching:false,
            error:action.error,
            };
        default:
            return state;
    }
}

export default postReducer;