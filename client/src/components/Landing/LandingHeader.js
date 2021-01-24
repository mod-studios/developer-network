import React from 'react'
import LazyImage from '../../components/Library/LazyImage';
import image from '../../assets/1.png';
import styled from 'styled-components'
import Logo from '../Library/Logo';
import Button from '../Library/Button';

const Wrapper = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: -10;
`;

const Overlay = styled.div`
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;

    .Logo {
        filter: invert();
    }
`;

const ButtonsWrapper = styled.div`
    margin: 40px 0;

    .Button {
        margin: 0 5px;
    }
`;

const LandingHeader = () => {
    return (
        <Wrapper>
            <LazyImage 
                src={image}/>
            <Overlay>
                <Logo width="440px" />
                <p>Create your developer portfolio and share it with others</p>
                <ButtonsWrapper>
                    <Button 
                        type="primary" 
                        body="test" />
                    <Button 
                        type="secondary" 
                        body="test" />
                </ButtonsWrapper>
            </Overlay>
        </Wrapper>
    )
}

export default LandingHeader
