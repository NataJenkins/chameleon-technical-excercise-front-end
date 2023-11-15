import React, { useState } from "react";
import { httpGet, httpPatch } from "lib/http";

export const Dropdown = ({ label }) => {
    const [isOpen, setIsOpen] = useState(false);

    httpGet(`users/${userId}`).then((d) => {
        setIsOpen(user[`dropdown_${name}`]);
    });

    const onToggle = (e) => {
        setIsOpen(isOpen);
    };

    return (
        <>
            <div className="dropdown">
                <button
                    type="button"
                    className="dropdown-button"
                    id="dropdownButton"
                    aria-haspopup="true"
                    aria-expended={isOpen}
                    onClick={onTggle}
                >
                    {label}
                </button>

                <ul
                    className={`${
                        isOpen ? "dropdown-open" : ""
                    } dropdown-menu dropdown-section`}
                    aria-labelledby="dropdownButton"
                    role="menu"
                >
                    <div>Items</div>
                    <a href="/page1">Page 1</a>
                    <DropdownItem href="/page2">Page 2</DropdownItem>
                    <DropdownItem href="/page3">Page 3</DropdownItem>
                    <DropdownItem href="/page4">Page 4</DropdownItem>
                </ul>

                <ul
                    className={`${
                        isOpen ? "dropdown-open" : ""
                    } dropdown-menu dropdown-section`}
                >
                    <div>More items</div>
                    <DropdownItem href="/page5">Page 5</DropdownItem>
                    <DropdownItem href="/page9">Page 9</DropdownItem>
                </ul>
            </div>
        </>
    );
};

const DropdownItem = ({}) => {
    return "??";
};
