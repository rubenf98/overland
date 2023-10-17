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

    img {
        width: 40%;
        padding-right: 50px;
        box-sizing: border-box;
        border-radius: ${borderRadius};
        height: 100%;
        object-fit: cover;
        min-height: 60vh;

        
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;

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

function Tour(props) {
    const [loading, setLoading] = useState(true)
    const [form, setForm] = useState({ date: undefined, time: undefined, activity: [] })
    const { tourId } = useParams();
    const { activity, language } = props;

    useEffect(() => {
        props.fetchActivity(tourId).then(() => setLoading(false));
        setForm({ ...form, activity: [3, tourId] })
    }, []);

    return (
        <Section>
            {loading ? "loading" :
                <>
                    <p>Levadas {'>'} {activity?.translation_names[language]}</p>
                    <Content>
                        <img src={activity.image} alt={activity.name} />

                        <InfoContent>
                            <h1>{activity?.translation_names[language]}</h1>
                            <h2>desde <span className='price'>{activity.price}</span> <span className='person'>€/p</span></h2>

                            <p className='description'>{activity.description1[language]}</p>
                            <p className='description'>{activity.description2[language]}</p>
                            <p className='description' style={{ flex: 1 }}>{activity.description3[language]}</p>

                            <Form>
                                <Row type="flex" align="middle" gutter={{ xs: 8, md: 64 }}>
                                    <Col span={8} >
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
                                    <Col span={8}>
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
                                    <Col span={8}>
                                        <button onClick={() => props.handleForm(form)}>Book now</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Tour);