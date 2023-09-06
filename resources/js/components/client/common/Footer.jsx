import React from 'react'
import styled from 'styled-components';
import { Section } from '../../helpers/style';
import { Link } from 'react-router-dom';

const Container = styled.section`
    border-top: 1px solid #D9D9D9;
    padding: 150px 0px 30px 0px;
    box-sizing: border-box;
`;

const FlexContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 50px;

    .logo {
        padding: 0px 50px;
        box-sizing: border-box;
        width: 25%;
    }
`;

const ContactContainer = styled.div`
    width: 40%;

    .social {
        display: flex;
        align-items: center;
        gap: 10px;
        opacity: .8;

        img {
            height: 30px;
        }
    }
`;

const LinkContainer = styled.div`
    width: 25%;

    a {
        display: block;
        width: 100%;
        text-decoration: none;
        color: black;
        margin: 15px 0px;
    }
`;

const LegalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin-top: 100px;

    a {
        display: block;
        text-decoration: none;
        color: black;
    }
`;

function Footer() {
    return (
        <Container>
            <Section style={{ margin: "auto" }}>
                <FlexContainer>
                    <img className='logo' src="/images/logo.svg" alt="" />

                    <ContactContainer>
                        <h3>Contact</h3>
                        <p>Entreposto Comercial e Industrial Sambrasense – Sítio dos BarrabésCx Postal 908-Z, 8150-016, São Brás de Alportel</p>
                        <p>00351 944 180 092</p>
                        <p>geral@overlandmadeira.com</p>

                        <h3>Social</h3>
                        <div className='social'>
                            <img src="/icons/instagram_black.svg" alt="instagram" />
                            <img src="/icons/facebook_black.svg" alt="facebook" />
                            <img src="/icons/whatsapp_black.svg" alt="whatsapp" />
                        </div>
                    </ContactContainer>
                    <LinkContainer>
                        <h3>Pages</h3>
                        <Link to="/">Homepage</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </LinkContainer>
                </FlexContainer>
            </Section>

            <LegalContainer>
                <Link to="/privacy">Privacy terms</Link>
                <Link to="/policy">Legal policy</Link>
            </LegalContainer>
        </Container>
    )
}

export default Footer