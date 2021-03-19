import React from 'react'
import styled from 'styled-components';
const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;`;

const HeaderSectionH1 = styled.h1`
    @import url(
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    font-weight: bold;
`;
const HeaderSection = styled.section`
    text-align: center;
`;
export default function Header() {
    return(
    <HeaderDiv>
        <HeaderSection>
        <HeaderSectionH1> Sad Guy</HeaderSectionH1>
        </HeaderSection>
    </HeaderDiv>
    )
};
