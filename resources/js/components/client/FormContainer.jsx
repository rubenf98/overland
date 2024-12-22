import React, { useContext, useState, useEffect } from 'react';
import { Form, Drawer, Row, notification, Popconfirm } from 'antd';
import styled, { ThemeContext, keyframes } from "styled-components";
import Information from './form/Information';
import Date from './form/Date';
import { createReservation } from '../../redux/reservation/actions';
import { connect } from "react-redux";
import Summary from './form/Summary';
import dayjs from 'dayjs';
import { borderRadius, dimensions } from '../../helper';
import { useNavigate } from 'react-router-dom';
import { fetchActivity } from '../../redux/activity/actions';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;


const Content = styled(Drawer)`
    color: white;
    

    .ant-drawer-wrapper-body {
        background: ${({ theme }) => theme.primary};
        padding: 50px;
        box-sizing: border-box;

        @media (max-width: ${dimensions.md}) {
            padding: 10px;
        }
        
    }

    .ant-drawer-body {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */

        &:-webkit-scrollbar { 
            display: none;  /* Safari and Chrome */
        }
    }
    
`;

const CloseContainer = styled.div`
    text-transform: uppercase;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    img {
        width: 12px;
        margin-left: 10px;
    }
`;

const Title = styled.h2`
    font-size: 36px;
    color: white;
    margin: 50px 0px;

    @media (max-width: ${dimensions.md}) {
        font-size: 26px;
    }
`;

const Next = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 20px 0px;

    img {
        width: 50px;
    }
`;



const Loading = styled.img`
    width: 50px;
    animation: ${rotate} 2s linear infinite;  
    opacity: 1 !important;
`;

const Previous = styled.img`
    cursor: pointer;
    width: 20px;
    opacity: ${props => props.visible ? 1 : 0};
    cursor: ${props => props.visible ? "pointer" : "default"};
    
`;

const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

const Button = styled.button`
    background-color: ${({ theme }) => theme.primary};
    color: white;
    padding: 12px 35px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid white;
    font-size: clamp(16px, 2vw, 18px);
`;

const Submit = styled(Button)`
    cursor: ${props => props.isloading ? "loading" : "pointer"};
    margin: 20px 0px;
    border: 0px;
    box-shadow: 0px;
    

    &:focus,
    &:active, &:hover {
        border: 0px;
        box-shadow: 0px;
    }

    img {
        opacity: ${props => props.isloading ? 0 : 1};
        width: 50px;
    }
`;


const FormContainer = ({ initForm, handleVisibility, createReservation, loading, activityInitialValue, fetchActivity }) => {
    const { text } = require('../../../assets/' + localStorage.getItem('language') + "/form");
    const [formData, setFormData] = useState({})
    const [step, setStep] = useState(0);
    const [nParticipants, setNParticipants] = useState(3);
    const [drawerWidth, setDrawerWidth] = useState(720);
    const [form] = Form.useForm();
    const themeContext = useContext(ThemeContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (initForm.activity.length) {
            fetchActivity(initForm.activity[1])
            handleReset(true);
            setFormData({ ...formData, ...initForm });
        }
    }, [initForm])

    useEffect(() => {
        setDrawerWidth(window.innerWidth > 720 ? 720 : window.innerWidth);
    }, [window.innerWidth])

    const steps = [
        {
            title: text.pages[0].title,
            content: <Information initForm={initForm} text={text.pages[0]} />
        },
        {
            title: text.pages[1].title,
            content: <Summary text={text.pages[3]} data={{ ...formData, date: dayjs(formData.date).format("YYYY-MM-DD") }} />
        }
    ]



    const nextStep = () => {
        form.validateFields().then((currentStepData) => {
            setFormData({ ...formData, ...currentStepData });
            if (step == 0) {
                setNParticipants(form.getFieldValue('participants'));
            }
            setStep(1);
        })

    }

    const previousStep = () => {
        setStep(step > 0 ? step - 1 : 0);
    }

    const handleReset = (close = true) => {
        setStep(0);
        form.resetFields();
        setFormData({});
        if (!close) {
            handleVisibility({ date: undefined, time: undefined, activity: [] });
        }

    }

    const handleFinish = () => {
        form.validateFields().then((currentStepData) => {
            createReservation({ ...formData, ...currentStepData, date: dayjs(formData.date).format('YYYY-MM-DD') + " " + formData.time }).then((response, err) => {
                if (!err) {
                    if (response.action.payload.data.sucesso == true) {
                        handleReset(false);
                        navigate("/success/?reference=" + response.action.payload.data.referencia);
                    } else {
                        navigate("/error");
                    }
                    // openNotificationWithIcon("success", {
                    //     message: text.success.message,
                    //     description: text.success.description,
                    // })

                }
            }).catch((error) => {
                let messages = [];

                Object.values(error.response.data.errors).map(function (message) {
                    messages.push(message[0])
                })

                openNotificationWithIcon("error", {
                    message: text.error.message,
                    description: messages.map((description, index) => (
                        <p key={index}>{description}</p>
                    ))

                })

            });
        })
    }

    const openNotificationWithIcon = (type, content) => {
        notification[type](content);
    };

    return (
        <Content
            background={themeContext.primary}
            title={null}
            placement="right"
            width={drawerWidth}
            closable={false}
            maskClosable={false}
            open={initForm.activity.length > 0}
        >
            {/* <FlexContainer>
                <Previous visible={step != 0} onClick={previousStep} src='/icon/previous.svg' alt="previous step" />
                <CloseContainer>
                    <Popconfirm
                        title={text.popconfirm.message}
                        onConfirm={() => handleVisibility({ date: undefined, time: undefined, activity: [] })}
                        okText={text.popconfirm.yes}
                        cancelText={text.popconfirm.no}
                    >
                        <span>{text.close}</span> <img src="/icon/close.svg" alt="close icon" />
                    </Popconfirm>
                </CloseContainer>
            </FlexContainer>

            <Title>{steps[step].title}</Title>

            <Form
                form={form}
                layout="vertical"
                name="order"
                requiredMark={false}
                initialValues={{
                    activity: activityInitialValue,
                }}
            >
                {steps[step].content}
            </Form>
            {
                step != 1 ?
                    <Next onClick={nextStep}>
                        <Button>next</Button>
                    </Next> :
                    <Row type="flex" justify='end'>
                        <Submit isloading={loading ? 1 : 0} onClick={handleFinish} type='primary' htmlType="submit">

                            {loading ? <Loading src="/icons/loading.svg" alt='loading' /> : "Book now"}
                        </Submit>
                    </Row>

            } */}

        </Content >

    );
};


const mapDispatchToProps = (dispatch) => {
    return {
        createReservation: (data) => dispatch(createReservation(data)),
        fetchActivity: (id) => dispatch(fetchActivity(id)),
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.reservation.loading,
        calendarMetadata: state.reservation.calendarMetadata,
        activityInitialValue: state.application.activityInitialValue,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FormContainer);