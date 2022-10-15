import { useEffect, useRef, useState } from "react";
import Button from "../stylescomponents/button/Button";
import PaginationPagesWrapper from "../stylescomponents/paginationwrapper/paginationPagesWrapper";
import PaginationWrapper from "../stylescomponents/paginationwrapper/paginationWrapper";
import PageSpan from "./PageSpan";
import PaginateButton from "./PaginateButton";
import PaginationScroll from "./paginationScroll";

const Pagination = ({ data, itemsPerPage, handlePaginate, active, handlePrevious, handleNext, length, limit }) => {
    const [startData, setStartdata] = useState(0);
    const [endData, setEndData] = useState(0);
    const pages = [];
    for (let i = 1; i <= Math.ceil(data && data.length / itemsPerPage); i++) {
        pages.push(i);
    }
    useEffect(() => {
        let end = active * limit;
        end >= length ? setEndData(length) : setEndData(end);
        let start = endData % limit === 0 ? endData - (limit - 1) : endData - (endData % limit - 1);
        setStartdata(start);
    }, [active, endData, length, data.length, limit])
    const ref = useRef();

    return (
        <PaginationWrapper>
            {/* <div className={styles.pageRangeContainer}> */}
            {
                <span >{startData}-{endData} of {length}</span>
            }
            {/* </div> */}
            <PaginationPagesWrapper >
                <PaginateButton onClick={() => handlePrevious(-40, ref)}  >Previous</PaginateButton>
                <PaginationScroll ref={ref}>
                    {
                        pages.map((item, index) => {
                            return (
                                <PageSpan key={index} active={item === active ? true : false} onClick={() => handlePaginate(item)} >{item}</PageSpan>
                            )
                        })
                    }
                </PaginationScroll>
                <PaginateButton onClick={() => handleNext(+40, ref)} direction="next" >Next</PaginateButton>
            </PaginationPagesWrapper>
        </PaginationWrapper>
    )
}
export default Pagination;