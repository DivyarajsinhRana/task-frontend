import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../../components/stylescomponents/wrapper/Wrapper";
import Table from "../../components/table/Table";
import { userTableHead } from "../../constant";
import { fetchAllUsers } from "../../redux/features/users/userSlice";

const Dashboard = () => {
    const { users, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])
    return (
        <Wrapper direction="column">
            <Table
                tableheading={userTableHead}
                tabledata={users}
            />
        </Wrapper>
    )
}
export default Dashboard;