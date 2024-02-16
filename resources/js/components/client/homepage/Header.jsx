import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Cascader, Col, DatePicker, Row, Select, message } from 'antd';
import { fetchCategorySelector } from "../../../redux/category/actions";
import { isActivityAvailable } from "../../../redux/activity/actions";
import { handleForm } from '../../../redux/application/actions';
import { connect } from 'react-redux';
import dayjs from "dayjs";
import { borderRadius, dimensions } from '../../../helper';

const Container = styled.section`
    width: 100%;
    min-height: calc(100vh - 100px);
    position: relative;
    display: flex;
    align-items: center;
    box-sizing: border-box;
`;

export const CustomCascader = styled(Cascader)`
    width: 100%;
    border: none;
    
    .ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input) .ant-select-selector, .ant-select-selector {
        border: none !important;
        box-shadow: none !important;
        
    }

    &:focus,
    &:active, &:hover {
        box-shadow: none;

    }

`;

const TextContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    color: white;
    padding: 0px 30px;
    min-height: calc(70vh - 100px);
    position: relative;


    h2 {
        font-size: clamp(40px, 4vw, 90px);
        margin: 0px;
    }

    p {
        font-size: clamp(18px, 3vw, 22px);
        box-sizing: border-box;
        width: 50%;
        font-family: 'Montserrat', sans-serif;
    }

    .transition {
        position: absolute;
        z-index: 1;
        bottom: -2px;
        left: 0;
        width: 100%;
    }

    @media (max-width: ${dimensions.lg}) {
        p {
            width: 70%;
        }
    }

    @media (max-width: ${dimensions.md}) {
        p {
            width: 100%;
        }
    }

`;

const ActivityContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    justify-content: space-around;
    width: 100vw;
    height: 100%;
    min-height: 30vh;

    @media (max-width: ${dimensions.lg}) {
        flex-wrap: wrap;
    }

`;

const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    gap: 10px;
    bottom: 20px;
    right: 20px;
    z-index: 3;

    a {
        background-color: ${({ theme }) => theme.primary};
        width: 30px;
        height: 30px;
        border-radius: 30px;
    }

    img {
        height: 20px;
        width: 20px;
        margin: 5px;
    }

    @media (max-width: ${dimensions.md}) {
        flex-direction: row;
        bottom: -40px;

        a {
            width: 25px;
            height: 25px;
            border-radius: 25px;
        }

        img {
            height: 15px;
            width: 15px;
        }
    }
       
`;

const Background = styled.img`
    width: 100vw;
    height: 70vh;
    object-fit: cover;
    position: absolute;
    top: -100px;
    left: 0;
    z-index: -1;
`;

const Activity = styled.div`
    width: 25%;
    height: 100%;
    z-index: 2;
    min-height: 30vh;
    position: relative;

    

    img {
        z-index: -1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        min-height: 30vh;
    }

    .content {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;

        .button {
            flex: 1;
            margin-left: auto;
            margin-top: 20px;

            button {
                background-color: ${({ theme }) => theme.secundary};
                
                padding: 8px 16px;
                box-sizing: border-box;
                cursor: pointer;
                border: 0px;
                font-size: clamp(16px, 2vw, 18px);
                font-family: 'Jockey One', sans-serif;
                
                a{
                    color: white;
                    text-decoration: none;
                    margin: 0px;
                } 
            }
        }

    
        h3 {
            color: white;
            font-size: clamp(26px, 3vw, 40px);
            margin: 0px;
            font-family: 'Jockey One', sans-serif;
        }

        p {
            color: white;
            font-size: 18px;
            box-sizing: border-box;
            width: 80%;
        }

        
    }

    @media (max-width: ${dimensions.lg}) {
        width: 50%;
    }

    @media (max-width: ${dimensions.md}) {
        width: 100%;
        min-height: 0px;
        z-index: 0;

        .content {
            p {
                font-size: 16px;
                width: 100%;
            }
        }
        
    }
`;

function Header(props) {
    const [form, setForm] = useState({ date: undefined, time: undefined, activity: [] })
    const [messageApi, contextHolder] = message.useMessage();
    const [hasChecked, setHasChecked] = useState(false)

    useEffect(() => {
        var searchDate = ""
        if (form.time) {
            const timesplit = form.time.split(':');
            searchDate = dayjs(form.date).set('hour', timesplit[0]).set('minute', timesplit[1]).format("YYYY-MM-DD HH:mm");
        } else {
            if (form.date) {
                searchDate = dayjs(form.date).format("YYYY-MM-DD");
            }
        }

        props.fetchCategorySelector({
            language: localStorage.getItem('language'),
            date: searchDate,
            active: 1
        });
    }, [form.date, form.time])

    const handleSubmit = ({ }) => {
        props.isActivityAvailable({ 'date': dayjs(form.date).format('YYYY-MM-DD'), activity_id: form.activity[1] })
        setHasChecked(true);
    }

    useEffect(() => {
        if (hasChecked) {
            if (props.activityAvailable) {
                props.handleForm(form);
            } else {
                messageApi.open({
                    type: 'warning',
                    content: 'The selected activity is not available at that specific date',
                });
            }
        }

    }, [props.activityAvailable])

    return (
        <Container>
            {contextHolder}
            <Background src="/images/homepage/header_1920.jpg" alt="green leafs" />
            <SocialContainer>
                <a href="https://www.facebook.com/profile.php?id=61551065549062" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook_white.svg" alt="facebook" />
                </a>
                <a href="https://api.whatsapp.com/send?l=en&phone=351910178500" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/whatsapp_white.svg" alt="whatsapp" />
                </a>
                <a href="https://www.instagram.com/overland_madeira?igshid=YTQwZjQ0NmI0OA%3D%3D" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram_white.svg" alt="instagram" />
                </a>
                <a href="mailto:overlandmadeira@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/email_white.svg" alt="email" />
                </a>
            </SocialContainer>

            <div>
                <TextContainer>
                    <div>
                        <h2>{props.text.title}</h2>
                        <p>{props.text.subtitle}</p>

                    </div>
                    <img className='transition' src="/images/homepage/transition.svg" alt="transition bar" />
                </TextContainer>

                <ActivityContainer>

                    <Activity>
                        <img className='background' src="/images/homepage/overland.jpg" alt="green leafs" />
                        <div className='content'>
                            <div className='button'><button><a href='/#overland'>book now</a></button></div>

                            <h3>Overland</h3>
                            <p>From beaches to mountains, take the old roads and dirt roads in unspoiled nature.</p>
                        </div>
                    </Activity>
                    <Activity>
                        <img className='background' src="/images/homepage/jeepsafari.jpg" alt="green leafs" />
                        <div className='content'>
                            <div className='button'><button><a href='/safaries'>book now</a></button></div>

                            <h3>Jeep Safari</h3>
                            <p>From beaches to mountains, take the old roads and dirt roads in unspoiled nature.</p>
                        </div>
                    </Activity>
                    <Activity>
                        <img className='background' src="/images/homepage/levada.jpg" alt="green leafs" />
                        <div className='content'>
                            <div className='button'><button><a href='/#levadas'>book now</a></button></div>

                            <h3>Levadas</h3>
                            <p>From beaches to mountains, take the old roads and dirt roads in unspoiled nature.</p>
                        </div>
                    </Activity>
                    <Activity>
                        <img className='background' src="/images/homepage/tour.jpg" alt="green leafs" />
                        <div className='content'>
                            <div className='button'><button><a href='/#tours'>book now</a></button></div>

                            <h3>Tours</h3>
                            <p>From beaches to mountains, take the old roads and dirt roads in unspoiled nature.</p>
                        </div>
                    </Activity>
                </ActivityContainer>

                {/* <Form>
                    <Row type="flex" align="middle" gutter={64}>
                        <Col span={6} >
                            <p>{props.text.form.date.label}</p>
                            <DatePicker
                                onChange={(e) => setForm({ ...form, date: e })}
                                style={{ width: "100%", paddingLeft: "0px" }}
                                bordered={false}
                                placeholder={props.text.form.date.placeholder}
                                format="DD/MM/YYYY"
                                disabledDate={(currentDate) => {
                                    return currentDate &&
                                        (currentDate <= dayjs());
                                }}
                            />
                        </Col>
                        <Col span={6} style={{
                            borderRight: "3px solid #E5E4DC",
                            borderLeft: "3px solid #E5E4DC",
                        }}>
                            <p>{props.text.form.hour.label}</p>
                            <Select
                                onChange={(e) => setForm({ ...form, time: e })}
                                style={{ width: "100%" }}
                                bordered={false}
                                size='large'
                                placeholder={props.text.form.hour.placeholder}
                                options={[
                                    { value: "08:30", label: "08:30" },
                                    { value: "09:00", label: "09:00" },
                                    { value: "09:30", label: "09:30" },
                                    { value: "10:00", label: "10:00" },
                                    { value: "10:30", label: "10:30" },
                                    { value: "14:30", label: "14:30" },
                                ]}
                            /></Col>
                        <Col span={6}>
                            <p>{props.text.form.activity.label}</p>
                            <CustomCascader
                                onChange={(e) => setForm({ ...form, activity: e })}
                                size="large"
                                expandTrigger="hover"
                                options={props.data}
                                allowClear={false}
                                placeholder={props.text.form.activity.placeholder}
                                fieldNames={{
                                    label: 'name',
                                    value: 'id',
                                    children: 'activities',
                                }}

                            />
                        </Col>
                        <Col span={6}>
                            <button onClick={handleSubmit}> <img src="/icons/search.svg" alt="search" /></button>
                        </Col>
                    </Row>

                </Form> */}
            </div>
        </Container>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleForm: (formValues) => dispatch(handleForm(formValues)),
        fetchCategorySelector: (filters) => dispatch(fetchCategorySelector(filters)),
        isActivityAvailable: (filters) => dispatch(isActivityAvailable(filters))
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.category.selector,
        loading: state.blockDate.loading,
        dates: state.blockDate.data,
        activityAvailable: state.activity.activityAvailable
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);