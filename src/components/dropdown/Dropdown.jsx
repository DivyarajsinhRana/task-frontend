import { useEffect, useRef, useState } from "react";
import color from "../../contant/color";
import { ExpandDown, ExpandUp } from "../../svg-component";
import DropdownBody from "../stylescomponents/dropdown/DropdownBody";
import DropdownItem from "../stylescomponents/dropdown/DropdownItem";
import DropdownItems from "../stylescomponents/dropdown/DropdownItems";
import DropdownWrapper from "../stylescomponents/dropdown/DropdownWrapper";

const Dropdown = ({ title, data, handleFilter }) => {

    const [isDropdown, setIsDropdown] = useState(false);
    const [value, setValue] = useState(-1)
    const openDropdown = (index) => {
        // e.stopPropagation();
        setIsDropdown(true);
    };
    const closeDropdown = (e) => {
        // e.stopPropagation();
        setIsDropdown(false);
    };
    const [filterBy, setFilterBy] = useState(title);
    useEffect(() => {
        setFilterBy(title)
    }, [title])
    const ref = useRef();
    useEffect(() => {
        const checkIfClickedOutside = (e) => {
            if (isDropdown && ref.current && !ref.current.contains(e.target)) {
                closeDropdown();
            }
        };
        document.addEventListener("mousedown", checkIfClickedOutside);
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside);
        };
    }, [closeDropdown]);
    return (
        <DropdownWrapper
            onClick={() => {
                isDropdown ? closeDropdown() : openDropdown();
            }}
            ref={ref}
        >
            {

                title && (
                    <>
                        <span>{filterBy}</span>
                        {!isDropdown ? (
                            <ExpandDown
                                fillColor={color.blue1}
                                height={24}
                                width={24}
                            />
                        ) : (
                            <ExpandUp
                                fillColor={color.blue1}
                                height={24}
                                width={24}
                            />
                        )
                        }
                    </>
                )
            }


            {isDropdown && data && (
                <DropdownBody >
                    {data && data.map((item, index) => {
                        return (
                            <DropdownItems
                                /*   className={[index === value ? styles.dropdownItemsActive : styles.dropdownItems, customClassBodyItems].join(' ')} */
                                active={index === value ? true : false}
                                onClick={() => handleFilter(item.navigate)}
                                key={index}
                            >
                                <DropdownItem key={index}>
                                    {item.name}
                                </DropdownItem>
                            </DropdownItems>
                        );
                    })}
                </DropdownBody>
            )}
        </DropdownWrapper>
    );
};
export default Dropdown;
