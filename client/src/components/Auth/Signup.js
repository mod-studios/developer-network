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
`;

const FixedModal = styled.form`
    margin-top: 100px;   
    width: 400px;
    padding: 20px;
`;

const Signup = () => {
    return (
        <Wrapper>
            <FixedModal>
                <Logo width="120px" />
                <p>Join devwork and connect with other developers!</p>
                <Input
                    required
                    type="text"
                    placeholder="Name" />
                <Input
                    required
                    type="name"
                    placeholder="Email" />
                <Input
                    required
                    type="password"
                    placeholder="Password" />
                <Button 
                    fullwidth
                    submit
                    type="primary" 
                    body="Sign up" />
            </FixedModal>
        </Wrapper>
    )
}

export default Signup
