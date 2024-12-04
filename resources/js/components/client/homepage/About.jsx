import React from 'react'
import styled from 'styled-components';
import { Section } from '../../helpers/style';
import { dimensions } from '../../../helper';

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    h2 {
        font-size: clamp(28px, 2.5vw, 40px);
        text-align: center;
        width: 70%;
    }

    p {
        width: 70%;
        text-align: center;
        letter-spacing: 5%;
    }
    
    @media (max-width: ${dimensions.md}) {
        p, h2 {
            width: 100%;
            text-align: left;
        }
    }
`;

const ImageContainer = styled.div`
    margin: 50px auto;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    div {
        width: 50%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    @media (max-width: ${dimensions.md}) {
        margin: 30px auto 0px auto;
    }
    
`;

function About(props) {
    return (
        <Section id="about">
            <Content>
                <h2>{props.text.title}</h2>
                <p>{props.text.description}</p>
            </Content>
            <ImageContainer>
                <div>
                    <img src="/images/homepage/about_safari.jpg" alt="jeep safari" />
                </div>
                <div>
                    <img src="/images/homepage/about_levada.jpg" alt="jeep safari" />
                    <img src="/images/homepage/about_tour.jpg" alt="jeep safari" />
                </div>
            </ImageContainer>
        </Section>
    )
}

export default About