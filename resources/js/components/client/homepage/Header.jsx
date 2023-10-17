import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { borderRadius } from '../../../helper';
import { Cascader, Col, DatePicker, Row, Select } from 'antd';
import { fetchCategorySelector } from "../../../redux/category/actions";
import { handleForm } from '../../../redux/application/actions';
import { connect } from 'react-redux';
import dayjs from "dayjs";

const Container = styled.section`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    background-color: #F5F5F6;
    position: relative;
`;

export const CustomCascader = styled(Cascader)`
    width: 100%;
    border: none;
    
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;

    }

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
    max-width: 1600px;
    position: absolute;
    z-index: 2;
    bottom: -50px;
    left: 50%;
    transform: translate(-50%);

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
            margin: auto;
            cursor: pointer;
        }
    }

    .ant-select-selector, .ant-input {
        padding: 0px !important;
    }
`;

function Header(props) {
    const [form, setForm] = useState({ date: undefined, time: undefined, activity: [] })

    useEffect(() => {
        var searchDate = ""
        if (form.time) {
            const timesplit = form.time.split(':');
            searchDate = dayjs(form.date).set('hour', timesplit[0]).set('minute', timesplit[1]).format("YYYY-MM-DD HH:mm");
        } else {
            if (form.date) {
                searchDate = dayjs(form.date).format("YYYY-MM-DD");
            }
        }

        props.fetchCategorySelector({
            language: localStorage.getItem('language'),
            date: searchDate
        });
    }, [form.date, form.time])


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
                        <Col span={6} >
                            <p>Date</p>
                            <DatePicker
                                onChange={(e) => setForm({ ...form, date: e })}
                                style={{ width: "100%", paddingLeft: "0px" }}
                                bordered={false}
                                placeholder='DD / MM / YYYY'
                                format="DD/MM/YYYY"
                                disabledDate={(currentDate) => {
                                    return currentDate &&
                                        (currentDate <= dayjs());
                                }}
                            />
                        </Col>
                        <Col span={6} style={{
                            borderRight: "3px solid #E5E4DC",
                            borderLeft: "3px solid #E5E4DC",
                        }}>
                            <p>Hour</p>
                            <Select
                                onChange={(e) => setForm({ ...form, time: e })}
                                style={{ width: "100%" }}
                                bordered={false}
                                size='large'
                                placeholder="HH:MM"
                                options={[
                                    { value: "07:00", label: "07:00" },
                                    { value: "07:30", label: "07:30" },
                                    { value: "08:00", label: "08:00" },
                                    { value: "08:30", label: "08:30" },
                                    { value: "09:00", label: "09:00" },
                                    { value: "09:30", label: "09:30" },
                                    { value: "10:00", label: "10:00" },
                                    { value: "10:30", label: "10:30" },
                                    { value: "11:00", label: "11:00" },
                                    { value: "11:30", label: "11:30" },
                                    { value: "12:00", label: "12:00" },
                                    { value: "12:30", label: "12:30" },
                                    { value: "13:00", label: "13:00" },
                                    { value: "13:30", label: "13:30" },
                                    { value: "14:00", label: "14:00" },
                                    { value: "14:30", label: "14:30" },
                                    { value: "15:00", label: "15:00" },
                                    { value: "15:30", label: "15:30" },
                                    { value: "16:00", label: "16:00" },
                                    { value: "16:30", label: "16:30" },
                                    { value: "17:00", label: "17:00" },
                                    { value: "17:30", label: "17:30" },
                                    { value: "18:00", label: "18:00" },
                                    { value: "18:30", label: "18:30" },
                                    { value: "19:00", label: "19:00" },
                                    { value: "19:30", label: "19:30" },
                                    { value: "20:00", label: "20:00" },
                                    { value: "20:30", label: "20:30" },
                                ]}
                            /></Col>
                        <Col span={6}>
                            <p>Activity</p>
                            <CustomCascader
                                onChange={(e) => setForm({ ...form, activity: e })}
                                size="large"
                                expandTrigger="hover"
                                options={props.data}
                                allowClear={false}
                                placeholder="Choose the activity"
                                fieldNames={{
                                    label: 'name',
                                    value: 'id',
                                    children: 'activities',
                                }}

                            />
                        </Col>
                        <Col span={6}>
                            <button onClick={() => props.handleForm(form)}>Book now</button>
                        </Col>
                    </Row>
                </div>
            </Form>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (formValues) => dispatch(handleForm(formValues)),
        fetchCategorySelector: (filters) => dispatch(fetchCategorySelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.category.selector,
        loading: state.blockDate.loading,
        dates: state.blockDate.data,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);