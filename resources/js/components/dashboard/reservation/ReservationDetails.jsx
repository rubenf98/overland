import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchReservation } from '../../../redux/reservation/actions';
import { connect } from 'react-redux';
import styled from "styled-components";
import Banner from "../common/Banner";
import { Col, Row } from 'antd';

function ReservationDetails(props) {
    const { reservationId } = useParams();

    useEffect(() => {
        props.fetchReservation(reservationId)
    }, [reservationId])

    const Item = ({ label, value }) => (
        <div>
            <h3 style={{ marginBottom: "0px" }}>{label}</h3>
            <EmptyField>{value}</EmptyField>
        </div>
    )

    const EmptyField = ({ children }) => (
        <p style={{ margin: "0px" }}>
            {children ? children : "---"}
        </p>
    )

    return (
        <div>
            <Banner text={"Reserva #" + reservationId} />

            <Row style={{ padding: "50px", boxSizing: "border-box" }}>
                <Col xs={24} md={8}>
                    <h2>Detalhes da reserva</h2>
                    <Item label="Identificador de confirmação" value={props.current.token} />
                    <Item label="Data da atividade" value={props.current.date} />
                    <Item label="Data de reserva" value={props.current.created_at} />
                    <Item label="Participantes" value={props.current.participants} />
                    <Item label="Estado" value={props.current.status} />
                    <Item label="Método de pagamento" value={props.current.payment_method} />
                    <Item label="Total" value={props.current.price + "€"} />
                    <Item label="Preço da atividade" value={props.current.activity_price + "€"} />
                    <Item label="Preço do transporte" value={props.current.transportation_price + "€"} />
                    {/* <Item label="Notas" value={props.current.notes ? props.current.notes : "---"} /> */}
                </Col>
                <Col xs={24} md={8}>
                    <h2>Cliente</h2>
                    <Item label="Id" value={props.current?.client?.id} />
                    <Item label="Nome" value={props.current?.client?.name} />
                    <Item label="Email" value={props.current?.client?.email} />
                    <Item label="Telemóvel" value={props.current?.client?.phone} />
                    <Item label="País" value={props.current?.client?.country} />
                </Col>
                <Col xs={24} md={8}>
                    <h2>Atividade</h2>
                    <Item label="Id" value={props.current?.activity?.id} />
                    <Item label="Título" value={props.current?.activity?.name?.pt} />
                    <Item label="Valor mínimo" value={props.current?.activity?.minimum + "€"} />
                </Col>
            </Row>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReservation: (id) => dispatch(fetchReservation(id)),
        deleteReservation: (id) => dispatch(deleteReservation(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        current: state.reservation.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservationDetails);