import React from 'react'
import styled, { withTheme } from "styled-components";
import { Col, Form, Input, Row } from 'antd';

const Container = styled.section`
//
`;

const rules = {
    name: [{ required: true, message: 'Please input your fullname!' }],
    cc: [{ required: true, message: 'Please input your ID or passport!' }],
    nif: [{ required: true, message: 'Please input your Tax Identification Number!' }],
    address: [{ required: true, message: 'Please input your Address!' }],
    country: [{ required: true, message: 'Please input your origin Country!' }],
    postal_code: [{ required: true, message: 'Please input your Postal Code!' }],
    email: [{ required: true, message: 'Please input your Email!' }, { type: "email" }],
    local_address: [{ required: true, message: 'Please input your Local Address!' }],
};


function Driver({ text }) {
    var placeholder = text.placeholder.driver;
    return (
        <Container>
            <h3>{text.titles[4]}</h3>

            <Row type="flex" gutter={32}>
                <Col span={24}>
                    <Form.Item label={placeholder.name} name="driver_name" rules={rules.name}>
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label={placeholder.age} name="driver_age" rules={rules.name}>
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col span={24}>
                    <Form.Item label={placeholder.license} name="driver_license" rules={rules.country}>
                        <Input size="large" />
                    </Form.Item>
                </Col>
            </Row>
        </Container>
    )
}

export default withTheme(Driver)