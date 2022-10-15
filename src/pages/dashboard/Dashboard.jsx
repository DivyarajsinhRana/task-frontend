import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../../components/dropdown/Dropdown";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/pagination/Pagination";
import Search from "../../components/search/Search";
import SearchFilterDiv from "../../components/stylescomponents/searchFilterDiv";
import Wrapper from "../../components/stylescomponents/wrapper/Wrapper";
import Table from "../../components/table/Table";
import { dropDowndata, userTableHead } from "../../constant";
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

    const [title, setTitle] = useState("Filter by");
    const [search, setSearch] = useState("");

    const handleFilter = (item) => {
        // console.log('item..??', item)
        setSearch("")

        setTitle(item);
        const filtered = users.filter((entry) => {
            // console.log('searchitem', e.target.value);
            if (item === 'Filter by Role') {
                return entry
            } else {
                return entry.role === item
            }
        })
        setItems(filtered)
        //  handleFilterCallback(item);
    };
    return (
        <Wrapper direction="column" padding="70px">
            <SearchFilterDiv>
                <Search data={items} setData={setItems} search={search} setSearch={setSearch} setTitle={setTitle} />
                <Dropdown
                    // handleFilterCallback={handleFilterCallback}
                    handleFilter={(item) => handleFilter(item)}
                    title={title}
                    data={dropDowndata}
                />
            </SearchFilterDiv>

            {
                isLoading ? <Loader /> : items.length === 0 ? "no records found" : <>
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