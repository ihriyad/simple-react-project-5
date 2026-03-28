import React from 'react';

const NavLink = ({route}) => {
    return (
        <li><a href={route.path}>{route.name}</a></li>
    );
};

export default NavLink;