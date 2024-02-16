import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Modal, Row, Form, Button, Input, Col, InputNumber, Select, Upload, message } from 'antd';
import { connect } from "react-redux";
import TextArea from "antd/lib/input/TextArea";
import { updateVehicle, createVehicle } from "../../../redux/vehicle/actions";
import { fetchCharateristics } from "../../../redux/charateristic/actions";
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
    required: [
        {
            required: true,
            message: 'O campo é obrigatório',
        },
    ],
    type: [
        {
            required: true,
            message: 'A tipologia de valor é obrigatória',
        },
    ],
};

function FormContainer({ loading, edit, handleClose, updateVehicle, visible, current, createVehicle, charateristics, fetchCharateristics }) {
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

        formData.append('title', values.title);
        formData.append('registration', values.registration);
        formData.append('price[0]', parseFloat(values.price_0));
        formData.append('price[1]', parseFloat(values.price_1));
        formData.append('price[2]', parseFloat(values.price_2));
        formData.append('price[3]', parseFloat(values.price_3));
        formData.append('price[4]', parseFloat(values.price_4));
        formData.append('price[5]', parseFloat(values.price_5));
        formData.append('price[6]', parseFloat(values.price_6));
        formData.append('price[7]', parseFloat(values.price_7));
        formData.append('price[8]', parseFloat(values.price_8));
        formData.append('price[9]', parseFloat(values.price_9));
        formData.append('price[10]', parseFloat(values.price_10));
        formData.append('price[11]', parseFloat(values.price_11));
        formData.append('description_pt', values.description_pt);
        formData.append('description_en', values.description_en);

        charateristics.map((char) => {
            if (values["charpt_" + char.id]) {
                formData.append('charpt[' + char.id + ']', values["charpt_" + char.id]);
                formData.append('charen[' + char.id + ']', values["charen_" + char.id]);
            } else {
                formData.append('charpt[' + char.id + ']', "undefined");
                formData.append('charen[' + char.id + ']', "undefined");
            }

        })

        return formData
    }

    const onFinish = (values) => {
        if (edit) {
            var formData = createFormData(values);
            formData.append('_method', 'PUT');
            updateVehicle(current.id, formData).then(() => {
                handleModalClose();
            }).catch((err) => {
                console.log(err)
                alert("ocorreu um problema")
            });
        } else {
            var formData = createFormData(values);
            createVehicle(formData).then(() => {
                handleModalClose();
            }).catch((err) => {
                console.log(err)
                alert("ocorreu um problema")
            });
        }



    };

    useEffect(() => {
        fetchCharateristics();
    }, [])


    useEffect(() => {
        if (visible && edit) {
            if (edit) {
                var inputChars = {}
                var val = {};
                current?.charateristics.map((char) => {
                    if (char.pivot.value) {
                        val = JSON.parse(char.pivot.value)
                    } else {
                        val = { pt: undefined, en: undefined }
                    }

                    inputChars["charpt_" + char.id] = val.pt;
                    inputChars["charen_" + char.id] = val.en;
                })

                form.setFieldsValue({
                    title: current.title,
                    registration: current.registration,
                    price_0: current?.prices[0].price,
                    price_1: current?.prices[1].price,
                    price_2: current?.prices[2].price,
                    price_3: current?.prices[3].price,
                    price_4: current?.prices[4].price,
                    price_5: current?.prices[5].price,
                    price_6: current?.prices[6].price,
                    price_7: current?.prices[7].price,
                    price_8: current?.prices[8].price,
                    price_9: current?.prices[9].price,
                    price_10: current?.prices[10].price,
                    price_11: current?.prices[11].price,
                    description_pt: current?.description?.pt,
                    description_en: current?.description?.en,
                    ...inputChars
                })
                console.log(inputChars)
            } else {
                var inputChars = {}
                var val = {};
                charateristics.map((char) => {
                    inputChars["charpt_" + char.id] = "";
                    inputChars["charen_" + char.id] = "";
                })

                form.setFieldsValue({
                    title: undefined,
                    registration: undefined,
                    price_0: undefined,
                    price_1: undefined,
                    price_2: undefined,
                    price_3: undefined,
                    price_4: undefined,
                    price_5: undefined,
                    price_6: undefined,
                    price_7: undefined,
                    price_8: undefined,
                    price_9: undefined,
                    price_10: undefined,
                    price_11: undefined,
                    description_pt: undefined,
                    description_en: undefined,
                    ...inputChars
                })
            }

        }
    }, [visible])

    console.log(current);
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
                                <Form.Item rules={rules.required} name="title" label="Nome">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.required} name="registration" label="Matrícula">
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.required} name="description_pt" label="Sobre (PT)">
                                    <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item rules={rules.required} name="description_en" label="Sobre (EN)">
                                    <TextArea autoSize={{ minRows: 3, maxRows: 3 }} />
                                </Form.Item>
                            </Col>



                            <Col span={24}>
                                <h3>Preços</h3>
                            </Col>
                            {[...Array(12)].map((_, index) => (
                                <>
                                    <Col span={6}>
                                        <Form.Item rules={rules.price} name={"price_" + index} label={dayjs().month(index).format('MMM')}>
                                            <InputNumber style={{ width: "100%" }} addonAfter="€" />
                                        </Form.Item>
                                    </Col>
                                </>
                            ))}

                            <Col span={24}>
                                <h3>Caraterísticas</h3>
                            </Col>
                            {edit ? current?.charateristics.map((char, index) => (

                                <>
                                    <Col span={6}>
                                        <Form.Item name={"charpt_" + char.id} label={char.name.pt + " (PT)"}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item name={"charen_" + char.id} label={char.name.pt + " (EN)"}>
                                            <Input />
                                        </Form.Item>
                                    </Col>

                                </>
                            )) : charateristics.map((char, index) => (
                                <>
                                    <Col span={6}>
                                        <Form.Item name={"charpt_" + char.id} label={char.name.pt + " (PT)"}>
                                            <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={6}>
                                        <Form.Item name={"charen_" + char.id} label={char.name.pt + " (EN)"}>
                                            <Input />
                                        </Form.Item>
                                    </Col>

                                </>
                            ))}





                            <Col span={12}>
                                <h3>Imagem</h3>
                                <Upload
                                    maxCount={1}
                                    accept=".jpeg, .jpg"
                                    onRemove={() => setBanner(undefined)}
                                    beforeUpload={(file) => {
                                        const isLt5M = file.size / 1024 / 1024 < 5;
                                        if (isLt5M) {
                                            setBanner(file);
                                        } else {
                                            setBanner(undefined)
                                            message.warning("Imagem demasiado grande, o tamanho máximo suportado é 5Mb")
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
        loading: state.vehicle.loading,
        charateristics: state.charateristic.data,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateVehicle: (id, data) => dispatch(updateVehicle(id, data)),
        createVehicle: (data) => dispatch(createVehicle(data)),
        fetchCharateristics: (data) => dispatch(fetchCharateristics(data)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);