import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchActivity } from '../../redux/activity/actions';
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
    padding-right: 50px;
    box-sizing: border-box;
    min-height: 60vh;  

    img {
        width: 100%;
        border-radius: ${borderRadius};
        height: 100%;
        object-fit: cover;
          
    }

    @media (max-width: ${dimensions.md}) {
        img {
            width: 100%;
            padding-right: 0px;
            min-height: 0px;
        }
            
    }
`;

const InfoContent = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;

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

function Levada(props) {
    const [loading, setLoading] = useState(true)
    const [form, setForm] = useState({ date: undefined, time: undefined, activity: [] })
    const { text } = require('../../../assets/' + props.language + "/activity");
    const { levadaId } = useParams();
    const { activity, language } = props;

    useEffect(() => {
        props.fetchActivity(levadaId).then(() => setLoading(false));
        setForm({ ...form, activity: [2, levadaId] })
    }, []);

    return (
        <Section>
            {loading ? "loading" :
                <>

                    <p>Levadas {'>'} {activity?.translation_names[language]}</p>

                    <Content>
                        <ImageContainer>
                            <img src={activity.image} alt={activity.name} />
                        </ImageContainer>
                        <InfoContent>
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
                                    <Col span={8}>
                                        <p>{text.form.hour.label}</p>
                                        <Select
                                            onChange={(e) => setForm({ ...form, time: e })}
                                            style={{ width: "100%" }}
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
                                        <button onClick={() => props.handleForm(form)}>{text.button}</button>
                                    </Col>
                                </Row>
                            </Form>
                        </InfoContent>


                    </Content>
                </>
            }
        </Section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivity: (id) => dispatch(fetchActivity(id)),
        handleForm: (formValues) => dispatch(handleForm(formValues)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.activity.loading,
        activity: state.activity.current,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Levada);