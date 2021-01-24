import React from 'react'
import styled from 'styled-components'
import Button from '../Library/Button';
import H1 from '../Library/H1';
import Input from '../Library/Input';
import Logo from '../Library/Logo';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.secondary};
    height: 600px;
`;

const FixedModal = styled.form`
    width: 400px;
    padding: 20px;
    background: ${props => props.theme.colors.body};
`;

const Login = () => {
    return (
        <Wrapper>
            <FixedModal>
                <p>Sign in to devwork</p>
                <Input
                    required
                    type="email"
                    placeholder="Email" />
                <Input
                    required
                    type="password"
                    placeholder="Password" />
                <Button 
                    fullwidth
                    submit
                    type="primary" 
                    body="login" />
            </FixedModal>
        </Wrapper>
    )
}

export default Login
