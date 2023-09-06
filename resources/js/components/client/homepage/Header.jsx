import React from 'react'
import styled from "styled-components";
import { borderRadius } from '../../../helper';
import { Col, Input, Row, Select } from 'antd';

const Container = styled.section`
    width: 100%;
    height: calc(100vh - 150px);
    display: flex;
    background-color: #F5F5F6;
    position: relative;
`;

const TextContainer = styled.div`
    width: 50%;
    padding: 0px 50px 0px 50px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    

    h2 {
        font-size: clamp(30px, 3vw, 60px);
        margin: 0px;

        span {
            color: ${({ theme }) => theme.primary}
        }
    }

    p {
        font-size: 20px;
        box-sizing: border-box;
        margin: 30px 0px;
    }

    .social-container {
        display: flex;
        align-items: center;
        gap: 20px;

        img {
            height: 55px;
        }
        margin-bottom: 50px;
    }
`;

const Background = styled.img`
    width: 50%;
    height: 100%;
    object-fit: cover;
`;

const Form = styled.div`
    width: calc(100% - 100px);
    position: absolute;
    z-index: 2;
    bottom: -25px;
    left: 50px;

    h3 {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: 12px 25px;
        box-sizing: border-box;
        border-top-left-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
        display: inline;
    }

    .form {
        padding: 50px;
        box-sizing: border-box;
        background-color: #fff;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.15); 
        margin-top: 12px;
        border-top-right-radius: ${borderRadius};
        border-bottom-left-radius: ${borderRadius};
        border-bottom-right-radius: ${borderRadius};

        p {
            margin: 0px 0px 5px 0px;
            font-size: 18px;
            font-weight: 400;
            opacity: .7;
        }

        input::placeholder, .ant-select-selection-placeholder {
            font-size: 18px;
            font-weight: bold;
            color: black;
        }

        button {
            color: ${({ theme }) => theme.primary};
            background-color: white;
            border: ${({ theme }) => "4px solid " + theme.primary};
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            display: block;
            border-radius: ${borderRadius};
            width: 100%;
            padding: 16px 32px;
            box-sizing: border-box;
            box-shadow: 0px;
        }
    }

    .ant-select-selector, .ant-input {
        padding: 0px !important;
    }

    button {
        margin: auto;
    }
`;


function Header() {
    return (
        <Container>
            <TextContainer>
                <div>
                    <h2>Levada, Tours, Hiking, Camping: <span>Madeira</span> Unveiled</h2>
                    <p>Discover Madeira's hidden beauty through guided levada tours, exhilarating hikes, and memorable camping experiences, immersing you in the island's natural wonders.</p>
                    <div className='social-container'>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="/images/social/facebook.svg" alt="facebook" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="/images/social/instagram.svg" alt="instagram" />
                        </a>
                        <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="/images/social/email.svg" alt="email" />
                        </a>
                    </div>
                </div>
            </TextContainer>
            <Background src="/images/homepage/header.jpg" alt="green leafs" />
            <Form>
                <h3>Online booking</h3>
                <div className='form'>
                    <Row type="flex" align="middle" gutter={64}>
                        <Col span={8} style={{
                            borderRight: "3px solid #E5E4DC",
                        }}>
                            <p>Date</p>
                            <Input bordered={false} placeholder='DD / MM / YYYY' />
                        </Col>
                        <Col span={8}>
                            <p>Activity</p>
                            <Select
                                placeholder="Choose the activity"
                                style={{
                                    width: "100%",
                                    margin: "0px"
                                }}
                                bordered={false}
                                options={[
                                    {
                                        value: 1,
                                        label: 'Safari',
                                    },
                                    {
                                        value: 2,
                                        label: 'Levada',
                                    },
                                    {
                                        value: 3,
                                        label: 'Tour',
                                    },
                                ]}
                            />
                        </Col>
                        <Col span={8}>
                            <button>Book now</button>
                        </Col>
                    </Row>
                </div>
            </Form>
        </Container>
    )
}

export default Header