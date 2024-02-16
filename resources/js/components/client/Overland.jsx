import React, { useEffect, useState } from 'react'
import { Section } from '../helpers/style';
import { fetchInsurances } from '../../redux/insurance/actions';
import { fetchDisabledDates, fetchVehicle } from '../../redux/vehicle/actions';
import { createOverland } from '../../redux/overland/actions';
import { connect } from 'react-redux';
import styled from "styled-components";
import dayjs from "dayjs"
import { useSearchParams } from 'react-router-dom';
import { Button, Checkbox, Col, Form, Row } from 'antd';
import Insurance from './overlandForm/Insurance';
import Extra from './overlandForm/Extra';
import Contact from './overlandForm/Contact';
import Driver from './overlandForm/Driver';
import DatePicker from './overlandForm/DatePicker';
import { DateObject } from 'react-multi-date-picker';
import { dimensions } from '../../helper';
import { useNavigate } from 'react-router-dom';

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .description {
        flex: 1;
        margin-bottom: 30px;
    }

    .price-disclaimer {
        opacity: .4;
        text-transform: uppercase;
        font-weight: bold;
        font-size: clamp(16px, 2vw, 18px);
        margin-bottom: 0px;
    }

    .price {
        font-size: clamp(24px, 3vw, 36px);
    }

    h2 {
        font-size: clamp(32px, 5vw, 62px);
        margin: 0px 0px 10px 0px;
    }
`;

const Price = styled.div`
    margin: 20px 0px;

    h3 {
        text-transform: uppercase;
        margin-bottom: 0px;
    }
    p {
        margin-top: 0px;
        font-weight: 400;
        opacity: .8;
    }

    .small {
        font-size: 12px;
        margin-bottom: 0px;
    }
    .price {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 36px;
        margin-bottom: 0px;
    }

    @media (max-width: ${dimensions.lg}) {
        top: auto;
        bottom: 0;

        h3 {
            font-size: 18px;
        }

        .price {
            font-size: 36px;
        }
    }
`;


const Field = styled.div`
    padding: 5px 5px 5px 0px;
    box-sizing: border-box;
    display: inline;
    width: 33%;

    p {
        margin: 0px;
    }

    .value {
        opacity: .7;
    }

    .name {
        font-weight: bold;
    }
`;

const FieldsContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 35px;
    box-sizing: border-box;
    width: 100%;
`;


function Overland(props) {
    const { language, disabledDates, vehicle } = props;
    const [activeInsurance, setActiveInsurance] = useState({})
    const [extras, setExtras] = useState([1])
    const [extraPrice, setExtraPrice] = useState(50)
    const [days, setDays] = useState(1)
    const { text } = require('../../../assets/' + language + "/checkout");
    const [searchParams] = useSearchParams();
    const [form] = Form.useForm();
    const [price, setPrice] = useState(0)
    const [notices, setNotices] = useState({ clean: 0, age: 0, terms: 0 })
    const navigate = useNavigate();

    useEffect(() => {
        props.fetchInsurances()
    }, [])

    useEffect(() => {
        var from = searchParams.get("from");
        var to = searchParams.get("to");
        var vehicleId = searchParams.get("vehicleId");

        var diff = dayjs(to).diff(dayjs(from), 'days');

        setDays(diff);

        form.setFieldValue("date", [new DateObject(from), new DateObject(to)])

        props.fetchDisabledDates({ vehicle_id: vehicleId })
        props.fetchVehicle(vehicleId);
    }, [])

    useEffect(() => {
        if (vehicle.id) {
            var from = searchParams.get("from");
            var to = searchParams.get("to");

            var fromMonth = dayjs(from).month();
            var toMonth = dayjs(to).month();
            var currentPrice = 0;

            vehicle.prices.map((price) => {
                if (price.month == fromMonth) {
                    currentPrice = price.price;
                } else if (price.month == toMonth) {
                    if (price.price > currentPrice) {
                        currentPrice = price.price;
                    }
                }
            })

            setPrice(parseFloat(currentPrice) * days)
        }


    }, [vehicle, days])

    const onFinish = (values) => {
        const dateFormat = "YYYY-MM-DD";
        var formData = {
            ...values,
            vehicle_id: vehicle.id,
            extras: extras,
            insurance_id: activeInsurance.id,
            date: [dayjs(values.date[0]).format(dateFormat), dayjs(values.date[1]).format(dateFormat)]
        };



        props.createOverland(formData).then((response) => {
            navigate("/success/?reference=" + response.action.payload.data.referencia);
        }).catch((errors) => {
            alert(errors)
            //setCurrentErrors(errors.response.data.errors);
            //navigate("/checkout?from=" + data.date[0] + "&to=" + data.date[1]);
        });


        setCurrentReservationValues({
            car: [[currentCar.title, price]],
            insurance: [[language == "pt" ? "Seguro" : "Insurance", activeInsurance.price + "€", activeInsurance.price * days]],
            extras: extraArray,
            tax: [...taxArray, ...localizationArray],
        });

        navigate("/summary");

    }

    const FieldContainer = ({ name, value }) => (
        <Field>
            <p className='name'>{name}</p>
            <p className='value'>{value}</p>
        </Field>
    )

    return (
        <Section>
            <Form
                form={form}
                scrollToFirstError
                name="overland"
                layout="vertical"
                requiredMark={false}
                onFinish={onFinish}
            >
                <Row gutter={64}>
                    <Col span={12}>
                        {vehicle?.id &&
                            <InfoContainer>
                                <img src={vehicle.image} alt="" />

                                <div className='container' >
                                    <h2>{vehicle.title}</h2>
                                    <p className='description'>{vehicle.description[language]}</p>
                                </div>

                                <h3>Car information</h3>

                                <FieldsContainer>
                                    {vehicle.charateristics.map((char) => {
                                        if (char.pivot.value || char.pivot.value != 'null') {
                                            return <FieldContainer key={char.id} name={char.name[language]} value={JSON.parse(char.pivot.value)[language]} />
                                        }
                                    }


                                    )}
                                </FieldsContainer>

                                <h3>{text.info.title}</h3>
                                <ul>
                                    <li>{text.info.items[0]}</li>
                                    <li>{text.info.items[1]}</li>
                                    <li>{text.info.items[2]}</li>
                                </ul>

                                <h3>{text.pricesDisclaimer.title}</h3>
                                <p>{text.pricesDisclaimer.paragraph}</p>
                                <ul>
                                    <li>{text.pricesDisclaimer.items[0]}</li>
                                    <li>{text.pricesDisclaimer.items[1]}</li>
                                </ul>

                            </InfoContainer>
                        }
                    </Col>
                    <Col span={12}>
                        <DatePicker form={form} setDays={setDays} disabledDates={disabledDates} />
                        <Insurance text={text}
                            activeInsurance={activeInsurance} setActiveInsurance={setActiveInsurance} />
                        <Extra text={text} days={days}
                            extras={extras} setExtras={setExtras}
                            extraPrice={extraPrice} setExtraPrice={setExtraPrice} />

                        <Contact text={text} />
                        <Driver text={text} />

                        <Price>
                            <h3>total: {price + extraPrice + (parseFloat(activeInsurance.price) * days)}€</h3>
                            <p>{text.notice}</p>

                            <Checkbox checked={notices.clean} onChange={(e) => setNotices({ ...notices, clean: e.target.checked })}>
                                {text.notices[0]}*
                            </Checkbox>
                            <Checkbox checked={notices.age} onChange={(e) => setNotices({ ...notices, age: e.target.checked })}>
                                {text.notices[1]}*
                            </Checkbox>
                            <Checkbox checked={notices.terms} onChange={(e) => setNotices({ ...notices, terms: e.target.checked })}>
                                {text.notices[2]}*
                            </Checkbox>
                        </Price>

                        <Button type="primary" htmlType="submit" disabled={!notices.clean || !notices.age || !notices.terms}>{text.button}</Button>
                    </Col>
                </Row>
            </Form>
        </Section >
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchInsurances: () => dispatch(fetchInsurances()),
        fetchVehicle: (id) => dispatch(fetchVehicle(id)),
        fetchDisabledDates: (filters) => dispatch(fetchDisabledDates(filters)),
        createOverland: (data) => dispatch(createOverland(data)),
    };
};

const mapStateToProps = (state) => {
    return {
        insurances: state.insurance.data,
        vehicles: state.vehicle.data,
        vehicle: state.vehicle.current,
        disabledDates: state.vehicle.disabledDates,
        loading: state.vehicle.loading,
        language: state.application.language,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overland);