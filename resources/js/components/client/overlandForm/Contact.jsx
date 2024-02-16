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
    country: [{ required: true, message: 'Ple ase input your origin Country!' }],
    postal_code: [{ required: true, message: 'Please input your Postal Code!' }],
    email: [{ required: true, message: 'Please input your Email!' }, { type: "email" }],
    local_address: [{ required: true, message: 'Please input your Local Address!' }],
};


function Contact({ text }) {
    var placeholder = text.placeholder.client;
    return (
        <Container>
            <h3>{text.titles[3]}</h3>
            <Row type="flex" gutter={32}>
                <Col xs={24} md={12}>
                    <Form.Item label={placeholder.name} name="name" rules={rules.name}>
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label={placeholder.country} name="country" rules={rules.country}>
                        <Input size="large" />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item label={placeholder.email} name="email" rules={rules.email}>
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label={placeholder.phone} name="phone" rules={rules.name}>
                        <Input size="large" />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item label={placeholder.flight} name="flight">
                        <Input size="large" />
                    </Form.Item>
                </Col>

            </Row>
        </Container>
    )
}

export default withTheme(Contact)