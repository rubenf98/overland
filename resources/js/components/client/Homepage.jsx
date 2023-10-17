import React, { useState } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'
import { setLanguage } from '../../redux/application/actions';
import Header from './homepage/Header';


const Container = styled.section`
    //
`;


function Homepage(props) {
    const { text } = require('../../../assets/' + props.language + "/homepage");

    return (
        <Container>
            <Header text={text} />
            {/* <Services />
            <Safari />
            <Levada text={text} />
            <Tour /> */}


        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        language: state.application.language,
    };
};

export default connect(mapStateToProps, null)(Homepage);