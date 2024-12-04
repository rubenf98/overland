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

const Safaries = styled.section`
    width: 100% ;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    
`;

const Content = styled.section`
    display: flex;
    align-items: stretch;
    margin-bottom: 70px;
    gap: 50px;
    flex-basis: calc(33% - 20px);

    @media (max-width: ${dimensions.md}) {
        flex-wrap: wrap;

        img {
            width: 100%;
            padding-right: 0px;
            min-height: 0px;
        }
            
    }
`;

const ImageContainer = styled.img`
    width: 100%;
    border-radius: ${borderRadius};
    height: 100%;
    object-fit: cover;
`;

const InfoContent = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;

    h3 {
        font-size: clamp(26px, 3vw, 36px);
        line-height: 100%;
    }

    p {
        font-weight: black;
        font-size: clamp(40px, 5vw, 50px);
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

    const SectionSafari = ({ activity, index }) => (
        <Content >
            <ImageContainer src={activity.image} alt={activity.name} />
            <InfoContent order={index % 2 == 0 ? 2 : 1}>
                <h3>{activity?.translation_names[language]}</h3>
                <p><span className='price'>{activity.price}</span> <span className='person'>€/p</span></p>
            </InfoContent>


        </Content>
    )

    return (
        <Section>
            <h2>A local's view on the best <span>tours </span>around the island</h2>
            <Safaries>
                {!loading && safaries.map((safari, index) => (
                    <SectionSafari activity={safari} index={index} />
                ))}
            </Safaries>
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