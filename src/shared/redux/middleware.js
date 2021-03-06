import axios from "axios";

const basedURL='https://jsonplaceholder.typicode.com/';
const apiMiddleware =store=>next=>action=>{

    const {isEndpointCall,type}=action;
    if(isEndpointCall){
        const {method,successType,failedType}=action;
        next({type});
    axios(`${basedURL}${action.endpoint}`,{
        method
    }).then(response=>{next({
        type:successType,
        data:response.data,
            ...response
    })}).catch(error=>{next({
        type:failedType,
        error
    })});
    }else{
        next(action);
    }
}
export default apiMiddleware;