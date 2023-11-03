import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Cascader, Col, DatePicker, Row, Select, message } from 'antd';
import { fetchCategorySelector } from "../../../redux/category/actions";
import { isActivityAvailable } from "../../../redux/activity/actions";
import { handleForm } from '../../../redux/application/actions';
import { connect } from 'react-redux';
import dayjs from "dayjs";
import { dimensions } from '../../../helper';

const Container = styled.section`
    width: 100%;
    height: calc(100vh - 100px);
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
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
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: white;
    padding: 0px 30px;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    h2 {
        font-size: clamp(30px, 3vw, 50px);
        margin: 0px;

        span {
            color: ${({ theme }) => theme.primary}
        }
    }

    p {
        font-size: 20px;
        box-sizing: border-box;
        margin: 30px 0px 100px 0px;
    }

`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    gap: 20px;
    bottom: 20px;
    right: 20px;

    a {
        background-color: ${({ theme }) => theme.primary};
        padding: 7px;
        box-sizing: border-box;
        border-radius: 32px;
    }

    img {
        height: 25px;
        width: 25px;
    }

    @media (max-width: ${dimensions.md}) {
        flex-direction: row;

        a {
            border-radius: 22px;
        }
        img {
            height: 15px;
            width: 15px;
        }
    }
       
`;

const Background = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    position: absolute;
    top: -100px;
    left: 0;
    z-index: -1;
`;

const Form = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    padding: 20px 30px;
    box-sizing: border-box;
    width: 60%;

    @media (max-width: ${dimensions.lg}) {
        width: 70%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    p {
        margin: 0px 0px 5px 0px;
        font-size: 18px;
        font-weight: 400;
        opacity: .7;
        color: white;
    }

    input::placeholder, .ant-select-selection-placeholder {
        font-size: 18px;
        font-weight: bold;
        color: white;
    }
    .ant-select-selector {
        background-color: transparent !important;
    }

    input, .ant-select-selection-item {
        color: white !important;
        font-weight: bold;
    }

    input::placeholder, .ant-select-selection-placeholder {
        font-size: clamp(16px, 2vw, 18px);;
        font-weight: bold;
        color: white !important;
    }

    button {
        background-color: transparent;
        border: 0px;
        display: block;
        padding: 20px;
        box-sizing: border-box;
        box-shadow: 0px;
        margin: auto;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 50%;
            height: 50%;
            object-fit: contain;
        }
    }
    

    .ant-select-selector, .ant-input {
        padding: 0px !important;
    }
`;

function Header(props) {
    const [form, setForm] = useState({ date: undefined, time: undefined, activity: [] })
    const [messageApi, contextHolder] = message.useMessage();
    const [hasChecked, setHasChecked] = useState(false)

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
            date: searchDate,
            active: 1
        });
    }, [form.date, form.time])

    const handleSubmit = ({ }) => {
        props.isActivityAvailable({ 'date': dayjs(form.date).format('YYYY-MM-DD'), activity_id: form.activity[1] })
        setHasChecked(true);
    }

    useEffect(() => {
        if (hasChecked) {
            if (props.activityAvailable) {
                props.handleForm(form);
            } else {
                messageApi.open({
                    type: 'warning',
                    content: 'The selected activity is not available at that specific date',
                });
            }
        }

    }, [props.activityAvailable])

    return (
        <Container>
            {contextHolder}
            <Background src="/images/homepage/header_1920.jpg" alt="green leafs" />
            <SocialContainer>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook_white.svg" alt="facebook" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/whatsapp_white.svg" alt="whatsapp" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram_white.svg" alt="instagram" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/email_white.svg" alt="email" />
                </a>
            </SocialContainer>

            <div>
                <TextContainer>
                    <div>
                        <h2>{props.text.title}</h2>
                        <p>{props.text.subtitle}</p>

                    </div>
                </TextContainer>

                <Form>
                    <Row type="flex" align="middle" gutter={64}>
                        <Col span={6} >
                            <p>{props.text.form.date.label}</p>
                            <DatePicker
                                onChange={(e) => setForm({ ...form, date: e })}
                                style={{ width: "100%", paddingLeft: "0px" }}
                                bordered={false}
                                placeholder={props.text.form.date.placeholder}
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
                            <p>{props.text.form.hour.label}</p>
                            <Select
                                onChange={(e) => setForm({ ...form, time: e })}
                                style={{ width: "100%" }}
                                bordered={false}
                                size='large'
                                placeholder={props.text.form.hour.placeholder}
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
                            <p>{props.text.form.activity.label}</p>
                            <CustomCascader
                                onChange={(e) => setForm({ ...form, activity: e })}
                                size="large"
                                expandTrigger="hover"
                                options={props.data}
                                allowClear={false}
                                placeholder={props.text.form.activity.placeholder}
                                fieldNames={{
                                    label: 'name',
                                    value: 'id',
                                    children: 'activities',
                                }}

                            />
                        </Col>
                        <Col span={6}>
                            <button onClick={handleSubmit}> <img src="/icons/search.svg" alt="search" /></button>
                        </Col>
                    </Row>

                </Form>
            </div>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (formValues) => dispatch(handleForm(formValues)),
        fetchCategorySelector: (filters) => dispatch(fetchCategorySelector(filters)),
        isActivityAvailable: (filters) => dispatch(isActivityAvailable(filters))
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.category.selector,
        loading: state.blockDate.loading,
        dates: state.blockDate.data,
        activityAvailable: state.activity.activityAvailable
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);