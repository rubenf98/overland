import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchActivity, deleteActivity } from '../../../redux/activity/actions';
import Banner from '../common/Banner';
import styled from "styled-components";
import { Col, Row } from 'antd';

const Content = styled.section`
    margin: 50px 0px;
    padding: 0px 30px;
    box-sizing: border-box;

    img {
        width: 100%;
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

function ActivityDetails(props) {
    const { activityId } = useParams();

    useEffect(() => {
        props.fetchActivity(activityId)
    }, [activityId])

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


    console.log(props.current)
    return (
        <div>
            <Banner text={"Atividade #" + activityId} />

            <Content>
                <Row gutter={64}>
                    <Col xs={24} md={8}>
                        <img src={props.current.image} alt="" />
                    </Col>
                    <Col xs={24} md={16}>
                        <Row gutter={16}>
                            <Col xs={24} md={12}>
                                <Item label="Nome" value={props.current?.name} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Categoria" value={props.current?.category?.name?.pt} />
                            </Col>

                            <Col xs={24} md={12}>
                                <Item label="Sobre (PT)" value={props.current?.description1?.pt} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Sobre (EN)" value={props.current?.description1?.en} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Descrição (PT)" value={props.current?.description2?.pt} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Descrição (EN)" value={props.current?.description2?.en} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Requisitos (PT)" value={props.current?.description3?.pt} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Requisitos (EN)" value={props.current?.description3?.en} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Estado" value={props.current?.status ? "Desbloqueado" : "Bloqueado"} />
                            </Col>
                            <Col xs={24} md={12}>
                                <Item label="Preço" value={props.current?.price + "€"} />
                            </Col>
                        </Row>


                    </Col >
                </Row >




            </Content >
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchActivity: (id) => dispatch(fetchActivity(id)),
        deleteActivity: (id) => dispatch(deleteActivity(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.activity.loading,
        current: state.activity.current,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActivityDetails);