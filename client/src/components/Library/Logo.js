import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/devwork-logo.svg';
const Wrapper = styled.div`
    font-weight: 700;
    max-width: ${props => props.width} !important;

    img {
        width: 100%;
    }
`;

const Logo = (props) => {
    return (
        <Wrapper 
            width={props.width} 
            className="Logo">
           <img src={logo} />
        </Wrapper>
    )
}

export default Logo
