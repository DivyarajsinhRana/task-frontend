import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPosts, fetchAllUsers } from "../../redux/features/users/userSlice";

const Dashboard = () => {
    const { users, isLoading } = useSelector(state => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [])
    return (
        <div>
        </div>
    )
}
export default Dashboard;