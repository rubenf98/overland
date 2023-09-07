import React from 'react'
import styled, { keyframes } from 'styled-components';
import { dimensions } from '../../../helper';


const ani = keyframes`
  0% {
    -webkit-mask-position: 0 0;
    mask-position: 0 0;
  }
  100% {
    -webkit-mask-position: 100% 0;
        mask-position: 100% 0;
  }
`;


const ani2 = keyframes`
  0% {
    -webkit-mask-position: 100% 0;
    mask-position: 100% 0;
  }
  100% {
    -webkit-mask-position: 0 0;
        mask-position: 0 0;
  }
`;


const Container = styled.div`
    position: relative;
    width: 250px;
    height: 70px;
    margin-left: 0px;
    overflow: hidden;
    border: 1px solid ${props => props.background};
    transition: 0.5s;
    letter-spacing: 1px;

    @media (max-width: ${dimensions.lg}) {
        margin-bottom: 60px;
    }

    @media (max-width: ${dimensions.md}) {
      width: 200px;
      height: 50px;
    }
   

    button,span {
      font-size: 38px;
        font-weight: 900;

        @media (max-width: ${dimensions.md}) {
          font-size: 22px;
        }
    }

    button {
        width: 101%;
        height: 100%;
        background: ${props => props.background};
        -webkit-mask: url("/icon/button-sprite.png");
        mask: url("/icon/button-sprite.png");
        -webkit-mask-size: 3000% 100%;
        mask-size: 3000% 100%;
        border: none;
        cursor: pointer;
        color: ${props => props.color};
        -webkit-animation: ${ani2} 0.7s steps(29) forwards;
        animation: ${ani2} 0.7s steps(29) forwards;

        &:hover {
            -webkit-animation: ${ani} 0.7s steps(29) forwards;
            animation: ${ani} 0.7s steps(29) forwards;
        }
    }

    

    span {
        position: absolute;
        text-align: center;
        width: 101%;
        top: 14px;
        overflow: hidden;
        color: ${props => props.background};
    }
`;

function ButtonAnimation({ background, color, text, loading = false }) {
    return (
        <Container background={background} color={color}>
            <span>{text}</span>
            <button loading={loading}>{text}</button>
        </Container>
    )
}

export default ButtonAnimation