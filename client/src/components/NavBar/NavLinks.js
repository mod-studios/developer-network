import React from 'react'
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
            <li>Developers</li>
            <Button 
                type="secondary" 
                body="test" />
            <Button 
                type="primary" 
                body="test" />
        </Wrapper>
    )
}

export default NavLinks
