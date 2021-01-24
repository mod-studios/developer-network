import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Inner from '../../layouts/Inner';
import Logo from '../Library/Logo';
import NavLinks from './NavLinks';

const Wrapper = styled.div`
    background: ${props => props.theme.colors.body};
    display: flex;
    align-items: center;
    justify-content: left;

    .NavLinks {
        flex: 9;
        text-align: right;
    }

`;

const NavBar = () => {
    return (
        <Inner>
            <Wrapper>
                <Link to ="/">
                    <Logo width="120px" />
                </Link>
                <NavLinks />
            </Wrapper>
        </Inner>
    )
}

export default NavBar
