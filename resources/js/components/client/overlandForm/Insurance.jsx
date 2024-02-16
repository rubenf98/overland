import React, { useEffect, useState } from 'react'
import styled, { withTheme } from "styled-components";
import { fetchInsurances } from "../../../redux/insurance/actions";
import { connect } from "react-redux";
import { borderRadius, dimensions } from '../../../helper';


const Container = styled.div`
    width: 100%;

    @media (max-width: ${dimensions.lg}) {
        width: 100%;
        margin-bottom: 100px;
    }
`;

const PackageContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 35px;

    @media (max-width: ${dimensions.lg}) {
        justify-content: space-around;
    }

    .border {
        border: 2px solid;
        border-color: ${props => props.border}; 
    }
`;


const Package = styled.div`
    padding: 20px;
    box-sizing: border-box;
    opacity: ${props => props.active ? 1 : .5};
    border: 1px solid;
    border-color: ${props => props.active ? props.theme.primary : "transparent"};
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
    width: 30%;
    cursor: pointer;

    button {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: 12px 28px;
        box-sizing: border-box;
        cursor: pointer;
        border: 0px;
        font-size: clamp(16px, 2vw, 20px);
        margin: auto;
        display: block;
    }

    @media (max-width: ${dimensions.lg}) {
        width: 45%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
    }

    h3 {
        font-size: 20px;
        font-weight: 700;
        text-align: center;
    }

    ul {
        margin: 40px 0px;
    } 

    li {
        font-size: 14px;
    }

    p {
        font-size: 14px;
        text-align: center;
        margin: auto;
        margin-top: 10px;
        
    }

    .discount {
        text-decoration: line-through;
    }
`;



function Insurance(props) {
    const { insurances, text, language, activeInsurance } = props;

    useEffect(() => {
        props.fetchInsurances();
    }, [])

    useEffect(() => {
        if (insurances.length) {
            var price = insurances.filter((insurance) => {
                return insurance.id == 3;
            })

            props.setActiveInsurance(price[0]);
        }
    }, [insurances])


    return (
        <Container>
            <h3>{text.titles[1]}</h3>


            <PackageContainer>
                {insurances.map((insurance) => (
                    <Package
                        key={insurance.id}
                        active={activeInsurance.id == insurance.id}
                        onClick={() => props.setActiveInsurance(insurance)}
                    >
                        <h3>{insurance.name[language]}</h3>
                        <ul>
                            <li>{insurance.description[language]}</li>
                        </ul>
                        <button type='button'>
                            {text.insurance.button}
                        </button>
                        <p>
                            {insurance.price}€
                        </p>
                    </Package>
                ))}
            </PackageContainer>
            <p>{text.insurance.disclaimer}</p>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInsurances: () => dispatch(fetchInsurances()),
    };
};

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
        insurances: state.insurance.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(Insurance));