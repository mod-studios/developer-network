import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.a`
    padding: 20px 40px;
    cursor: pointer;
    text-decoration: none !important;
    transition: all ease 0.4s;

    &.full-width {
        width: 100% !important;
        display: inline-block;
        text-align: center;
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

const Submit = styled.button`
        padding: 20px 40px;
        text-transform: uppercase;
        cursor: pointer;
        text-decoration: none !important;
        transition: all ease 0.4s;
        border: none;
        font-family: inherit;
        font-size: inherit;

        &.full-width {
            width: 100% !important;
            display: inline-block;
            text-align: center;
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

    if (props.submit) {
        return (
            <Submit type="submit" className={`Button ${props.type} ${props.fullwidth ? 'full-width' : null}`}>
            {props.body}
            </Submit>
        )
    }

    return (
        <Wrapper className={`Button ${props.type} ${props.fullwidth ? 'full-width' : null}`}>
            {props.body}
        </Wrapper>
    )
}

export default Button
