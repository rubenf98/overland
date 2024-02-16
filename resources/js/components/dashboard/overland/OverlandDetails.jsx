import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { fetchOverland } from '../../../redux/overland/actions';
import { connect } from 'react-redux';
import dayjs from "dayjs";
import Banner from "../common/Banner";
import { Col, Row } from 'antd';

function OverlandDetails(props) {
    const { overlandId } = useParams();

    useEffect(() => {
        props.fetchOverland(overlandId)
    }, [overlandId])

    const Item = ({ label, value }) => (
        <div>
            <h3 style={{ margin: "3px 0px 0px 0px" }}>{label}</h3>
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
            <Banner text={"Overland #" + overlandId} />

            <Row style={{ padding: "50px", boxSizing: "border-box" }}>
                <Col xs={24} md={8}>
                    <h2>Detalhes da reserva</h2>
                    <Item label="Identificador de confirmação" value={props.current.token} />
                    <Item label="Datas" value={dayjs(props.current.pickup_date).format('DD-MM-YYYY') + " até " + dayjs(props.current.return_date).format('DD-MM-YYYY')} />
                    <Item label="Data de criação" value={props.current.created_at} />
                    <Item label="Estado" value={props.current.status} />
                    <Item label="Local de entrega" value={props.current.pickup_place} />
                    <Item label="Nº de voo" value={props.current.flight} />

                    <h2>Condutor</h2>
                    <Item label="Nome" value={props.current?.driver?.name} />
                    <Item label="Idade" value={props.current?.driver?.age} />
                    <Item label="Carta de condução" value={props.current?.driver?.license} />

                    {/* <Item label="Notas" value={props.current.notes ? props.current.notes : "---"} /> */}
                </Col>
                <Col xs={24} md={8}>
                    <h2>Cliente</h2>
                    <Item label="Nome" value={props.current?.client?.name} />
                    <Item label="Email" value={props.current?.client?.email} />
                    <Item label="Telemóvel" value={props.current?.client?.phone} />
                    <Item label="País" value={props.current?.client?.country} />

                    <h2>Pagamento</h2>
                    <Item label="Veículo" value={props.current.vehicle_price + "€"} />
                    {props.current.id && props.current?.extras.map((extra) => (
                        <Item label={extra.name.pt} key={extra.id} value={extra.price + "€"} />
                    ))}
                    <Item label="Seguro" value={(props?.current?.insurance?.price * props.current.days) + "€"} />
                    <Item label="Total" value={props.current.price + "€"} />

                    <Item label="Referência" value={props.current?.payment?.reference} />
                    <Item label="Entidade" value={props.current?.payment?.entity} />
                </Col>
                <Col xs={24} md={8}>
                    <h2>Veículo</h2>
                    <Item label="Matrícula" value={props.current?.vehicle?.registration} />
                    <Item label="Título" value={props.current?.vehicle?.title} />

                    <h2>Seguro</h2>
                    <Item label="Nome" value={props.current?.insurance?.name?.pt} />
                    <Item label="Preço" value={props.current?.insurance?.price + "€"} />
                    <Item label="Valor máximo" value={props.current?.insurance?.waiver + "€"} />
                </Col>
            </Row>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchOverland: (id) => dispatch(fetchOverland(id)),
        deleteOverland: (id) => dispatch(deleteOverland(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.overland.loading,
        current: state.overland.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OverlandDetails);