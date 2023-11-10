import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchRelevantReservations } from "../../redux/reservation/actions";
import Sidemenu from "./common/Sidemenu";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    min-width: 100vw;
    min-height: 100vh;

    .dashboard-content {
        flex: 1;
        background-color: white;
    }
`;

function Dashboard(props) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!props.isAuthenticated) {
            navigate("/login");
        }
    }, [props.isAuthenticated])

    return (
        <Container>
            <Sidemenu user={props.user} />
            <div className="dashboard-content"> {props.children} </div>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchRelevantReservations: () => dispatch(fetchRelevantReservations()),
    };
};

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        user: state.auth.currentUser,
        loading: state.reservation.loading,
        data: state.reservation.relevantData
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
