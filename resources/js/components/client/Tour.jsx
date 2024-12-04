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


const Container = styled.section`
    width: 100%;
    max-width: 1600px;
    margin: auto auto 150px auto;
    display: block;
    padding: 20px;
    box-sizing: border-box;

    @media (max-width: ${dimensions.md}) {
        margin: auto auto 50px auto;
    }
`;


const Content = styled.section`
    display: flex;
    gap: 50px;

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    display: flex;
    gap: 20px;
    margin-bottom: 50px;


    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
        height: 50vh;  
    }

    .first {
        width: 25%;
    }

    .second {
        width: 35%;
    }

    .third {
        width: 40%;
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 10px;

        img {
            width: 100%;
            padding-right: 0px;
            height: 20vh; 
            min-height: 0px;
        }

        .first {
            flex-basis: calc(40% - 5px);
 
        }

        .second {
            flex-basis: calc(60% - 5px);
    
        }

        .third {
            flex-basis: 100%;
  
        }
            
    }
`;

const BulletContent = styled.section`
    width: 40%;

    @media (max-width: ${dimensions.md}) {
        width: 100%; 
    }

    h3 {
        margin: 0px 0px 30px 0px;
    }

    ul {
        list-style: none;
        padding: 0px;

        li {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;

            img {
                width: 30px;
                height: 30px;
            }

            p {
                margin: 0px 0px 10px 0px;
            }

            .title {
                font-size: clamp (18px, 2vw, 20px);
                font-weight: bold;
            }

            .item {
                font-size: clamp (14px, 1.5, 18px);
                opacity: .7;
            }


        }
    }
`;

const InfoContent = styled.section`
    width: 60%;
    display: flex;
    flex-direction: column;

    

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

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        .description-container {
            order: 2;
        }
    }
`;

const Form = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.primary};
    padding: 10px 10px 10px 20px;
    box-sizing: border-box;

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
        color: ${({ theme }) => theme.primary};
        background-color: white;
        border: ${({ theme }) => "4px solid " + theme.primary};
        font-size: clamp(16px, 2vw, 18px);
        font-weight: bold;
        text-align: center;
        display: block;
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
        order: 1;
        margin-bottom: 30px;
        
        h3 {
            padding: 0px;
        }

        button {
            padding: 8px 12px;
        }
    }
`;


const Title = styled.h1`
    
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    h1 {
        font-size: clamp(24px, 4vw, 50px);
        margin-top: 0px;
        width: 70%;
        line-height: 100%;
        margin-bottom: 30px;
        text-align: justify;
    }

    p {
        margin-top: 0px;
        font-weight: 200;
        font-size: clamp(20px, 2.5vw, 30px);
        margin-bottom: 30px;

        .price {
            color: ${({ theme }) => theme.primary};
        }

        .person {
           font-size: 16px;
        }
    }

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;
        h1 , p {
            margin-bottom: 5px;
            width: 100%;   
        }
    }
`;


function Tour(props) {
    const { text } = require('../../../assets/' + props.language + "/tour");

    const [loading, setLoading] = useState(true)
    const [form, setForm] = useState({ date: undefined, time: undefined, activity: [] })
    const { tourId } = useParams();
    const { activity, language } = props;

    useEffect(() => {
        props.fetchActivity(tourId).then(() => setLoading(false));
        setForm({ ...form, activity: [3, tourId] })
    }, []);

    return (
        <Container>
            {loading ? "loading" :

                <>
                    <Title>
                        <h1>{activity?.translation_names[language]}</h1>
                        <p>{text.price} <span className='price'>{activity.price}</span> <span className='person'>€/p</span></p>
                    </Title>

                    {activity.images.length >= 3 &&
                        <ImageContainer>
                            <img className='first' src={activity.images[0].path} alt={activity.name} />
                            <img className='second' src={activity?.images[1]?.path} alt={activity.name} />
                            <img className='third' src={activity?.images[2]?.path} alt={activity.name} />
                        </ImageContainer>
                    }
                    <Content>
                        <InfoContent>

                            <div className='description-container'>
                                <p className='description'>{activity.description1[language]}</p>
                                <p className='description'>{activity.description2[language]}</p>
                                <p className='description' style={{ flex: 1 }}>{activity.description3[language]}</p>
                            </div>
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
                                                { value: "08:30", label: "08:30" },
                                                { value: "09:00", label: "09:00" },
                                                { value: "09:30", label: "09:30" },
                                                { value: "10:00", label: "10:00" },
                                                { value: "10:30", label: "10:30" },
                                                { value: "14:30", label: "14:30" },
                                            ]}
                                        /></Col>
                                    <Col span={8}>
                                        <button onClick={() => props.handleForm(form)}>Book now</button>
                                    </Col>
                                </Row>
                            </Form>
                        </InfoContent>

                        <BulletContent>
                            <h3>{text.details.title}</h3>

                            <ul>
                                {text.details.items.map((item) => (
                                    <li>
                                        <div>
                                            <img src={item.img} alt={item.title} />
                                        </div>
                                        <div>
                                            <p className='title'>{item.title}</p>
                                            <p className='item'>{item.detail}</p>
                                        </div>
                                    </li>
                                ))}

                            </ul>
                        </BulletContent>


                    </Content>
                </>
            }
        </Container>
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