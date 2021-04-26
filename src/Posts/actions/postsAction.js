
import {Types} from "./actionTypes";

export const fetchPosts=({_page,_limit})=>({
    type: Types.FETCH_POST,
    successType:Types.FETCH_POST_SUCCESS,
    failedType:Types.FETCH_POST_FAILED,
    isEndpointCall:true,
    endpoint:`posts?_limit=${_limit}&&_page=${_page}`,
    method:'GET',
})
