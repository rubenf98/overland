import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchVehicle, deleteVehicle } from '../../../redux/vehicle/actions';
import Banner from '../common/Banner';
import styled from "styled-components";
import { Col, Row } from 'antd';
import dayjs from "dayjs";

const Content = styled.section`
    margin: 50px 0px;
    padding: 0px 30px;
    box-sizing: border-box;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

const Action = styled.div`
    padding: 10px 16px;
    color: white;
    font-weight: bold;
    box-shadow: none;
    border: 0px;
    cursor: pointer;
    background-color: ${props => props.active ? "green" : "red"};
    margin-top: 16px;
`;

const Field = styled.div`
    padding: 5px 5px 5px 0px;
    box-sizing: border-box;
    display: inline;
    width: 33%;

    p {
        margin: 0px;
    }

    .value {
        opacity: .7;
    }

    .name {
        font-weight: bold;
    }
`;

const FieldsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
`;

function VehicleDetails(props) {
    const { vehicleId } = useParams();

    useEffect(() => {
        props.fetchVehicle(vehicleId)
    }, [vehicleId])

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

    const FieldContainer = ({ name, value }) => (
        <Field>
            <p className='name'>{name}</p>
            <p className='value'>{value}</p>
        </Field>
    )


    console.log(props.current)
    return (
        <div>
            <Banner text={"Veículo #" + vehicleId} />

            <Content>
                <Row gutter={64} align="stretch">
                    <Col xs={24} md={8}>
                        <img src={props.current.image} alt="" />
                    </Col>
                    <Col xs={24} md={16}>
                        <h2>Detalhes</h2>
                        <Row gutter={16}>
                            <Col xs={24} md={12}>
                                <Item label="Nome" value={props.current?.title} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Matrícula" value={props.current?.registration} />
                            </Col>

                            <Col xs={24} md={12}>
                                <Item label="Descrição (PT)" value={props.current?.description?.pt} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Descrição (EN)" value={props.current?.description?.en} />
                            </Col>
                            <Col span={24}>
                                <h2>Caraterísticas</h2>
                            </Col>
                            <FieldsContainer>
                                {props.current?.id && props?.current?.charateristics.map((char) => {
                                    if (char.pivot.value) {
                                        return (
                                            <Col xs={24} md={12}>
                                                <Item label={char.name.pt} key={char.id} value={JSON.parse(char.pivot.value)["pt"]} />
                                            </Col>
                                        )
                                    }

                                })}
                            </FieldsContainer>

                            <Col xs={24} md={12}>
                                <Item label="Estado" value={props.current?.status ? "Desbloqueado" : "Bloqueado"} />
                            </Col>
                        </Row>


                    </Col >
                </Row >
                <h2>Preços</h2>
                <Row gutter={64} align="stretch">
                    {props.current?.id && props?.current?.prices.map((price) => (
                        <Col xs={24} md={4}>
                            <Item label={dayjs().month(price.month).format('MMM')} key={price.id} value={price.price + "€"} />
                        </Col>
                    ))}
                </Row >


            </Content >
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchVehicle: (id) => dispatch(fetchVehicle(id)),
        deleteVehicle: (id) => dispatch(deleteVehicle(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.vehicle.loading,
        current: state.vehicle.current,
        language: state.application.language
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetails);