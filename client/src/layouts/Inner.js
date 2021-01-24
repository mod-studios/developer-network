import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    max-width: 900px;
    margin: auto;
    padding: 20px;
`;

const Inner = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Inner
