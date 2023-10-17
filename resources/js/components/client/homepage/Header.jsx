import React from 'react'
import styled from "styled-components";
import { dimensions, maxWidth } from '../../../helper';


const Container = styled.section`
    width: 100%;
    max-width: ${maxWidth};
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: auto;
    

    @media (max-width: ${maxWidth}) {
        box-sizing: border-box;
        padding: 0px 10px;
    }

`;

const TitleContainer = styled.div`
    margin: auto;
    display: block;
    width: 100%;
    box-sizing: border-box;
    margin: 100px 0px 50px 0px;

    h1 {
        font-size: 6.6vw;
        font-size: 38px;
        font-weight: 700;
        line-height: 94%;
        margin: 5px 0px 50px 0px;
    }

    h2 {
        font-size: 3vw;
        font-size: 22px;
        opacity: .7;
        font-weight: 700;
        line-height: 94%;
        margin: 0px;
    }

    h1, h2 {
        color: ${({ theme }) => theme.primary};
        color: #fff;
        text-align: center;
    }


    @media (max-width: ${dimensions.md}) {

        h1 {
            font-size: 36px;
        }

        h2 {
            font-size: 24px;
        }
    }
`;

const Logo = styled.img`
    width: 300px;
    margin: auto;
    display: block;

    @media (max-width: ${dimensions.md}) {
        width: 200px;
    }
`;

const Contact = styled.div`
    width: 60%;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;

    @media (max-width: ${dimensions.lg}) {
        width: 80%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }
`;


const ContactItem = styled.div`
    color: white;
    padding: 14px 33px;
    box-sizing: border-box;
    border:1px solid white;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
        margin: 0px;
    }

    a {
        cursor: pointer;
        color: white;
    }

    img {
        margin-right: 15px;
        width: 20px;
    }

    @media (max-width: ${dimensions.md}) {
        font-size: 16px;
        padding: 10px 16px;
        margin: 10px 0px;

        img {
            margin-right: 10px;
            width: 15px;
        }
    }
`;

const Content = styled.div`
    width: 100%;
`;

function Header() {
    return (
        <Container>
            <Content>
                <Logo src="/images/logo_white.svg" alt="logo" />

                <TitleContainer>
                    <h2>SOON</h2>
                    <h1>Levada, Tours, Hiking, Camping: Madeira Unveiled</h1>
                </TitleContainer>

                <Contact>
                    <ContactItem>
                        <img src="/icon/phone.svg" alt="phone" />
                        <p>+351 910 178 500</p>
                    </ContactItem>
                    <ContactItem>
                        <img src="/icon/mail.svg" alt="mail" />
                        <p><a href="mailto:overlandmadeira@gmail.com">overlandmadeira@gmail.com</a></p>
                    </ContactItem>
                </Contact>
            </Content>
        </Container>
    )
}

export default Header