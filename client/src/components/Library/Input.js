import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`;

const Container = styled.input`
    width: 100%;
    height: 100%;
    background: #e6e6e6;
    border: none;
    padding: 20px 15px;
    font-size: 16px;
    font-family: inherit;
    margin-bottom: 10px;
`;

const Input = (props) => {
    return (
        <Wrapper className="Input">
            <Container 
                type={props.type}
                required={props.required}
                placeholder={props.placeholder} />
        </Wrapper>
    )
}

export default Input
