import React, { useContext, useState } from 'react'
import { borderRadius, dimensions } from '../../helper';
import styled, { ThemeContext, keyframes } from 'styled-components'
import axios from "axios";
import { Section } from '../helpers/style';

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

        font-size: clamp(16px, 2vw, 20px);
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
    position: absolute;
    top: 50%;
    left: 50%;
    width: 28px;
    height: 28px;
    margin: -14px 0 0 -14px;
    transform: translate(-50%, -50%);

    .maskedCircle {
        width: 20px;
        height: 20px;
        border-radius: 12px;
        border: ${props => "3px solid " + props.background};
    }

    /* Spinning circle mask */
    .mask {
        width: 12px;
        height: 12px;
        overflow: hidden;
    }

    /* Spinner */
    .spinner {
        position: absolute;
        left: 1px;
        top: 1px;
        width: 26px;
        height: 26px;
        animation: ${spin} 1s infinite linear;
    }

`;

function Contact({ text }) {
    const [form, setForm] = useState({ name: undefined, email: undefined, text: undefined })
    const [loading, setLoading] = useState(false)
    const themeContext = useContext(ThemeContext);

    const onFinish = () => {
        setLoading(true);
        axios.post(`${window.location.origin}/api/contact`, form).then((response) => {
            if (response.status == 201) {
                setLoading(false);
                var fields = document.getElementsByClassName('contact-fields');

                Object.values(fields).map((field) => {
                    console.log(field);
                    field.value = field.defaultValue;
                })

                setForm({ name: undefined, email: undefined, text: undefined });;
            }

        }).catch(() => {
            setLoading(false);
        });



    };

    return (
        <Section>
            <h1>Love to hear from you, <br />
                Get in touch</h1>

            <Form>

                <input className="contact-fields" placeholder="nome" onChange={(e) => setForm({ ...form, name: e.target.value })} />

                <input type="email" className="contact-fields" placeholder='email' onChange={(e) => setForm({ ...form, email: e.target.value })} />

                <textarea className="contact-fields" rows="6" placeholder="fale connosco" onChange={(e) => setForm({ ...form, text: e.target.value })} />

                <button onClick={onFinish}>{loading ?
                    <Loading background={themeContext.text}>
                        <div class="loading">
                            <div class="spinner">
                                <div class="mask">
                                    <div class="maskedCircle" />
                                </div>
                            </div>
                        </div>
                    </Loading> : "send"}</button>

            </Form>


        </Section>
    )
}
export default Contact;