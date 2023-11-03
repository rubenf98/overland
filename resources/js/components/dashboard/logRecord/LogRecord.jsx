import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchLogRecords } from "../../../redux/logRecord/actions";
import dayjs from "dayjs";

const Banner = styled.section`
    background: url("/images/dashboard/banner.svg");
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 20vh;
    color: white;
    display: flex;
    align-items: flex-end;

    h1 {
        padding: 0px 0px 40px 40px;
        margin: 0px;
        box-sizing: border-box;
        font-size: 36px;
    }
`;

const Container = styled.div`
    width: 100%;
    padding: 50px;
    box-sizing: border-box;

    span {
        font-weight: bold;
    }
`;

function LogRecord(props) {
    const { data, loading } = props;

    useEffect(() => {
        props.fetchLogRecords();
    }, [])

    return (
        <div>
            <Banner>
                <h1>Registo de atividade</h1>
            </Banner>
            <Container>
                {data.map((log) => (
                    <div>
                        <span>{dayjs(log.created_at).format('DD-MM-YYYY HH:mm')}:</span> {log.user.name} {log.description}
                    </div>
                ))}
            </Container>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLogRecords: (filters) => dispatch(fetchLogRecords(filters)),
    };
};


const mapStateToProps = (state) => {
    return {
        loading: state.logRecord.loading,
        data: state.logRecord.data,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogRecord);