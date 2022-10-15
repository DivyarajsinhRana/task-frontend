import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import Wrapper from "../../components/stylescomponents/wrapper/Wrapper";
import Table from "../../components/table/Table";
import { userTableHead } from "../../constant";
import { fetchAllUsers } from "../../redux/features/users/userSlice";

const Dashboard = () => {
    const { users, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();
    const [items, setItems] = useState(users);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);
    let varible = Math.ceil(items.length !== 0 && items.length / itemsPerPage);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])
    useEffect(() => {
        setItems(users);
    }, [users])
    const handlePaginate = (item) => {
        setCurrentPage(item);
    };
    const handlePrevious = (offset, ref) => {
        currentPage !== 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
        ref.current.scrollLeft += offset;
    };
    const handleNext = (offset, ref) => {
        // setCurrentPage(currentPage + 1);
        ref.current.scrollLeft += offset;
        currentPage !== varible
            ? setCurrentPage(currentPage + 1)
            : setCurrentPage(currentPage);
    };

    return (
        <Wrapper direction="column" padding="70px">
            <Search data={items} setData={setItems} />
            {
                isLoading ? <Loader /> : items.length === 0 ? "no recoe" : <>
                    <Table
                        tableheading={userTableHead}
                        tabledata={currentItems}
                    />
                </>
            }

            {items.length !== 0 && (
                <Pagination
                    data={items}
                    length={items && items.length}
                    itemsPerPage={itemsPerPage}
                    handlePaginate={(item) => handlePaginate(item)}
                    active={currentPage}
                    handlePrevious={(offset, ref) => handlePrevious(offset, ref)}
                    handleNext={(offset, ref) => handleNext(offset, ref)}
                    limit={10}
                />
            )}
        </Wrapper>
    )
}
export default Dashboard;