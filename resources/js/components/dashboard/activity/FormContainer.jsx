import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Form, Button, Input, Col, InputNumber, Select, Upload } from 'antd';
import { connect } from "react-redux";
import TextArea from "antd/lib/input/TextArea";
import { updateActivity, createActivity } from "../../../redux/activity/actions";
import CategoryRemoteSelectContainer from "../category/CategoryRemoteSelectContainer";


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

const ImageContainer = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin: 5px 0px;
    img {
        width: 60px;
    }
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

function FormContainer({ loading, edit, handleClose, updateActivity, visible, current, createActivity }) {
    const [form] = Form.useForm();
    const [fileList, setFileList] = useState([]);
    const [banner, setBanner] = useState(undefined);
    const [uploading, setUploading] = useState(false);
    const handleModalClose = () => {
        form.resetFields();
        handleClose();
    }

    const createFormData = (values) => {
        var formData = new FormData();
        if (banner) {
            formData.append('banner', banner);
        }

        formData.append('name_pt', values.name_pt);
        formData.append('name_en', values.name_en);
        formData.append('category_id', values.category_id);
        formData.append('price', values.price);
        formData.append('minimum', values.minimum);
        formData.append('description1_pt', values.description1_pt);
        formData.append('description1_en', values.description1_en);
        formData.append('description2_pt', values.description2_pt);
        formData.append('description2_en', values.description2_en);
        formData.append('description3_pt', values.description3_pt);
        formData.append('description3_en', values.description3_en);


        return formData
    }

    const onFinish = () => {
        form.validateFields().then((values) => {
            if (edit) {
                var formData = createFormData(values);
                formData.append('_method', 'PUT');
                updateActivity(current.id, formData);
            } else {
                var formData = createFormData(values);
                createActivity(formData);
            }

            handleModalClose();
        }).catch((err) => {
            console.log(err)
            alert("ocorreu um problema")
        })
    };

    useEffect(() => {
        if (visible && edit) {
            if (edit) {
                form.setFieldsValue({
                    name_pt: current?.translation_names?.pt,
                    name_en: current?.translation_names?.en,
                    category_id: current?.category?.id,
                    price: current.price,
                    minimum: current.minimum,
                    description1_pt: current?.description1?.pt,
                    description1_en: current?.description1?.en,
                    description2_pt: current?.description2?.pt,
                    description2_en: current?.description2?.en,
                    description3_pt: current?.description3?.pt,
                    description3_en: current?.description3?.en,
                })
            } else {
                form.setFieldsValue({
                    name_pt: undefined,
                    name_en: undefined,
                    category_id: undefined,
                    price: undefined,
                    minimum: undefined,
                    description1_pt: undefined,
                    description1_en: undefined,
                    description2_pt: undefined,
                    description2_en: undefined,
                    description3_pt: undefined,
                    description3_en: undefined,
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

                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="name_pt" label="Nome (PT)">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="name_en" label="Nome (EN)">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.category} label="Categoria" name="category_id">
                                    <CategoryRemoteSelectContainer />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item rules={rules.people} name="price" label="Preço">
                                    <InputNumber style={{ width: "100%" }} addonAfter="€" />
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item rules={rules.people} name="minimum" label="Valor mínimo">
                                    <InputNumber style={{ width: "100%" }} addonAfter="€" />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="description1_pt" label="Sobre (PT)">
                                    <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="description1_en" label="Sobre (EN)">
                                    <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
                                </Form.Item>
                            </Col>

                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="description2_pt" label="Descrição (PT)">
                                    <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="description2_en" label="Descrição (EN)">
                                    <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
                                </Form.Item>
                            </Col>


                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="description3_pt" label="Descrição (PT)">
                                    <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.registration} name="description3_en" label="Descrição (EN)">
                                    <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
                                </Form.Item>
                            </Col>


                            <Col span={12}>
                                <p>Imagem</p>
                                <Upload
                                    maxCount={1}
                                    onRemove={() => setBanner(undefined)}
                                    beforeUpload={(file) => {
                                        const isLt5M = file.size / 1024 / 1024 < 5;
                                        if (isLt5M) {
                                            setBanner(file);
                                        }
                                        return false;
                                    }}
                                >
                                    <button type="button">Upload</button>
                                </Upload>
                                <ImageContainer>
                                    {(edit && !banner) && <img className="img-upload" src={current.image} />}
                                </ImageContainer>
                                <p className="ant-upload-hint">
                                    Suporte para uma imagem jpeg que irá ser utilizada na capa da atividade (max 5Mb).
                                </p>
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
        loading: state.activity.loading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateActivity: (id, data) => dispatch(updateActivity(id, data)),
        createActivity: (data) => dispatch(createActivity(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);