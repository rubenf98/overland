import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import styled from "styled-components";
import { dimensions } from '../../helper';
import { getPaymentDetails } from '../../redux/reservation/actions';
import { Link, useSearchParams } from 'react-router-dom';
import { PrimaryButton } from '../helpers/style';
import { Row } from 'antd';

const Container = styled.section`
    padding: 0px 0px;
    box-sizing: border-box;
    padding: 180px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px auto;

    img {
        width: 50%;
        margin: auto;
        display: block;
        margin-bottom: 50px;
        max-width: 350px;
    }

    h2 {
        text-align: center;
        margin: auto;
        font-size: 30px; /* Fallback value */
        font-size: clamp(20px, 3vw, 38px);
    }

    p {
        text-align: center;
        opacity: .7;
        width: 60%;
        margin: auto;
        font-size: 18px;
    }

    @media (max-width: ${dimensions.md}) {
        padding: 150px 0px;
        img {
            width: 80%;
        }

        p {
            width: 90%;
        }
    }
`;

function Success(props) {
    const { text } = require('../../../assets/' + props.language + "/reservation");
    const [searchParams] = useSearchParams();
    const [details, setDetails] = useState({ reference: undefined, entity: undefined, value: undefined })

    useEffect(() => {
        var reference = searchParams.get("reference");

        props.getPaymentDetails({ reference: reference }).then((response) => {
            setDetails({
                reference: response.action.payload.data.reference,
                entity: response.action.payload.data.entity,
                value: response.action.payload.data.value,
            });
        });
    }, [])


    return (
        <Container>
            <div>
                <img src="/images/other/email.svg" alt="email" />
                <h2>{text.success.title}</h2>
                <p>{text.success.text}</p>
                <Row type="flex" justify="center">
                    <ul>
                        <li><span>{text.success.details[0]}</span>: {details.entity}</li>
                        <li><span>{text.success.details[1]}</span>: {details.reference}</li>
                        <li><span>{text.success.details[2]}</span>: {details.value}€</li>
                    </ul>
                </Row>
                <Row type="flex" justify="center">

                    <Link to="/">
                        <PrimaryButton>
                            {text.success.button}
                        </PrimaryButton>
                    </Link>
                </Row>
            </div>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getPaymentDetails: (filters) => dispatch(getPaymentDetails(filters)),
    };
};

const mapStateToProps = (state) => {
    return {

        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Success);