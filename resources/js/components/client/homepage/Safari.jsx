import React from 'react'
import styled from "styled-components";
import { borderRadius, dimensions } from '../../../helper';
import { Section, SectionTitle } from '../../helpers/style';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    width: 100%;
    margin: 150px 0px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    img {
        border-radius: ${borderRadius};
    }

    .single-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        max-height: 850px;
    }

    .dual-image-container {
        height: 100%;
        max-height: 850px;

        .dual-image {
            width: 100%;
            height: 50%;
            object-fit: cover;
        }
    }

    .content {
        display: flex;
        align-items: center;
        height: 100%;

        p {
            margin: 50px 0px;
        }
    }
    
`;

const FlexContainer = styled.div`
    width: 33%;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    button {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: 12px 35px;
        box-sizing: border-box;
        border-radius: ${borderRadius};
        cursor: pointer;
        border: 0px;
        font-size: clamp(16px, 2vw, 20px);
    }
`;

function Safari({ text }) {
    const navigate = useNavigate();

    return (
        <Section>
            <Container>
                <FlexContainer>
                    <div className='content'>
                        <div>
                            <SectionTitle>{text.title}</SectionTitle>
                            <p>{text.subtitle}</p>
                            <button onClick={() => navigate("/safaries")}>{text.button}</button>
                        </div>
                    </div>
                </FlexContainer>
                <FlexContainer>
                    <img className='single-image' src="/images/homepage/safari3.jpeg" alt="" />
                </FlexContainer>
                <FlexContainer>
                    <div className='dual-image-container'>
                        <img className="dual-image" src="/images/homepage/safari1.jpeg" alt="" style={{ paddingBottom: "40px", boxSizing: "border-box" }} />
                        <img className="dual-image" src="/images/homepage/safari2.jpeg" alt="" />
                    </div>
                </FlexContainer>
            </Container>
        </Section >
    )
}

export default Safari