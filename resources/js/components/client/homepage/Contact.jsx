import React, { useState } from 'react'
import { borderRadius, dimensions } from '../../../helper';
import styled, { keyframes } from 'styled-components'
import axios from "axios";

import { connect } from 'react-redux';
import { Collapse, notification } from 'antd';
import { Section, SectionTitle } from '../../helpers/style';
import { Link } from 'react-router-dom';

const spin = keyframes`
  from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
`;

const Form = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    input, textarea  {
        padding: 20px;
        box-sizing: border-box;
        margin: 20px 0px;
        border: 0px;
        border-bottom: 1px solid black;
        outline: none;
        background: #EBE9E9;
        box-sizing: border-box;

        &:focus, &:active, &:focus-visible {
            border-bottom: 2px solid black;
        }

        &::placeholder {
            letter-spacing: -0.9px;
            font-size: 15px;
        }

    }

    input  {
        margin: 10px 0px;
        width: 45%;
    }

    textarea {
        margin: 60px 0px;
        resize: none;
        width: 100%;
    }
    
    button {
        position: relative;
        background-color: ${({ theme }) => theme.primary};
        border: 0px;
        padding: 12px 32px;
        box-sizing: border-box;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(16px, 2vw, 20px);
        cursor: pointer;
        text-transform: uppercase;
    }

    @media (max-width: ${dimensions.md}) {
        input {
            width: 100%;
        }

        textarea {
            margin: 15px 0px;
        }
    }
`;

const Loading = styled.div`
    width: 28px;
    height: 28px;

    .maskedCircle {
        width: 20px;
        height: 20px;
        border-radius: 12px;
        border: 3px solid white;
    }

    /* Spinning circle mask */
    .mask {
        width: 12px;
        height: 12px;
        overflow: hidden;
    }

    /* Spinner */
    .spinner {

        width: 26px;
        height: 26px;
        animation: ${spin} 1s infinite linear;
    }

`;

const FaqContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    gap: 30px;
    margin: 30px 0px 100px 0px;
    flex-wrap: wrap;

    .contact-container {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        padding: 40px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2); 
    

        button {
            margin-top: 30px;
            font-size: 18px;
            padding: 12px 40px; 
            border: 1px solid #000; 
            background-color: white;
            cursor: pointer;
        }
    } 

    .ant-collapse {
        flex: 1;
        padding-right: 50px;
        box-sizing: border-box;
    }
`;

function Contact(props) {
    const [form, setForm] = useState({ name: undefined, email: undefined, message: undefined })
    const [loading, setLoading] = useState(false)
    const [api, contextHolder] = notification.useNotification();
    const { text } = props;
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: '',
            description: text.feedback,
        });
    };


    const onFinish = () => {
        setLoading(true);
        axios.post(`${window.location.origin}/api/contact`, form).then((response) => {
            if (response.status == 201) {
                setLoading(false);
                openNotificationWithIcon('success');
                setForm({ name: undefined, email: undefined, message: undefined });
            }

        }).catch(() => {
            setLoading(false);
        });



    };

    return (
        <Section id="contact">
            {contextHolder}
            <SectionTitle>{text.faqTitle}</SectionTitle>

            <FaqContainer>
                <Collapse accordion defaultActiveKey={['1']} ghost items={text.faq} />
                <div className='contact-container'>
                    <div>
                        <h3>{text.contact.title}</h3>
                        <p>{text.contact.description}</p>
                        <a href="/#contact-form"><button>{text.contact.button}</button></a>

                    </div>
                </div>
            </FaqContainer>

            <SectionTitle>{text.title}</SectionTitle>

            <Form id="contact-form">

                <input className="contact-fields" placeholder={text.form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />

                <input type="email" className="contact-fields" placeholder={text.form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />

                <textarea className="contact-fields" rows="6" placeholder={text.form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />

                <button onClick={onFinish}>
                    {loading ?
                        <Loading>
                            <div class="loading">
                                <div class="spinner">
                                    <div class="mask">
                                        <div class="maskedCircle" />
                                    </div>
                                </div>
                            </div>
                        </Loading> : text.button
                    }
                </button>

            </Form>



        </Section>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, null)(Contact);