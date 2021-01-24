import React, { useEffect } from 'react'
import styled from 'styled-components'
import Inner from '../../layouts/Inner';
import DeveloperCard from './DeveloperCard';
import axios from 'axios';

const Wrapper = styled.div`
`;

const Title = styled.h1`
    text-align: center;
    font-weight: 700;
    font-size: 40px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Cards = styled.div`
    background: black;
    padding: 50px 0;
    text-align: center;
`;

const Developers = () => {

    useEffect(() => {
        axios.get('http://localhost:5000/api/profile')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
        });
    }, []);

    return (
        <Wrapper>
            <Inner>
                <Title>Join our developer database!</Title>
            </Inner>
            <Cards>
                <Inner>
                    <DeveloperCard />
                    <DeveloperCard />
                    <DeveloperCard />
                    <DeveloperCard />
                    <DeveloperCard />
                    <DeveloperCard />
                </Inner>
            </Cards>
        </Wrapper>
    )
}

export default Developers
