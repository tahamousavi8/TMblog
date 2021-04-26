import React from "react";
import {PaginationRoot} from "./styled.components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft,faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Pagination=({page=1,limit,onChangeClick,count})=>{
    const onNext=()=>onChangeClick(page+1);
    const onPrev=()=>onChangeClick(page-1);
    return <PaginationRoot>
        <button disabled={page===1} onClick={onPrev}><FontAwesomeIcon icon={faArrowLeft} /></button>
        <div className="page">{page}</div>
        <button disabled={page*limit>=count} onClick={onNext}><FontAwesomeIcon icon={faArrowRight} /></button>
    </PaginationRoot>
}

export default Pagination;