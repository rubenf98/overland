import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Form, Button, Input, Col } from 'antd';
import { connect } from "react-redux";
import { updatePartner, createPartner } from "../../../redux/partner/actions";


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

function FormContainer({ loading, edit, handleClose, updatePartner, visible, current, createPartner }) {
    const [form] = Form.useForm();

    const handleModalClose = () => {
        form.resetFields();
        handleClose();
    }

    const onFinish = () => {
        form.validateFields().then((values) => {
            if (edit) {
                updatePartner(current.id, values);
            } else {
                createPartner(values);
            }

            handleModalClose();
        })
    };

    useEffect(() => {
        if (visible && edit) {
            if (edit) {
                form.setFieldsValue({
                    name: current?.name,
                    email: current?.user?.email,
                })
            } else {
                form.setFieldsValue({
                    name: undefined,
                    email: undefined,
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
                        <Instruction>{edit ? "Edite os campos do parceiro" : "Introduza um novo parceiro na plataforma"}</Instruction>
                        <Row gutter={16}>

                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="name" label="Nome">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="email" label="Email">
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
        loading: state.partner.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePartner: (id, data) => dispatch(updatePartner(id, data)),
        createPartner: (data) => dispatch(createPartner(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);