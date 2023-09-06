import React, { useState } from 'react'
import styled from "styled-components";
import { connect } from 'react-redux'
import { setLanguage } from '../../redux/application/actions';
import { fetchBlockDates } from '../../redux/blockDate/actions';
import Navbar from './common/Navbar';
import Menu from './common/Menu';
import { borderRadius, dimensions } from '../../helper';
import { useNavigate } from 'react-router-dom';
import Header from './homepage/Header';

const Container = styled.section`
//

`;


function Homepage(props) {
    const { text } = require('../../../assets/' + props.language + "/homepage");
    const [active, setActive] = useState(1)
    let navigate = useNavigate();

    return (
        <Container>
            <Header />


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