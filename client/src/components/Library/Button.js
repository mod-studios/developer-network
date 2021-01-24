import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
    padding: 15px 40px;
    cursor: pointer;
    text-decoration: none !important;
    border-radius: 5px;
    box-shadow: 1px 1px 100px rgba(${props => props.theme.colors.button.background}, 0.4);
    transition: all ease 0.4s;

    &:hover {
        box-shadow: 1px 1px 100px rgba(${props => props.theme.colors.button.background}, 0.9);
    }

    &.primary {
        background: rgb(${props => props.theme.colors.button.background});
        color: ${props => props.theme.colors.button.text};
    }

    &.secondary {
        background: rgb(${props => props.theme.colors.button.text});
        color: rgb(${props => props.theme.colors.button.background});
        border: 1px solid rgb(${props => props.theme.colors.button.background});
        box-shadow: none;
    }
`;

const Button = (props) => {
    return (
        <Wrapper className={`Button ${props.type}`}>
            {props.body}
        </Wrapper>
    )
}

export default Button
