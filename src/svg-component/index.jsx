import ExpandDownIcon from "../components/stylescomponents/dropdown/ExpandDown"
import SearchIconSVG from "../components/stylescomponents/search/searchIcon"

export const SearchIcon = ({ fillColor, height, width, customClass }) => {
    return (
        <SearchIconSVG width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className={customClass}>
            <circle cx="9.16683" cy="9.16634" r="5.83333" stroke={fillColor} strokeWidth="2" />
            <path d="M16.6665 16.667L14.1665 14.167" stroke={fillColor} strokeWidth="2" strokeLinecap="round" />
        </SearchIconSVG>
    )
}
export const ExpandDown = ({ fillColor, height, width, customClass }) => {
    return (
        <ExpandDownIcon width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={customClass}>
            <path d="M12 15L12.7071 15.7071L12 16.4142L11.2929 15.7071L12 15ZM18.7071 9.70711L12.7071 15.7071L11.2929 14.2929L17.2929 8.29289L18.7071 9.70711ZM11.2929 15.7071L5.29289 9.70711L6.70711 8.29289L12.7071 14.2929L11.2929 15.7071Z" fill={fillColor} />
        </ExpandDownIcon>

    )
}
export const ExpandUp = ({ fillColor, customClass, height, width }) => {
    return (
        <ExpandDownIcon width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={customClass}>
            <path d="M12 9L11.2929 8.29289L12 7.58579L12.7071 8.29289L12 9ZM5.29289 14.2929L11.2929 8.29289L12.7071 9.70711L6.70711 15.7071L5.29289 14.2929ZM12.7071 8.29289L18.7071 14.2929L17.2929 15.7071L11.2929 9.70711L12.7071 8.29289Z" fill={fillColor} />
        </ExpandDownIcon>

    )
}