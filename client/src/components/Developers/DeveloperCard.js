import React from 'react'
import styled from 'styled-components'
import LazyImage from '../Library/LazyImage';

const Wrapper = styled.div`
    display: inline-block;
    width: 250px;
    text-align: center;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
    background: white;
    margin: 10px;
`;

const PicWrapper = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 100px;
    overflow: hidden;
    margin: 20px auto;
`;

const Skills = styled.ul`
    text-decoration: none;
    list-style: none;
    padding: 0;
`;

const Skill = styled.li`
    display: inline-block;
    font-size: 13px;
    margin: 0 5px;
    background: #ededed;
    padding: 5px;
`;

const Name = styled.h2`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 20px;
`;

const Location = styled.h3`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    opacity: 0.5;
`;

const Description = styled.p`
    font-size: 14px;
    padding-top: 10px;
    margin: 0 10px;
`;

const DeveloperCard = () => {
    return (
        <Wrapper>
            <PicWrapper>
                <LazyImage 
                    src="https://picsum.photos/200/300"/>
            </PicWrapper>
            <Name>John Doe</Name>
            <Location>Location</Location>
            <Description>Lorem ipsul dolores amet a description</Description>
            <Skills>
                <Skill>adsasd</Skill>
                <Skill>adsasd</Skill>
            </Skills>
        </Wrapper>
    )
}

export default DeveloperCard
