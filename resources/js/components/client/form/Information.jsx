import React, { useEffect } from 'react'
import { Row, Form, Col } from 'antd';
import { CustomDatePicker, CustomInput, CustomSelect } from './styles';
import { fetchCategorySelector } from "../../../redux/category/actions";
import { connect } from "react-redux";
import CustomCouncilRemoteSelectContainer from '../../dashboard/council/CustomCouncilRemoteSelectContainer';
import dayjs from "dayjs";


const rules = {
    required: [
        {
            required: true,
            message: 'Field is required',
        },
    ],
    email: [
        {
            required: true,
            message: 'Field is required',
        },
        {
            type: 'email',
            message: 'Please specify a valid email',
        },
    ],
    phone: [
        {
            required: true,
            message: '',
        },
    ],
    address: [
        {
            required: true,
            message: '',
        },
    ],
    participants: [
        {
            required: true,
            message: '',
        },
    ],
    activity: [
        {
            required: true,
            message: 'Please select an activity',
        },
    ],
};

function Information({ fetchCategorySelector, initForm, text }) {
    useEffect(() => {
        //fetchCategorySelector({ language: localStorage.getItem('language') });
    }, [])

    return (

        <div>
            <Row gutter={16}>
                <Col xs={24} md={12}>
                    {!initForm.date &&
                        <Form.Item
                            name="date"
                            rules={rules.required}
                        >
                            <CustomDatePicker
                                style={{ width: "100%", paddingLeft: "0px" }}

                                placeholder='DD / MM / YYYY'
                                format="DD/MM/YYYY"
                                disabledDate={(currentDate) => {
                                    return currentDate &&
                                        (currentDate <= dayjs());
                                }}
                            />
                        </Form.Item>
                    }

                </Col>
                <Col xs={24} md={12}>
                    {!initForm.time &&
                        <Form.Item
                            name="time"
                            rules={rules.required}
                        >
                            <CustomSelect
                                style={{ width: "100%" }}

                                placeholder="HH:MM"
                                options={[
                                    { value: "08:30", label: "08:30" },
                                    { value: "09:00", label: "09:00" },
                                    { value: "09:30", label: "09:30" },
                                    { value: "10:00", label: "10:00" },
                                    { value: "10:30", label: "10:30" },
                                    { value: "14:30", label: "14:30" },
                                ]}
                            />
                        </Form.Item>
                    }

                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="name"
                        rules={rules.required}
                    >
                        <CustomInput size='large' placeholder={text.form.name.placeholder} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="email"
                        rules={rules.email}
                    >
                        <CustomInput size='large' placeholder={text.form.email.placeholder} />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="phone"
                        rules={rules.required}
                    >
                        <CustomInput
                            size="large"
                            placeholder={text.form.phone.placeholder}
                        />
                    </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                    <Form.Item
                        name="country"
                        rules={rules.required}
                    >
                        <CustomInput
                            size="large"
                            placeholder={text.form.country.placeholder}
                        />
                    </Form.Item>
                </Col>

                <Col xs={24} md={12}>
                    <Form.Item
                        name="council_id"
                        rules={rules.required}
                    >

                        <CustomCouncilRemoteSelectContainer placeholder={text.form.council.placeholder} />
                    </Form.Item>
                </Col>


                <Col xs={24} md={12}>
                    <Form.Item
                        name="participants"
                        rules={rules.required}
                    >
                        <CustomSelect
                            size='large'
                            placeholder={text.form.participants.placeholder}
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

                    </Form.Item>
                </Col>

                <Col span={24}>
                    <Form.Item
                        name="address"
                        rules={rules.required}
                    >
                        <CustomInput size='large' placeholder={text.form.address.placeholder} />
                    </Form.Item>
                </Col>
            </Row>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCategorySelector: (filters) => dispatch(fetchCategorySelector(filters)),
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.category.selector,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Information);