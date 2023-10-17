import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Form, Input, Row } from 'antd';
import { dimensions } from '../../../helper';
import dayjs from 'dayjs';

const Flex = styled(Row)`
    margin: 10px auto 60px auto;
    position: relative;
    width: 100%;
    color: white;
`;

const Detail = styled.div`
    font-size: 18px;
    width: 50%;
    padding: 10px 10px;
    box-sizing: border-box;
    font-weight: bold;
    color: white;

    .fieldname {
        display: block;
        font-weight: 300;
    }

    .old-price {
        font-size: 16px;
        text-decoration: line-through;
        opacity: .6;
        margin-left: 10px;
    }
`;

const Participant = styled(Detail)`
    width: 50%;
`;


const Container = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
    flex-wrap: wrap;

    div {
        border: 1px solid white;
        padding: 40px;
        box-sizing: border-box;
        width: 30%;
        color: white;
        text-align: center;
        opacity: .5;
        transition: opacity .3s ease;
        cursor: pointer;

        @media (max-width: ${dimensions.lg}) {
            width: 45%;
        }

        @media (max-width: ${dimensions.md}) {
            width: 80%;
            margin: 20px 0px;
        }

        @media (max-width: ${dimensions.sm}) {
            width: 90%;
        }

        &:hover{
            opacity: 1;
        }
    }

    .active {
        opacity: 1;
    }
`;


function Type({ text, setBookingType, active }) {

    function handleSelection(value) {
        setBookingType(value);

    }

    return (
        <>

            <Container>

                <div onClick={() => handleSelection(1)} className={active == 1 ? "active" : ""}>
                    {text.options[0]}
                </div>
                <div onClick={() => handleSelection(2)} className={active == 2 ? "active" : ""}>
                    {text.options[1]}
                </div>
            </Container>

            <Form.Item name="type" rules={[
                {
                    required: true,
                    message: 'Please select the type of booking experience',
                },
            ]}>
                <></>
            </Form.Item>
        </>

    )
}

export default Type;