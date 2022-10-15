import { SearchIcon } from "../../svg-component";
import color from "../../contant/color";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchDiv from "../stylescomponents/search/SearchDiv";
import SearchInput from "../stylescomponents/search/SearchInput";

const Search = ({ data, setData }) => {
    const [search, setSearch] = useState("");
    const { users } = useSelector(state => state.users);
    const handleChange = (e) => {
        // console.log(e.target.value)
        setSearch(e.target.value);
        const filtered = users.filter((entry) => {
            // console.log('searchitem', e.target.value);
            return entry.name.includes(e.target.value);
        })
        setData(filtered);
        // setTimeout(() => {
        //     console.log('search called')
        //     // const filtered = data.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(search)))

        // }, 1000)
    };

    // console.log('susers', users)
    return (
        <SearchDiv>
            <SearchIcon
                fillColor={color.grey1}
                height={24}
                width={24}
            />
            <SearchInput
                type="text"
                value={search}
                // autoComplete='off'
                onChange={(e) => handleChange(e)}
                placeholder="Search users by name"
            />
        </SearchDiv>);
};
export default Search;
