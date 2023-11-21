import React from 'react'
import styled from 'styled-components';
import { Section } from '../../helpers/style';
import { Link } from 'react-router-dom';
import { dimensions } from '../../../helper';
import { connect } from 'react-redux';

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
    left: 0px;
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

function Footer(props) {
    const { text } = require('../../../../assets/' + props.language + "/footer");
    return (
        <Container>
            <Background />
            <Section style={{ margin: "auto" }}>
                <FlexContainer>
                    <img className='logo' src="/images/logo_white.svg" alt="logo" />

                    <ContactContainer>
                        <h3>{text.titles[0]}</h3>
                        <p>Estrada de Santo Antonio 3B, 9230-114 Santana</p>
                        <p>00351 944 180 092</p>
                        <p>overlandmadeira@gmail.com</p>

                        <h3>{text.titles[1]}</h3>
                        <div className='social'>
                            <a href="https://www.facebook.com/profile.php?id=61551065549062" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/facebook_white.svg" alt="facebook" />
                            </a>
                            <a href="https://api.whatsapp.com/send?l=en&phone=351910178500" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/whatsapp_white.svg" alt="whatsapp" />
                            </a>
                            <a href="https://www.instagram.com/overland_madeira?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/instagram_white.svg" alt="instagram" />
                            </a>
                            <a href="mailto:overlandmadeira@gmail.com" target="_blank" rel="noopener noreferrer">
                                <img src="/icons/email_white.svg" alt="email" />
                            </a>
                        </div>
                    </ContactContainer>
                    <LinkContainer>
                        <h3>{text.titles[2]}</h3>
                        <Link to="/">{text.pages[0]}</Link>
                        <Link to="/about">{text.pages[1]}</Link>
                        <Link to="/contact">{text.pages[2]}</Link>
                    </LinkContainer>
                </FlexContainer>
            </Section>

            <LegalContainer>
                <Link to="/privacy">{text.links[0]}</Link>
                {/* <Link to="/policy">{text.links[1]}</Link> */}
            </LegalContainer>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, null)(Footer);