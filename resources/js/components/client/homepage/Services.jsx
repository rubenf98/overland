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

function Services() {

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
                <Service image="service_transport" title="Transportation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Service image="service_guide" title="Experienced guides" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Service image="service_language" title="Multilangual" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Service image="service_nature" title="Nature connection" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </Container>
        </Section>
    )
}

export default Services