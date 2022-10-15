import SearchIconSVG from "../components/stylescomponents/search/searchIcon"

export const SearchIcon = ({ fillColor, height, width, customClass }) => {
    return (
        <SearchIconSVG width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={customClass}>
            <circle cx="9.16683" cy="9.16634" r="5.83333" stroke={fillColor} strokeWidth="2" />
            <path d="M16.6665 16.667L14.1665 14.167" stroke={fillColor} strokeWidth="2" strokeLinecap="round" />
        </SearchIconSVG>
    )
}