import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Button from '../Library/Button';

const Wrapper = styled.ul`
    text-decoration: none;
    list-style: none;

    li { 
        display: inline-block;
        margin-left: 30px;
        opacity: 0.5;
        cursor: pointer;

        &:hover {
            opacity: 1;
        }
    }

    .Button {
        margin-left: 20px;
    }
`;

const NavLinks = () => {
    return (
        <Wrapper className="NavLinks">
            <Link to="/developers">
                <li>Developers</li>
            </Link>
            <Link to="/login">
                <Button 
                    type="secondary" 
                    body="Sign In" />
            </Link>
            <Link to="/signup">
                <Button 
                    type="primary" 
                    body="Join" />
            </Link>
        </Wrapper>
    )
}

export default NavLinks
