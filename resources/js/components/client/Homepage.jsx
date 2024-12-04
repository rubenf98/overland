import React, { useState } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'
import { setLanguage } from '../../redux/application/actions';
import { fetchBlockDates } from '../../redux/blockDate/actions';
import { useNavigate } from 'react-router-dom';
import Header from './homepage/Header';
import Tour from './homepage/Tour';
import About from './homepage/About';
import Contact from './homepage/Contact';

const Container = styled.section`
    //
`;


function Homepage(props) {
    const { text } = require('../../../assets/' + props.language + "/homepage");

    return (
        <Container>
            <Header text={text.header} />
            <About text={text.about} />
            {/* <Overland text={text.overland} /> */}
            {/* <Services text={text.services} /> */}
            {/* <Safari text={text.safari} /> */}
            {/* <Levada text={text.levada} /> */}
            <Tour text={text.tour} />
            <Contact text={text.contact} />
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLanguage: (state) => dispatch(setLanguage(state)),
        fetchBlockDates: (filters) => dispatch(fetchBlockDates(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);