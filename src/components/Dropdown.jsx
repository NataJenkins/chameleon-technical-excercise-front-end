import { useState } from "react";
import PropTypes from "prop-types";
// import { httpGet, httpPatch } from "lib/http";
import "./Dropdown.css";

export const Dropdown = ({ label, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    // httpGet(`users/${userId}`).then((d) => {
    //     setIsOpen(user[`dropdown_${name}`]);
    // });

    const onToggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="dropdown">
                <button
                    type="button"
                    className="dropdown-button"
                    id="dropdownButton"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onClick={onToggle}
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
                    {items.map((item) => {
                        return (
                            <li key={item.id}>
                                <DropdownItem key={item.id} href={item.href}>
                                    {item.label}
                                </DropdownItem>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
};

Dropdown.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            href: PropTypes.string,
            id: PropTypes.number,
        })
    ),
    label: PropTypes.string,
};

const DropdownItem = ({ children, href }) => {
    return <a href={href}>{children}</a>;
};

DropdownItem.propTypes = {
    children: PropTypes.any,
    href: PropTypes.string,
};
