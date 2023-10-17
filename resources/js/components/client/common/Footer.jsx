import React from 'react'
import styled from 'styled-components';
import { Section } from '../../helpers/style';
import { Link } from 'react-router-dom';
import { dimensions } from '../../../helper';

const Container = styled.section`
    border-top: 1px solid #D9D9D9;
    padding: 150px 0px 30px 0px;
    box-sizing: border-box;
    position: relative;
    color: white;
`;

const Background = styled.div`
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100%;
    top: 0;
    left: -30px;
    background-color: ${({ theme }) => theme.secundary};
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

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;

        .logo {
            width: 40%;
            padding: 0px;
        }
        
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

    @media (max-width: ${dimensions.md}) {
        width: 100%; 
    }
`;

const LinkContainer = styled.div`
    width: 25%;

    a {
        display: block;
        width: 100%;
        text-decoration: none;
        color: white;
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
        color: white;
    }
`;

function Footer() {
    return (
        <Container>
            <Background />
            <Section style={{ margin: "auto" }}>
                <FlexContainer>
                    <img className='logo' src="/images/logo_white.svg" alt="logo" />

                    <ContactContainer>
                        <h3>Contact</h3>
                        <p>Entreposto Comercial e Industrial Sambrasense – Sítio dos BarrabésCx Postal 908-Z, 8150-016, São Brás de Alportel</p>
                        <p>00351 944 180 092</p>
                        <p>geral@overlandmadeira.com</p>

                        <h3>Social</h3>
                        <div className='social'>
                            <img src="/icons/instagram_white.svg" alt="instagram" />
                            <img src="/icons/facebook_white.svg" alt="facebook" />
                            <img src="/icons/whatsapp_white.svg" alt="whatsapp" />
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