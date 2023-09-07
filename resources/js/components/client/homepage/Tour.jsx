import React from 'react'
import { Section, SectionTitle } from '../../helpers/style'
import styled from 'styled-components';
import { borderRadius, dimensions } from '../../../helper';

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    @media (max-width: ${dimensions.md}) {
        margin-left: 0px;
    }
    
`;

const TourImage = styled.div`
    position: relative;
    width: ${props => props.width};
    height: 500px;
    background: ${props => "url(" + props.background + ")"};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
    padding: 20px;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${borderRadius};
    }

    h3 {
        position: absolute;
        bottom: 40px;
        left: 40px;
        color: white;
        font-size: 28px;
        font-weight: bold;
        margin-bottom: 0px;
    }
    
    
`;

function Tour() {
    return (
        <Section>
            <SectionTitle style={{ textAlign: "center" }}>
                A local’s view on the best <span>tours</span> around the island
            </SectionTitle>
            <Container>
                <TourImage width="60%" >
                    <img src="/images/tours/1.jpg" alt="" />
                    <h3>Sunrise view</h3>
                </TourImage>
                <TourImage width="40%">
                    <img src="/images/tours/2.jpg" alt="" />
                    <h3>Sunrise view</h3>
                </TourImage>

                <TourImage width="33%" >
                    <img src="/images/tours/3.jpg" alt="" />
                    <h3>Sunrise view</h3>
                </TourImage>
                <TourImage width="33%">
                    <img src="/images/tours/4.jpg" alt="" />
                    <h3>Sunrise view</h3>
                </TourImage>
                <TourImage width="33%">
                    <img src="/images/tours/5.jpg" alt="" />
                    <h3>Sunrise view</h3>
                </TourImage>
            </Container>
        </Section>
    )
}

export default Tour