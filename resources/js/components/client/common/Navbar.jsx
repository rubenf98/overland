import React from 'react'
import { Link } from 'react-router-dom';
import styled, { css } from "styled-components";
import { borderRadius } from '../../../helper';

const Container = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    color: white;
    text-transform: uppercase;

    .logo {
        height: 80px;
    }

    .language {
        .ant-select-selector, svg { 
            color: white;
        }
    }
`;

const PageContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-transform: capitalize;

    a {
        width: 150px;
        font-size: 20px;
        color: black;
        text-decoration: none;
    }

    button {
        background-color: ${({ theme }) => theme.secundary};
        color: white;
        font-size: 20px;
        border-radius: ${borderRadius};
        padding: 12px 24px;
        box-sizing: border-box;
        box-shadow: 0px;
        border: 0px;
    }
`;


function Navbar() {
    return (
        <Container>
            <Link to="/"><img className="logo" alt="logo" src="/images/logo.svg" /></Link>
            <PageContainer>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button>+351 964180092</button>
            </PageContainer>


        </Container>
    )
}

export default Navbar