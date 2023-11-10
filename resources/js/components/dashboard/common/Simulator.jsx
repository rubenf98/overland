import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import styled from "styled-components";
import { Cascader, Col, DatePicker, Row, Select, message } from 'antd';
import dayjs from "dayjs";
import { dimensions } from '../../../helper';
import { fetchCategorySelector } from '../../../redux/category/actions';
import CouncilRemoteSelectContainer from '../council/CouncilRemoteSelectContainer';
import { simulatePrice } from '../../../redux/reservation/actions';



const Container = styled.div`
    width: 100%;
    padding: 50px 50px 0px 50px;
    box-sizing: border-box;
`;

const Form = styled.div`
    width: 100%;

    p {
        margin: 0px 0px 5px 0px;
        font-size: 18px;
        font-weight: 400;
        opacity: .7;
    }

    button {
        background-color: ${({ theme }) => theme.primary};
        color: white;
        border: 0px;
        display: block;
        box-shadow: 0px;
        cursor: pointer;
        width: 100%;
        font-size: 18px;
        font-weight: bold;
        padding: 20px 0px;
        box-sizing: border-box;
    }
`;



const Price = styled.p`
    font-weight: bold !important;
    margin: 10px 0px 10px 20px !important;
`;


function Simulator(props) {
    const [hasSimulated, setHasSimulated] = useState(false)
    const [form, setForm] = useState({ date: undefined, participants: undefined, activity: [], council_id: undefined })

    useEffect(() => {
        props.fetchCategorySelector({
            language: "pt",
            active: 1
        });
    }, [])

    const handleSubmit = () => {
        props.simulatePrice(form)
        setHasSimulated(true)
    }


    return (
        <Container>
            <Form>
                <Row type="flex" align="middle" gutter={64}>
                    <Col span={20}  >
                        <Row type="flex" align="start" gutter={64} style={{ padding: "10px 20px", boxSizing: 'border-box' }}>
                            <Col span={6} >
                                <p>Data</p>
                                <DatePicker
                                    onChange={(e) => setForm({ ...form, date: e })}
                                    style={{ width: "100%" }}
                                    format="DD/MM/YYYY"
                                    placeholder="DD/MM/YYYY"
                                    size='large'
                                    disabledDate={(currentDate) => {
                                        return currentDate &&
                                            (currentDate <= dayjs());
                                    }}
                                />
                            </Col>
                            <Col span={6}>
                                <p>Participantes</p>
                                <Select
                                    size='large'
                                    placeholder="Número de participantes"
                                    style={{ width: "100%" }}
                                    onChange={(e) => setForm({ ...form, participants: e })}
                                    options={[
                                        { value: 1, label: 1 },
                                        { value: 2, label: 2 },
                                        { value: 3, label: 3 },
                                        { value: 4, label: 4 },
                                        { value: 5, label: 5 },
                                        { value: 6, label: 6 },
                                        { value: 7, label: 7 },
                                        { value: 8, label: 8 },
                                        { value: 9, label: 9 },
                                        { value: 10, label: 10 },
                                        { value: 11, label: 11 },
                                        { value: 12, label: 12 },
                                        { value: 13, label: 13 },
                                        { value: 14, label: 14 },
                                        { value: 15, label: 15 },
                                        { value: 16, label: 16 },
                                        { value: 17, label: 17 },
                                        { value: 18, label: 18 },
                                        { value: 19, label: 19 },
                                        { value: 20, label: 20 },
                                    ]}
                                />
                            </Col>
                            <Col span={6}>
                                <p>Atividade</p>
                                <Cascader
                                    style={{ width: "100%" }}
                                    onChange={(e) => setForm({ ...form, activity: e })}
                                    size="large"
                                    placeholder="Atividade"
                                    expandTrigger="hover"
                                    options={props.activities}
                                    allowClear={false}
                                    fieldNames={{
                                        label: 'name',
                                        value: 'id',
                                        children: 'activities',
                                    }}

                                />
                            </Col>
                            <Col span={6}>
                                <p>Concelho</p>
                                <CouncilRemoteSelectContainer onChange={(e) => setForm({ ...form, council_id: e })} placeholder="Concelho" />
                            </Col>
                        </Row>
                        <Price>{(props.simulatedPrice && hasSimulated) ? "O preço total para as configurações escolhidas é de " + props.simulatedPrice + "€" : ""}</Price>
                    </Col>
                    <Col span={4}>
                        <button onClick={handleSubmit}>Simular</button>
                    </Col>
                </Row>



            </Form>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategorySelector: (filters) => dispatch(fetchCategorySelector(filters)),
        simulatePrice: (filters) => dispatch(simulatePrice(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        activities: state.category.selector,
        loading: state.category.loading,
        simulatedPrice: state.reservation.simulatedPrice,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Simulator);