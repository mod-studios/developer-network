import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.h1`
    font-size: 30px;
    font-weight: bold;
    font-family: ${props => props.theme.font_secondary};
`;

const H1 = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default H1
