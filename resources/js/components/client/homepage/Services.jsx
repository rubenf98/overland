import React from 'react'
import styled from "styled-components";
import { dimensions } from '../../../helper';
import { Section } from '../../helpers/style';

const Container = styled.div`
    width: 100%;
    margin: 150px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    div {
        width: 20%;

        @media (max-width: ${dimensions.md}) {
            width: 40%;
        }
    }

    img {
        margin: auto;
        display: block;
    }

    h3, p {
        text-align: center;
    }
`;

function Services({ text }) {

    const Service = ({ title, image, text }) => (
        <div>
            <img src={"/images/homepage/" + image + ".svg"} alt={title} />
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );

    return (
        <Section>
            <Container>
                <Service image="service_transport" title={text.transportation.title} text={text.transportation.description} />
                <Service image="service_guide" title={text.guides.title} text={text.guides.description} />
                <Service image="service_language" title={text.language.title} text={text.language.description} />
                <Service image="service_nature" title={text.nature.title} text={text.nature.description} />
            </Container>
        </Section>
    )
}

export default Services