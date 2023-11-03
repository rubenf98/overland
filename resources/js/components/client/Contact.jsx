import React, { useState } from 'react'
import { borderRadius, dimensions } from '../../helper';
import styled, { keyframes } from 'styled-components'
import axios from "axios";
import { Section } from '../helpers/style';
import { connect } from 'react-redux';
import { notification } from 'antd';

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
        border-radius: ${borderRadius};
        border: 0px;
        padding: 12px 32px;
        box-sizing: border-box;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(16px, 2vw, 20px);
        cursor: pointer;
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

function Contact(props) {
    const { text } = require('../../../assets/' + props.language + "/contact");
    const [form, setForm] = useState({ name: undefined, email: undefined, message: undefined })
    const [loading, setLoading] = useState(false)
    const [api, contextHolder] = notification.useNotification();

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
                setForm({ name: undefined, email: undefined, message: undefined });;
            }

        }).catch(() => {
            setLoading(false);
        });



    };

    return (
        <Section>
            {contextHolder}
            <h1>{text.title}</h1>

            <Form>

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