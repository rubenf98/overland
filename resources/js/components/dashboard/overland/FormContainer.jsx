import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Form, Button, Input, Col, InputNumber, Select, Upload, DatePicker } from 'antd';
import { connect } from "react-redux";
import TextArea from "antd/lib/input/TextArea";
import { updateOverland, createOverland } from "../../../redux/overland/actions";
import VehicleRemoteSelectContainer from "../vehicle/VehicleRemoteSelectContainer";
import InsuranceRemoteSelectContainer from "../insurance/InsuranceRemoteSelectContainer";
import dayjs from "dayjs";

const ButtonContainer = styled(Row)`
    padding: 30px 0px 10px 0;
`;

const Container = styled.div`
    background: white;
    border-radius: 5px;
    width: 100%;
`;

const Instruction = styled.h2`
    font-weight: bold;
    margin-top: 50px;
`;

const rules = {
    price: [
        {
            required: true,
            message: 'O preço é obrigatório',
        },
    ],
    name: [
        {
            required: true,
            message: 'O título do extra é obrigatório',
        },
    ],
    type: [
        {
            required: true,
            message: 'A tipologia de valor é obrigatória',
        },
    ],
};

function FormContainer({ loading, edit, handleClose, updateOverland, visible, current, createOverland }) {
    const [form] = Form.useForm();
    const handleModalClose = () => {
        form.resetFields();
        handleClose();
    }

    const onFinish = () => {
        form.validateFields().then((values) => {
            var formData = { ...values, date: dayjs(values.date).format('YYYY-MM-DD HH:mm') };
            if (edit) {
                updateOverland(current.id, formData);
            } else {
                createOverland(formData);
            }

            handleModalClose();
        })
    };

    useEffect(() => {
        if (visible && edit) {
            if (edit) {
                form.setFieldsValue({
                    return_date: dayjs(current.return_date),
                    pickup_date: dayjs(current.pickup_date),
                    return_place: current.return_place,
                    pickup_place: current.pickup_place,
                    vehicle_id: current.vehicle.id,
                    insurance_id: current.insurance.id,
                    price: current.price,
                    flight: current.flight,
                    status: current.status,
                    notes: current.notes,
                    name: current?.client?.name,
                    email: current?.client?.email,
                    phone: current?.client?.phone,
                    country: current?.client?.country,
                    driver_name: current?.driver?.name,
                    driver_age: current?.driver?.age,
                    driver_license: current?.driver?.license,
                })
            } else {
                form.setFieldsValue({
                    return_date: undefined,
                    pickup_date: undefined,
                    return_place: undefined,
                    pickup_place: undefined,
                    vehicle_id: undefined,
                    flight: undefined,
                    insurance_id: undefined,
                    price: undefined,
                    status: undefined,
                    notes: undefined,
                    name: undefined,
                    email: undefined,
                    phone: undefined,
                    country: undefined,
                    driver_name: undefined,
                    driver_age: undefined,
                    driver_license: undefined,
                })
            }

        }
    }, [visible])


    return (
        <Container>
            <div>
                <Modal
                    width={1200}
                    onCancel={handleModalClose}
                    open={visible}
                    footer={null}
                >
                    <Form
                        form={form}
                        name="extra"
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Instruction>{edit ? "Edite os campos da atividade" : "Introduza uma nova atividade na plataforma"}</Instruction>
                        <Row gutter={16}>
                            <Col span={24}><h3>Dados da reserva</h3></Col>
                            <Col span={8}>
                                <Form.Item rules={rules.category} label="Veículo" name="vehicle_id">
                                    <VehicleRemoteSelectContainer />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.registration} name="pickup_date" label="Data de entrega">
                                    <DatePicker style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.registration} name="return_date" label="Data de recolha">
                                    <DatePicker style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.registration} name="pickup_place" label="Local de entrega">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.registration} name="return_place" label="Local de recolha">
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item rules={rules.people} name="price" label="Preço">
                                    <InputNumber style={{ width: "100%" }} addonAfter="€" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.people} name="status" label="Estado">
                                    <Select style={{ width: "100%" }}
                                        options={[
                                            {
                                                value: 'pendente',
                                                label: 'Pendente',
                                            },
                                            {
                                                value: 'confirmado',
                                                label: 'Confirmado',
                                            },
                                            {
                                                value: 'cancelado',
                                                label: 'Cancelado',
                                            },
                                        ]} />

                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item rules={rules.registration} name="flight" label="Número de voo">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.category} label="Seguro" name="insurance_id">
                                    <InsuranceRemoteSelectContainer />
                                </Form.Item>
                            </Col>

                            <Col span={24}>
                                <Form.Item rules={rules.registration} name="notes" label="Notas">
                                    <TextArea style={{ width: "100%" }} />
                                </Form.Item>
                            </Col>



                            <Col span={24}><h3>Dados do cliente</h3></Col>
                            <Col span={6}>
                                <Form.Item rules={rules.registration} name="name" label="Nome">
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={6}>
                                <Form.Item rules={rules.registration} name="email" label="Email">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item rules={rules.registration} name="phone" label="Contacto">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={6}>
                                <Form.Item rules={rules.registration} name="country" label="País">
                                    <Input />
                                </Form.Item>
                            </Col>


                            <Col span={24}><h3>Dados do condutor</h3></Col>
                            <Col span={8}>
                                <Form.Item rules={rules.registration} name="driver_name" label="Nome">
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item rules={rules.registration} name="driver_age" label="Idade">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.registration} name="driver_license" label="Carta de condução">
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>

                        <ButtonContainer type="flex" justify="end">
                            <Button disabled={loading} loading={loading} size="large" width="150px" type="primary" htmlType="submit">
                                Submeter
                            </Button>
                        </ButtonContainer>
                    </Form>

                </Modal>
            </div>
        </Container >
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.overland.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateOverland: (id, data) => dispatch(updateOverland(id, data)),
        createOverland: (data) => dispatch(createOverland(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);