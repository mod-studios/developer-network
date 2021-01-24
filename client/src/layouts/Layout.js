import React from 'react'
import styled from 'styled-components';
import NavBar from '../components/NavBar/NavBar';

const Wrapper = styled.div`
`;

const Layout = (props) => {
    return (
        <Wrapper>
            <NavBar />
            {props.children}
        </Wrapper>
    )
}

export default Layout
