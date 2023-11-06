import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchActivity, fetchSafaries } from '../../redux/activity/actions';
import { connect } from 'react-redux';
import styled from "styled-components";
import { borderRadius, dimensions } from '../../helper';
import { Col, DatePicker, Row, Select } from 'antd';
import dayjs from "dayjs";
import { Section } from '../helpers/style';
import { handleForm } from '../../redux/application/actions';

const Content = styled.section`
    display: flex;
    align-items: stretch;
    margin-bottom: 70px;
    gap: 50px;

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;

        img {
            width: 100%;
            padding-right: 0px;
            min-height: 0px;
        }
            
    }
`;

const ImageContainer = styled.div`
    width: 40%;
    min-height: 60vh;  
    order: ${props => props.order};

    img {
        width: 100%;
        border-radius: ${borderRadius};
        height: 100%;
        object-fit: cover;
          
    }

    @media (max-width: ${dimensions.md}) {
  
            width: 100%;
            padding-right: 0px;
            min-height: 0px;
        
            
    }
`;

const InfoContent = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;
    order: ${props => props.order};

    @media (max-width: ${dimensions.md}) {
        width: 100%;   
        display: block;
    }

    .description {
        margin-bottom: 30px;
        margin-top: 0px;
    }

    h1 {
        font-size: clamp(30px, 3vw, 50px);
        margin: 0px;
    }

    h2 {
        margin-bottom: 50px;
        font-weight: 200;
        font-size: clamp(24px, 2.5vw, 30px);

        .price {
            color: ${({ theme }) => theme.secundary};
        }

        .person {
           font-size: 16px;
        }
    }
`;

const Form = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.secundary};
    padding: 20px;
    box-sizing: border-box;
    border-radius: ${borderRadius};

    h3 {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: 12px 25px;
        box-sizing: border-box;
        border-top-left-radius: ${borderRadius};
        border-top-right-radius: ${borderRadius};
        display: inline;
    }

    p {
        margin: 0px;
        font-size: clamp(16px, 2vw, 18px);;
        font-weight: 400;
        opacity: .7;
        color: white;
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
        color: ${({ theme }) => theme.secundary};
        background-color: white;
        border: ${({ theme }) => "4px solid " + theme.secundary};
        font-size: clamp(16px, 2vw, 18px);
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
    

    .ant-select-selector, .ant-input {
        padding: 0px !important;
    }

    @media (max-width: ${dimensions.md}) {
        h3 {
            padding: 0px;
        }

        button {
            padding: 8px 12px;
        }
    }
`;

function Safari(props) {
    const [form, setForm] = useState([{ date: undefined, time: undefined, activity: [] }])
    const { text } = require('../../../assets/' + props.language + "/activity");
    const [loading, setLoading] = useState(true)
    const { safaries, language } = props;

    useEffect(() => {
        props.fetchSafaries({ categoryId: 1, active: 1 });
    }, [])

    useEffect(() => {
        if (safaries.length) {
            var initState = [];
            safaries.map((safari) => {
                initState.push({ date: undefined, time: undefined, activity: [1, safari.id] });
            })

            setForm(initState)
            setLoading(false)
        }

    }, [safaries])

    function handleFormData(index, field, value) {
        var newFormData = { ...form };
        newFormData[index][field] = value;
        setForm(newFormData);

    }

    function handleItemClick(index) {
        props.handleForm(form[index])

    }
    console.log(form);
    const SectionSafari = ({ activity, index }) => (
        <Content >
            <ImageContainer order={index % 2 == 0 ? 1 : 2}>
                <img src={activity.image} alt={activity.name} />
            </ImageContainer >
            <InfoContent order={index % 2 == 0 ? 2 : 1}>
                <h1>{activity?.translation_names[language]}</h1>
                <h2>{text.price} <span className='price'>{activity.price}</span> <span className='person'>€/p</span></h2>

                <p className='description'>{activity.description1[language]}</p>
                <p className='description'>{activity.description2[language]}</p>
                <p className='description' style={{ flex: 1 }}>{activity.description3[language]}</p>

                <Form>
                    <Row type="flex" align="middle" gutter={{ xs: 8, md: 64 }}>
                        <Col span={8} >
                            <p>{text.form.date.label}</p>
                            <DatePicker
                                onChange={(e) => handleFormData(index, 'date', e)}
                                value={form[index].date}
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
                        <Col span={8}>
                            <p>{text.form.hour.label}</p>
                            <Select
                                onChange={(e) => handleFormData(index, 'time', e)}
                                style={{ width: "100%" }}
                                value={form[index].time}
                                bordered={false}
                                size='large'
                                placeholder="HH:MM"
                                options={[
                                    { value: "08:30", label: "08:30" },
                                    { value: "09:00", label: "09:00" },
                                    { value: "09:30", label: "09:30" },
                                    { value: "10:00", label: "10:00" },
                                    { value: "10:30", label: "10:30" },
                                    { value: "14:30", label: "14:30" },
                                ]}
                            /></Col>
                        <Col span={8}>
                            <button onClick={() => handleItemClick(index)}>{text.button}</button>
                        </Col>
                    </Row>
                </Form>
            </InfoContent>


        </Content>
    )

    return (
        <Section>
            {!loading && safaries.map((safari, index) => (
                <SectionSafari activity={safari} index={index} />
            ))}
        </Section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSafaries: (filters) => dispatch(fetchSafaries(filters)),
        handleForm: (formValues) => dispatch(handleForm(formValues)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.activity.loading,
        safaries: state.activity.safaries,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Safari);